import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { FIELD, PLAYER_SPAWNS } from '../core/constants';
import type { Game } from '../core/game';
import type { GameEvent, Tank } from '../core/types';
import { Effects } from './effects';
import { BulletVisual, POWER_COLORS, PowerUpVisual, TankVisual } from './models';
import { StageView } from './stageView';
import { sparkTexture } from './textures';

const GRADE_SHADER = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uFlash: { value: 0 },
    uFlashColor: { value: new THREE.Color(0xffa050) },
    uResolution: { value: new THREE.Vector2(1, 1) },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uFlash;
    uniform vec3 uFlashColor;
    uniform vec2 uResolution;
    varying vec2 vUv;

    float hash21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    void main() {
      vec2 uv = vUv;
      vec2 centered = uv - 0.5;
      float d = length(centered);
      vec2 offset = centered * d * 0.0014;
      vec3 color;
      color.r = texture2D(tDiffuse, uv + offset).r;
      color.g = texture2D(tDiffuse, uv).g;
      color.b = texture2D(tDiffuse, uv - offset).b;

      float vig = smoothstep(0.98, 0.2, d);
      color *= mix(0.74, 1.0, vig);

      float grain = hash21(uv * uResolution + uTime * 47.0);
      color += (grain - 0.5) * 0.022;

      // Gentle S-curve for punch, then split-tone: cool shadows, warm highlights.
      color = mix(color, color * color * (3.0 - 2.0 * color), 0.22);
      float lum = dot(color, vec3(0.2126, 0.7152, 0.0722));
      vec3 shadowTint = vec3(0.86, 0.95, 1.08);
      vec3 highTint = vec3(1.07, 1.0, 0.93);
      color *= mix(shadowTint, highTint, smoothstep(0.04, 0.62, lum));

      color = pow(max(color, 0.0), vec3(0.985, 1.0, 1.02));
      color += uFlashColor * uFlash;

      gl_FragColor = vec4(color, 1.0);
      #include <colorspace_fragment>
    }
  `,
};

const SKY_SHADER = {
  uniforms: {
    uTime: { value: 0 },
  },
  vertexShader: /* glsl */ `
    varying vec3 vDir;
    void main() {
      vDir = normalize(position);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    varying vec3 vDir;
    uniform float uTime;
    void main() {
      float h = clamp(vDir.y * 0.5 + 0.5, 0.0, 1.0);
      vec3 low = vec3(0.085, 0.105, 0.125);
      vec3 mid = vec3(0.028, 0.05, 0.075);
      vec3 top = vec3(0.007, 0.011, 0.022);
      vec3 col = mix(low, mid, smoothstep(0.0, 0.32, h));
      col = mix(col, top, smoothstep(0.35, 0.95, h));
      float glow = pow(max(0.0, 1.0 - abs(h - 0.48) * 3.6), 5.0);
      col += vec3(0.09, 0.055, 0.038) * glow;
      float band = sin(h * 90.0 + uTime * 0.02) * 0.0025;
      gl_FragColor = vec4(col + band, 1.0);
      #include <colorspace_fragment>
    }
  `,
};

export class SceneView {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  readonly stage: StageView;
  readonly effects: Effects;
  readonly composer: EffectComposer;

  private canvas: HTMLCanvasElement;
  private time = 0;
  private titleMode = true;
  private tankVisuals = new Map<string, TankVisual>();
  private bulletVisuals = new Map<number, BulletVisual>();
  private bulletTrails = new Map<number, number>();
  private powerupVisual: PowerUpVisual | null = null;
  private powerupKey = '';
  private demoVisuals: TankVisual[] = [];
  private gradePass: ShaderPass;
  private bloomPass: UnrealBloomPass;
  private sky: THREE.Mesh;
  private stars: THREE.Points;
  private dust: THREE.Points;
  private lowQuality: boolean;
  private keyLight: THREE.DirectionalLight | null = null;
  private cameraDir = new THREE.Vector3(0, 0.62, 0.785).normalize();
  private cameraTarget = new THREE.Vector3(FIELD / 2, 0, 6.8);
  private cameraDistance = 16.4;
  private inspectTarget: { x: number; z: number; distance: number } | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.lowQuality = window.innerWidth < 820 || (navigator.hardwareConcurrency ?? 8) <= 4;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.lowQuality ? 1.35 : 1.75));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.14;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene.background = new THREE.Color(0x05070a);
    this.scene.fog = new THREE.FogExp2(0x0a1118, 0.021);

    this.camera = new THREE.PerspectiveCamera(36, 1, 0.1, 220);

    this.stage = new StageView();
    this.scene.add(this.stage.group);

    this.effects = new Effects(this.lowQuality);
    this.scene.add(this.effects.group);

    this.sky = this.createSky();
    this.scene.add(this.sky);
    this.stars = this.createStars();
    this.scene.add(this.stars);
    this.dust = this.createDust();
    this.scene.add(this.dust);

    this.setupEnvironment();
    this.setupLights();

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(1, 1),
      this.lowQuality ? 0.26 : 0.34,
      0.62,
      0.78,
    );
    this.composer.addPass(this.bloomPass);
    this.gradePass = new ShaderPass(GRADE_SHADER);
    this.composer.addPass(this.gradePass);
    const smaa = new SMAAPass();
    this.composer.addPass(smaa);

    this.resize();
  }

  private setupEnvironment(): void {
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const envScene = new RoomEnvironment();
    this.scene.environment = pmrem.fromScene(envScene, 0.04).texture;
    this.scene.environmentIntensity = 0.6;
    pmrem.dispose();
  }

  private setupLights(): void {
    const hemi = new THREE.HemisphereLight(0x9dc0e8, 0x1a1916, 0.85);
    this.scene.add(hemi);

    // Raking warm key: low enough to throw long shadows across the field.
    const key = new THREE.DirectionalLight(0xffe6c4, 4.2);
    key.position.set(13.5, 13.0, 4.2);
    key.target.position.set(6.5, 0, 6.8);
    key.castShadow = true;
    key.shadow.mapSize.set(this.lowQuality ? 1024 : 2048, this.lowQuality ? 1024 : 2048);
    key.shadow.camera.left = -9;
    key.shadow.camera.right = 9;
    key.shadow.camera.top = 9;
    key.shadow.camera.bottom = -9;
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 45;
    key.shadow.camera.updateProjectionMatrix();
    key.shadow.bias = -0.0006;
    key.shadow.normalBias = 0.028;
    this.keyLight = key;
    this.scene.add(key, key.target);

    // Cool counter-light from behind: separates silhouettes from the ground.
    const rim = new THREE.DirectionalLight(0x86c8ff, 1.45);
    rim.position.set(-10, 7.5, -8);
    rim.target.position.set(6.5, 0, 6.5);
    this.scene.add(rim, rim.target);

    const fill = new THREE.DirectionalLight(0x93b4d4, 0.42);
    fill.position.set(-5, 5, 15);
    this.scene.add(fill);

    const ambient = new THREE.AmbientLight(0x2b3a4a, 0.55);
    this.scene.add(ambient);
  }

  private createSky(): THREE.Mesh {
    const geo = new THREE.SphereGeometry(120, 32, 20);
    const mat = new THREE.ShaderMaterial({
      ...SKY_SHADER,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(FIELD / 2, 0, FIELD / 2);
    mesh.renderOrder = -10;
    return mesh;
  }

  private createStars(): THREE.Points {
    const count = 420;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 0.9 + 0.05);
      const r = 95;
      positions[i * 3] = FIELD / 2 + Math.sin(phi) * Math.cos(theta) * r;
      positions[i * 3 + 1] = Math.cos(phi) * r + 4;
      positions[i * 3 + 2] = FIELD / 2 + Math.sin(phi) * Math.sin(theta) * r;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xb7d4ff,
      size: 0.28,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
      fog: false,
      map: sparkTexture(),
      blending: THREE.AdditiveBlending,
    });
    return new THREE.Points(geo, mat);
  }

  private createDust(): THREE.Points {
    const count = this.lowQuality ? 90 : 180;
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = Math.random() * 24 - 5;
      positions[i * 3 + 1] = 0.2 + Math.random() * 5;
      positions[i * 3 + 2] = Math.random() * 24 - 5;
      speeds[i] = 0.02 + Math.random() * 0.05;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xcfe0f2,
      size: 0.05,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.26,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      map: sparkTexture(),
    });
    const points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    (points as any).userData.speeds = speeds;
    return points;
  }

  frameCamera(): void {
    const aspect = this.canvas.clientWidth / Math.max(1, this.canvas.clientHeight);
    this.cameraDistance = 17.6 * THREE.MathUtils.clamp(1.5 / aspect, 1, 1.66);
    const position = this.cameraTarget.clone().addScaledVector(this.cameraDir, this.cameraDistance);
    this.camera.position.copy(position);
    this.camera.lookAt(this.cameraTarget);
  }

  /** Debug hook: park the camera close to a world position for model inspection. */
  inspect(x: number, z: number, distance = 4.2): void {
    this.inspectTarget = { x, z, distance };
  }

  clearInspect(): void {
    this.inspectTarget = null;
  }

  resize(): void {
    const width = this.canvas.clientWidth || window.innerWidth;
    const height = this.canvas.clientHeight || window.innerHeight;
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / Math.max(1, height);
    this.camera.updateProjectionMatrix();
    this.composer.setSize(width, height);
    this.gradePass.uniforms.uResolution.value.set(width, height);
    const pixelScale = height / (2 * Math.tan((this.camera.fov * Math.PI) / 360));
    this.effects.setPixelScale(pixelScale * this.renderer.getPixelRatio() * 0.55);
    this.frameCamera();
  }

  showTitle(game: Game): void {
    this.titleMode = true;
    this.stage.build(game.terrain, 1, true);
    this.clearVisuals();
    this.createDemoTanks();
  }

  startGame(): void {
    this.titleMode = false;
    this.clearDemo();
  }

  private createDemoTanks(): void {
    this.clearDemo();
    const spawns = [
      { x: PLAYER_SPAWNS[0].x, z: PLAYER_SPAWNS[0].z, idx: 0, dir: 0 as const },
      { x: PLAYER_SPAWNS[1].x, z: PLAYER_SPAWNS[1].z, idx: 1, dir: 0 as const },
      { x: 6.5, z: 3.5, idx: -1, dir: 2 as const },
    ];
    for (const spawn of spawns) {
      const isPlayer = spawn.idx >= 0;
      const visual = new TankVisual(isPlayer ? 'player' : 'armor', isPlayer ? 'player' : 'enemy', spawn.idx, !isPlayer);
      const fake: Tank = {
        id: `demo-${spawn.idx}`,
        team: isPlayer ? 'player' : 'enemy',
        kind: isPlayer ? 'player' : 'armor',
        x: spawn.x,
        z: spawn.z,
        dir: spawn.dir,
        velX: 0,
        velZ: 0,
        speed: 0,
        hp: 1,
        maxHp: 1,
        cooldown: 0,
        star: 0,
        shield: 0,
        spawn: 0,
        hitFlash: 0,
        bonus: !isPlayer,
        aiTimer: 0,
        aiStrafe: 0,
        stuckTime: 0,
        playerIndex: spawn.idx,
        alive: true,
        moving: 0,
        recoil: 0,
        iceX: 0,
        iceZ: 0,
      };
      visual.update(fake, this.time, 0);
      visual.group.userData.tank = fake;
      visual.group.position.y = 0;
      this.scene.add(visual.group);
      this.demoVisuals.push(visual);
    }
  }

  private clearDemo(): void {
    for (const visual of this.demoVisuals) visual.dispose();
    this.demoVisuals = [];
  }

  buildStage(game: Game): void {
    this.stage.build(game.terrain, game.stage, game.baseAlive);
    this.clearVisuals();
    this.flash(0.08, 0xffc27a);
  }

  flash(amount: number, color = 0xffa050): void {
    this.gradePass.uniforms.uFlashColor.value.setHex(color);
    this.gradePass.uniforms.uFlash.value = Math.max(
      this.gradePass.uniforms.uFlash.value as number,
      amount,
    );
  }

  handleEvent(event: GameEvent, game: Game): void {
    switch (event.type) {
      case 'stageStart':
        this.buildStage(game);
        break;
      case 'spawn':
        this.effects.spawnBeam(event.x, event.z, event.team === 'player' ? 0x7fe4c0 : 0xff7a52);
        this.effects.dust(event.x, event.z, 3);
        break;
      case 'respawn':
        this.effects.spawnBeam(event.x, event.z, 0x7fe4c0);
        break;
      case 'shoot':
        this.effects.muzzle(event.x, event.z, event.dir, event.team, event.power);
        break;
      case 'bulletSpark':
        this.effects.impact(event.x, event.z, event.dir, 0xffd28a);
        break;
      case 'brickBreak':
        this.stage.damageBrick(event.x, event.z, event.mask, event.removed);
        this.effects.brickBreak(event.x, event.z, event.removed, event.dir);
        break;
      case 'steelBreak':
        this.stage.damageSteel(event.x, event.z, event.mask, event.removed);
        this.effects.steelBreak(event.x, event.z, event.removed, event.dir);
        break;
      case 'steelHit':
        this.effects.steelHit(event.x, event.z, event.dir);
        break;
      case 'tankHit':
        this.effects.impact(event.x + 0.0, event.z, 0, 0xffe0a0);
        this.effects.dust(event.x, event.z, 1);
        this.effects.shake(0.04);
        break;
      case 'tankDestroyed': {
        const big = event.team === 'player' ? 1.5 : 1;
        this.effects.explosion(event.x, event.z, big, event.team === 'player' ? 0xffb050 : 0xff7a36);
        this.effects.ring(event.x, event.z, 1.8 * big, 0xffc27a, 0.5);
        if (event.team === 'player') this.flash(0.16, 0xff7a36);
        break;
      }
      case 'powerupSpawn':
        this.effects.spawnBeam(event.x, event.z, POWER_COLORS[event.kind]);
        this.effects.pickup(event.x, event.z, POWER_COLORS[event.kind]);
        break;
      case 'powerupPickup':
        this.effects.pickup(event.x, event.z, POWER_COLORS[event.kind]);
        this.flash(0.05, POWER_COLORS[event.kind]);
        break;
      case 'powerupExpire':
        this.effects.dust(event.x, event.z, 4);
        break;
      case 'grenade':
        this.flash(0.45, 0xffd08a);
        this.effects.shake(0.5);
        break;
      case 'shovel':
        this.stage.refresh(game.terrain, game.stage, game.baseAlive);
        this.flash(0.06, 0xbfe8ff);
        break;
      case 'baseHit':
        this.effects.explosion(event.x, event.z, 2.6, 0xff6a2a);
        this.flash(0.5, 0xff7a35);
        break;
      case 'baseDestroyed':
        this.stage.base.setDestroyed();
        this.effects.shake(1);
        this.effects.ring(7, 12, 3.4, 0xff8a40, 0.9);
        break;
      case 'state':
        if (event.state === 'playing' || event.state === 'intro') this.startGame();
        break;
      default:
        break;
    }
  }

  sync(game: Game, dt: number): void {
    this.time += dt;
    this.stage.update(dt, this.time);
    this.effects.update(dt);

    const flash = this.gradePass.uniforms.uFlash.value as number;
    this.gradePass.uniforms.uFlash.value = Math.max(0, flash - dt * 1.6);
    this.gradePass.uniforms.uTime.value = this.time;
    (this.sky.material as THREE.ShaderMaterial).uniforms.uTime.value = this.time;

    if (this.titleMode) {
      for (const visual of this.demoVisuals) {
        const fake = visual.group.userData.tank as Tank | undefined;
        if (fake) {
          visual.update(fake, this.time, dt);
          visual.group.position.y = Math.sin(this.time * 0.8 + fake.x) * 0.008;
        }
      }
      this.animateAtmosphere(dt);
      this.updateCamera(dt);
      return;
    }

    this.syncTanks(game, dt);
    this.syncBullets(game, dt);
    this.syncPowerup(game);
    this.animateAtmosphere(dt);
    this.updateCamera(dt);
  }

  private syncTanks(game: Game, dt: number): void {
    const seen = new Set<string>();
    for (const tank of game.tanks) {
      if (!tank.alive) continue;
      seen.add(tank.id);
      let visual = this.tankVisuals.get(tank.id);
      if (!visual) {
        visual = new TankVisual(tank.kind, tank.team, tank.playerIndex, tank.bonus);
        this.tankVisuals.set(tank.id, visual);
        this.scene.add(visual.group);
        if (tank.team === 'enemy') this.effects.spawnBeam(tank.x, tank.z, 0xff7a52);
      }
      visual.update(tank, this.time, dt);
    }
    for (const [id, visual] of this.tankVisuals) {
      if (!seen.has(id)) {
        visual.dispose();
        this.tankVisuals.delete(id);
      }
    }
  }

  private syncBullets(game: Game, dt: number): void {
    const seen = new Set<number>();
    for (const bullet of game.bullets) {
      seen.add(bullet.id);
      let visual = this.bulletVisuals.get(bullet.id);
      if (!visual) {
        visual = new BulletVisual(bullet.team, bullet.power);
        this.bulletVisuals.set(bullet.id, visual);
        this.scene.add(visual.group);
        this.bulletTrails.set(bullet.id, 0);
      }
      visual.update(bullet, this.time);

      const trailTimer = (this.bulletTrails.get(bullet.id) ?? 0) + dt;
      if (trailTimer > 0.028) {
        const color = bullet.team === 'player' ? 0xffc35e : 0xff6a42;
        this.effects.trail(bullet.x, bullet.z, color);
        this.bulletTrails.set(bullet.id, 0);
      } else {
        this.bulletTrails.set(bullet.id, trailTimer);
      }
    }
    for (const [id, visual] of this.bulletVisuals) {
      if (!seen.has(id)) {
        visual.dispose();
        this.bulletVisuals.delete(id);
        this.bulletTrails.delete(id);
      }
    }
  }

  private syncPowerup(game: Game): void {
    if (!game.powerup) {
      this.powerupVisual?.dispose();
      this.powerupVisual = null;
      this.powerupKey = '';
      return;
    }
    const power = game.powerup;
    const key = `${power.kind}:${power.x.toFixed(2)}:${power.z.toFixed(2)}`;
    if (key !== this.powerupKey) {
      this.powerupVisual?.dispose();
      this.powerupVisual = new PowerUpVisual(power.kind, power.x, power.z);
      this.powerupKey = key;
      this.scene.add(this.powerupVisual.group);
    }
    this.powerupVisual?.update(this.time, power.life);
  }

  private animateAtmosphere(dt: number): void {
    this.stars.rotation.y += dt * 0.0035;
    this.dust.rotation.y += dt * 0.006;
    const geo = this.dust.geometry;
    const positions = geo.getAttribute('position') as THREE.BufferAttribute;
    const speeds = (this.dust as any).userData.speeds as Float32Array;
    const values = positions.array as Float32Array;
    for (let i = 0; i < speeds.length; i++) {
      values[i * 3 + 1] += speeds[i] * dt;
      if (values[i * 3 + 1] > 5.4) values[i * 3 + 1] = 0.15;
    }
    positions.needsUpdate = true;
  }

  private updateCamera(dt: number): void {
    if (this.inspectTarget) {
      const target = new THREE.Vector3(this.inspectTarget.x, 0.34, this.inspectTarget.z);
      const position = target
        .clone()
        .addScaledVector(this.cameraDir, this.inspectTarget.distance)
        .add(new THREE.Vector3(0, 0.25, 0));
      this.camera.position.copy(position);
      this.camera.lookAt(target);
      void dt;
      return;
    }
    const drift = this.titleMode ? Math.sin(this.time * 0.12) * 0.16 : Math.sin(this.time * 0.05) * 0.012;
    const dir = this.cameraDir.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), drift);
    const target = this.cameraTarget.clone();
    if (this.titleMode) target.y = 0.3;
    const position = target.clone().addScaledVector(dir, this.cameraDistance + (this.titleMode ? 0.8 : 0));
    const shake = this.effects.getShakeOffset(this.time);
    this.camera.position.set(position.x + shake.x, position.y + shake.y, position.z + shake.z);
    this.camera.lookAt(target);
    this.camera.rotateZ(shake.roll + (this.titleMode ? Math.sin(this.time * 0.09) * 0.002 : 0));
    void dt;
  }

  private clearVisuals(): void {
    for (const visual of this.tankVisuals.values()) visual.dispose();
    this.tankVisuals.clear();
    for (const visual of this.bulletVisuals.values()) visual.dispose();
    this.bulletVisuals.clear();
    this.bulletTrails.clear();
    this.powerupVisual?.dispose();
    this.powerupVisual = null;
    this.powerupKey = '';
  }

  render(): void {
    this.composer.render();
  }

  dispose(): void {
    this.clearDemo();
    this.clearVisuals();
    this.stage.dispose();
    this.effects.dispose();
    this.composer.dispose();
    this.renderer.dispose();
  }
}

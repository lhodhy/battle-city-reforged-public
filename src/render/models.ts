import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { COLORS, DIRS } from '../core/constants';
import type { Bullet, EnemyKind, PowerKind, Tank } from '../core/types';
import { beamTexture, sparkTexture, treadTexture } from './textures';

const DIR_ANGLE = [0, -Math.PI / 2, Math.PI, Math.PI / 2];

interface GeoPool {
  hull: THREE.BufferGeometry;
  hullFast: THREE.BufferGeometry;
  hullHeavy: THREE.BufferGeometry;
  glacis: THREE.BufferGeometry;
  glacisLong: THREE.BufferGeometry;
  track: THREE.BufferGeometry;
  wheel: THREE.BufferGeometry;
  turret: THREE.BufferGeometry;
  turretBig: THREE.BufferGeometry;
  turretTop: THREE.BufferGeometry;
  turretSlab: THREE.BufferGeometry;
  barrel: THREE.BufferGeometry;
  muzzle: THREE.BufferGeometry;
  hatch: THREE.BufferGeometry;
  antenna: THREE.BufferGeometry;
  light: THREE.BufferGeometry;
  stow: THREE.BufferGeometry;
  skirt: THREE.BufferGeometry;
  dozer: THREE.BufferGeometry;
  exhaust: THREE.BufferGeometry;
  beacon: THREE.BufferGeometry;
  markerPlate: THREE.BufferGeometry;
  markerQuad: THREE.BufferGeometry;
}

let geo: GeoPool | null = null;

function geometries(): GeoPool {
  if (geo) return geo;
  geo = {
    hull: new RoundedBoxGeometry(0.62, 0.2, 0.76, 3, 0.045),
    hullFast: new RoundedBoxGeometry(0.56, 0.17, 0.84, 3, 0.05),
    hullHeavy: new RoundedBoxGeometry(0.72, 0.25, 0.8, 3, 0.04),
    glacis: new RoundedBoxGeometry(0.52, 0.14, 0.4, 2, 0.04),
    glacisLong: new RoundedBoxGeometry(0.5, 0.1, 0.46, 2, 0.03),
    track: new RoundedBoxGeometry(0.15, 0.24, 0.82, 2, 0.045),
    wheel: new THREE.CylinderGeometry(0.08, 0.08, 0.03, 12),
    turret: new THREE.CylinderGeometry(0.2, 0.23, 0.13, 16),
    turretBig: new THREE.CylinderGeometry(0.23, 0.26, 0.16, 16),
    turretTop: new RoundedBoxGeometry(0.32, 0.1, 0.34, 2, 0.035),
    turretSlab: new RoundedBoxGeometry(0.38, 0.11, 0.4, 2, 0.03),
    barrel: new THREE.CylinderGeometry(0.038, 0.046, 0.52, 10),
    muzzle: new THREE.CylinderGeometry(0.058, 0.058, 0.1, 10),
    hatch: new THREE.CylinderGeometry(0.075, 0.075, 0.045, 14),
    antenna: new THREE.CylinderGeometry(0.006, 0.002, 0.42, 4),
    light: new THREE.BoxGeometry(0.1, 0.055, 0.02),
    stow: new RoundedBoxGeometry(0.28, 0.12, 0.15, 2, 0.02),
    skirt: new RoundedBoxGeometry(0.06, 0.16, 0.66, 2, 0.02),
    dozer: new RoundedBoxGeometry(0.68, 0.16, 0.12, 2, 0.03),
    exhaust: new THREE.CylinderGeometry(0.028, 0.036, 0.22, 8),
    beacon: new THREE.SphereGeometry(0.048, 10, 8),
    markerPlate: new THREE.CylinderGeometry(0.1, 0.1, 0.018, 20),
    markerQuad: new THREE.PlaneGeometry(0.16, 0.16),
  };
  return geo;
}

const KIND_COLORS: Record<EnemyKind, number> = {
  basic: 0x7c838a,
  fast: 0xbfa878,
  power: 0xa63a2c,
  armor: 0x5e7a41,
};

function tankColor(kind: string, team: string, playerIndex: number): number {
  if (team === 'player') return playerIndex === 0 ? COLORS.player1 : COLORS.player2;
  return KIND_COLORS[kind as EnemyKind] ?? 0x777c80;
}

function numberTexture(label: string, color: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d')!;
  ctx.clearRect(0, 0, 128, 128);
  ctx.font = 'bold 92px "Arial Black", Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgba(0,0,0,0.5)';
  ctx.fillText(label, 67, 69);
  ctx.fillStyle = color;
  ctx.fillText(label, 64, 64);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

export class TankVisual {
  readonly group = new THREE.Group();
  readonly barrel = new THREE.Group();
  readonly shield: THREE.Mesh;
  readonly shieldMat: THREE.ShaderMaterial;
  private hullMat: THREE.MeshStandardMaterial;
  private turretMat: THREE.MeshStandardMaterial;
  private accentMat: THREE.MeshStandardMaterial;
  private trackMats: THREE.MeshStandardMaterial[] = [];
  private materials: THREE.Material[] = [];
  private beaconMat: THREE.MeshStandardMaterial | null = null;
  private trackOffset = 0;
  private kind: string;
  private team: string;
  private baseEmissive: number;
  private wheelSpin = 0;
  private marker: THREE.Mesh | null = null;
  private bandGeo: THREE.TorusGeometry;
  private baseScale = 1.22;

  constructor(kind: string, team: string, playerIndex: number, bonus: boolean) {
    this.kind = kind;
    this.team = team;
    const color = tankColor(kind, team, playerIndex);
    const g = geometries();

    this.hullMat = new THREE.MeshStandardMaterial({
      color,
      metalness: 0.3,
      roughness: 0.6,
      envMapIntensity: 1.1,
      emissive: new THREE.Color(0xff6a4a),
      emissiveIntensity: bonus ? 0.5 : 0,
    });
    this.turretMat = this.hullMat.clone();
    this.turretMat.color.multiplyScalar(0.82);
    this.turretMat.roughness = 0.55;
    this.accentMat = new THREE.MeshStandardMaterial({
      color: team === 'player' ? 0x332d22 : 0x25282a,
      metalness: 0.8,
      roughness: 0.32,
      emissive: new THREE.Color(team === 'player' ? 0xffb347 : 0x451008),
      emissiveIntensity: 0.25,
    });
    const darkMetal = new THREE.MeshStandardMaterial({ color: 0x3a4149, roughness: 0.55, metalness: 0.6 });
    const gunMetal = new THREE.MeshStandardMaterial({ color: 0x67727e, roughness: 0.38, metalness: 0.8 });
    this.materials.push(gunMetal);
    const trackMat = new THREE.MeshStandardMaterial({
      color: 0x454b52,
      map: treadTexture().clone(),
      roughness: 0.86,
      metalness: 0.3,
    });
    trackMat.map!.needsUpdate = true;
    this.trackMats.push(trackMat, trackMat.clone());
    this.trackMats[1].map = trackMat.map!.clone();
    this.trackMats[1].map!.needsUpdate = true;

    const heavy = kind === 'armor';
    const racer = kind === 'fast';
    const assault = kind === 'power';
    this.baseScale = heavy ? 1.3 : racer ? 1.12 : assault ? 1.24 : 1.22;

    // Hull and glacis: heavy tanks are wider, racers sit lower and longer.
    const hull = new THREE.Mesh(heavy ? g.hullHeavy : racer ? g.hullFast : g.hull, this.hullMat);
    hull.position.y = racer ? 0.19 : heavy ? 0.22 : 0.21;
    this.group.add(hull);

    const glacis = new THREE.Mesh(racer ? g.glacisLong : g.glacis, this.hullMat);
    glacis.position.set(0, racer ? 0.3 : 0.33, -0.14);
    glacis.rotation.x = racer ? -0.3 : -0.18;
    this.group.add(glacis);

    const trackX = heavy ? 0.355 : racer ? 0.295 : 0.325;
    const wheelCount = heavy ? 5 : racer ? 3 : 4;
    for (const side of [-1, 1]) {
      const track = new THREE.Mesh(g.track, this.trackMats[side < 0 ? 0 : 1]);
      track.position.set(side * trackX, racer ? 0.125 : 0.14, 0.01);
      track.scale.set(heavy ? 1.15 : racer ? 0.88 : 1, heavy ? 1.06 : racer ? 0.92 : 1, racer ? 1.08 : 1);
      this.group.add(track);

      for (let i = 0; i < wheelCount; i++) {
        const wheel = new THREE.Mesh(g.wheel, darkMetal);
        wheel.rotation.z = Math.PI / 2;
        const spread = wheelCount > 4 ? 0.58 : wheelCount > 3 ? 0.51 : 0.4;
        const offset = (-spread / 2 + (i / (wheelCount - 1)) * spread);
        wheel.position.set(side * (trackX + 0.078), racer ? 0.085 : 0.09, offset);
        this.group.add(wheel);
      }
    }

    // Armor skirts and a dozer blade give the heavy tank a distinctly wider silhouette.
    if (heavy) {
      for (const side of [-1, 1]) {
        const skirt = new THREE.Mesh(g.skirt, this.hullMat);
        skirt.position.set(side * 0.365, 0.3, 0.02);
        this.group.add(skirt);
      }
      const dozer = new THREE.Mesh(g.dozer, darkMetal);
      dozer.position.set(0, 0.19, -0.44);
      dozer.rotation.x = 0.32;
      this.group.add(dozer);
    }

    const turretRing = new THREE.Mesh(g.wheel, darkMetal);
    turretRing.rotation.z = 0;
    turretRing.scale.set(heavy ? 3.4 : assault ? 3.1 : 2.9, 0.7, heavy ? 3.4 : assault ? 3.1 : 2.9);
    turretRing.position.y = 0.38;
    this.group.add(turretRing);

    const turret = new THREE.Mesh(assault ? g.turretBig : g.turret, this.turretMat);
    turret.position.y = assault ? 0.44 : 0.43;
    turret.scale.set(heavy ? 1.12 : 1, heavy ? 0.92 : 1, heavy ? 1.12 : 1);
    this.group.add(turret);

    const turretTop = new THREE.Mesh(heavy ? g.turretSlab : g.turretTop, this.turretMat);
    turretTop.position.y = heavy ? 0.51 : racer ? 0.48 : 0.5;
    turretTop.scale.set(racer ? 0.84 : 1, racer ? 0.8 : 1, racer ? 0.9 : 1);
    this.group.add(turretTop);

    this.bandGeo = new THREE.TorusGeometry(assault ? 0.252 : 0.232, 0.011, 6, 28);
    const band = new THREE.Mesh(this.bandGeo, darkMetal);
    band.rotation.x = Math.PI / 2;
    band.position.y = 0.375;
    this.group.add(band);

    const hatch = new THREE.Mesh(g.hatch, this.turretMat);
    hatch.scale.setScalar(heavy ? 0.85 : racer ? 0.8 : 1);
    hatch.position.set(heavy ? -0.08 : 0.06, heavy ? 0.575 : racer ? 0.525 : 0.545, heavy ? 0.06 : 0.04);
    this.group.add(hatch);

    const collar = new THREE.Mesh(g.muzzle, this.accentMat);
    collar.rotation.x = Math.PI / 2;
    collar.position.set(0, assault ? 0.45 : 0.44, -0.22);
    collar.scale.set(assault ? 1.8 : 1.5, 0.45, 1);
    this.group.add(collar);

    this.barrel.position.set(0, assault ? 0.45 : 0.44, -0.2);
    if (assault) {
      // Twin autocannons for the power tank.
      for (const side of [-1, 1]) {
        const barrel = new THREE.Mesh(g.barrel, gunMetal);
        barrel.rotation.x = Math.PI / 2;
        barrel.scale.set(0.86, 0.86, 0.95);
        barrel.position.set(side * 0.085, 0, -0.28);
        this.barrel.add(barrel);
        const muzzle = new THREE.Mesh(g.muzzle, gunMetal);
        muzzle.rotation.x = Math.PI / 2;
        muzzle.scale.set(0.9, 0.75, 1);
        muzzle.position.set(side * 0.085, 0, -0.49);
        this.barrel.add(muzzle);
      }
    } else {
      const barrel = new THREE.Mesh(g.barrel, gunMetal);
      barrel.rotation.x = Math.PI / 2;
      if (racer) {
        barrel.scale.set(0.8, 0.8, 1.32);
        barrel.position.z = -0.34;
      } else if (heavy) {
        barrel.scale.set(1.22, 1.22, 0.92);
        barrel.position.z = -0.24;
      } else {
        barrel.position.z = -0.26;
      }
      this.barrel.add(barrel);
      const muzzle = new THREE.Mesh(g.muzzle, gunMetal);
      muzzle.rotation.x = Math.PI / 2;
      muzzle.scale.setScalar(heavy ? 1.35 : racer ? 0.85 : 1);
      muzzle.position.z = racer ? -0.61 : heavy ? -0.45 : -0.52;
      this.barrel.add(muzzle);
    }
    this.group.add(this.barrel);

    // Exhaust stacks for racers, twin antennas for heavies, a beacon for power tanks.
    if (racer) {
      for (const side of [-1, 1]) {
        const pipe = new THREE.Mesh(g.exhaust, darkMetal);
        pipe.position.set(side * 0.15, 0.34, 0.4);
        pipe.rotation.x = -0.28;
        this.group.add(pipe);
      }
    }
    if (heavy) {
      for (const side of [-1, 1]) {
        const whip = new THREE.Mesh(g.antenna, darkMetal);
        whip.position.set(side * 0.26, 0.63, 0.26);
        whip.rotation.z = side * 0.3;
        whip.rotation.x = 0.18;
        this.group.add(whip);
      }
    } else {
      const antenna = new THREE.Mesh(g.antenna, darkMetal);
      antenna.position.set(assault ? 0.24 : -0.27, assault ? 0.66 : 0.62, 0.24);
      antenna.rotation.z = assault ? -0.3 : 0.34;
      antenna.rotation.x = 0.22;
      this.group.add(antenna);
    }

    this.beaconMat = null;
    if (assault) {
      const beaconMat = new THREE.MeshStandardMaterial({
        color: 0x8f2014,
        emissive: 0xff3a1a,
        emissiveIntensity: 0.35,
        roughness: 0.4,
      });
      const beacon = new THREE.Mesh(g.beacon, beaconMat);
      beacon.position.set(0.14, 0.585, 0.1);
      this.group.add(beacon);
      this.beaconMat = beaconMat;
      this.materials.push(beaconMat);
    }

    const lightMat = new THREE.MeshStandardMaterial({
      color: 0xfff2c0,
      emissive: 0xffd27a,
      emissiveIntensity: racer ? 0.55 : 0.4,
      roughness: 0.3,
    });
    this.materials.push(lightMat);
    for (const side of [-1, 1]) {
      const light = new THREE.Mesh(g.light, lightMat);
      light.scale.setScalar(racer ? 0.64 : heavy ? 0.9 : 0.78);
      light.position.set(side * (heavy ? 0.26 : 0.22), heavy ? 0.35 : 0.33, racer ? -0.42 : -0.38);
      this.group.add(light);
    }

    const stow = new THREE.Mesh(g.stow, darkMetal);
    stow.scale.setScalar(heavy ? 1.1 : racer ? 0.8 : 1);
    stow.position.set(0, heavy ? 0.42 : 0.39, heavy ? 0.34 : 0.31);
    this.group.add(stow);
    this.materials.push(darkMetal);

    if (team === 'player') {
      const label = playerIndex === 0 ? '1' : '2';
      const mat = new THREE.MeshBasicMaterial({
        map: numberTexture(label, playerIndex === 0 ? '#ffe4a8' : '#c4fff4'),
        transparent: true,
        depthWrite: false,
      });
      this.materials.push(mat);
      this.marker = new THREE.Mesh(g.markerQuad, mat);
      this.marker.rotation.x = -Math.PI / 2;
      this.marker.position.set(0, 0.581, 0.05);
      const plate = new THREE.Mesh(g.markerPlate, darkMetal);
      plate.position.set(0, 0.57, 0.05);
      this.group.add(plate);
      this.group.add(this.marker);
    }

    this.shieldMat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(team === 'player' ? 0x7fd9ff : 0xff9a66) },
        uPulse: { value: 0 },
      },
      vertexShader: /* glsl */ `
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vView = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor;
        uniform float uPulse;
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          float fres = pow(1.0 - abs(dot(vNormal, vView)), 2.2);
          float a = fres * (0.42 + uPulse * 0.22);
          gl_FragColor = vec4(uColor * (0.5 + fres * 1.3), a);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    this.shield = new THREE.Mesh(new THREE.SphereGeometry(0.55, 24, 16), this.shieldMat);
    this.shield.position.y = 0.32;
    this.shield.visible = false;
    this.group.add(this.shield);

    this.group.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });

    this.baseEmissive = bonus ? 0.7 : 0;
  }

  update(tank: Tank, time: number, dt: number): void {
    this.group.position.set(tank.x, 0, tank.z);
    this.group.rotation.y = DIR_ANGLE[tank.dir] ?? 0;

    this.barrel.position.z = -0.2 + tank.recoil * 0.08;
    this.barrel.rotation.x = -tank.recoil * 0.06;

    this.trackOffset += tank.moving * dt * 1.9;
    for (const mat of this.trackMats) {
      if (mat.map) mat.map.offset.y = this.trackOffset % 1;
    }

    if (tank.spawn > 0) {
      const blink = Math.floor(tank.spawn * 16) % 2 === 0;
      this.group.visible = blink;
      this.group.scale.setScalar((0.92 + Math.sin(time * 30) * 0.03) * this.baseScale);
    } else {
      this.group.visible = true;
      this.group.scale.setScalar(this.baseScale);
    }

    const flash = tank.hitFlash > 0 ? 3.5 : 0;
    this.hullMat.emissiveIntensity = Math.max(this.baseEmissive, flash);
    if (tank.bonus) {
      this.hullMat.emissiveIntensity = 0.22 + Math.abs(Math.sin(time * 6 + tank.x)) * 0.55;
    } else if (this.team === 'enemy') {
      this.hullMat.emissive.setHex(0xff2d1a);
    }
    this.turretMat.emissiveIntensity = this.hullMat.emissiveIntensity;
    this.turretMat.emissive.copy(this.hullMat.emissive);
    if (this.beaconMat) {
      this.beaconMat.emissiveIntensity = 0.3 + Math.abs(Math.sin(time * 4.4)) * 0.45;
    }
    if (tank.shield > 0) {
      this.shield.visible = true;
      this.shieldMat.uniforms.uPulse.value = Math.sin(time * 9) * 0.5 + 0.5;
      this.shield.scale.setScalar(1 + Math.sin(time * 9) * 0.035);
      this.shield.rotation.y += dt * 0.8;
    } else {
      this.shield.visible = false;
    }
    if (this.marker) {
      this.marker.visible = tank.shield <= 0 || Math.sin(time * 9) > 0.2;
    }
  }

  dispose(): void {
    this.group.removeFromParent();
    this.hullMat.dispose();
    this.turretMat.dispose();
    this.accentMat.dispose();
    for (const mat of this.trackMats) {
      mat.map?.dispose();
      mat.dispose();
    }
    for (const mat of this.materials) {
      (mat as THREE.MeshBasicMaterial).map?.dispose();
      mat.dispose();
    }
    this.shieldMat.dispose();
    this.shield.geometry.dispose();
    this.bandGeo.dispose();
  }
}

export class BulletVisual {
  readonly group = new THREE.Group();
  private glow: THREE.Sprite;
  private coreMat: THREE.MeshBasicMaterial;
  private trailMat: THREE.MeshBasicMaterial;
  private trail: THREE.Mesh;
  private speedHint = 0;

  constructor(team: string, power: number) {
    const color = team === 'player' ? (power > 1 ? 0xfff0a0 : 0xffc35e) : 0xff6a42;
    this.coreMat = new THREE.MeshBasicMaterial({ color });
    const core = new THREE.Mesh(new THREE.CapsuleGeometry(0.038, 0.11, 4, 8), this.coreMat);
    core.rotation.x = Math.PI / 2;
    this.group.add(core);

    const glowMat = new THREE.SpriteMaterial({
      map: sparkTexture(),
      color,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.glow = new THREE.Sprite(glowMat);
    this.glow.scale.set(0.42, 0.42, 1);
    this.group.add(this.glow);

    this.trailMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.trail = new THREE.Mesh(new THREE.PlaneGeometry(0.09, 0.5), this.trailMat);
    this.trail.rotation.x = -Math.PI / 2;
    this.trail.position.set(0, -0.03, 0.28);
    this.group.add(this.trail);
    this.speedHint = power;
  }

  update(bullet: Bullet, time: number): void {
    this.group.position.set(bullet.x, 0.36, bullet.z);
    this.group.rotation.y = DIR_ANGLE[bullet.dir] ?? 0;
    const pulse = 0.9 + Math.sin(time * 40 + bullet.id) * 0.15;
    this.glow.scale.setScalar(0.4 * pulse);
    this.trail.scale.z = 1 + (this.speedHint > 1 ? 0.8 : 0);
  }

  dispose(): void {
    this.group.removeFromParent();
    this.coreMat.dispose();
    this.trailMat.dispose();
    this.trail.geometry.dispose();
    (this.glow.material as THREE.SpriteMaterial).dispose();
    this.glow.geometry.dispose();
  }
}

const POWER_COLORS: Record<PowerKind, number> = {
  star: 0xffc94d,
  helmet: 0x6fe4ff,
  clock: 0xc79bff,
  shovel: 0xffa14d,
  grenade: 0xff5a4d,
  tank: 0x7dff9a,
};

export { POWER_COLORS };

export class PowerUpVisual {
  readonly group = new THREE.Group();
  readonly kind: PowerKind;
  private icon: THREE.Group;
  private ring: THREE.Mesh;
  private beam: THREE.Mesh;
  private materials: THREE.Material[] = [];
  private baseY = 0;

  constructor(kind: PowerKind, x: number, z: number) {
    this.kind = kind;
    this.group.position.set(x, 0, z);
    const color = POWER_COLORS[kind];
    const mat = new THREE.MeshStandardMaterial({
      color,
      emissive: new THREE.Color(color),
      emissiveIntensity: 2.2,
      metalness: 0.55,
      roughness: 0.25,
    });
    this.materials.push(mat);

    this.icon = new THREE.Group();
    this.icon.position.y = 0.62;
    this.icon.add(this.buildIcon(kind, mat));
    this.group.add(this.icon);

    const ringMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.materials.push(ringMat);
    this.ring = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.018, 8, 40), ringMat);
    this.ring.rotation.x = Math.PI / 2;
    this.ring.position.y = 0.12;
    this.group.add(this.ring);

    const beamMat = new THREE.MeshBasicMaterial({
      map: beamTexture(),
      color,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.materials.push(beamMat);
    this.beam = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1.5), beamMat);
    this.beam.position.y = 0.75;
    this.group.add(this.beam);

    const glow = new THREE.PointLight(color, 1.2, 3, 2);
    glow.position.y = 0.7;
    this.group.add(glow);
    this.baseY = 0;
  }

  private buildIcon(kind: PowerKind, mat: THREE.Material): THREE.Object3D {
    switch (kind) {
      case 'star': {
        const shape = new THREE.Shape();
        const spikes = 5;
        for (let i = 0; i < spikes * 2; i++) {
          const r = i % 2 === 0 ? 0.21 : 0.09;
          const a = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(a) * r;
          const y = Math.sin(a) * r;
          if (i === 0) shape.moveTo(x, y);
          else shape.lineTo(x, y);
        }
        shape.closePath();
        const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.06, bevelEnabled: true, bevelSize: 0.015, bevelThickness: 0.015, bevelSegments: 2 });
        geo.center();
        return new THREE.Mesh(geo, mat);
      }
      case 'helmet': {
        const group = new THREE.Group();
        const dome = new THREE.Mesh(new THREE.SphereGeometry(0.17, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), mat);
        group.add(dome);
        const brim = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.035, 8, 24), mat);
        brim.rotation.x = Math.PI / 2;
        group.add(brim);
        return group;
      }
      case 'clock': {
        const group = new THREE.Group();
        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.07, 24), mat);
        body.rotation.x = Math.PI / 2;
        group.add(body);
        const hands = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.13, 0.02), mat);
        hands.position.y = 0.03;
        group.add(hands);
        const hands2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.025, 0.02), mat);
        hands2.position.x = 0.03;
        group.add(hands2);
        return group;
      }
      case 'shovel': {
        const group = new THREE.Group();
        const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.34, 8), mat);
        handle.position.y = 0.08;
        group.add(handle);
        const blade = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.16, 0.04), mat);
        blade.position.y = -0.16;
        group.add(blade);
        return group;
      }
      case 'grenade': {
        const group = new THREE.Group();
        const body = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 12), mat);
        group.add(body);
        const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.1, 8), mat);
        neck.position.y = 0.19;
        group.add(neck);
        const pin = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.012, 6, 12), mat);
        pin.position.set(0.09, 0.2, 0);
        pin.rotation.y = Math.PI / 2;
        group.add(pin);
        return group;
      }
      case 'tank': {
        const group = new THREE.Group();
        const hull = new THREE.Mesh(new RoundedBoxGeometry(0.3, 0.12, 0.34, 2, 0.02), mat);
        group.add(hull);
        const turret = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.11, 0.08, 10), mat);
        turret.position.y = 0.1;
        group.add(turret);
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.24, 6), mat);
        barrel.rotation.x = Math.PI / 2;
        barrel.position.set(0, 0.1, -0.17);
        group.add(barrel);
        return group;
      }
    }
  }

  update(time: number, life: number): void {
    this.icon.rotation.y = time * 1.6;
    this.icon.position.y = 0.62 + Math.sin(time * 2.6) * 0.06;
    this.ring.rotation.z = time * 1.2;
    this.ring.scale.setScalar(1 + Math.sin(time * 3) * 0.07);
    this.beam.rotation.y = time * 0.7;
    (this.beam.material as THREE.MeshBasicMaterial).opacity = 0.35 + Math.sin(time * 4) * 0.12;
    this.group.visible = life > 3.2 || Math.floor(time * 8) % 2 === 0;
  }

  dispose(): void {
    this.group.removeFromParent();
    for (const mat of this.materials) mat.dispose();
    this.icon.traverse((obj) => {
      if (obj instanceof THREE.Mesh) obj.geometry.dispose();
    });
  }
}

export class BaseVisual {
  readonly group = new THREE.Group();
  private eagle: THREE.Group;
  private wreck: THREE.Group;
  private light: THREE.PointLight;
  private ring: THREE.Mesh;
  private glow: THREE.Mesh;
  private destroyed = false;

  constructor() {
    this.group.position.set(7, 0, 12);

    const stone = new THREE.MeshStandardMaterial({ color: 0x3a3833, roughness: 0.85, metalness: 0.12 });
    const gold = new THREE.MeshStandardMaterial({
      color: 0xc39a45,
      metalness: 0.6,
      roughness: 0.42,
      emissive: new THREE.Color(0x2e2103),
      emissiveIntensity: 0.1,
    });
    const goldDark = gold.clone();
    goldDark.color.multiplyScalar(0.74);
    goldDark.roughness = 0.5;
    const goldWing = gold.clone();
    goldWing.color.multiplyScalar(0.88);
    goldWing.roughness = 0.46;
    const dark = new THREE.MeshStandardMaterial({ color: 0x2a2721, metalness: 0.5, roughness: 0.55 });

    const pedestal = new THREE.Mesh(new RoundedBoxGeometry(1.62, 0.18, 1.62, 2, 0.05), stone);
    pedestal.position.y = 0.09;
    pedestal.receiveShadow = true;
    this.group.add(pedestal);

    const plinth = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.68, 0.38, 8), stone);
    plinth.position.y = 0.37;
    plinth.castShadow = true;
    this.group.add(plinth);

    const bronze = new THREE.MeshStandardMaterial({
      color: 0x241a10,
      metalness: 0.45,
      roughness: 0.7,
      emissive: new THREE.Color(0x0b0603),
      emissiveIntensity: 0.25,
    });
    const medallion = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.6, 0.07, 40), bronze);
    medallion.position.y = 0.585;
    medallion.receiveShadow = true;
    this.group.add(medallion);

    this.eagle = new THREE.Group();
    this.eagle.position.y = 0.635;
    this.eagle.scale.setScalar(1.0);

    const body = new THREE.Mesh(new THREE.SphereGeometry(0.2, 18, 14), gold);
    body.scale.set(0.4, 0.3, 1.15);
    body.position.set(0, 0.035, -0.02);
    this.eagle.add(body);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.085, 14, 10), gold);
    head.position.set(0, 0.14, -0.3);
    this.eagle.add(head);

    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.13, 8), goldDark);
    beak.rotation.x = -Math.PI / 2;
    beak.position.set(0, 0.125, -0.4);
    this.eagle.add(beak);

    const crest = new THREE.Mesh(new THREE.ConeGeometry(0.026, 0.07, 6), gold);
    crest.position.set(0, 0.21, -0.28);
    this.eagle.add(crest);

    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x160f05, metalness: 0.4, roughness: 0.3 });
    for (const side of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.016, 8, 6), eyeMat);
      eye.position.set(side * 0.045, 0.16, -0.345);
      this.eagle.add(eye);
    }

    // Swept wings with notched trailing feathers, held over a dark bronze medallion.
    const wingPoints: Array<[number, number]> = [
      [0.02, 0.2],
      [0.22, 0.22],
      [0.45, 0.18],
      [0.66, 0.08],
      [0.82, -0.02],
      [0.78, -0.1],
      [0.64, -0.06],
      [0.6, -0.14],
      [0.5, -0.1],
      [0.45, -0.18],
      [0.35, -0.14],
      [0.28, -0.22],
      [0.18, -0.18],
      [0.1, -0.23],
      [0.02, -0.18],
    ];
    const wingShape = new THREE.Shape();
    wingShape.moveTo(wingPoints[0][0], wingPoints[0][1]);
    for (let i = 1; i < wingPoints.length; i++) wingShape.lineTo(wingPoints[i][0], wingPoints[i][1]);
    wingShape.closePath();
    const wingGeo = new THREE.ExtrudeGeometry(wingShape, {
      depth: 0.05,
      bevelEnabled: true,
      bevelSize: 0.008,
      bevelThickness: 0.008,
      bevelSegments: 2,
      curveSegments: 1,
    });
    wingGeo.rotateX(-Math.PI / 2);
    const wingInnerGeo = wingGeo.clone();
    wingInnerGeo.scale(0.62, 0.5, 0.72);
    wingInnerGeo.translate(0.02, 0.03, 0.02);

    for (const side of [-1, 1]) {
      const wingGroup = new THREE.Group();
      wingGroup.rotation.z = side * 0.14;
      const wing = new THREE.Mesh(wingGeo, goldWing);
      wing.scale.x = side;
      wingGroup.add(wing);

      const inner = new THREE.Mesh(wingInnerGeo, goldDark);
      inner.scale.x = side;
      wingGroup.add(inner);
      this.eagle.add(wingGroup);
    }

    for (let i = -1; i <= 1; i++) {
      const feather = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.026, 0.3),
        i === 0 ? gold : goldDark,
      );
      feather.position.set(i * 0.07, -0.006, 0.26 + Math.abs(i) * 0.02);
      feather.rotation.y = i * 0.22;
      feather.castShadow = true;
      this.eagle.add(feather);
    }

    this.eagle.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
    this.group.add(this.eagle);

    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x9c7a3c,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.66, 0.69, 48), ringMat);
    this.ring.rotation.x = -Math.PI / 2;
    this.ring.position.y = 0.19;
    this.group.add(this.ring);
    ringMat.opacity = 0.1;

    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xffb45e,
      transparent: true,
      opacity: 0.03,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.glow = new THREE.Mesh(new THREE.CircleGeometry(0.78, 40), glowMat);
    this.glow.rotation.x = -Math.PI / 2;
    this.glow.position.y = 0.2;
    this.group.add(this.glow);

    this.light = new THREE.PointLight(0xffc072, 0.3, 3.2, 2);
    this.light.position.set(0, 1.4, 0.15);
    this.group.add(this.light);

    this.wreck = new THREE.Group();
    const wreckMat = new THREE.MeshStandardMaterial({ color: 0x1e1b17, metalness: 0.5, roughness: 0.7 });
    for (let i = 0; i < 7; i++) {
      const chunk = new THREE.Mesh(new THREE.BoxGeometry(0.2 + Math.random() * 0.35, 0.16 + Math.random() * 0.2, 0.2 + Math.random() * 0.3), wreckMat);
      chunk.position.set((Math.random() - 0.5) * 0.8, 0.12 + Math.random() * 0.12, (Math.random() - 0.5) * 0.8);
      chunk.rotation.set(Math.random(), Math.random(), Math.random());
      this.wreck.add(chunk);
    }
    const ember = new THREE.PointLight(0xff4d1a, 0.8, 2.5, 2);
    ember.position.y = 0.3;
    this.wreck.add(ember);
    this.wreck.visible = false;
    this.group.add(this.wreck);

    void dark;
  }

  setDestroyed(): void {
    this.destroyed = true;
    this.eagle.visible = false;
    this.ring.visible = false;
    this.glow.visible = false;
    this.light.intensity = 0;
    this.wreck.visible = true;
  }

  reset(): void {
    this.destroyed = false;
    this.eagle.visible = true;
    this.ring.visible = true;
    this.glow.visible = true;
    this.wreck.visible = false;
    this.light.intensity = 0.3;
  }

  update(time: number): void {
    if (this.destroyed) return;
    this.ring.rotation.z = time * 0.25;
    const pulse = 0.06 + Math.sin(time * 1.8) * 0.025;
    (this.ring.material as THREE.MeshBasicMaterial).opacity = pulse;
    this.light.intensity = 0.27 + Math.sin(time * 2.4) * 0.05;
    this.eagle.rotation.y = Math.PI + Math.sin(time * 0.35) * 0.1;
    this.eagle.position.y = 0.635 + Math.sin(time * 1.1) * 0.012;
  }
}

export function disposeTankGeometry(): void {
  if (!geo) return;
  for (const value of Object.values(geo)) value.dispose();
  geo = null;
}

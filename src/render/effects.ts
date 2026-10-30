import * as THREE from 'three';
import type { Dir } from '../core/types';
import { DIRS } from '../core/constants';
import { scorchTexture, smokeTexture, sparkTexture } from './textures';

interface ParticleSeed {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  size0: number;
  size1: number;
  color: THREE.Color;
  alpha: number;
  gravity: number;
  drag: number;
  additive: boolean;
}

class ParticleField {
  readonly points: THREE.Points;
  private capacity: number;
  private positions: Float32Array;
  private colors: Float32Array;
  private sizes: Float32Array;
  private alphas: Float32Array;
  private life: Float32Array;
  private maxLife: Float32Array;
  private vx: Float32Array;
  private vy: Float32Array;
  private vz: Float32Array;
  private size0: Float32Array;
  private size1: Float32Array;
  private gravity: Float32Array;
  private drag: Float32Array;
  private alpha0: Float32Array;
  private cursor = 0;
  private material: THREE.ShaderMaterial;

  constructor(capacity: number, map: THREE.Texture, additive: boolean) {
    this.capacity = capacity;
    this.positions = new Float32Array(capacity * 3);
    this.colors = new Float32Array(capacity * 3);
    this.sizes = new Float32Array(capacity);
    this.alphas = new Float32Array(capacity);
    this.life = new Float32Array(capacity);
    this.maxLife = new Float32Array(capacity);
    this.vx = new Float32Array(capacity);
    this.vy = new Float32Array(capacity);
    this.vz = new Float32Array(capacity);
    this.size0 = new Float32Array(capacity);
    this.size1 = new Float32Array(capacity);
    this.gravity = new Float32Array(capacity);
    this.drag = new Float32Array(capacity);
    this.alpha0 = new Float32Array(capacity);

    for (let i = 0; i < capacity; i++) this.positions[i * 3 + 1] = -100;

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geometry.setAttribute('aColor', new THREE.BufferAttribute(this.colors, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(this.sizes, 1));
    geometry.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphas, 1));

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: map },
        uPixelScale: { value: 1200 },
      },
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aSize;
        attribute float aAlpha;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float uPixelScale;
        void main() {
          vColor = aColor;
          vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (uPixelScale / max(0.001, -mv.z));
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          gl_FragColor = vec4(vColor, tex.a * vAlpha);
          if (gl_FragColor.a < 0.003) discard;
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    this.points = new THREE.Points(geometry, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 4 : 3;
  }

  spawn(seed: ParticleSeed): void {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.capacity;
    this.positions[i * 3] = seed.x;
    this.positions[i * 3 + 1] = seed.y;
    this.positions[i * 3 + 2] = seed.z;
    this.colors[i * 3] = seed.color.r;
    this.colors[i * 3 + 1] = seed.color.g;
    this.colors[i * 3 + 2] = seed.color.b;
    this.life[i] = seed.life;
    this.maxLife[i] = seed.life;
    this.vx[i] = seed.vx;
    this.vy[i] = seed.vy;
    this.vz[i] = seed.vz;
    this.size0[i] = seed.size0;
    this.size1[i] = seed.size1;
    this.gravity[i] = seed.gravity;
    this.drag[i] = seed.drag;
    this.alpha0[i] = seed.alpha;
    this.sizes[i] = seed.size0;
    this.alphas[i] = seed.alpha;
  }

  update(dt: number): void {
    for (let i = 0; i < this.capacity; i++) {
      if (this.life[i] <= 0) {
        if (this.alphas[i] !== 0) this.alphas[i] = 0;
        continue;
      }
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        this.alphas[i] = 0;
        this.sizes[i] = 0;
        this.positions[i * 3 + 1] = -100;
        continue;
      }
      const drag = Math.exp(-this.drag[i] * dt);
      this.vx[i] *= drag;
      this.vz[i] *= drag;
      this.vy[i] = this.vy[i] * drag + this.gravity[i] * dt;
      this.positions[i * 3] += this.vx[i] * dt;
      this.positions[i * 3 + 1] += this.vy[i] * dt;
      this.positions[i * 3 + 2] += this.vz[i] * dt;
      if (this.positions[i * 3 + 1] < 0.03) {
        this.positions[i * 3 + 1] = 0.03;
        this.vy[i] *= -0.25;
      }
      const t = 1 - this.life[i] / this.maxLife[i];
      this.sizes[i] = this.size0[i] + (this.size1[i] - this.size0[i]) * t;
      this.alphas[i] = this.alpha0[i] * (1 - t * t);
    }
    const geometry = this.points.geometry;
    (geometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
    (geometry.getAttribute('aColor') as THREE.BufferAttribute).needsUpdate = true;
    (geometry.getAttribute('aSize') as THREE.BufferAttribute).needsUpdate = true;
    (geometry.getAttribute('aAlpha') as THREE.BufferAttribute).needsUpdate = true;
  }

  setPixelScale(scale: number): void {
    this.material.uniforms.uPixelScale.value = scale;
  }

  dispose(): void {
    this.points.removeFromParent();
    this.points.geometry.dispose();
    this.material.dispose();
  }
}

interface DebrisSlot {
  active: boolean;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rx: number;
  ry: number;
  rz: number;
  avx: number;
  avy: number;
  avz: number;
  scale: number;
  life: number;
  maxLife: number;
}

class DebrisSystem {
  readonly mesh: THREE.InstancedMesh;
  private slots: DebrisSlot[] = [];
  private cursor = 0;
  private dummy = new THREE.Object3D();
  private color = new THREE.Color();

  constructor(capacity = 260) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.62,
      metalness: 0.25,
      vertexColors: false,
    });
    this.mesh = new THREE.InstancedMesh(geometry, material, capacity);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.frustumCulled = false;
    for (let i = 0; i < capacity; i++) {
      this.slots.push({
        active: false,
        x: 0,
        y: -10,
        z: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        rx: 0,
        ry: 0,
        rz: 0,
        avx: 0,
        avy: 0,
        avz: 0,
        scale: 0,
        life: 0,
        maxLife: 1,
      });
      const dummy = new THREE.Object3D();
      dummy.position.set(0, -10, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      this.mesh.setMatrixAt(i, dummy.matrix);
      this.mesh.setColorAt(i, this.color.setHex(0xffffff));
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }

  spawn(x: number, y: number, z: number, color: THREE.Color, power: number): void {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.slots.length;
    const slot = this.slots[i];
    const angle = Math.random() * Math.PI * 2;
    const speed = (0.6 + Math.random() * 1.8) * power;
    slot.active = true;
    slot.x = x + (Math.random() - 0.5) * 0.2;
    slot.y = y + Math.random() * 0.15;
    slot.z = z + (Math.random() - 0.5) * 0.2;
    slot.vx = Math.cos(angle) * speed;
    slot.vz = Math.sin(angle) * speed;
    slot.vy = 1.6 + Math.random() * 2.4 * power;
    slot.rx = Math.random() * Math.PI;
    slot.ry = Math.random() * Math.PI;
    slot.rz = Math.random() * Math.PI;
    slot.avx = (Math.random() - 0.5) * 10;
    slot.avy = (Math.random() - 0.5) * 10;
    slot.avz = (Math.random() - 0.5) * 10;
    slot.scale = 0.05 + Math.random() * 0.11;
    slot.life = 1.6 + Math.random() * 1.6;
    slot.maxLife = slot.life;
    this.mesh.setColorAt(i, color);
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }

  update(dt: number): void {
    for (let i = 0; i < this.slots.length; i++) {
      const slot = this.slots[i];
      if (!slot.active) continue;
      slot.life -= dt;
      if (slot.life <= 0) {
        slot.active = false;
        slot.scale = 0;
        this.dummy.position.set(0, -10, 0);
        this.dummy.scale.setScalar(0);
        this.dummy.updateMatrix();
        this.mesh.setMatrixAt(i, this.dummy.matrix);
        continue;
      }
      slot.vy -= 9.4 * dt;
      slot.x += slot.vx * dt;
      slot.y += slot.vy * dt;
      slot.z += slot.vz * dt;
      if (slot.y < 0.06) {
        slot.y = 0.06;
        slot.vy *= -0.34;
        slot.vx *= 0.72;
        slot.vz *= 0.72;
        slot.avx *= 0.6;
        slot.avz *= 0.6;
      }
      slot.rx += slot.avx * dt;
      slot.ry += slot.avy * dt;
      slot.rz += slot.avz * dt;
      const fade = Math.min(1, slot.life / 0.5);
      this.dummy.position.set(slot.x, slot.y, slot.z);
      this.dummy.rotation.set(slot.rx, slot.ry, slot.rz);
      this.dummy.scale.setScalar(slot.scale * fade);
      this.dummy.updateMatrix();
      this.mesh.setMatrixAt(i, this.dummy.matrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  dispose(): void {
    this.mesh.removeFromParent();
    this.mesh.geometry.dispose();
    (this.mesh.material as THREE.Material).dispose();
  }
}

interface RingSlot {
  mesh: THREE.Mesh;
  material: THREE.MeshBasicMaterial;
  life: number;
  maxLife: number;
  scale: number;
}

export class Effects {
  readonly group = new THREE.Group();
  private sparks: ParticleField;
  private smoke: ParticleField;
  private fire: ParticleField;
  private debris: DebrisSystem;
  private rings: RingSlot[] = [];
  private decals: THREE.Mesh[] = [];
  private decalIndex = 0;
  private lights: Array<{ light: THREE.PointLight; life: number; max: number; power: number }> = [];
  private shakeAmount = 0;
  private shakeTime = 0;
  private lowQuality: boolean;

  constructor(lowQuality = false) {
    this.lowQuality = lowQuality;
    this.sparks = new ParticleField(lowQuality ? 260 : 520, sparkTexture(), true);
    this.smoke = new ParticleField(lowQuality ? 160 : 300, smokeTexture(), false);
    this.fire = new ParticleField(lowQuality ? 140 : 280, sparkTexture(), true);
    this.group.add(this.sparks.points, this.smoke.points, this.fire.points);
    this.debris = new DebrisSystem(lowQuality ? 140 : 260);
    this.group.add(this.debris.mesh);

    const ringGeo = new THREE.RingGeometry(0.82, 1, 56);
    for (let i = 0; i < 10; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffc06a,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(ringGeo, mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.visible = false;
      this.rings.push({ mesh, material: mat, life: 0, maxLife: 1, scale: 1 });
      this.group.add(mesh);
    }

    for (let i = 0; i < 3; i++) {
      const light = new THREE.PointLight(0xffa04a, 0, 9, 2);
      light.position.set(0, -10, 0);
      this.group.add(light);
      this.lights.push({ light, life: 0, max: 1, power: 0 });
    }

    const decalGeo = new THREE.PlaneGeometry(1, 1);
    for (let i = 0; i < 26; i++) {
      const mat = new THREE.MeshBasicMaterial({
        map: scorchTexture(),
        transparent: true,
        opacity: 0,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(decalGeo, mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.visible = false;
      mesh.renderOrder = 1;
      this.decals.push(mesh);
      this.group.add(mesh);
    }
  }

  setPixelScale(scale: number): void {
    this.sparks.setPixelScale(scale);
    this.smoke.setPixelScale(scale);
    this.fire.setPixelScale(scale);
  }

  private sparkSeed(x: number, y: number, z: number, color: THREE.Color, speed: number, life: number, size: number): ParticleSeed {
    const angle = Math.random() * Math.PI * 2;
    const up = Math.random();
    return {
      x,
      y,
      z,
      vx: Math.cos(angle) * speed * Math.random(),
      vy: (0.5 + up) * speed,
      vz: Math.sin(angle) * speed * Math.random(),
      life,
      size0: size,
      size1: size * 0.2,
      color,
      alpha: 1,
      gravity: -6.5,
      drag: 1.6,
      additive: true,
    };
  }

  muzzle(x: number, z: number, dir: Dir, team: string, power: number): void {
    const v = DIRS[dir];
    const color = new THREE.Color(team === 'player' ? 0xffcf7a : 0xff7a4c);
    for (let i = 0; i < (power > 1 ? 9 : 6); i++) {
      const s = this.sparkSeed(x, 0.42, z, color, 3.2, 0.18 + Math.random() * 0.14, 0.05 + Math.random() * 0.05);
      s.vx += v.x * 2.5;
      s.vz += v.z * 2.5;
      this.sparks.spawn(s);
    }
    for (let i = 0; i < 2; i++) {
      this.smoke.spawn({
        x,
        y: 0.42,
        z,
        vx: v.x * 0.7 + (Math.random() - 0.5) * 0.3,
        vy: 0.45,
        vz: v.z * 0.7 + (Math.random() - 0.5) * 0.3,
        life: 0.7,
        size0: 0.12,
        size1: 0.34,
        color: new THREE.Color(0x8a8178),
        alpha: 0.25,
        gravity: 0.25,
        drag: 1.1,
        additive: false,
      });
    }
    this.flashLight(x, 0.5, z, 0xffb060, 2.4, 0.1, 5);
  }

  impact(x: number, z: number, dir: Dir, color = 0xffc47a): void {
    const v = DIRS[dir];
    for (let i = 0; i < 10; i++) {
      const s = this.sparkSeed(x, 0.35, z, new THREE.Color(color), 2.6, 0.2 + Math.random() * 0.2, 0.035 + Math.random() * 0.03);
      s.vx += -v.x * 1.8;
      s.vz += -v.z * 1.8;
      this.sparks.spawn(s);
    }
  }

  brickBreak(x: number, z: number, removed: number[], dir: Dir): void {
    const rust = new THREE.Color(0x8a4a33);
    const dust = new THREE.Color(0x9b8068);
    for (const q of removed) {
      const ox = q === 1 || q === 3 ? 0.25 : -0.25;
      const oz = q === 2 || q === 3 ? 0.25 : -0.25;
      const wx = x + 0.5 + ox;
      const wz = z + 0.5 + oz;
      for (let i = 0; i < (this.lowQuality ? 3 : 6); i++) {
        this.debris.spawn(wx, 0.28, wz, rust, 0.9);
      }
      for (let i = 0; i < 3; i++) {
        this.smoke.spawn({
          x: wx + (Math.random() - 0.5) * 0.3,
          y: 0.25,
          z: wz + (Math.random() - 0.5) * 0.3,
          vx: (Math.random() - 0.5) * 0.7,
          vy: 0.35 + Math.random() * 0.4,
          vz: (Math.random() - 0.5) * 0.7,
          life: 0.9 + Math.random() * 0.5,
          size0: 0.14,
          size1: 0.5,
          color: dust,
          alpha: 0.32,
          gravity: 0.15,
          drag: 1.4,
          additive: false,
        });
      }
      for (let i = 0; i < 4; i++) {
        const s = this.sparkSeed(wx, 0.32, wz, new THREE.Color(0xffb06a), 2.2, 0.3, 0.04);
        s.vy += 0.4;
        this.sparks.spawn(s);
      }
    }
    this.shake(0.12);
    void dir;
  }

  steelHit(x: number, z: number, dir: Dir): void {
    this.impact(x + 0.5, z + 0.5, dir, 0xaad8ff);
    this.shake(0.03);
  }

  steelBreak(x: number, z: number, removed: number[], dir: Dir): void {
    const grey = new THREE.Color(0x8f979e);
    for (const q of removed) {
      const ox = q === 1 || q === 3 ? 0.25 : -0.25;
      const oz = q === 2 || q === 3 ? 0.25 : -0.25;
      const wx = x + 0.5 + ox;
      const wz = z + 0.5 + oz;
      for (let i = 0; i < 7; i++) this.debris.spawn(wx, 0.3, wz, grey, 1.1);
      for (let i = 0; i < 7; i++) {
        const s = this.sparkSeed(wx, 0.35, wz, new THREE.Color(0xcfeaff), 4, 0.35, 0.045);
        this.sparks.spawn(s);
      }
    }
    this.impact(x + 0.5, z + 0.5, dir, 0xcfeaff);
    this.shake(0.08);
  }

  explosion(x: number, z: number, scale = 1, color = 0xff8a3a, silentShake = false): void {
    const fireColor = new THREE.Color(color);
    const hot = new THREE.Color(0xfff0b0);
    const count = Math.round((this.lowQuality ? 14 : 26) * scale);
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * 0.25;
      this.fire.spawn({
        x: x + Math.cos(a) * r,
        y: 0.25 + Math.random() * 0.3,
        z: z + Math.sin(a) * r,
        vx: Math.cos(a) * (0.6 + Math.random() * 2.8) * scale,
        vy: 0.6 + Math.random() * 2.6 * scale,
        vz: Math.sin(a) * (0.6 + Math.random() * 2.8) * scale,
        life: 0.28 + Math.random() * 0.34,
        size0: 0.28 * scale,
        size1: 0.72 * scale,
        color: Math.random() > 0.45 ? fireColor : hot,
        alpha: 1,
        gravity: 0.5,
        drag: 2.6,
        additive: true,
      });
    }
    const smokeCount = Math.round((this.lowQuality ? 7 : 14) * scale);
    for (let i = 0; i < smokeCount; i++) {
      const a = Math.random() * Math.PI * 2;
      this.smoke.spawn({
        x: x + (Math.random() - 0.5) * 0.4,
        y: 0.25 + Math.random() * 0.4,
        z: z + (Math.random() - 0.5) * 0.4,
        vx: Math.cos(a) * (0.3 + Math.random() * 1.1),
        vy: 0.4 + Math.random() * 0.8,
        vz: Math.sin(a) * (0.3 + Math.random() * 1.1),
        life: 1.1 + Math.random() * 1.4,
        size0: 0.35 * scale,
        size1: 1.15 * scale,
        color: new THREE.Color(0x5d5751),
        alpha: 0.42,
        gravity: 0.35,
        drag: 1.1,
        additive: false,
      });
    }
    const sparkCount = Math.round((this.lowQuality ? 14 : 30) * scale);
    for (let i = 0; i < sparkCount; i++) {
      const s = this.sparkSeed(x, 0.35, z, new THREE.Color(0xffc47a), 6 * scale, 0.35 + Math.random() * 0.45, 0.04 + Math.random() * 0.04);
      this.sparks.spawn(s);
    }
    const debrisCount = Math.round((this.lowQuality ? 5 : 9) * scale);
    for (let i = 0; i < debrisCount; i++) {
      this.debris.spawn(x, 0.28, z, new THREE.Color(0x3a3733), 1.2 * scale);
    }
    this.ring(x, z, 1.4 * scale, color, 0.42);
    this.flashLight(x, 0.7, z, color, 8 * scale, 0.28, 8);
    if (!silentShake) this.shake(0.26 * scale);
    this.scorch(x, z, 0.65 * scale);
  }

  ring(x: number, z: number, scale: number, color: number, life: number): void {
    const slot = this.rings.find((r) => r.life <= 0) ?? this.rings[0];
    slot.mesh.position.set(x, 0.22, z);
    slot.mesh.visible = true;
    slot.material.color.setHex(color);
    slot.life = life;
    slot.maxLife = life;
    slot.scale = scale;
    slot.mesh.scale.setScalar(0.15);
  }

  splash(x: number, z: number): void {
    const blue = new THREE.Color(0x9fd8e8);
    for (let i = 0; i < 14; i++) {
      const a = Math.random() * Math.PI * 2;
      this.fire.spawn({
        x: x + Math.cos(a) * 0.3,
        y: 0.08,
        z: z + Math.sin(a) * 0.3,
        vx: Math.cos(a) * (0.2 + Math.random() * 0.7),
        vy: 1.5 + Math.random() * 2.2,
        vz: Math.sin(a) * (0.2 + Math.random() * 0.7),
        life: 0.45 + Math.random() * 0.3,
        size0: 0.07,
        size1: 0.02,
        color: blue,
        alpha: 0.9,
        gravity: -8,
        drag: 0.6,
        additive: true,
      });
    }
    this.ring(x, z, 0.7, 0x7fc6dc, 0.5);
  }

  spawnBeam(x: number, z: number, color = 0xffc46a): void {
    for (let i = 0; i < 18; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 0.15 + Math.random() * 0.25;
      this.fire.spawn({
        x: x + Math.cos(a) * r,
        y: 0.05 + Math.random() * 0.3,
        z: z + Math.sin(a) * r,
        vx: Math.cos(a) * 0.2,
        vy: 1.2 + Math.random() * 2.2,
        vz: Math.sin(a) * 0.2,
        life: 0.55 + Math.random() * 0.5,
        size0: 0.06,
        size1: 0.01,
        color: new THREE.Color(color),
        alpha: 1,
        gravity: 0.2,
        drag: 0.4,
        additive: true,
      });
    }
    this.ring(x, z, 0.8, color, 0.6);
  }

  pickup(x: number, z: number, color: number): void {
    for (let i = 0; i < 26; i++) {
      const a = (i / 26) * Math.PI * 2;
      this.fire.spawn({
        x,
        y: 0.6,
        z,
        vx: Math.cos(a) * (0.6 + Math.random() * 1.2),
        vy: 0.8 + Math.random() * 1.8,
        vz: Math.sin(a) * (0.6 + Math.random() * 1.2),
        life: 0.5 + Math.random() * 0.5,
        size0: 0.1,
        size1: 0.01,
        color: new THREE.Color(color),
        alpha: 1,
        gravity: -1,
        drag: 1.2,
        additive: true,
      });
    }
    this.ring(x, z, 1.1, color, 0.55);
    this.flashLight(x, 0.7, z, color, 4, 0.3, 5);
  }

  trail(x: number, z: number, color: number): void {
    this.sparks.spawn({
      x,
      y: 0.36,
      z,
      vx: 0,
      vy: 0.05,
      vz: 0,
      life: 0.2,
      size0: 0.09,
      size1: 0.005,
      color: new THREE.Color(color),
      alpha: 0.7,
      gravity: 0,
      drag: 0,
      additive: true,
    });
  }

  dust(x: number, z: number, amount = 1): void {
    for (let i = 0; i < amount; i++) {
      this.smoke.spawn({
        x: x + (Math.random() - 0.5) * 0.2,
        y: 0.08,
        z: z + (Math.random() - 0.5) * 0.2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: 0.15 + Math.random() * 0.25,
        vz: (Math.random() - 0.5) * 0.3,
        life: 0.7 + Math.random() * 0.6,
        size0: 0.1,
        size1: 0.42,
        color: new THREE.Color(0x9b8f7b),
        alpha: 0.16,
        gravity: 0.1,
        drag: 1.2,
        additive: false,
      });
    }
  }

  scorch(x: number, z: number, scale: number): void {
    const mesh = this.decals[this.decalIndex];
    this.decalIndex = (this.decalIndex + 1) % this.decals.length;
    mesh.position.set(x, 0.015 + Math.random() * 0.002, z);
    mesh.rotation.z = Math.random() * Math.PI * 2;
    mesh.scale.setScalar(scale);
    mesh.visible = true;
    (mesh.material as THREE.MeshBasicMaterial).opacity = 0.7;
  }

  shake(amount: number): void {
    this.shakeAmount = Math.min(1.2, this.shakeAmount + amount);
  }

  flashLight(x: number, y: number, z: number, color: number, power: number, life: number, distance: number): void {
    const slot = this.lights.reduce((a, b) => (a.life < b.life ? a : b));
    slot.light.position.set(x, y, z);
    slot.light.color.setHex(color);
    slot.light.distance = distance;
    slot.light.intensity = power;
    slot.power = power;
    slot.life = life;
    slot.max = life;
  }

  getShakeOffset(time: number): { x: number; y: number; z: number; roll: number } {
    if (this.shakeAmount <= 0.001) return { x: 0, y: 0, z: 0, roll: 0 };
    const s = this.shakeAmount;
    return {
      x: Math.sin(time * 87) * 0.09 * s,
      y: Math.cos(time * 73) * 0.06 * s,
      z: Math.sin(time * 61) * 0.07 * s,
      roll: Math.sin(time * 91) * 0.004 * s,
    };
  }

  update(dt: number): void {
    this.sparks.update(dt);
    this.smoke.update(dt);
    this.fire.update(dt);
    this.debris.update(dt);
    this.shakeAmount = Math.max(0, this.shakeAmount - dt * 2.2);
    this.shakeTime += dt;

    for (const ring of this.rings) {
      if (ring.life <= 0) {
        ring.mesh.visible = false;
        continue;
      }
      ring.life -= dt;
      const t = 1 - Math.max(0, ring.life) / ring.maxLife;
      ring.mesh.visible = true;
      ring.mesh.scale.setScalar(0.15 + (ring.scale - 0.15) * easeOut(t));
      ring.material.opacity = (1 - t) * 0.7;
    }

    for (const slot of this.lights) {
      if (slot.life <= 0) {
        slot.light.intensity = 0;
        continue;
      }
      slot.life -= dt;
      slot.light.intensity = Math.max(0, slot.power * (slot.life / slot.max));
    }

    for (const decal of this.decals) {
      if (!decal.visible) continue;
      const mat = decal.material as THREE.MeshBasicMaterial;
      mat.opacity = Math.max(0, mat.opacity - dt * 0.012);
      if (mat.opacity <= 0) decal.visible = false;
    }
  }

  dispose(): void {
    this.sparks.dispose();
    this.smoke.dispose();
    this.fire.dispose();
    this.debris.dispose();
    for (const ring of this.rings) {
      ring.mesh.removeFromParent();
      ring.material.dispose();
      ring.mesh.geometry.dispose();
    }
    for (const decal of this.decals) {
      decal.removeFromParent();
      (decal.material as THREE.Material).dispose();
      decal.geometry.dispose();
    }
    for (const slot of this.lights) slot.light.removeFromParent();
  }
}

function easeOut(t: number): number {
  return 1 - (1 - t) * (1 - t);
}

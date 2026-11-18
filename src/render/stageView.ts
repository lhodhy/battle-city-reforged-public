import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { ENEMY_SPAWNS, FIELD, GRID, PLAYER_SPAWNS } from '../core/constants';
import type { Terrain } from '../core/terrain';
import { BaseVisual } from './models';
import {
  asphaltTexture,
  brickNormalTexture,
  brickTexture,
  cityWindowTexture,
  concreteTexture,
  forestFloorTexture,
  groundNormalTexture,
  groundRoughnessTexture,
  groundTexture,
  iceTexture,
  metalTexture,
  steelNormalTexture,
} from './textures';

const QUAD_OFFSETS = [
  { x: -0.25, z: -0.25 },
  { x: 0.25, z: -0.25 },
  { x: -0.25, z: 0.25 },
  { x: 0.25, z: 0.25 },
];

export class StageView {
  readonly group = new THREE.Group();
  readonly base: BaseVisual;
  private waterUniform = { value: 0 };
  private searchlights: THREE.Group[] = [];
  private beacons: THREE.MeshStandardMaterial[] = [];
  private brickMesh: THREE.InstancedMesh | null = null;
  private steelMesh: THREE.InstancedMesh | null = null;
  private brickSlots = new Map<number, number[]>();
  private steelSlots = new Map<number, number[]>();
  private dummy = new THREE.Object3D();
  private disposables: Array<THREE.Material | THREE.BufferGeometry> = [];
  private wallDisposables: Array<THREE.Material | THREE.BufferGeometry> = [];
  private groundMat: THREE.MeshStandardMaterial | null = null;
  private windUniform = { value: 0 };
  private time = 0;

  constructor() {
    this.group.name = 'stage';
    this.base = new BaseVisual();
    this.group.add(this.base.group);
  }

  build(terrain: Terrain, stage: number, baseAlive: boolean): void {
    this.clear();
    this.time = 0;
    this.group.add(this.base.group);

    this.brickSlots.clear();
    this.steelSlots.clear();

    const groundMat = new THREE.MeshStandardMaterial({
      map: groundTexture(),
      normalMap: groundNormalTexture(),
      normalScale: new THREE.Vector2(0.55, 0.55),
      roughnessMap: groundRoughnessTexture(),
      color: 0xffffff,
      roughness: 1,
      metalness: 0.04,
      envMapIntensity: 0.5,
    });
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(FIELD, FIELD), groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(FIELD / 2, 0, FIELD / 2);
    ground.receiveShadow = true;
    ground.name = 'ground';
    this.group.add(ground);
    this.groundMat = groundMat;
    this.track(groundMat, ground.geometry);

    const apronMat = new THREE.MeshStandardMaterial({
      map: asphaltTexture(),
      color: 0x7d838a,
      roughness: 0.9,
      metalness: 0.1,
    });
    const apron = new THREE.Mesh(new THREE.PlaneGeometry(46, 46), apronMat);
    apron.rotation.x = -Math.PI / 2;
    apron.position.set(FIELD / 2, -0.035, FIELD / 2);
    apron.receiveShadow = true;
    this.group.add(apron);
    this.track(apronMat, apron.geometry);

    this.buildBorder();
    this.buildSpawnPads();
    this.buildTerrainCells(terrain, stage);
    this.buildBrickAndSteel(terrain);
    this.buildSetDressing();

    this.base.group.visible = true;
    if (!baseAlive) this.base.setDestroyed();
    else this.base.reset();

    this.group.add(this.base.group);
  }

  private buildBorder(): void {
    const wallMat = new THREE.MeshStandardMaterial({
      map: concreteTexture(),
      color: 0x767d86,
      roughness: 0.7,
      metalness: 0.3,
    });
    const glowMat = new THREE.MeshStandardMaterial({
      color: 0x16323f,
      emissive: new THREE.Color(0x7cc4e6),
      emissiveIntensity: 0.55,
      roughness: 0.34,
      metalness: 0.2,
    });
    this.track(wallMat, glowMat);

    const thickness = 0.34;
    const height = 0.42;
    const span = FIELD + thickness * 2;
    const positions: Array<[number, number, number, number, number, number]> = [
      [FIELD / 2, height / 2, -thickness / 2, span, height, thickness],
      [FIELD / 2, height / 2, FIELD + thickness / 2, span, height, thickness],
      [-thickness / 2, height / 2, FIELD / 2, thickness, height, span],
      [FIELD + thickness / 2, height / 2, FIELD / 2, thickness, height, span],
    ];
    for (const [x, y, z, w, h, d] of positions) {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat);
      wall.position.set(x, y, z);
      wall.castShadow = true;
      wall.receiveShadow = true;
      this.group.add(wall);
      this.track(wall.geometry);
    }

    // Segmented light dashes along the wall tops (kept subtle so they read as markers, not neon).
    const dashSpacing = 0.86;
    const dashCount = Math.floor((FIELD - 0.9) / dashSpacing) + 1;
    const dashGeo = new THREE.BoxGeometry(0.46, 0.022, 0.075);
    const dashes = new THREE.InstancedMesh(dashGeo, glowMat, dashCount * 4);
    const dummy = new THREE.Object3D();
    const start = FIELD / 2 - ((dashCount - 1) * dashSpacing) / 2;
    let index = 0;
    for (let i = 0; i < dashCount; i++) {
      const along = start + i * dashSpacing;
      for (const side of [0, 1]) {
        dummy.position.set(along, height + 0.012, side === 0 ? -thickness / 2 : FIELD + thickness / 2);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        dashes.setMatrixAt(index++, dummy.matrix);
        dummy.position.set(side === 0 ? -thickness / 2 : FIELD + thickness / 2, height + 0.012, along);
        dummy.rotation.set(0, Math.PI / 2, 0);
        dummy.updateMatrix();
        dashes.setMatrixAt(index++, dummy.matrix);
      }
    }
    dashes.instanceMatrix.needsUpdate = true;
    this.group.add(dashes);
    this.track(dashGeo);

    // Corner pylons.
    const pylonMat = new THREE.MeshStandardMaterial({ color: 0x32363c, metalness: 0.7, roughness: 0.4 });
    this.track(pylonMat);
    for (const [x, z] of [
      [-0.4, -0.4],
      [FIELD + 0.4, -0.4],
      [-0.4, FIELD + 0.4],
      [FIELD + 0.4, FIELD + 0.4],
    ]) {
      const pylon = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 0.9, 8), pylonMat);
      pylon.position.set(x, 0.45, z);
      pylon.castShadow = true;
      this.group.add(pylon);
      this.track(pylon.geometry);
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.065, 10, 8), glowMat);
      cap.position.set(x, 0.94, z);
      this.group.add(cap);
      this.track(cap.geometry);
    }
  }

  private buildSpawnPads(): void {
    const outerGeo = new THREE.RingGeometry(0.32, 0.4, 24);
    outerGeo.rotateX(-Math.PI / 2);
    const innerGeo = new THREE.RingGeometry(0.14, 0.19, 4);
    innerGeo.rotateX(-Math.PI / 2);
    const padMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.38,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.track(outerGeo, innerGeo, padMat);

    const total = ENEMY_SPAWNS.length + PLAYER_SPAWNS.length;
    const outer = new THREE.InstancedMesh(outerGeo, padMat, total);
    const inner = new THREE.InstancedMesh(innerGeo, padMat, total);
    outer.renderOrder = 1;
    inner.renderOrder = 1;

    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    let idx = 0;
    for (const spawn of ENEMY_SPAWNS) {
      dummy.position.set(spawn.x, 0.013, spawn.z);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      outer.setMatrixAt(idx, dummy.matrix);
      dummy.rotation.set(0, Math.PI / 4, 0);
      dummy.updateMatrix();
      inner.setMatrixAt(idx, dummy.matrix);
      color.setHex(0xff6b47);
      outer.setColorAt(idx, color);
      inner.setColorAt(idx, color);
      idx++;
    }
    for (let p = 0; p < PLAYER_SPAWNS.length; p++) {
      const spawn = PLAYER_SPAWNS[p];
      dummy.position.set(spawn.x, 0.013, spawn.z);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      outer.setMatrixAt(idx, dummy.matrix);
      dummy.rotation.set(0, Math.PI / 4, 0);
      dummy.updateMatrix();
      inner.setMatrixAt(idx, dummy.matrix);
      color.setHex(p === 0 ? 0xffc055 : 0x6fe0c0);
      outer.setColorAt(idx, color);
      inner.setColorAt(idx, color);
      idx++;
    }
    outer.instanceMatrix.needsUpdate = true;
    inner.instanceMatrix.needsUpdate = true;
    if (outer.instanceColor) outer.instanceColor.needsUpdate = true;
    if (inner.instanceColor) inner.instanceColor.needsUpdate = true;
    this.group.add(outer, inner);
  }

  /**
   * Dresses the apron around the playfield so the arena reads as a place rather
   * than a board floating in darkness: sandbags, crates, barrels, floodlights and
   * a distant ruined skyline. Nothing here collides with gameplay.
   */
  private buildSetDressing(): void {
    const rng = (i: number) => hash(i, 7, 13);

    // --- Sandbag emplacements hugging the outer wall ---
    const bagGeo = new RoundedBoxGeometry(0.42, 0.15, 0.26, 2, 0.05);
    const bagMat = new THREE.MeshStandardMaterial({
      color: 0x8a7a56,
      roughness: 0.96,
      metalness: 0.02,
      map: concreteTexture(),
    });
    this.track(bagGeo, bagMat);
    const bagCount = 150;
    const bags = new THREE.InstancedMesh(bagGeo, bagMat, bagCount);
    bags.castShadow = true;
    bags.receiveShadow = true;
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    let bagIndex = 0;

    const ring: Array<{ x: number; z: number; nx: number; nz: number; rot: number }> = [];
    const inset = 1.15;
    for (let i = 0; i < 8; i++) {
      const t = (i + 0.5) / 8;
      const along = -0.6 + t * (FIELD + 1.2);
      ring.push({ x: -inset, z: along, nx: -1, nz: 0, rot: Math.PI / 2 });
      ring.push({ x: FIELD + inset, z: along, nx: 1, nz: 0, rot: Math.PI / 2 });
      ring.push({ x: along, z: -inset, nx: 0, nz: -1, rot: 0 });
      ring.push({ x: along, z: FIELD + inset, nx: 0, nz: 1, rot: 0 });
    }

    for (const [i, spot] of ring.entries()) {
      const rows = 3;
      for (let row = 0; row < rows; row++) {
        if (bagIndex >= bagCount) break;
        const along = (rng(i * 9 + row) - 0.5) * 0.3;
        const outward = row * 0.26 + (rng(i * 11 + row) - 0.5) * 0.07;
        dummy.position.set(
          spot.x + spot.nx * outward + (spot.nx !== 0 ? 0 : along),
          0.08 + row * 0.135,
          spot.z + spot.nz * outward + (spot.nz !== 0 ? 0 : along),
        );
        dummy.rotation.set(0, spot.rot + (rng(i * 13 + row) - 0.5) * 0.18, 0);
        dummy.scale.set(1 + (rng(i * 17 + row) - 0.5) * 0.12, 1, 1);
        dummy.updateMatrix();
        bags.setMatrixAt(bagIndex, dummy.matrix);
        const tint = 0.72 + rng(i * 19 + row) * 0.4;
        color.setRGB(tint, tint * 0.95, tint * 0.8);
        bags.setColorAt(bagIndex, color);
        bagIndex++;
      }
    }
    for (let i = bagIndex; i < bagCount; i++) this.hideInstance(bags, i);
    bags.instanceMatrix.needsUpdate = true;
    if (bags.instanceColor) bags.instanceColor.needsUpdate = true;
    this.group.add(bags);

    // --- Supply crates ---
    const crateGeo = new RoundedBoxGeometry(0.52, 0.52, 0.52, 2, 0.03);
    const crateMat = new THREE.MeshStandardMaterial({
      color: 0x6a5334,
      roughness: 0.88,
      metalness: 0.03,
      map: concreteTexture(),
    });
    this.track(crateGeo, crateMat);
    const crateCount = 18;
    const crates = new THREE.InstancedMesh(crateGeo, crateMat, crateCount);
    crates.castShadow = true;
    crates.receiveShadow = true;
    for (let i = 0; i < crateCount; i++) {
      const side = i % 4;
      const t = rng(i * 3 + 2);
      const out = 1.9 + rng(i * 3 + 3) * 2.6;
      const along = -0.4 + t * (FIELD + 0.8);
      const x = side === 0 ? -out : side === 1 ? FIELD + out : along;
      const z = side === 2 ? -out : side === 3 ? FIELD + out : along;
      const stack = i % 5 === 0 ? 1 : 0;
      dummy.position.set(x, 0.26 + stack * 0.53, z);
      dummy.rotation.set(0, rng(i * 7) * Math.PI * 0.5, 0);
      dummy.scale.setScalar(0.85 + rng(i * 11) * 0.4);
      dummy.updateMatrix();
      crates.setMatrixAt(i, dummy.matrix);
      const tint = 0.7 + rng(i * 13) * 0.45;
      color.setRGB(tint, tint * 0.92, tint * 0.78);
      crates.setColorAt(i, color);
    }
    crates.instanceMatrix.needsUpdate = true;
    if (crates.instanceColor) crates.instanceColor.needsUpdate = true;
    this.group.add(crates);

    // --- Fuel barrels ---
    const barrelGeo = new THREE.CylinderGeometry(0.17, 0.17, 0.46, 12);
    const barrelMat = new THREE.MeshStandardMaterial({
      color: 0x4d5158,
      metalness: 0.65,
      roughness: 0.45,
      map: metalTexture(),
    });
    this.track(barrelGeo, barrelMat);
    const barrelCount = 12;
    const barrels = new THREE.InstancedMesh(barrelGeo, barrelMat, barrelCount);
    barrels.castShadow = true;
    barrels.receiveShadow = true;
    for (let i = 0; i < barrelCount; i++) {
      const side = i % 4;
      const t = rng(i * 5 + 31);
      const out = 1.5 + rng(i * 5 + 32) * 2.2;
      const along = -0.2 + t * (FIELD + 0.4);
      const x = side === 0 ? -out : side === 1 ? FIELD + out : along;
      const z = side === 2 ? -out : side === 3 ? FIELD + out : along;
      dummy.position.set(x, 0.23, z);
      dummy.rotation.set(0, rng(i * 9) * 6.28, 0);
      dummy.scale.setScalar(0.9 + rng(i * 17) * 0.3);
      dummy.updateMatrix();
      barrels.setMatrixAt(i, dummy.matrix);
      const hue = rng(i * 21);
      color.setRGB(hue > 0.6 ? 0.55 : 0.3, hue > 0.6 ? 0.28 : 0.32, hue > 0.6 ? 0.16 : 0.3);
      barrels.setColorAt(i, color);
    }
    barrels.instanceMatrix.needsUpdate = true;
    if (barrels.instanceColor) barrels.instanceColor.needsUpdate = true;
    this.group.add(barrels);

    // --- Floodlight masts ---
    const mastMat = new THREE.MeshStandardMaterial({ color: 0x2b2f34, metalness: 0.7, roughness: 0.5 });
    const lampMat = new THREE.MeshStandardMaterial({
      color: 0xfff0cf,
      emissive: new THREE.Color(0xffd9a0),
      emissiveIntensity: 2.6,
      roughness: 0.3,
    });
    this.track(mastMat, lampMat);
    const mastGeo = new THREE.CylinderGeometry(0.055, 0.085, 2.6, 8);
    const armGeo = new THREE.BoxGeometry(0.44, 0.07, 0.07);
    const lampGeo = new THREE.BoxGeometry(0.26, 0.1, 0.16);
    const beamConeGeo = new THREE.CylinderGeometry(0.12, 1.8, 3.2, 16, 1, true);
    beamConeGeo.translate(0, -1.6, 0);
    const beamConeMat = new THREE.ShaderMaterial({
      uniforms: {},
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vView = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          float edgeFade = pow(abs(dot(normalize(vNormal), normalize(vView))), 2.2);
          float fade = pow(vUv.y, 1.6) * edgeFade * 0.14;
          gl_FragColor = vec4(1.0, 0.86, 0.62, fade);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    this.track(mastGeo, armGeo, lampGeo, beamConeGeo, beamConeMat);

    for (const [x, z, dir] of [
      [-2.6, -2.6, 1],
      [FIELD + 2.6, -2.6, -1],
      [-2.6, FIELD + 2.6, 1],
      [FIELD + 2.6, FIELD + 2.6, -1],
    ] as const) {
      const mast = new THREE.Mesh(mastGeo, mastMat);
      mast.position.set(x, 1.3, z);
      mast.castShadow = true;
      this.group.add(mast);

      const arm = new THREE.Mesh(armGeo, mastMat);
      arm.position.set(x + dir * 0.2, 2.5, z);
      this.group.add(arm);

      const lamp = new THREE.Mesh(lampGeo, lampMat);
      lamp.position.set(x + dir * 0.38, 2.46, z);
      this.group.add(lamp);

      const beam = new THREE.Mesh(beamConeGeo, beamConeMat);
      beam.position.set(x + dir * 0.38, 2.42, z);
      beam.rotation.z = dir * 0.38;
      beam.rotation.x = z < 0 ? -0.36 : 0.36;
      this.group.add(beam);

      const light = new THREE.PointLight(0xffd6a0, 6.2, 12.5, 2);
      light.position.set(x + dir * 0.4, 2.4, z);
      this.group.add(light);
    }

    // --- Sweeping sky searchlights & blinking perimeter aviation beacons ---
    const sweepGeo = new THREE.CylinderGeometry(0.18, 2.2, 15.0, 14, 1, true);
    sweepGeo.translate(0, 7.5, 0);
    const sweepMat = new THREE.ShaderMaterial({
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vView = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          float edgeFade = pow(abs(dot(normalize(vNormal), normalize(vView))), 2.4);
          float lenFade = (1.0 - vUv.y) * smoothstep(0.0, 0.08, vUv.y);
          gl_FragColor = vec4(0.65, 0.84, 1.0, edgeFade * lenFade * 0.11);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const beaconGeo = new THREE.SphereGeometry(0.075, 10, 8);
    this.track(sweepGeo, sweepMat, beaconGeo);

    for (const [sx, sz] of [
      [-3.8, -3.6],
      [FIELD + 3.8, -3.6],
    ] as const) {
      const pivot = new THREE.Group();
      pivot.position.set(sx, 0.2, sz);
      const beam = new THREE.Mesh(sweepGeo, sweepMat);
      beam.rotation.z = sx < 0 ? -0.35 : 0.35;
      beam.rotation.x = 0.25;
      pivot.add(beam);
      this.group.add(pivot);
      this.searchlights.push(pivot);

      const beaconMat = new THREE.MeshStandardMaterial({
        color: 0xff3b24,
        emissive: new THREE.Color(0xff3b24),
        emissiveIntensity: 2.2,
        roughness: 0.2,
      });
      this.track(beaconMat);
      this.beacons.push(beaconMat);
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.set(sx, 2.7, sz);
      this.group.add(beacon);
    }

    // --- Distant ruined skyline for depth ---
    const surroundGeo = new THREE.PlaneGeometry(150, 150);
    const surroundMat = new THREE.MeshStandardMaterial({
      color: 0x0b0e12,
      roughness: 0.98,
      metalness: 0,
    });
    this.track(surroundGeo, surroundMat);
    const surround = new THREE.Mesh(surroundGeo, surroundMat);
    surround.rotation.x = -Math.PI / 2;
    surround.position.set(FIELD / 2, -0.09, FIELD / 2);
    surround.receiveShadow = true;
    this.group.add(surround);

    const cityTex = cityWindowTexture();
    const ruinGeo = new THREE.BoxGeometry(1, 1, 1);
    const ruinMat = new THREE.MeshStandardMaterial({
      map: cityTex,
      emissiveMap: cityTex,
      emissive: new THREE.Color(0xffcfa0),
      emissiveIntensity: 0.72,
      color: 0x3b4859,
      roughness: 0.85,
      metalness: 0.1,
    });
    this.track(ruinGeo, ruinMat);
    const ruinCount = 44;
    const ruins = new THREE.InstancedMesh(ruinGeo, ruinMat, ruinCount);
    for (let i = 0; i < ruinCount; i++) {
      const angle = (i / ruinCount) * Math.PI * 2 + rng(i * 3) * 0.12;
      const radius = 26 + rng(i * 3 + 1) * 18;
      const height = 2.2 + rng(i * 3 + 2) * 7;
      dummy.position.set(
        FIELD / 2 + Math.cos(angle) * radius,
        height / 2 - 0.7,
        FIELD / 2 + Math.sin(angle) * radius,
      );
      dummy.rotation.set(0, rng(i * 5) * 3.14, 0);
      dummy.scale.set(1.6 + rng(i * 7) * 2.8, height, 1.6 + rng(i * 11) * 2.8);
      dummy.updateMatrix();
      ruins.setMatrixAt(i, dummy.matrix);
    }
    ruins.instanceMatrix.needsUpdate = true;
    this.group.add(ruins);
  }

  private buildTerrainCells(terrain: Terrain, stage: number): void {
    const iceSpots: Array<{ x: number; z: number }> = [];
    const waterSpots: Array<{ x: number; z: number }> = [];
    const forestSpots: Array<{ x: number; z: number }> = [];
    const treeSpots: Array<{ x: number; z: number; seed: number; kind: number }> = [];

    for (let z = 0; z < GRID; z++) {
      for (let x = 0; x < GRID; x++) {
        const cell = terrain.get(x, z);
        if (!cell) continue;
        const cx = x + 0.5;
        const cz = z + 0.5;
        if (cell.kind === 'ice') {
          iceSpots.push({ x: cx, z: cz });
        } else if (cell.kind === 'water') {
          waterSpots.push({ x: cx, z: cz });
        } else if (cell.kind === 'forest') {
          forestSpots.push({ x: cx, z: cz });
          const count = 2 + Math.floor(hash(x, z, stage) * 3);
          for (let i = 0; i < count; i++) {
            treeSpots.push({
              x: cx + (hash(x * 3 + i, z, stage + 1) - 0.5) * 0.72,
              z: cz + (hash(x, z * 3 + i, stage + 2) - 0.5) * 0.72,
              seed: hash(x + i, z, stage + 3),
              kind: hash(x, z + i, stage + 4),
            });
          }
        }
      }
    }

    const dummy = new THREE.Object3D();

    if (iceSpots.length) {
      const iceMat = new THREE.MeshPhysicalMaterial({
        map: iceTexture(),
        color: 0xffffff,
        roughness: 0.06,
        metalness: 0.06,
        clearcoat: 1,
        clearcoatRoughness: 0.04,
        transparent: true,
        opacity: 0.96,
        envMapIntensity: 1.4,
        side: THREE.DoubleSide,
      });
      const iceGeo = new THREE.PlaneGeometry(0.985, 0.985);
      iceGeo.rotateX(-Math.PI / 2);
      const iceMesh = new THREE.InstancedMesh(iceGeo, iceMat, iceSpots.length);
      iceMesh.receiveShadow = true;
      for (let i = 0; i < iceSpots.length; i++) {
        dummy.position.set(iceSpots[i].x, 0.012, iceSpots[i].z);
        dummy.rotation.set(0, 0, 0);
        dummy.scale.setScalar(1);
        dummy.updateMatrix();
        iceMesh.setMatrixAt(i, dummy.matrix);
      }
      iceMesh.instanceMatrix.needsUpdate = true;
      this.group.add(iceMesh);
      this.track(iceMat, iceGeo);
    }

    if (waterSpots.length) {
      const waterMat = new THREE.ShaderMaterial({
        uniforms: {
          uTime: this.waterUniform,
        },
        vertexShader: /* glsl */ `
          varying vec2 vUv;
          varying vec3 vWorldPos;
          void main() {
            vUv = uv;
            vec4 wp = vec4(position, 1.0);
            #ifdef USE_INSTANCING
              wp = instanceMatrix * wp;
            #endif
            vWorldPos = (modelMatrix * wp).xyz;
            gl_Position = projectionMatrix * viewMatrix * modelMatrix * wp;
          }
        `,
        fragmentShader: /* glsl */ `
          uniform float uTime;
          varying vec2 vUv;
          varying vec3 vWorldPos;
          void main() {
            vec2 p = vWorldPos.xz;
            float w1 = sin(p.x * 5.2 + uTime * 1.9 + sin(p.y * 3.1 - uTime * 1.1));
            float w2 = cos(p.y * 5.6 - uTime * 1.5 + cos(p.x * 3.7 + uTime * 1.3));
            float caustic = smoothstep(0.35, 0.98, (w1 + w2) * 0.25 + 0.5);
            float sparkle = pow(max(0.0, (w1 * w2) * 0.5 + 0.5), 6.0);
            float edge = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));
            float foam = smoothstep(0.41, 0.495, edge);
            vec3 deep = vec3(0.025, 0.14, 0.21);
            vec3 crest = vec3(0.16, 0.48, 0.62);
            vec3 col = mix(deep, crest, caustic * 0.72);
            col += vec3(0.45, 0.85, 1.0) * (sparkle * 0.45 + foam * 0.28);
            gl_FragColor = vec4(col, 0.92);
          }
        `,
        transparent: true,
        side: THREE.DoubleSide,
      });
      const waterGeo = new THREE.PlaneGeometry(0.985, 0.985);
      waterGeo.rotateX(-Math.PI / 2);
      const waterBedMat = new THREE.MeshStandardMaterial({ color: 0x04141b, roughness: 0.8, metalness: 0.1 });
      const waterBedGeo = new THREE.PlaneGeometry(0.98, 0.98);
      waterBedGeo.rotateX(-Math.PI / 2);

      const bedMesh = new THREE.InstancedMesh(waterBedGeo, waterBedMat, waterSpots.length);
      const surfaceMesh = new THREE.InstancedMesh(waterGeo, waterMat, waterSpots.length);
      for (let i = 0; i < waterSpots.length; i++) {
        dummy.rotation.set(0, 0, 0);
        dummy.scale.setScalar(1);
        dummy.position.set(waterSpots[i].x, 0.004, waterSpots[i].z);
        dummy.updateMatrix();
        bedMesh.setMatrixAt(i, dummy.matrix);
        dummy.position.set(waterSpots[i].x, 0.055, waterSpots[i].z);
        dummy.updateMatrix();
        surfaceMesh.setMatrixAt(i, dummy.matrix);
      }
      bedMesh.instanceMatrix.needsUpdate = true;
      surfaceMesh.instanceMatrix.needsUpdate = true;
      this.group.add(bedMesh, surfaceMesh);
      this.track(waterMat, waterGeo, waterBedMat, waterBedGeo);
    }

    if (forestSpots.length) {
      const forestMat = new THREE.MeshStandardMaterial({
        map: forestFloorTexture(),
        color: 0x9fae8f,
        roughness: 0.95,
        metalness: 0,
      });
      const forestGeo = new THREE.PlaneGeometry(0.995, 0.995);
      forestGeo.rotateX(-Math.PI / 2);
      const floorMesh = new THREE.InstancedMesh(forestGeo, forestMat, forestSpots.length);
      floorMesh.receiveShadow = true;
      for (let i = 0; i < forestSpots.length; i++) {
        dummy.position.set(forestSpots[i].x, 0.008, forestSpots[i].z);
        dummy.rotation.set(0, 0, 0);
        dummy.scale.setScalar(1);
        dummy.updateMatrix();
        floorMesh.setMatrixAt(i, dummy.matrix);
      }
      floorMesh.instanceMatrix.needsUpdate = true;
      this.group.add(floorMesh);
      this.track(forestMat, forestGeo);
    }

    if (treeSpots.length) this.buildTrees(treeSpots);
  }

  private buildTrees(spots: Array<{ x: number; z: number; seed: number; kind: number }>): void {
    const trunkGeo = new THREE.CylinderGeometry(0.035, 0.055, 0.3, 6);
    const coneGeo = new THREE.ConeGeometry(0.26, 0.5, 7);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3a2a1c, roughness: 0.9 });
    const leafMat = new THREE.MeshStandardMaterial({
      color: 0x4a7a3a,
      roughness: 0.72,
      metalness: 0.05,
      flatShading: true,
    });
    leafMat.customProgramCacheKey = () => 'forest-wind';
    leafMat.onBeforeCompile = (shader) => {
      shader.uniforms.uWindTime = this.windUniform;
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nuniform float uWindTime;')
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
          float tipWeight = clamp((position.y + 0.25) * 2.0, 0.0, 1.0);
          #ifdef USE_INSTANCING
            float treePhase = instanceMatrix[3][0] * 1.3 + instanceMatrix[3][2] * 0.9;
          #else
            float treePhase = 0.0;
          #endif
          transformed.x += sin(uWindTime * 1.9 + treePhase) * 0.032 * tipWeight;
          transformed.z += cos(uWindTime * 1.5 + treePhase * 1.1) * 0.024 * tipWeight;`,
        );
    };
    this.track(trunkMat, leafMat);

    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, spots.length);
    const leaves = new THREE.InstancedMesh(coneGeo, leafMat, spots.length * 2);
    trunks.castShadow = true;
    trunks.receiveShadow = true;
    leaves.castShadow = true;
    leaves.receiveShadow = true;

    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    spots.forEach((spot, i) => {
      const scale = 0.75 + spot.seed * 0.7;
      dummy.position.set(spot.x, 0.15 * scale, spot.z);
      dummy.rotation.set(0, spot.seed * 6.28, 0);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      trunks.setMatrixAt(i, dummy.matrix);

      dummy.position.set(spot.x, (0.4 + 0.2) * scale, spot.z);
      dummy.rotation.y = spot.seed * 3;
      dummy.scale.set(scale, scale * (0.9 + spot.kind * 0.5), scale);
      dummy.updateMatrix();
      leaves.setMatrixAt(i * 2, dummy.matrix);

      dummy.position.set(spot.x, (0.66 + 0.15) * scale, spot.z);
      dummy.rotation.y = spot.kind * 4;
      dummy.scale.set(scale * 0.72, scale * 0.8, scale * 0.72);
      dummy.updateMatrix();
      leaves.setMatrixAt(i * 2 + 1, dummy.matrix);

      const tint = 0.75 + spot.kind * 0.5;
      color.setRGB(0.24 * tint, 0.46 * tint, 0.2 * tint);
      leaves.setColorAt(i * 2, color);
      leaves.setColorAt(i * 2 + 1, color);
    });
    trunks.instanceMatrix.needsUpdate = true;
    leaves.instanceMatrix.needsUpdate = true;
    if (leaves.instanceColor) leaves.instanceColor.needsUpdate = true;
    this.group.add(trunks, leaves);
    this.track(trunkGeo, coneGeo);
  }

  private buildBrickAndSteel(terrain: Terrain): void {
    const brickGeo = new RoundedBoxGeometry(0.47, 0.52, 0.47, 2, 0.035);
    const brickMat = new THREE.MeshStandardMaterial({
      map: brickTexture(),
      normalMap: brickNormalTexture(),
      normalScale: new THREE.Vector2(0.7, 0.7),
      roughness: 0.9,
      metalness: 0.04,
      envMapIntensity: 0.5,
    });
    this.wallDisposables.push(brickMat, brickGeo);
    const maxBricks = GRID * GRID * 4;
    const bricks = new THREE.InstancedMesh(brickGeo, brickMat, maxBricks);
    bricks.castShadow = true;
    bricks.receiveShadow = true;
    bricks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    const steelGeo = new RoundedBoxGeometry(0.475, 0.48, 0.475, 3, 0.045);
    const steelMat = new THREE.MeshStandardMaterial({
      map: metalTexture(),
      normalMap: steelNormalTexture(),
      normalScale: new THREE.Vector2(0.85, 0.85),
      color: 0xb9c2ca,
      metalness: 0.72,
      roughness: 0.34,
      envMapIntensity: 1.9,
    });
    this.wallDisposables.push(steelMat, steelGeo);
    const steels = new THREE.InstancedMesh(steelGeo, steelMat, maxBricks);
    steels.castShadow = true;
    steels.receiveShadow = true;
    steels.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    const color = new THREE.Color();
    let usedBricks = 0;
    let usedSteel = 0;

    for (let z = 0; z < GRID; z++) {
      for (let x = 0; x < GRID; x++) {
        const cell = terrain.get(x, z);
        if (!cell) continue;
        if (cell.kind === 'brick') {
          const slots: number[] = [];
          for (let q = 0; q < 4; q++) {
            const idx = usedBricks++;
            slots.push(idx);
            if (cell.mask & (1 << q)) {
              const spin = ((x * 31 + z * 17 + q * 7) % 2) * Math.PI;
              this.setQuadMatrix(bricks, idx, x, z, q, 0.31, spin);
              const tint = 0.74 + hash(x * 7 + q, z * 3, 5) * 0.34;
              color.setRGB(tint, tint * (0.93 + hash(x, z + q, 2) * 0.06), tint * 0.88);
              bricks.setColorAt(idx, color);
            } else {
              this.hideInstance(bricks, idx);
            }
          }
          this.brickSlots.set(z * GRID + x, slots);
        } else if (cell.kind === 'steel') {
          const slots: number[] = [];
          for (let q = 0; q < 4; q++) {
            const idx = usedSteel++;
            slots.push(idx);
            if (cell.mask & (1 << q)) {
              this.setQuadMatrix(steels, idx, x, z, q, 0.28);
            } else {
              this.hideInstance(steels, idx);
            }
          }
          this.steelSlots.set(z * GRID + x, slots);
        }
      }
    }

    // Park unused instances far below the arena.
    for (let i = usedBricks; i < maxBricks; i++) this.hideInstance(bricks, i);
    for (let i = usedSteel; i < maxBricks; i++) this.hideInstance(steels, i);

    bricks.instanceMatrix.needsUpdate = true;
    steels.instanceMatrix.needsUpdate = true;
    if (bricks.instanceColor) bricks.instanceColor.needsUpdate = true;
    this.brickMesh = bricks;
    this.steelMesh = steels;
    this.group.add(bricks, steels);
  }

  private setQuadMatrix(
    mesh: THREE.InstancedMesh,
    index: number,
    cellX: number,
    cellZ: number,
    quad: number,
    y: number,
    rotationY = 0,
  ): void {
    const offset = QUAD_OFFSETS[quad];
    this.dummy.position.set(cellX + 0.5 + offset.x, y, cellZ + 0.5 + offset.z);
    this.dummy.rotation.set(0, rotationY, 0);
    this.dummy.scale.setScalar(1);
    this.dummy.updateMatrix();
    mesh.setMatrixAt(index, this.dummy.matrix);
  }

  private hideInstance(mesh: THREE.InstancedMesh, index: number): void {
    this.dummy.position.set(0, -50, 0);
    this.dummy.rotation.set(0, 0, 0);
    this.dummy.scale.setScalar(0.0001);
    this.dummy.updateMatrix();
    mesh.setMatrixAt(index, this.dummy.matrix);
  }

  damageBrick(x: number, z: number, mask: number, removed: number[]): void {
    const slots = this.brickSlots.get(z * GRID + x);
    if (!slots || !this.brickMesh) return;
    for (const q of removed) {
      const idx = slots[q];
      if (idx === undefined) continue;
      this.hideInstance(this.brickMesh, idx);
    }
    if (mask === 0) this.brickSlots.delete(z * GRID + x);
    this.brickMesh.instanceMatrix.needsUpdate = true;
  }

  damageSteel(x: number, z: number, mask: number, removed: number[]): void {
    const slots = this.steelSlots.get(z * GRID + x);
    if (!slots || !this.steelMesh) return;
    for (const q of removed) {
      const idx = slots[q];
      if (idx === undefined) continue;
      this.hideInstance(this.steelMesh, idx);
    }
    if (mask === 0) this.steelSlots.delete(z * GRID + x);
    this.steelMesh.instanceMatrix.needsUpdate = true;
  }

  /** 0 = dry dust, 1 = rain-soaked and reflective. */
  setWetness(value: number): void {
    if (!this.groundMat) return;
    const wet = THREE.MathUtils.clamp(value, 0, 1);
    this.groundMat.roughness = 1 - wet * 0.58;
    this.groundMat.envMapIntensity = 0.5 + wet * 2.2;
    this.groundMat.color.setHSL(0.09, 0.06, 0.42 - wet * 0.12);
  }

  /** Rebuilds only brick and steel walls after a shovel power-up toggles fort armor. */
  refresh(terrain: Terrain, _stage: number, _baseAlive: boolean): void {
    this.clearBrickAndSteel();
    this.buildBrickAndSteel(terrain);
  }

  private clearBrickAndSteel(): void {
    this.brickMesh?.removeFromParent();
    this.steelMesh?.removeFromParent();
    for (const item of this.wallDisposables) item.dispose();
    this.wallDisposables = [];
    this.brickMesh = null;
    this.steelMesh = null;
    this.brickSlots.clear();
    this.steelSlots.clear();
  }

  update(dt: number, time: number): void {
    this.time += dt;
    this.windUniform.value = time;
    this.waterUniform.value = time;
    for (let i = 0; i < this.searchlights.length; i++) {
      this.searchlights[i].rotation.y = Math.sin(time * 0.42 + i * 2.1) * 0.55;
    }
    for (let i = 0; i < this.beacons.length; i++) {
      const pulse = Math.pow(Math.max(0, Math.sin(time * 3.2 + i * 1.4)), 4);
      this.beacons[i].emissiveIntensity = 0.25 + pulse * 3.2;
    }
    this.base.update(time);
  }

  private track(...items: Array<THREE.Material | THREE.BufferGeometry>): void {
    this.disposables.push(...items);
  }

  private clear(): void {
    this.clearBrickAndSteel();
    this.group.clear();
    for (const item of this.disposables) item.dispose();
    this.disposables = [];
    this.searchlights = [];
    this.beacons = [];
  }

  dispose(): void {
    this.clear();
    this.base.group.removeFromParent();
  }
}

function hash(x: number, z: number, seed: number): number {
  let h = x * 374761393 + z * 668265263 + seed * 2147483647;
  h = (h ^ (h >>> 13)) * 1274126177;
  h = h ^ (h >>> 16);
  return (h >>> 0) / 4294967296;
}

import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { FIELD, GRID } from '../core/constants';
import type { Terrain } from '../core/terrain';
import { BaseVisual } from './models';
import {
  asphaltTexture,
  brickTexture,
  concreteTexture,
  forestFloorTexture,
  groundTexture,
  iceTexture,
  metalTexture,
  waterNormalTexture,
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
  private waterMat: THREE.MeshPhysicalMaterial | null = null;
  private waterNormal: THREE.Texture | null = null;
  private brickMesh: THREE.InstancedMesh | null = null;
  private steelMesh: THREE.InstancedMesh | null = null;
  private brickSlots = new Map<number, number[]>();
  private steelSlots = new Map<number, number[]>();
  private dummy = new THREE.Object3D();
  private disposables: Array<THREE.Material | THREE.BufferGeometry> = [];
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
      color: 0xd6dbd6,
      roughness: 0.94,
      metalness: 0.02,
    });
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(FIELD, FIELD), groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(FIELD / 2, 0, FIELD / 2);
    ground.receiveShadow = true;
    ground.name = 'ground';
    this.group.add(ground);
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
    this.buildTerrainCells(terrain, stage);
    this.buildBrickAndSteel(terrain);

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
      color: 0x14303d,
      emissive: new THREE.Color(0x8bd4f2),
      emissiveIntensity: 0.7,
      roughness: 0.32,
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

  private buildTerrainCells(terrain: Terrain, stage: number): void {
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
    this.track(iceMat);
    const iceGeo = new THREE.PlaneGeometry(0.985, 0.985);

    const waterNormal = waterNormalTexture().clone();
    waterNormal.needsUpdate = true;
    this.waterNormal = waterNormal;
    const waterMat = new THREE.MeshPhysicalMaterial({
      color: 0x0c3442,
      roughness: 0.04,
      metalness: 0.12,
      clearcoat: 1,
      clearcoatRoughness: 0.02,
      normalMap: waterNormal,
      normalScale: new THREE.Vector2(0.55, 0.55),
      transparent: true,
      opacity: 0.9,
      envMapIntensity: 1.7,
      side: THREE.DoubleSide,
    });
    this.waterMat = waterMat;
    this.track(waterMat);
    const waterGeo = new THREE.PlaneGeometry(0.985, 0.985);

    const waterBedMat = new THREE.MeshStandardMaterial({ color: 0x04141b, roughness: 0.8, metalness: 0.1 });
    this.track(waterBedMat);
    const waterBedGeo = new THREE.PlaneGeometry(0.98, 0.98);

    const forestMat = new THREE.MeshStandardMaterial({
      map: forestFloorTexture(),
      color: 0x9fae8f,
      roughness: 0.95,
      metalness: 0,
    });
    this.track(forestMat);
    const forestGeo = new THREE.PlaneGeometry(0.995, 0.995);

    const treeSpots: Array<{ x: number; z: number; seed: number; kind: number }> = [];

    for (let z = 0; z < GRID; z++) {
      for (let x = 0; x < GRID; x++) {
        const cell = terrain.get(x, z);
        if (!cell) continue;
        const cx = x + 0.5;
        const cz = z + 0.5;
        if (cell.kind === 'ice') {
          const plane = new THREE.Mesh(iceGeo, iceMat);
          plane.rotation.x = -Math.PI / 2;
          plane.position.set(cx, 0.012, cz);
          plane.receiveShadow = true;
          this.group.add(plane);
        } else if (cell.kind === 'water') {
          const bed = new THREE.Mesh(waterBedGeo, waterBedMat);
          bed.rotation.x = -Math.PI / 2;
          bed.position.set(cx, 0.004, cz);
          this.group.add(bed);
          const surface = new THREE.Mesh(waterGeo, waterMat);
          surface.rotation.x = -Math.PI / 2;
          surface.position.set(cx, 0.055, cz);
          surface.receiveShadow = true;
          this.group.add(surface);
        } else if (cell.kind === 'forest') {
          const floor = new THREE.Mesh(forestGeo, forestMat);
          floor.rotation.x = -Math.PI / 2;
          floor.position.set(cx, 0.008, cz);
          floor.receiveShadow = true;
          this.group.add(floor);
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

    this.track(iceGeo, waterGeo, waterBedGeo, forestGeo);
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
    const brickGeo = new RoundedBoxGeometry(0.47, 0.62, 0.47, 2, 0.035);
    const brickMat = new THREE.MeshStandardMaterial({
      map: brickTexture(),
      roughness: 0.88,
      metalness: 0.04,
      envMapIntensity: 0.55,
    });
    this.track(brickMat, brickGeo);
    const maxBricks = GRID * GRID * 4;
    const bricks = new THREE.InstancedMesh(brickGeo, brickMat, maxBricks);
    bricks.castShadow = true;
    bricks.receiveShadow = true;
    bricks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    const steelGeo = new RoundedBoxGeometry(0.475, 0.56, 0.475, 3, 0.045);
    const steelMat = new THREE.MeshStandardMaterial({
      map: metalTexture(),
      color: 0xd0d7dd,
      metalness: 0.6,
      roughness: 0.38,
      envMapIntensity: 2.1,
    });
    this.track(steelMat, steelGeo);
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
              this.setQuadMatrix(bricks, idx, x, z, q, 0.31);
              const tint = 0.82 + ((x * 7 + z * 3 + q) % 7) * 0.045;
              color.setRGB(tint, tint * 0.94, tint * 0.9);
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
  ): void {
    const offset = QUAD_OFFSETS[quad];
    this.dummy.position.set(cellX + 0.5 + offset.x, y, cellZ + 0.5 + offset.z);
    this.dummy.rotation.set(0, 0, 0);
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

  /** Rebuilds static terrain after a shovel power-up turns walls to steel. */
  refresh(terrain: Terrain, stage: number, baseAlive: boolean): void {
    this.build(terrain, stage, baseAlive);
  }

  update(dt: number, time: number): void {
    this.time += dt;
    if (this.waterNormal) {
      this.waterNormal.offset.x = time * 0.04;
      this.waterNormal.offset.y = time * 0.027;
    }
    this.base.update(time);
  }

  private track(...items: Array<THREE.Material | THREE.BufferGeometry>): void {
    this.disposables.push(...items);
  }

  private clear(): void {
    this.group.clear();
    for (const item of this.disposables) item.dispose();
    this.disposables = [];
    this.brickMesh = null;
    this.steelMesh = null;
    this.waterMat = null;
    this.waterNormal = null;
    this.brickSlots.clear();
    this.steelSlots.clear();
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

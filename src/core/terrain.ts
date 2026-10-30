import { DIRS, FIELD, GRID, TANK_HALF } from './constants';
import type { Cell, Dir, Tank, TileKind } from './types';

export const QUAD_BITS: Record<string, number> = {
  NW: 1,
  NE: 2,
  SW: 4,
  SE: 8,
};

/** Bits of the block a bullet entering from `dir` strikes first. */
export function quadrantsForDir(dir: Dir): number {
  switch (dir) {
    case 0:
      return QUAD_BITS.SW | QUAD_BITS.SE; // from below
    case 1:
      return QUAD_BITS.NW | QUAD_BITS.SW; // from the west
    case 2:
      return QUAD_BITS.NW | QUAD_BITS.NE; // from above
    case 3:
      return QUAD_BITS.NE | QUAD_BITS.SE; // from the east
  }
}

export interface DamageResult {
  kind: 'brick' | 'steel' | 'base';
  mask: number;
  removed: number[];
  destroyed: boolean;
}

export class Terrain {
  readonly cells: Cell[] = [];

  constructor(rows: string[]) {
    for (let z = 0; z < GRID; z++) {
      for (let x = 0; x < GRID; x++) {
        this.cells.push({ kind: charToKind(rows[z]?.[x] ?? '.'), mask: 0 });
      }
    }
    for (const cell of this.cells) {
      if (cell.kind === 'brick' || cell.kind === 'steel') cell.mask = 15;
    }
  }

  static fromMap(rows: string[]): Terrain {
    return new Terrain(rows);
  }

  index(x: number, z: number): number {
    return z * GRID + x;
  }

  get(x: number, z: number): Cell | null {
    if (x < 0 || z < 0 || x >= GRID || z >= GRID) return null;
    return this.cells[this.index(x, z)];
  }

  set(x: number, z: number, kind: TileKind, mask = 15): void {
    const cell = this.get(x, z);
    if (!cell) return;
    cell.kind = kind;
    cell.mask = kind === 'brick' || kind === 'steel' ? mask : 0;
  }

  solidForTank(x: number, z: number): boolean {
    const cell = this.get(x, z);
    if (!cell) return true;
    return cell.kind === 'brick' || cell.kind === 'steel' || cell.kind === 'water' || cell.kind === 'base';
  }

  blocksBullet(x: number, z: number): boolean {
    const cell = this.get(x, z);
    if (!cell) return true;
    return cell.kind === 'brick' || cell.kind === 'steel' || cell.kind === 'base';
  }

  isOnIce(x: number, z: number): boolean {
    return this.get(x, z)?.kind === 'ice';
  }

  isWater(x: number, z: number): boolean {
    return this.get(x, z)?.kind === 'water';
  }

  /** Apply a bullet hit. Steel only yields to a level-3 player shell. */
  damage(x: number, z: number, dir: Dir, power: number): DamageResult | null {
    const cell = this.get(x, z);
    if (!cell) return null;
    if (cell.kind === 'base') {
      return { kind: 'base', mask: 0, removed: [], destroyed: true };
    }
    if (cell.kind !== 'brick' && cell.kind !== 'steel') return null;
    if (cell.kind === 'steel' && power < 3) return null;

    const target = quadrantsForDir(dir);
    let hit = cell.mask & target;
    if (hit === 0) {
      // Partial block: a second shell finishes whatever quarter still stands.
      hit = cell.mask;
    }
    if (hit === 0) return null;

    const removed: number[] = [];
    for (let q = 0; q < 4; q++) {
      if (hit & (1 << q)) removed.push(q);
    }
    cell.mask &= ~hit;
    const destroyed = cell.mask === 0;
    const kind = cell.kind;
    if (destroyed) cell.kind = 'empty';
    return { kind, mask: cell.mask, removed, destroyed };
  }

  findBaseWalls(): Array<{ x: number; z: number }> {
    const walls: Array<{ x: number; z: number }> = [];
    for (let z = 0; z < GRID; z++) {
      for (let x = 0; x < GRID; x++) {
        if (this.get(x, z)?.kind !== 'brick') continue;
        let touchesBase = false;
        for (let dz = -1; dz <= 1 && !touchesBase; dz++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (this.get(x + dx, z + dz)?.kind === 'base') {
              touchesBase = true;
              break;
            }
          }
        }
        if (touchesBase) walls.push({ x, z });
      }
    }
    return walls;
  }
}

function charToKind(ch: string): TileKind {
  switch (ch) {
    case 'B':
      return 'brick';
    case 'S':
      return 'steel';
    case 'W':
      return 'water';
    case 'T':
      return 'forest';
    case 'I':
      return 'ice';
    case 'E':
      return 'base';
    default:
      return 'empty';
  }
}

/** AABB-vs-tile + AABB-vs-tank collision test. */
export function tankCollides(
  terrain: Terrain,
  x: number,
  z: number,
  half: number,
  tanks: readonly Tank[],
  selfId: string,
): boolean {
  if (x - half < -0.001 || z - half < -0.001 || x + half > FIELD + 0.001 || z + half > FIELD + 0.001) {
    return true;
  }
  const x0 = Math.floor(x - half + 0.0001);
  const x1 = Math.floor(x + half - 0.0001);
  const z0 = Math.floor(z - half + 0.0001);
  const z1 = Math.floor(z + half - 0.0001);
  for (let cz = z0; cz <= z1; cz++) {
    for (let cx = x0; cx <= x1; cx++) {
      if (terrain.solidForTank(cx, cz)) return true;
    }
  }
  for (const other of tanks) {
    if (!other.alive || other.id === selfId) continue;
    if (Math.abs(other.x - x) < half + TANK_HALF - 0.001 && Math.abs(other.z - z) < half + TANK_HALF - 0.001) {
      return true;
    }
  }
  return false;
}

/** Snap a coordinate to the classic half-block lane grid. */
export function snapToLane(value: number): number {
  return Math.round(value * 2) / 2;
}

export function dirVector(dir: Dir): { x: number; z: number } {
  return DIRS[dir];
}

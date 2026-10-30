import { GRID, PLAYER_SPAWNS, ENEMY_SPAWNS } from './constants';
import { Rng } from './rng';

/**
 * Each stage is 13 x 13 blocks, matching the NES playfield.
 * B brick, S steel, W water, T forest, I ice, E eagle base, . open ground.
 * The eagle occupies a 2x2 block area at columns 6-7, rows 11-12.
 */
const FORT = [
  '.....BBBB....',
  '.....BEEB....',
  '.....BEEB....',
];

const HANDMADE: string[][] = [
  // 1 — the classic opening
  [
    '.............',
    '..B.B.B.B.B..',
    '..B.B.B.B.B..',
    '..B.B.B.B.B..',
    '.............',
    'BB.BBBBBBB.BB',
    '.............',
    '..B..SSS..B..',
    '..B..SSS..B..',
    '..BBB.B.BBB..',
    ...FORT,
  ],
  // 2 — twin keeps
  [
    '.............',
    '.BBB.....BBB.',
    '.B.B.....B.B.',
    '.B.B.BBB.B.B.',
    '.B...B.B...B.',
    '.BBB.B.B.BBB.',
    '.....B.B.....',
    '..SS.B.B.SS..',
    '..SS.B.B.SS..',
    '.....B.B.....',
    ...FORT,
  ],
  // 3 — reservoir
  [
    '.............',
    '..BBBB.BBBB..',
    '..B......B...',
    '..B.WWWW.B...',
    '....W..W.....',
    '.BB.WWWW.BB..',
    '.BB......BB..',
    '....TTTT.....',
    '..B.TTTT.B...',
    '..B......B...',
    ...FORT,
  ],
  // 4 — black ice
  [
    '.............',
    '.BBBB...BBBB.',
    '.B........B..',
    '.B.IIIIIII.B.',
    '...I.....I...',
    '.SS.I...I.SS.',
    '....IIIII....',
    '..BBB...BBB..',
    '..B.......B..',
    '..B.BB.BB.B..',
    ...FORT,
  ],
  // 5 — the gauntlet
  [
    '.............',
    '.BB..SS..BB..',
    '.BB..SS..BB..',
    '.............',
    '.SS.BBBB.SS..',
    '.SS.B..B.SS..',
    '....B..B.....',
    '.BBBBB..BBBBB',
    '.............',
    '..BB.....BB..',
    ...FORT,
  ],
  // 6 — overgrowth
  [
    '.............',
    '.TTTT...TTTT.',
    '.T..T...T..T.',
    '.T..TTTTT..T.',
    '.T.........T.',
    '.TTT.BBB.TTT.',
    '.....B.B.....',
    '.BB..B.B..BB.',
    '.BB..B.B..BB.',
    '.....B.B.....',
    ...FORT,
  ],
  // 7 — river crossing
  [
    '.............',
    '..B.WWWWW.B..',
    '..B.W...W.B..',
    '..B.W.S.W.B..',
    '....W.S.W....',
    '.BB.W.S.W.BB.',
    '.BB.WWWWW.BB.',
    '.............',
    '..SS.....SS..',
    '..SS.BBB.SS..',
    ...FORT,
  ],
  // 8 — citadel
  [
    '.............',
    '.BBBBB.BBBBB.',
    '.B...B.B...B.',
    '.B.S.B.B.S.B.',
    '.B.S.......B.',
    '.B.S.BBB.S.B.',
    '.B...B.B...B.',
    '.BBBBB.BBBBB.',
    '.............',
    '.BB.......BB.',
    ...FORT,
  ],
  // 9 — cold front
  [
    '.............',
    '.B..B...B..B.',
    '.B..B.S.B..B.',
    '.B..B.S.B..B.',
    '.B....S....B.',
    '.BBBBBB.BBBBB',
    '.............',
    '..W.W.W.W.W..',
    '..W.W.W.W.W..',
    '.............',
    ...FORT,
  ],
  // 10 — ironworks
  [
    '.............',
    '.SS.......SS.',
    '.S.BBBBBBB.S.',
    '...B.....B...',
    '.BBB.SSS.BBB.',
    '.B...S.S...B.',
    '.B.B.S.S.B.B.',
    '.B.B.....B.B.',
    '.B.BBB.BBB.B.',
    '...B.....B...',
    ...FORT,
  ],
];

export const STAGE_TITLES = [
  'DEFEND THE EAGLE',
  'TWIN KEEPS',
  'RESERVOIR',
  'BLACK ICE',
  'THE GAUNTLET',
  'OVERGROWTH',
  'RIVER CROSSING',
  'CITADEL',
  'COLD FRONT',
  'IRONWORKS',
  'UNCHARTED',
  'NO MANS LAND',
  'THE LONG WINTER',
  'DEEP WATER',
  'LAST STAND',
];

export const STAGE_COUNT = 35;

/** Returns a fresh mutable map for a stage. Handmade through 10, generated after. */
export function getStageMap(stage: number): string[] {
  const index = ((stage - 1) % HANDMADE.length + HANDMADE.length) % HANDMADE.length;
  if (stage <= HANDMADE.length) return [...HANDMADE[index]];
  return generateLevel(stage);
}

export function stageTitle(stage: number): string {
  return STAGE_TITLES[(stage - 1) % STAGE_TITLES.length];
}

/** True if a block coordinate must stay clear so tanks can spawn and leave. */
function isProtectedCell(x: number, z: number): boolean {
  // Enemy spawn columns, first two rows.
  if (z <= 1 && (x === 0 || x === 1 || x === 5 || x === 6 || x === 7 || x === 11 || x === 12)) {
    return true;
  }
  // Player spawn pads and the lane up from them.
  for (const spawn of PLAYER_SPAWNS) {
    const px = Math.floor(spawn.x);
    if (x === px && z >= 9) return true;
    if (Math.abs(x - px) <= 1 && z === 12) return true;
  }
  return false;
}

/** Symmetric, seeded battlefield for stages beyond the handmade set. */
export function generateLevel(stage: number): string[] {
  const rng = new Rng(stage * 2654435761 + 17);
  const grid: string[][] = Array.from({ length: GRID }, () => Array.from({ length: GRID }, () => '.'));

  // Base fortress is sacred.
  FORT.forEach((row, rz) => {
    for (let x = 0; x < GRID; x++) {
      if (row[x] !== '.') grid[10 + rz][x] = row[x];
    }
  });

  const kinds = ['B', 'B', 'B', 'B', 'S', 'W', 'T', 'I'];
  const density = Math.min(0.5, 0.3 + (stage % 9) * 0.02);

  for (let z = 0; z <= 9; z++) {
    for (let x = 0; x <= 6; x++) {
      if (isProtectedCell(x, z)) continue;
      // Keep the center lane breathable.
      if (x === 6 && z <= 2) continue;
      if (rng.chance(density)) {
        const kind = rng.chance(0.55) ? 'B' : rng.pick(kinds);
        grid[z][x] = kind;
        const mx = 12 - x;
        if (!isProtectedCell(mx, z)) grid[z][mx] = kind;
      }
    }
  }

  // Deliberate steel anchors and water pools so generated stages still read.
  if (stage % 3 === 0) {
    for (const [x, z] of [[2, 4], [10, 4], [6, 6]] as const) {
      if (!isProtectedCell(x, z)) grid[z][x] = 'S';
    }
  }
  if (stage % 4 === 0) {
    for (let x = 4; x <= 8; x++) {
      if (!isProtectedCell(x, 6)) grid[6][x] = 'W';
    }
    grid[5][5] = 'W';
    grid[5][7] = 'W';
  }
  if (stage % 5 === 0) {
    for (let x = 0; x <= 2; x++) {
      for (let z = 8; z <= 9; z++) {
        if (!isProtectedCell(x, z)) grid[z][x] = 'T';
      }
    }
  }

  // Ensure the eagle approach isn't fully sealed by accident.
  grid[10][5] = 'B';
  grid[10][8] = 'B';

  return grid.map((row) => row.join(''));
}

/** Map sanity check used by tests: dimensions, base, spawn clearance. */
export function validateMap(rows: string[]): string[] {
  const errors: string[] = [];
  if (rows.length !== GRID) errors.push(`expected ${GRID} rows, got ${rows.length}`);
  rows.forEach((row, z) => {
    if (row.length !== GRID) errors.push(`row ${z} has ${row.length} cells`);
  });
  let base = 0;
  for (let z = 0; z < Math.min(GRID, rows.length); z++) {
    for (let x = 0; x < Math.min(GRID, rows[z].length); x++) {
      if (rows[z][x] === 'E') base++;
    }
  }
  if (base !== 4) errors.push(`expected 4 eagle blocks, got ${base}`);
  for (const spawn of ENEMY_SPAWNS) {
    const x = Math.floor(spawn.x);
    const z = Math.floor(spawn.z);
    if (rows[z]?.[x] && rows[z][x] !== '.') errors.push(`enemy spawn ${x},${z} blocked`);
  }
  for (const spawn of PLAYER_SPAWNS) {
    const x = Math.floor(spawn.x);
    const z = Math.floor(spawn.z);
    if (rows[z]?.[x] && rows[z][x] !== '.') errors.push(`player spawn ${x},${z} blocked`);
  }
  return errors;
}

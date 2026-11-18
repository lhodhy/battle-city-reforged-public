/** Battle City game logic is authored in classic NES playfield units. */
export const GRID = 13;
export const FIELD = GRID;
export const TILE = 1;
export const HALF = 0.5;
export const TANK_SIZE = 0.78;
export const TANK_HALF = TANK_SIZE / 2;
export const BULLET_RADIUS = 0.055;

export const DIRS = [
  { x: 0, z: -1 },
  { x: 1, z: 0 },
  { x: 0, z: 1 },
  { x: -1, z: 0 },
] as const;

export const BASE_CENTER = { x: 7, z: 12 };
export const PLAYER_SPAWNS = [
  { x: 3.5, z: 12.5 },
  { x: 9.5, z: 12.5 },
];
export const ENEMY_SPAWNS = [
  { x: 0.5, z: 0.5 },
  { x: 6.5, z: 0.5 },
  { x: 12.5, z: 0.5 },
];

export const PLAYER_SPEED = 2.18;
export const PLAYER_BULLET_SPEED = 11.5;
export const PLAYER_BULLET_FAST = 15.5;
export const PLAYER_RELOAD = 0.44;
export const PLAYER_RELOAD_STAR2 = 0.35;
export const PLAYER_RELOAD_STAR3 = 0.27;
export const COMBO_WINDOW = 3.6;
export const PLAYER_SHIELD_ON_SPAWN = 2.2;
export const SHIELD_TIME = 9;
export const FREEZE_TIME = 8;
export const SHOVEL_TIME = 18;
export const POWERUP_LIFE = 14;
export const SPAWN_INVULN = 1.25;
export const RESPAWN_DELAY = 1.6;
export const MAX_ENEMIES_1P = 4;
export const MAX_ENEMIES_2P = 6;
export const ENEMIES_PER_STAGE = 20;
export const BONUS_SLOTS = [2, 5, 8, 11, 14, 17];
export const START_LIVES = 2;

export const ENEMY_STATS = {
  basic: { speed: 1.65, hp: 1, bullet: 10.0, reload: 1.05, score: 100 },
  fast: { speed: 3.2, hp: 1, bullet: 10.5, reload: 0.85, score: 200 },
  power: { speed: 1.95, hp: 1, bullet: 15.5, reload: 0.55, score: 300 },
  armor: { speed: 1.75, hp: 4, bullet: 11.5, reload: 0.72, score: 400 },
} as const;

export const COLORS = {
  player1: 0xb08c46,
  player2: 0x4fa998,
  basic: 0x8c9196,
  fast: 0xb7a27a,
  power: 0xb04a3c,
  armor: 0x6f8a4e,
  steel: 0x9ba1a8,
  brick: 0x8d4a35,
  ice: 0x9fc6d8,
  water: 0x2b6f8a,
  forest: 0x365c32,
};

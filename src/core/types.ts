export type Dir = 0 | 1 | 2 | 3;
export type Team = 'player' | 'enemy';
export type PlayerIndex = 0 | 1;
export type TileKind = 'empty' | 'brick' | 'steel' | 'water' | 'forest' | 'ice' | 'base';
export type EnemyKind = 'basic' | 'fast' | 'power' | 'armor';
export type PowerKind = 'star' | 'helmet' | 'clock' | 'shovel' | 'grenade' | 'tank';
export type GameState = 'title' | 'intro' | 'playing' | 'paused' | 'clear' | 'over';

export interface PlayerInput {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
  fire: boolean;
  /** Most recently pressed direction, for responsive cornering. */
  lastPressed?: Dir | null;
}

export const EMPTY_INPUT: PlayerInput = {
  up: false,
  down: false,
  left: false,
  right: false,
  fire: false,
};

export interface Tank {
  id: string;
  team: Team;
  kind: EnemyKind | 'player';
  x: number;
  z: number;
  dir: Dir;
  velX: number;
  velZ: number;
  speed: number;
  hp: number;
  maxHp: number;
  cooldown: number;
  star: number;
  shield: number;
  spawn: number;
  hitFlash: number;
  bonus: boolean;
  aiTimer: number;
  aiStrafe: number;
  /** Seconds spent pushing against an obstacle; drives unstick logic. */
  stuckTime: number;
  playerIndex: number;
  alive: boolean;
  moving: number;
  recoil: number;
  iceX: number;
  iceZ: number;
}

export interface Bullet {
  id: number;
  x: number;
  z: number;
  dir: Dir;
  speed: number;
  team: Team;
  owner: string;
  power: number;
  dead: boolean;
}

export interface PowerUp {
  kind: PowerKind;
  x: number;
  z: number;
  life: number;
  age: number;
}

export interface Cell {
  kind: TileKind;
  mask: number;
}

export type GameEvent =
  | { type: 'stageStart'; stage: number; mode: number }
  | { type: 'state'; state: GameState }
  | { type: 'spawn'; x: number; z: number; team: Team; kind: string }
  | { type: 'shoot'; x: number; z: number; dir: Dir; team: Team; owner: string; power: number }
  | { type: 'bulletSpark'; x: number; z: number; dir: Dir }
  | { type: 'brickBreak'; x: number; z: number; mask: number; removed: number[]; dir: Dir }
  | { type: 'steelHit'; x: number; z: number; dir: Dir }
  | { type: 'steelBreak'; x: number; z: number; mask: number; removed: number[]; dir: Dir }
  | { type: 'tankHit'; x: number; z: number; team: Team; kind: string; hp: number }
  | { type: 'tankDestroyed'; x: number; z: number; team: Team; kind: string; bonus: boolean }
  | { type: 'playerOut'; player: number }
  | { type: 'powerupSpawn'; x: number; z: number; kind: PowerKind }
  | { type: 'powerupPickup'; x: number; z: number; kind: PowerKind; player: number }
  | { type: 'powerupExpire'; x: number; z: number; kind: PowerKind }
  | { type: 'shield'; x: number; z: number; player: number }
  | { type: 'freeze' }
  | { type: 'shovel'; active: boolean }
  | { type: 'grenade' }
  | { type: 'extraLife'; player: number }
  | { type: 'baseHit'; x: number; z: number }
  | { type: 'baseDestroyed' }
  | { type: 'stageClear'; stage: number }
  | { type: 'gameOver' }
  | { type: 'score'; player: number; amount: number; x: number; z: number }
  | { type: 'respawn'; x: number; z: number; team: Team }
  | { type: 'muted'; muted: boolean };

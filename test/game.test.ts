import { describe, expect, it } from 'vitest';
import { ENEMIES_PER_STAGE, GRID, PLAYER_SPAWNS, TANK_HALF } from '../src/core/constants';
import { Game } from '../src/core/game';
import { getStageMap, validateMap } from '../src/core/levels';
import { quadrantsForDir, Terrain, tankCollides } from '../src/core/terrain';
import type { PlayerInput } from '../src/core/types';

function play(game: Game): void {
  game.start(1);
  for (let i = 0; i < 60; i++) game.update(0.05);
}

function input(partial: Partial<PlayerInput>): PlayerInput {
  return { up: false, down: false, left: false, right: false, fire: false, ...partial };
}

describe('levels', () => {
  it('all 35 stages are well formed and spawnable', () => {
    for (let stage = 1; stage <= 35; stage++) {
      const errors = validateMap(getStageMap(stage));
      expect(errors, `stage ${stage}: ${errors.join(', ')}`).toEqual([]);
    }
  });

  it('every stage has exactly 4 eagle blocks in the base pit', () => {
    for (let stage = 1; stage <= 35; stage++) {
      const rows = getStageMap(stage);
      let count = 0;
      rows.forEach((row) => [...row].forEach((c) => c === 'E' && count++));
      expect(count).toBe(4);
    }
  });
});

describe('terrain', () => {
  const map = [
    '.............',
    '..B..........',
    '.............',
    '.............',
    '.............',
    '.............',
    '.............',
    '.............',
    '.............',
    '.............',
    '.....BBBB....',
    '.....BEEB....',
    '.....BEEB....',
  ];

  it('blocks tanks with brick, steel, water and base but not forest or ice', () => {
    const terrain = new Terrain(map);
    expect(terrain.solidForTank(2, 1)).toBe(true);
    terrain.set(3, 3, 'steel');
    terrain.set(4, 3, 'water');
    terrain.set(5, 3, 'forest');
    terrain.set(6, 3, 'ice');
    expect(terrain.solidForTank(3, 3)).toBe(true);
    expect(terrain.solidForTank(4, 3)).toBe(true);
    expect(terrain.solidForTank(5, 3)).toBe(false);
    expect(terrain.solidForTank(6, 3)).toBe(false);
    expect(terrain.solidForTank(6, 12)).toBe(true);
  });

  it('a normal shell chips the near half of a brick, a powered shell clears the rest', () => {
    const terrain = new Terrain(map);
    const first = terrain.damage(2, 1, 0, 1);
    expect(first?.kind).toBe('brick');
    expect(first?.destroyed).toBe(false);
    expect(first?.removed.sort()).toEqual([2, 3].sort());
    expect(terrain.get(2, 1)?.mask).toBe(3);

    const second = terrain.damage(2, 1, 0, 1);
    expect(second?.destroyed).toBe(true);
    expect(terrain.get(2, 1)?.kind).toBe('empty');
  });

  it('steel resists normal shells and yields to star-3 shells', () => {
    const terrain = new Terrain(map);
    terrain.set(4, 4, 'steel');
    expect(terrain.damage(4, 4, 1, 1)).toBeNull();
    const powered = terrain.damage(4, 4, 1, 3);
    expect(powered?.kind).toBe('steel');
    expect(powered?.destroyed).toBe(false);
    expect(terrain.get(4, 4)?.mask).toBe(15 & ~quadrantsForDir(1));
  });

  it('tank collision respects the playfield edge and lane snapping', () => {
    const terrain = new Terrain(map);
    expect(tankCollides(terrain, TANK_HALF + 0.01, 3, TANK_HALF, [], 'x')).toBe(false);
    expect(tankCollides(terrain, TANK_HALF - 0.01, 3, TANK_HALF, [], 'x')).toBe(true);
    expect(tankCollides(terrain, 2.5, 1.5, TANK_HALF, [], 'x')).toBe(true);
  });

  it('finds the eight brick blocks guarding the eagle', () => {
    const terrain = new Terrain(map);
    expect(terrain.findBaseWalls()).toHaveLength(8);
  });
});

describe('gameplay', () => {
  it('starts on stage one with one player and an enemy queue', () => {
    const game = new Game(1234);
    play(game);
    expect(game.state).toBe('playing');
    expect(game.stage).toBe(1);
    expect(game.playerTanks()).toHaveLength(1);
    expect(game.spawnQueue.length + game.enemyTanks().length).toBe(ENEMIES_PER_STAGE);
  });

  it('lets a player drive up and blocks movement into brick', () => {
    const game = new Game(99);
    play(game);
    const p = game.playerTanks()[0];
    p.shield = 999;
    const startZ = p.z;
    for (let i = 0; i < 10; i++) game.update(1 / 60, [input({ up: true })]);
    expect(p.z).toBeLessThan(startZ);

    // Drive into the fort wall directly above the spawn lane.
    game.terrain.set(3, 11, 'brick');
    for (let i = 0; i < 120; i++) game.update(1 / 60, [input({ up: true })]);
    expect(p.z).toBeGreaterThan(11.3);
  });

  it('fires shells on the fire input and respects the two-shell cap at star level', () => {
    const game = new Game(7);
    play(game);
    const p = game.playerTanks()[0];
    p.cooldown = 0;
    game.update(1 / 60, [input({ fire: true })]);
    expect(game.bullets.length).toBe(1);

    p.cooldown = 0;
    p.star = 2;
    game.update(1 / 60, [input({ fire: true })]);
    expect(game.bullets.filter((b) => b.owner === p.id).length).toBeLessThanOrEqual(2);
  });

  it('a shell destroys brick in front of the tank', () => {
    const game = new Game(3);
    play(game);
    const p = game.playerTanks()[0];
    game.terrain.set(3, 11, 'brick');
    p.cooldown = 0;
    game.update(1 / 60, [input({ fire: true })]);
    for (let i = 0; i < 12; i++) game.update(1 / 60);
    const cell = game.terrain.get(3, 11);
    expect(cell?.kind === 'empty' || (cell?.mask ?? 15) < 15).toBe(true);
  });

  it('caps simultaneous enemies and spawns from the queue', () => {
    const game = new Game(11);
    play(game);
    for (let i = 0; i < 600; i++) game.update(1 / 60);
    expect(game.enemyTanks().length).toBeLessThanOrEqual(4);
    expect(game.enemyTanks().length).toBeGreaterThan(0);
    expect(game.spawnQueue.length).toBeLessThan(ENEMIES_PER_STAGE);
  });

  it('kills players, decrements lives and respawns them', () => {
    const game = new Game(5);
    play(game);
    const p = game.playerTanks()[0];
    const lives = game.lives[0];
    (game as any).destroyPlayer(p);
    expect(game.lives[0]).toBe(lives - 1);
    expect(game.playerTanks()).toHaveLength(0);
    for (let i = 0; i < 130; i++) game.update(1 / 60);
    expect(game.playerTanks()).toHaveLength(1);
  });

  it('ends the game when the eagle falls', () => {
    const game = new Game(5);
    play(game);
    (game as any).destroyBase();
    expect(game.state).toBe('over');
    expect(game.baseAlive).toBe(false);
    expect(game.events.some((e) => e.type === 'baseDestroyed')).toBe(true);
  });

  it('applies power-ups: star, extra life, clock and shovel', () => {
    const game = new Game(21);
    play(game);
    const p = game.playerTanks()[0];
    const grant = (kind: string) => {
      game.powerup = { kind: kind as any, x: p.x, z: p.z, life: 12, age: 0 };
      game.update(1 / 60);
    };

    grant('star');
    expect(game.playerStar[0]).toBe(1);
    expect(p.star).toBe(1);

    const before = game.lives[0];
    grant('tank');
    expect(game.lives[0]).toBe(before + 1);

    grant('clock');
    expect(game.freeze).toBeGreaterThan(0);

    const wall = game.baseWalls[0];
    game.terrain.set(wall.x, wall.z, 'brick');
    grant('shovel');
    expect(game.terrain.get(wall.x, wall.z)?.kind).toBe('steel');
    game.shovel = 0.01;
    for (let i = 0; i < 10; i++) game.update(1 / 60);
    expect(game.terrain.get(wall.x, wall.z)?.kind).toBe('brick');
  });

  it('scores enemy kills for the shooter and destroys armor only after four hits', () => {
    const game = new Game(8);
    play(game);
    const p = game.playerTanks()[0];
    const enemy = {
      id: 'e-test',
      team: 'enemy' as const,
      kind: 'armor' as const,
      x: 6.5,
      z: 6.5,
      dir: 2 as const,
      velX: 0,
      velZ: 0,
      speed: 1.7,
      hp: 4,
      maxHp: 4,
      cooldown: 0,
      star: 0,
      shield: 0,
      spawn: 0,
      hitFlash: 0,
      bonus: false,
      aiTimer: 1,
      aiStrafe: 0,
      playerIndex: -1,
      alive: true,
      moving: 0,
      recoil: 0,
      iceX: 0,
      iceZ: 0,
    };
    game.tanks.push(enemy);
    const bullet = {
      id: 999,
      x: 6.5,
      z: 6.5,
      dir: 0 as const,
      speed: 10,
      team: 'player' as const,
      owner: p.id,
      power: 1,
      dead: false,
    };
    const score = game.score[0];
    (game as any).hitTank(enemy, bullet);
    expect(enemy.hp).toBe(3);
    expect(enemy.alive).toBe(true);
    for (let i = 0; i < 3; i++) (game as any).hitTank(enemy, bullet);
    expect(game.score[0]).toBe(score + 400);
    expect(game.tally.armor).toBe(1);
  });

  it('clears a stage once the queue and field are empty', () => {
    const game = new Game(8);
    play(game);
    game.spawnQueue = [];
    for (const enemy of game.enemyTanks()) (game as any).destroyEnemy(enemy, 0, false);
    for (let i = 0; i < 3; i++) game.update(1 / 60);
    expect(game.state).toBe('clear');
    expect(game.events.some((e) => e.type === 'stageClear')).toBe(true);
  });

  it('pauses and resumes', () => {
    const game = new Game(8);
    play(game);
    expect(game.togglePause()).toBe(true);
    expect(game.state).toBe('paused');
    game.togglePause();
    expect(game.state).toBe('playing');
  });

  it('keeps the base walls within the fort area', () => {
    const game = new Game(1);
    play(game);
    expect(game.baseWalls.length).toBe(8);
    for (const wall of game.baseWalls) {
      expect(wall.x).toBeGreaterThanOrEqual(5);
      expect(wall.x).toBeLessThanOrEqual(8);
      expect(wall.z).toBeGreaterThanOrEqual(10);
      expect(wall.z).toBeLessThanOrEqual(12);
    }
    expect(PLAYER_SPAWNS[0].z).toBeLessThan(GRID);
  });

  it('enemies escape walls instead of locking up', () => {
    const game = new Game(1234);
    play(game);
    const travelled = new Map<string, number>();
    const previous = new Map<string, { x: number; z: number }>();
    for (let i = 0; i < 60 * 20; i++) {
      for (const enemy of game.enemyTanks()) {
        const last = previous.get(enemy.id);
        if (last) {
          travelled.set(enemy.id, (travelled.get(enemy.id) ?? 0) + Math.hypot(enemy.x - last.x, enemy.z - last.z));
        }
        previous.set(enemy.id, { x: enemy.x, z: enemy.z });
      }
      game.update(1 / 60);
    }
    expect(travelled.size).toBeGreaterThan(0);
    for (const [id, distance] of travelled) {
      expect(distance, `${id} only travelled ${distance.toFixed(2)}`).toBeGreaterThan(4);
    }
  });

  it('enemies shoot through bricks that block their path', () => {
    const game = new Game(1234);
    play(game);
    const broken = new Set<string>();
    for (let i = 0; i < 60 * 40; i++) {
      game.update(1 / 60);
      for (const event of game.drainEvents()) {
        if (event.type === 'brickBreak') broken.add(`${event.x},${event.z}`);
      }
    }
    expect(broken.size).toBeGreaterThan(0);
  });
});

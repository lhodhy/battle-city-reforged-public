import {
  BONUS_SLOTS,
  DIRS,
  ENEMIES_PER_STAGE,
  ENEMY_SPAWNS,
  ENEMY_STATS,
  FREEZE_TIME,
  MAX_ENEMIES_1P,
  MAX_ENEMIES_2P,
  PLAYER_BULLET_FAST,
  PLAYER_BULLET_SPEED,
  PLAYER_RELOAD,
  PLAYER_SHIELD_ON_SPAWN,
  PLAYER_SPAWNS,
  PLAYER_SPEED,
  POWERUP_LIFE,
  RESPAWN_DELAY,
  SHIELD_TIME,
  SHOVEL_TIME,
  SPAWN_INVULN,
  START_LIVES,
  TANK_HALF,
  BULLET_RADIUS,
  BASE_CENTER,
} from './constants';
import { getStageMap, STAGE_COUNT } from './levels';
import { Rng } from './rng';
import { dirVector, snapToLane, tankCollides, Terrain } from './terrain';
import type {
  Bullet,
  Dir,
  EnemyKind,
  GameEvent,
  GameState,
  PlayerInput,
  PowerKind,
  PowerUp,
  Tank,
} from './types';
import { EMPTY_INPUT } from './types';

const OPPOSITE: Dir[] = [2, 3, 0, 1];
const ALL_KINDS: EnemyKind[] = ['basic', 'fast', 'power', 'armor'];
const POWER_KINDS: PowerKind[] = ['star', 'helmet', 'clock', 'shovel', 'grenade', 'tank'];

let nextBulletId = 1;

export interface Tally {
  basic: number;
  fast: number;
  power: number;
  armor: number;
}

export class Game {
  state: GameState = 'title';
  mode: 1 | 2 = 1;
  stage = 1;
  loop = 0;
  seed: number;
  rng: Rng;
  terrain: Terrain;
  tanks: Tank[] = [];
  bullets: Bullet[] = [];
  powerup: PowerUp | null = null;

  score = [0, 0];
  lives = [START_LIVES, START_LIVES];
  playerStar = [0, 0];
  out = [false, false];
  private respawnTimers = [0, 0];

  spawnQueue: EnemyKind[] = [];
  spawnedCount = 0;
  spawnTimer = 0;
  freeze = 0;
  shovel = 0;
  baseWalls: Array<{ x: number; z: number }> = [];
  baseAlive = true;

  stageStartScore = 0;
  tally: Tally = { basic: 0, fast: 0, power: 0, armor: 0 };

  events: GameEvent[] = [];
  time = 0;
  introTimer = 0;
  clearTimer = 0;
  overTimer = 0;
  private playerMoving = 0;

  constructor(seed = Date.now()) {
    this.seed = seed;
    this.rng = new Rng(seed);
    this.terrain = new Terrain(getStageMap(1));
  }

  start(mode: 1 | 2): void {
    this.mode = mode;
    this.stage = 1;
    this.loop = 0;
    this.score = [0, 0];
    this.lives = [START_LIVES, START_LIVES];
    this.playerStar = [0, 0];
    this.out = [false, false];
    this.respawnTimers = [0, 0];
    this.beginStage();
  }

  retry(): void {
    this.start(this.mode);
  }

  beginStage(): void {
    this.terrain = new Terrain(getStageMap(this.stage));
    this.baseWalls = this.terrain.findBaseWalls();
    this.baseAlive = true;
    this.tanks = [];
    this.bullets = [];
    this.powerup = null;
    this.freeze = 0;
    this.shovel = 0;
    this.spawnQueue = this.buildEnemyQueue();
    this.spawnedCount = 0;
    this.spawnTimer = 0.8;
    this.stageStartScore = this.score[0] + this.score[1];
    this.tally = { basic: 0, fast: 0, power: 0, armor: 0 };
    this.playerMoving = 0;

    for (let p = 0; p < this.mode; p++) {
      this.lives[p] = Math.max(this.lives[p], 0);
      this.respawnTimers[p] = 0;
      if (!this.out[p]) this.spawnPlayer(p);
    }

    this.introTimer = 2.1;
    this.setState('intro');
    this.emit({ type: 'stageStart', stage: this.stage, mode: this.mode });
  }

  private buildEnemyQueue(): EnemyKind[] {
    const t = (this.stage - 1) % STAGE_COUNT;
    const armor = Math.min(8, 1 + Math.floor(t / 4));
    const power = Math.min(7, 1 + Math.floor(t / 3));
    const fast = Math.min(7, 2 + Math.floor(t / 2));
    const basic = Math.max(2, ENEMIES_PER_STAGE - armor - power - fast);
    const queue: EnemyKind[] = [];
    for (let i = 0; i < basic; i++) queue.push('basic');
    for (let i = 0; i < fast; i++) queue.push('fast');
    for (let i = 0; i < power; i++) queue.push('power');
    for (let i = 0; i < armor; i++) queue.push('armor');
    while (queue.length > ENEMIES_PER_STAGE) queue.pop();
    this.rng.shuffle(queue);
    return queue;
  }

  update(dt: number, inputs: PlayerInput[] = []): void {
    this.time += dt;
    this.playerMoving = 0;

    for (const tank of this.tanks) {
      tank.cooldown = Math.max(0, tank.cooldown - dt);
      tank.shield = Math.max(0, tank.shield - dt);
      tank.hitFlash = Math.max(0, tank.hitFlash - dt);
      tank.recoil = Math.max(0, tank.recoil - dt * 7);
      if (tank.spawn > 0) tank.spawn = Math.max(0, tank.spawn - dt);
    }

    if (this.state === 'intro') {
      this.introTimer -= dt;
      if (this.introTimer <= 0) this.setState('playing');
      return;
    }
    if (this.state === 'clear') {
      this.clearTimer -= dt;
      if (this.clearTimer <= 0) this.advanceStage();
      return;
    }
    if (this.state === 'over') {
      this.overTimer += dt;
      return;
    }
    if (this.state !== 'playing') return;

    this.freeze = Math.max(0, this.freeze - dt);
    if (this.shovel > 0) {
      this.shovel = Math.max(0, this.shovel - dt);
      if (this.shovel === 0) this.restoreBaseWalls();
    }

    this.updateRespawns(dt);
    this.updatePlayers(dt, inputs);
    this.updateEnemies(dt);
    this.updateSpawns(dt);
    this.updateBullets(dt);
    this.updatePowerup(dt);

    if (this.baseAlive && this.spawnQueue.length === 0 && !this.enemyTanks().length) {
      this.stageClear();
    }
  }

  private updateRespawns(dt: number): void {
    for (let p = 0; p < this.mode; p++) {
      if (this.out[p]) continue;
      if (this.tanks.some((t) => t.team === 'player' && t.playerIndex === p)) continue;
      this.respawnTimers[p] -= dt;
      if (this.respawnTimers[p] <= 0) {
        if (this.spawnPlayer(p)) this.respawnTimers[p] = 0;
        else this.respawnTimers[p] = 0.35;
      }
    }
  }

  spawnPlayer(p: number): boolean {
    const spawn = PLAYER_SPAWNS[p] ?? PLAYER_SPAWNS[0];
    if (this.tanks.some((t) => Math.abs(t.x - spawn.x) < 0.9 && Math.abs(t.z - spawn.z) < 0.9)) {
      return false;
    }
    const tank: Tank = {
      id: `p${p}`,
      team: 'player',
      kind: 'player',
      x: spawn.x,
      z: spawn.z,
      dir: 0,
      velX: 0,
      velZ: 0,
      speed: PLAYER_SPEED,
      hp: 1,
      maxHp: 1,
      cooldown: 0,
      star: this.playerStar[p] ?? 0,
      shield: PLAYER_SHIELD_ON_SPAWN,
      spawn: SPAWN_INVULN,
      hitFlash: 0,
      bonus: false,
      aiTimer: 0,
      aiStrafe: 0,
      stuckTime: 0,
      playerIndex: p,
      alive: true,
      moving: 0,
      recoil: 0,
      iceX: 0,
      iceZ: 0,
    };
    this.tanks.push(tank);
    this.emit({ type: 'respawn', x: tank.x, z: tank.z, team: 'player' });
    return true;
  }

  private updatePlayers(dt: number, inputs: PlayerInput[]): void {
    for (const tank of [...this.tanks]) {
      if (tank.team !== 'player' || !tank.alive) continue;
      const input = inputs[tank.playerIndex] ?? EMPTY_INPUT;
      if (tank.spawn <= 0) {
        const dir = this.readInputDir(tank, input);
        const blocked = this.driveTank(tank, dir, dt);
        if (blocked) tank.iceX = tank.iceZ = 0;
        if (input.fire) this.tryFire(tank);
      }
      this.playerMoving = Math.max(this.playerMoving, tank.moving);
    }
  }

  private readInputDir(tank: Tank, input: PlayerInput): Dir | null {
    const held: Dir[] = [];
    if (input.up) held.push(0);
    if (input.right) held.push(1);
    if (input.down) held.push(2);
    if (input.left) held.push(3);
    if (!held.length) return null;
    const last = input.lastPressed;
    if (last !== undefined && last !== null && held.includes(last)) return last;
    if (held.includes(tank.dir)) return tank.dir;
    return held[0];
  }

  private updateEnemies(dt: number): void {
    if (this.freeze > 0) return;
    for (const tank of [...this.tanks]) {
      if (tank.team !== 'enemy' || !tank.alive) continue;
      if (tank.spawn > 0) continue;
      tank.aiTimer -= dt;
      if (tank.aiTimer <= 0) this.chooseEnemyDir(tank);
      const blocked = this.driveTank(tank, tank.dir, dt);
      if (blocked) {
        tank.stuckTime += dt;
        // With a brick in the barrel's path, shoot it out the way the arcade
        // tanks do instead of rubbing against it forever.
        if (this.brickAhead(tank)) this.tryFire(tank);
        if (tank.stuckTime >= 0.3) {
          this.chooseEnemyDir(tank, true);
          tank.stuckTime = 0;
        }
      } else {
        tank.stuckTime = Math.max(0, tank.stuckTime - dt * 2);
      }
      this.enemyConsiderFire(tank);
    }
  }

  /** True when the tile straight ahead is brick the tank could shell open. */
  private brickAhead(tank: Tank): boolean {
    const v = dirVector(tank.dir);
    const cell = this.terrain.get(Math.floor(tank.x + v.x * 0.62), Math.floor(tank.z + v.z * 0.62));
    return cell?.kind === 'brick';
  }

  /** Can the tank actually enter the given heading from where it stands? */
  private enemyCanEnter(tank: Tank, dir: Dir): boolean {
    const v = dirVector(dir);
    let x = tank.x;
    let z = tank.z;
    if (dir !== tank.dir) {
      if (v.x === 0) x = snapToLane(x);
      else z = snapToLane(z);
      if (tankCollides(this.terrain, x, z, TANK_HALF, this.tanks, tank.id)) return false;
    }
    const step = Math.max(0.2, tank.speed * 0.12);
    return !tankCollides(this.terrain, x + v.x * step, z + v.z * step, TANK_HALF, this.tanks, tank.id);
  }

  private chooseEnemyDir(tank: Tank, unsticking = false): void {
    const base = { x: BASE_CENTER.x, z: BASE_CENTER.z };
    let target = base;
    const players = this.playerTanks();
    if (players.length && this.rng.chance(0.42)) {
      players.sort((a, b) => Math.hypot(a.x - tank.x, a.z - tank.z) - Math.hypot(b.x - tank.x, b.z - tank.z));
      target = players[0];
    }
    const dx = target.x - tank.x;
    const dz = target.z - tank.z;
    const toward: Dir[] = [];
    if (dz < -0.35) toward.push(0);
    else if (dz > 0.35) toward.push(2);
    if (dx < -0.35) toward.push(3);
    else if (dx > 0.35) toward.push(1);

    const all: Dir[] = [0, 1, 2, 3];
    const open = all.filter((d) => d !== OPPOSITE[tank.dir] && this.enemyCanEnter(tank, d));
    const advancing = open.filter((d) => toward.includes(d));

    let dir: Dir;
    if (advancing.length && (unsticking || this.rng.chance(0.68))) {
      // Bias toward the eagle / nearest player when an open lane exists.
      dir = this.rng.pick(advancing);
    } else if (open.length) {
      dir = this.rng.pick(open);
    } else if (this.enemyCanEnter(tank, OPPOSITE[tank.dir])) {
      dir = OPPOSITE[tank.dir];
    } else {
      // Boxed in on every side: hold aim so the next shots can open a path.
      dir = tank.dir;
      tank.aiTimer = 0.25;
      return;
    }
    tank.dir = dir;
    tank.aiTimer = unsticking ? this.rng.range(0.25, 0.5) : this.rng.range(0.6, 1.6);
  }

  private enemyConsiderFire(tank: Tank): void {
    if (tank.cooldown > 0) return;
    if (this.rng.chance(0.006)) {
      this.tryFire(tank);
      return;
    }
    const targets: Array<{ x: number; z: number }> = [{ x: BASE_CENTER.x, z: BASE_CENTER.z }, ...this.playerTanks()];
    for (const target of targets) {
      const dx = target.x - tank.x;
      const dz = target.z - tank.z;
      const v = dirVector(tank.dir);
      const aligned =
        (v.x !== 0 && Math.abs(dx) > Math.abs(dz) && Math.abs(dz) < 0.42 && Math.sign(dx) === Math.sign(v.x)) ||
        (v.z !== 0 && Math.abs(dz) > Math.abs(dx) && Math.abs(dx) < 0.42 && Math.sign(dz) === Math.sign(v.z));
      if (aligned) {
        this.tryFire(tank);
        return;
      }
    }
  }

  /** Moves a tank one tick; returns true if it was blocked. */
  private driveTank(tank: Tank, dir: Dir | null, dt: number): boolean {
    const onIce = this.terrain.isOnIce(Math.floor(tank.x), Math.floor(tank.z));
    if (dir !== null) {
      if (dir !== tank.dir) {
        tank.dir = dir;
        const v = dirVector(dir);
        if (v.x === 0) {
          const snapped = snapToLane(tank.x);
          if (!tankCollides(this.terrain, snapped, tank.z, TANK_HALF, this.tanks, tank.id)) tank.x = snapped;
        } else {
          const snapped = snapToLane(tank.z);
          if (!tankCollides(this.terrain, tank.x, snapped, TANK_HALF, this.tanks, tank.id)) tank.z = snapped;
        }
        if (!onIce) {
          tank.iceX = 0;
          tank.iceZ = 0;
        }
      }
      const v = dirVector(dir);
      const targetX = v.x * tank.speed;
      const targetZ = v.z * tank.speed;
      if (onIce) {
        const blend = Math.min(1, dt * 6);
        tank.iceX += (targetX - tank.iceX) * blend;
        tank.iceZ += (targetZ - tank.iceZ) * blend;
      } else {
        tank.iceX = targetX;
        tank.iceZ = targetZ;
      }
    } else {
      const damp = onIce ? Math.exp(-1.55 * dt) : 0;
      tank.iceX *= damp;
      tank.iceZ *= damp;
      if (!onIce) {
        tank.iceX = 0;
        tank.iceZ = 0;
      }
    }

    let blocked = false;
    const nx = tank.x + tank.iceX * dt;
    if (!tankCollides(this.terrain, nx, tank.z, TANK_HALF, this.tanks, tank.id)) {
      tank.x = nx;
    } else {
      tank.iceX = 0;
      blocked = true;
    }
    const nz = tank.z + tank.iceZ * dt;
    if (!tankCollides(this.terrain, tank.x, nz, TANK_HALF, this.tanks, tank.id)) {
      tank.z = nz;
    } else {
      tank.iceZ = 0;
      blocked = true;
    }

    const moved = Math.hypot(tank.iceX, tank.iceZ);
    tank.moving = Math.min(1, moved / Math.max(0.2, tank.speed));
    return blocked;
  }

  private tryFire(tank: Tank): void {
    if (tank.cooldown > 0 || tank.spawn > 0) return;
    const active = this.bullets.filter((b) => !b.dead && b.owner === tank.id).length;
    const max = tank.team === 'player' && tank.star >= 2 ? 2 : 1;
    if (active >= max) return;

    const v = dirVector(tank.dir);
    let speed = 9.5;
    let power = 1;
    if (tank.team === 'player') {
      speed = tank.star >= 1 ? PLAYER_BULLET_FAST : PLAYER_BULLET_SPEED;
      power = tank.star >= 3 ? 3 : 1;
    } else {
      speed = ENEMY_STATS[tank.kind as EnemyKind].bullet * Math.min(1.35, 1 + this.loop * 0.05);
    }
    const x = tank.x + v.x * 0.56;
    const z = tank.z + v.z * 0.56;
    this.bullets.push({
      id: nextBulletId++,
      x,
      z,
      dir: tank.dir,
      speed,
      team: tank.team,
      owner: tank.id,
      power,
      dead: false,
    });
    tank.cooldown = tank.team === 'player' ? PLAYER_RELOAD : ENEMY_STATS[tank.kind as EnemyKind].reload;
    tank.recoil = 1;
    this.emit({ type: 'shoot', x, z, dir: tank.dir, team: tank.team, owner: tank.id, power });
  }

  private updateSpawns(dt: number): void {
    if (this.spawnQueue.length === 0) return;
    const max = this.mode === 2 ? MAX_ENEMIES_2P : MAX_ENEMIES_1P;
    if (this.enemyTanks().length >= max) return;
    this.spawnTimer -= dt;
    if (this.spawnTimer > 0) return;

    const order = this.rng.shuffle([0, 1, 2]);
    for (const i of order) {
      const spawn = ENEMY_SPAWNS[i];
      if (this.tanks.some((t) => Math.abs(t.x - spawn.x) < 1.0 && Math.abs(t.z - spawn.z) < 1.0)) continue;
      const kind = this.spawnQueue.shift();
      if (!kind) return;
      const bonus = BONUS_SLOTS.includes(this.spawnedCount);
      this.spawnedCount++;
      const stats = ENEMY_STATS[kind];
      const loop = this.loop;
      const tank: Tank = {
        id: `e${this.spawnedCount}_${kind}`,
        team: 'enemy',
        kind,
        x: spawn.x,
        z: spawn.z,
        dir: 2,
        velX: 0,
        velZ: 0,
        speed: stats.speed * Math.min(1.6, 1 + loop * 0.07),
        hp: stats.hp,
        maxHp: stats.hp,
        cooldown: this.rng.range(0.5, 1.6),
        star: 0,
        shield: 0,
        spawn: 1.15,
        hitFlash: 0,
        bonus,
        aiTimer: this.rng.range(0.3, 1),
        aiStrafe: 0,
        stuckTime: 0,
        playerIndex: -1,
        alive: true,
        moving: 0,
        recoil: 0,
        iceX: 0,
        iceZ: 0,
      };
      this.tanks.push(tank);
      this.emit({ type: 'spawn', x: tank.x, z: tank.z, team: 'enemy', kind });
      this.spawnTimer = this.mode === 2 ? 1.4 : 1.9;
      return;
    }
    this.spawnTimer = 0.4;
  }

  private updateBullets(dt: number): void {
    for (const bullet of this.bullets) {
      if (bullet.dead) continue;
      const v = dirVector(bullet.dir);
      const distance = bullet.speed * dt;
      const steps = Math.max(1, Math.ceil(distance / 0.18));
      const step = distance / steps;

      for (let s = 0; s < steps && !bullet.dead; s++) {
        bullet.x += v.x * step;
        bullet.z += v.z * step;

        if (bullet.x < 0 || bullet.z < 0 || bullet.x > 13 || bullet.z > 13) {
          bullet.dead = true;
          this.emit({ type: 'bulletSpark', x: bullet.x, z: bullet.z, dir: bullet.dir });
          break;
        }

        const victim = this.findTankHit(bullet);
        if (victim) {
          bullet.dead = true;
          this.hitTank(victim, bullet);
          break;
        }

        const cx = Math.floor(bullet.x);
        const cz = Math.floor(bullet.z);
        const cell = this.terrain.get(cx, cz);
        if (!cell) continue;
        if (cell.kind === 'brick' || cell.kind === 'steel' || cell.kind === 'base') {
          bullet.dead = true;
          if (cell.kind === 'base') {
            this.destroyBase();
          } else {
            const result = this.terrain.damage(cx, cz, bullet.dir, bullet.power);
            if (result && result.kind === 'brick') {
              this.emit({
                type: 'brickBreak',
                x: cx,
                z: cz,
                mask: result.mask,
                removed: result.removed,
                dir: bullet.dir,
              });
            } else if (result && result.kind === 'steel') {
              this.emit({ type: 'steelBreak', x: cx, z: cz, mask: result.mask, removed: result.removed, dir: bullet.dir });
            } else {
              this.emit({ type: 'steelHit', x: cx, z: cz, dir: bullet.dir });
            }
          }
          break;
        }
      }
    }

    // Shells cancel each other in mid-air.
    for (let i = 0; i < this.bullets.length; i++) {
      const a = this.bullets[i];
      if (a.dead) continue;
      for (let j = i + 1; j < this.bullets.length; j++) {
        const b = this.bullets[j];
        if (b.dead) continue;
        if (Math.abs(a.x - b.x) < 0.2 && Math.abs(a.z - b.z) < 0.2) {
          a.dead = true;
          b.dead = true;
          this.emit({ type: 'bulletSpark', x: (a.x + b.x) / 2, z: (a.z + b.z) / 2, dir: a.dir });
          break;
        }
      }
    }

    this.bullets = this.bullets.filter((b) => !b.dead);
  }

  private findTankHit(bullet: Bullet): Tank | null {
    const want: 'player' | 'enemy' = bullet.team === 'player' ? 'enemy' : 'player';
    for (const tank of this.tanks) {
      if (!tank.alive || tank.team !== want) continue;
      if (tank.id === bullet.owner) continue;
      if (
        Math.abs(tank.x - bullet.x) < TANK_HALF + BULLET_RADIUS &&
        Math.abs(tank.z - bullet.z) < TANK_HALF + BULLET_RADIUS
      ) {
        return tank;
      }
    }
    return null;
  }

  private hitTank(tank: Tank, bullet: Bullet): void {
    if (tank.spawn > 0) {
      this.emit({ type: 'bulletSpark', x: bullet.x, z: bullet.z, dir: bullet.dir });
      return;
    }
    if (tank.team === 'player') {
      if (tank.shield > 0) {
        this.emit({ type: 'bulletSpark', x: bullet.x, z: bullet.z, dir: bullet.dir });
        return;
      }
      this.destroyPlayer(tank);
      return;
    }

    tank.hp -= 1;
    if (tank.hp > 0) {
      tank.hitFlash = 0.16;
      this.emit({ type: 'tankHit', x: tank.x, z: tank.z, team: tank.team, kind: tank.kind, hp: tank.hp });
      return;
    }
    const player = bullet.owner.startsWith('p') ? Number(bullet.owner.slice(1)) : null;
    this.destroyEnemy(tank, player, false);
  }

  private destroyEnemy(tank: Tank, player: number | null, byPowerup: boolean): void {
    if (!tank.alive) return;
    tank.alive = false;
    this.tanks = this.tanks.filter((t) => t !== tank);
    const kind = tank.kind as EnemyKind;
    this.tally[kind] = (this.tally[kind] ?? 0) + 1;
    const stats = ENEMY_STATS[kind];
    if (player !== null && player >= 0) {
      this.addScore(player, stats.score, tank.x, tank.z);
    }
    this.emit({
      type: 'tankDestroyed',
      x: tank.x,
      z: tank.z,
      team: 'enemy',
      kind,
      bonus: tank.bonus,
    });
    if (tank.bonus) {
      this.dropPowerup(tank.x, tank.z);
    }
    void byPowerup;
  }

  private destroyPlayer(tank: Tank): void {
    if (!tank.alive) return;
    tank.alive = false;
    this.tanks = this.tanks.filter((t) => t !== tank);
    const p = tank.playerIndex;
    this.playerStar[p] = 0;
    this.emit({ type: 'tankDestroyed', x: tank.x, z: tank.z, team: 'player', kind: 'player', bonus: false });

    if (this.lives[p] > 0) {
      this.lives[p] -= 1;
      this.respawnTimers[p] = RESPAWN_DELAY;
    } else {
      this.lives[p] = 0;
      this.out[p] = true;
      this.emit({ type: 'playerOut', player: p });
    }

    const anyAlive = this.out.some((out, i) => i < this.mode && !out);
    if (!anyAlive) this.gameOver();
  }

  private dropPowerup(x: number, z: number): void {
    if (this.powerup) return;
    const kind = this.rng.pick(POWER_KINDS);
    const px = Math.min(12.5, Math.max(0.5, x));
    const pz = Math.min(12.5, Math.max(0.5, z));
    this.powerup = { kind, x: px, z: pz, life: POWERUP_LIFE, age: 0 };
    this.emit({ type: 'powerupSpawn', x: px, z: pz, kind });
  }

  private updatePowerup(dt: number): void {
    if (!this.powerup) return;
    const power = this.powerup;
    power.life -= dt;
    power.age += dt;
    if (power.life <= 0) {
      this.emit({ type: 'powerupExpire', x: power.x, z: power.z, kind: power.kind });
      this.powerup = null;
      return;
    }
    for (const tank of this.playerTanks()) {
      if (Math.abs(tank.x - power.x) < 0.62 && Math.abs(tank.z - power.z) < 0.62) {
        this.applyPowerup(power, tank.playerIndex);
        this.emit({ type: 'powerupPickup', x: power.x, z: power.z, kind: power.kind, player: tank.playerIndex });
        this.powerup = null;
        return;
      }
    }
  }

  private applyPowerup(power: PowerUp, player: number): void {
    this.addScore(player, 500, power.x, power.z);
    const tank = this.tanks.find((t) => t.team === 'player' && t.playerIndex === player);
    switch (power.kind) {
      case 'star': {
        const next = Math.min(3, (this.playerStar[player] ?? 0) + 1);
        this.playerStar[player] = next;
        if (tank) tank.star = next;
        break;
      }
      case 'helmet':
        if (tank) {
          tank.shield = SHIELD_TIME;
          this.emit({ type: 'shield', x: tank.x, z: tank.z, player });
        }
        break;
      case 'clock':
        this.freeze = FREEZE_TIME;
        this.emit({ type: 'freeze' });
        break;
      case 'shovel':
        this.applyBaseSteel();
        break;
      case 'grenade': {
        this.emit({ type: 'grenade' });
        for (const enemy of [...this.enemyTanks()]) {
          this.destroyEnemy(enemy, player, true);
        }
        break;
      }
      case 'tank':
        this.lives[player] += 1;
        this.emit({ type: 'extraLife', player });
        break;
    }
  }

  private applyBaseSteel(): void {
    this.shovel = SHOVEL_TIME;
    for (const wall of this.baseWalls) {
      if (this.terrain.get(wall.x, wall.z)?.kind === 'brick') {
        this.terrain.set(wall.x, wall.z, 'steel', 15);
      }
    }
    this.emit({ type: 'shovel', active: true });
  }

  private restoreBaseWalls(): void {
    for (const wall of this.baseWalls) {
      if (this.terrain.get(wall.x, wall.z)?.kind === 'steel') {
        this.terrain.set(wall.x, wall.z, 'brick', 15);
      }
    }
    this.emit({ type: 'shovel', active: false });
  }

  private destroyBase(): void {
    if (!this.baseAlive) return;
    this.baseAlive = false;
    for (let z = 0; z < 13; z++) {
      for (let x = 0; x < 13; x++) {
        if (this.terrain.get(x, z)?.kind === 'base') this.terrain.set(x, z, 'empty');
      }
    }
    this.emit({ type: 'baseHit', x: 7, z: 12 });
    this.emit({ type: 'baseDestroyed' });
    this.gameOver();
  }

  private stageClear(): void {
    this.setState('clear');
    this.clearTimer = 4.2;
    this.emit({ type: 'stageClear', stage: this.stage });
  }

  private advanceStage(): void {
    this.stage += 1;
    if (this.stage > STAGE_COUNT) {
      this.stage = 1;
      this.loop += 1;
    }
    this.beginStage();
  }

  gameOver(): void {
    if (this.state === 'over') return;
    this.setState('over');
    this.overTimer = 0;
    this.emit({ type: 'gameOver' });
  }

  togglePause(): boolean {
    if (this.state === 'playing') {
      this.setState('paused');
      return true;
    }
    if (this.state === 'paused') {
      this.setState('playing');
      return true;
    }
    return false;
  }

  private setState(state: GameState): void {
    this.state = state;
    this.emit({ type: 'state', state });
  }

  addScore(player: number, amount: number, x = 0, z = 0): void {
    this.score[player] = (this.score[player] ?? 0) + amount;
    this.emit({ type: 'score', player, amount, x, z });
  }

  private emit(event: GameEvent): void {
    this.events.push(event);
  }

  drainEvents(): GameEvent[] {
    const events = this.events;
    this.events = [];
    return events;
  }

  playerTanks(): Tank[] {
    return this.tanks.filter((t) => t.team === 'player' && t.alive);
  }

  enemyTanks(): Tank[] {
    return this.tanks.filter((t) => t.team === 'enemy' && t.alive);
  }

  get enemiesRemaining(): number {
    return this.spawnQueue.length + this.enemyTanks().length;
  }

  get totalScore(): number {
    return this.score[0] + this.score[1];
  }

  get stageScore(): number {
    return this.totalScore - this.stageStartScore;
  }

  get playerSpeed(): number {
    return this.playerMoving;
  }

  get isPlaying(): boolean {
    return this.state === 'playing';
  }

  get activePowerups(): { shield: number; freeze: number; shovel: number } {
    const shield = Math.max(0, ...this.playerTanks().map((t) => t.shield));
    return { shield, freeze: this.freeze, shovel: this.shovel };
  }
}

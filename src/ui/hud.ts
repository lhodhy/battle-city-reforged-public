import type { Game } from '../core/game';
import { STAGE_COUNT } from '../core/levels';
import type { EnemyKind, GameState, PowerKind } from '../core/types';

interface HudCallbacks {
  getHi: () => number;
  onStart: (mode: 1 | 2) => void;
}

const POWER_LABELS: Record<PowerKind, string> = {
  star: 'FIREPOWER UP',
  helmet: 'SHIELD ONLINE',
  clock: 'ENEMIES FROZEN',
  shovel: 'FORTIFICATION ONLINE',
  grenade: 'BOMB DEPLOYED',
  tank: 'EXTRA TANK',
};

const TALLY_LABELS: Array<{ key: EnemyKind; label: string; points: number }> = [
  { key: 'basic', label: 'BASIC', points: 100 },
  { key: 'fast', label: 'FAST', points: 200 },
  { key: 'power', label: 'POWER', points: 300 },
  { key: 'armor', label: 'ARMOR', points: 400 },
];

export class Hud {
  private root: HTMLElement;
  private titleScreen: HTMLElement;
  private pauseScreen: HTMLElement;
  private clearScreen: HTMLElement;
  private overScreen: HTMLElement;
  private stageBanner: HTMLElement;
  private toastEl: HTMLElement;
  private boot: HTMLElement;
  private rotateHint: HTMLElement;
  private stageNum: HTMLElement;
  private enemyTrack: HTMLElement;
  private scoreNum: HTMLElement;
  private hiNum: HTMLElement;
  private p1Card: HTMLElement;
  private p2Card: HTMLElement;
  private p1Lives: HTMLElement;
  private p2Lives: HTMLElement;
  private p1Stars: HTMLElement;
  private p2Stars: HTMLElement;
  private statusStrip: HTMLElement;
  private clearTally: HTMLElement;
  private clearScore: HTMLElement;
  private finalScore: HTMLElement;
  private finalBest: HTMLElement;
  private bannerNum: HTMLElement;
  private bannerSub: HTMLElement;
  private flashEl: HTMLElement;

  private lastState: GameState | null = null;
  private lastEnemies = -1;
  private lastScore = -1;
  private lastHi = -1;
  private lastLives = [-1, -1];
  private lastStars = [-1, -1];
  private lastStatus = '';
  private bannerTimer = 0;
  private toastTimer = 0;
  private overTimer = 0;
  private muted = false;

  constructor(private game: Game, private callbacks: HudCallbacks) {
    const $ = (id: string) => document.getElementById(id)!;
    this.root = $('hud');
    this.titleScreen = $('titleScreen');
    this.pauseScreen = $('pauseScreen');
    this.clearScreen = $('clearScreen');
    this.overScreen = $('overScreen');
    this.stageBanner = $('stageBanner');
    this.toastEl = $('toast');
    this.boot = $('boot');
    this.rotateHint = $('rotateHint');
    this.stageNum = $('stageNum');
    this.enemyTrack = $('enemyTrack');
    this.scoreNum = $('scoreNum');
    this.hiNum = $('hiNum');
    this.p1Card = $('p1Card');
    this.p2Card = $('p2Card');
    this.p1Lives = $('p1Lives');
    this.p2Lives = $('p2Lives');
    this.p1Stars = $('p1Stars');
    this.p2Stars = $('p2Stars');
    this.statusStrip = $('statusStrip');
    this.clearTally = $('clearTally');
    this.clearScore = $('clearScore');
    this.finalScore = $('finalScore');
    this.finalBest = $('finalBest');
    this.bannerNum = $('bannerNum');
    this.bannerSub = $('bannerSub');

    this.flashEl = document.createElement('div');
    this.flashEl.id = 'hudFlash';
    document.getElementById('app')!.appendChild(this.flashEl);

    this.buildEnemyTrack();
    this.bindMenu();
    window.addEventListener('resize', () => this.updateRotateHint());
    this.updateRotateHint();
  }

  private bindMenu(): void {
    const menu = document.getElementById('titleMenu')!;
    for (const button of Array.from(menu.querySelectorAll<HTMLButtonElement>('.menu-item'))) {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        const mode = Number(button.dataset.mode) === 2 ? 2 : 1;
        this.callbacks.onStart(mode);
      });
    }
    this.titleScreen.addEventListener('click', (event) => {
      if ((event.target as HTMLElement).closest('.menu-item')) return;
      this.callbacks.onStart(1);
    });
  }

  private buildEnemyTrack(): void {
    this.enemyTrack.innerHTML = '';
    for (let i = 0; i < 20; i++) {
      const dot = document.createElement('i');
      this.enemyTrack.appendChild(dot);
    }
  }

  private updateRotateHint(): void {
    const portrait = window.innerHeight > window.innerWidth && window.innerWidth < 900;
    this.rotateHint.classList.toggle('hidden', !portrait);
  }

  ready(): void {
    this.boot.classList.add('done');
    window.setTimeout(() => this.boot.classList.add('hidden'), 700);
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
    this.showToast(muted ? 'SOUND MUTED' : 'SOUND ONLINE', muted ? '#ffb26b' : '#7fe0c0');
  }

  get isMuted(): boolean {
    return this.muted;
  }

  onStageStart(game: Game): void {
    this.hideOverlays();
    this.titleScreen.classList.add('hidden');
    this.root.classList.remove('hidden');
    this.bannerNum.textContent = String(game.stage).padStart(2, '0');
    this.bannerSub.textContent = game.stage > STAGE_COUNT ? 'WAR WITHOUT END' : stageSubtitle(game.stage);
    this.stageBanner.classList.remove('hidden');
    this.stageBanner.classList.remove('animate');
    void this.stageBanner.offsetWidth;
    this.stageBanner.classList.add('animate');
    window.clearTimeout(this.bannerTimer);
    this.bannerTimer = window.setTimeout(() => this.stageBanner.classList.add('hidden'), 2100);
    this.showToast(game.mode === 2 ? 'TWO-PLAYER DEPLOYMENT' : 'SINGLE-PLAYER DEPLOYMENT', '#ffc46a');
  }

  private hideOverlays(): void {
    this.pauseScreen.classList.add('hidden');
    this.clearScreen.classList.add('hidden');
    this.overScreen.classList.add('hidden');
    window.clearTimeout(this.overTimer);
  }

  syncState(game: Game): void {
    if (game.state === this.lastState) return;
    this.lastState = game.state;
    switch (game.state) {
      case 'title':
        this.titleScreen.classList.remove('hidden');
        this.root.classList.add('hidden');
        this.hideOverlays();
        this.clearTally.innerHTML = '';
        break;
      case 'intro':
        this.hideOverlays();
        this.titleScreen.classList.add('hidden');
        this.root.classList.remove('hidden');
        break;
      case 'playing':
        this.hideOverlays();
        this.root.classList.remove('hidden');
        break;
      case 'paused':
        this.pauseScreen.classList.remove('hidden');
        break;
      case 'clear':
        this.showClear(game);
        break;
      case 'over':
        window.clearTimeout(this.overTimer);
        this.overTimer = window.setTimeout(() => this.showOver(game), 1000);
        break;
    }
  }

  private showClear(game: Game): void {
    this.clearScreen.classList.remove('hidden');
    const rows = TALLY_LABELS.map(({ key, label, points }) => {
      const count = game.tally[key] ?? 0;
      return `<div class="tally-row"><span>${label}</span><i>×${count}</i><b>${String(count * points).padStart(4, '0')}</b></div>`;
    }).join('');
    this.clearTally.innerHTML = rows;
    this.clearScore.textContent = String(game.stageScore).padStart(6, '0');
  }

  private showOver(game: Game): void {
    this.overScreen.classList.remove('hidden');
    const score = game.totalScore;
    const best = Math.max(this.callbacks.getHi(), score);
    const isNewBest = score > 0 && score >= best;
    this.finalScore.textContent = String(score).padStart(6, '0');
    this.finalBest.textContent = isNewBest ? 'NEW HIGH SCORE' : `BEST ${String(best).padStart(6, '0')}`;
    this.finalBest.classList.toggle('highlight', isNewBest);
  }

  flash(color: string, strength = 0.4): void {
    this.flashEl.style.background = `radial-gradient(circle at 50% 55%, ${color}, transparent 72%)`;
    this.flashEl.animate([{ opacity: strength }, { opacity: 0 }], {
      duration: 420,
      easing: 'ease-out',
    });
  }

  showToast(text: string, color = '#ffc46a'): void {
    this.toastEl.textContent = text;
    this.toastEl.style.setProperty('--toast-accent', color);
    this.toastEl.classList.remove('hidden');
    this.toastEl.classList.remove('show');
    void this.toastEl.offsetWidth;
    this.toastEl.classList.add('show');
    window.clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => this.toastEl.classList.add('hidden'), 2000);
  }

  powerupToast(kind: PowerKind): void {
    this.showToast(POWER_LABELS[kind] ?? 'POWER UP', '#ffc46a');
  }

  update(game: Game): void {
    this.syncState(game);

    if (game.state === 'title') return;

    const stage = String(game.stage).padStart(2, '0');
    if (this.stageNum.textContent !== stage) this.stageNum.textContent = stage;

    const enemies = game.enemiesRemaining;
    if (enemies !== this.lastEnemies) {
      this.lastEnemies = enemies;
      const dots = this.enemyTrack.children;
      for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('dead', i >= enemies);
    }

    const score = game.totalScore;
    if (score !== this.lastScore) {
      this.lastScore = score;
      this.scoreNum.textContent = String(score).padStart(6, '0');
    }
    const hi = Math.max(this.callbacks.getHi(), score);
    if (hi !== this.lastHi) {
      this.lastHi = hi;
      this.hiNum.textContent = String(hi).padStart(6, '0');
    }

    for (let p = 0; p < 2; p++) {
      if (game.lives[p] !== this.lastLives[p]) {
        this.lastLives[p] = game.lives[p];
        const target = p === 0 ? this.p1Lives : this.p2Lives;
        target.innerHTML = renderLives(game.lives[p]);
      }
      if (game.playerStar[p] !== this.lastStars[p]) {
        this.lastStars[p] = game.playerStar[p];
        const target = p === 0 ? this.p1Stars : this.p2Stars;
        target.innerHTML = renderStars(game.playerStar[p]);
      }
    }
    this.p2Card.classList.toggle('hidden', game.mode !== 2);
    this.p1Card.classList.toggle('offline', game.mode === 2 && game.out[0]);
    this.p2Card.classList.toggle('offline', game.mode === 2 && game.out[1]);

    const effects = game.activePowerups;
    const chips: string[] = [];
    if (effects.shield > 0) chips.push(`<span class="chip shield">SHIELD <b>${Math.ceil(effects.shield)}</b></span>`);
    if (effects.freeze > 0) chips.push(`<span class="chip freeze">FREEZE <b>${Math.ceil(effects.freeze)}</b></span>`);
    if (effects.shovel > 0) chips.push(`<span class="chip shovel">FORT <b>${Math.ceil(effects.shovel)}</b></span>`);
    const key = chips.join('');
    if (key !== this.lastStatus) {
      this.lastStatus = key;
      this.statusStrip.innerHTML = key;
    }
  }
}

function renderLives(lives: number): string {
  const count = Math.max(0, Math.min(5, lives));
  return `<span class="count">${lives}</span>${'<i class="life-tank"></i>'.repeat(count)}`;
}

function renderStars(stars: number): string {
  let html = '';
  for (let i = 0; i < 3; i++) html += `<i class="pip${i < stars ? ' on' : ''}"></i>`;
  return html;
}

function stageSubtitle(stage: number): string {
  const titles = [
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
  ];
  return titles[(stage - 1) % titles.length];
}

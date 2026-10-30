import './style.css';
import { Game } from './core/game';
import { AudioEngine } from './audio/audio';
import { InputManager } from './input/input';
import { SceneView } from './render/scene';
import { Hud } from './ui/hud';

const canvas = document.getElementById('scene') as HTMLCanvasElement;
const game = new Game(Date.now() >>> 0);
const view = new SceneView(canvas);
const audio = new AudioEngine();
const input = new InputManager();

const HI_KEY = 'battle-city-reforged-hi';
let hiScore = 0;
try {
  hiScore = Number(window.localStorage.getItem(HI_KEY) ?? '0') || 0;
} catch {
  hiScore = 0;
}

const hud = new Hud(game, {
  getHi: () => hiScore,
  onStart: (mode) => {
    void startRun(mode);
  },
});

function saveHi(): void {
  if (game.totalScore > hiScore) {
    hiScore = game.totalScore;
    try {
      window.localStorage.setItem(HI_KEY, String(hiScore));
    } catch {
      /* storage may be unavailable */
    }
  }
}

async function startRun(mode: 1 | 2): Promise<void> {
  await audio.resume();
  view.startGame();
  audio.setMusic('stage');
  audio.sfx('start');
  game.start(mode);
  input.clearAxes();
}

input.onAction = (action) => {
  switch (action) {
    case 'start':
      if (game.state === 'title') void startRun(1);
      else if (game.state === 'over') void startRun(game.mode);
      break;
    case 'one':
      if (game.state === 'title') void startRun(1);
      break;
    case 'two':
      if (game.state === 'title') void startRun(2);
      break;
    case 'pause':
      if (game.state === 'playing' || game.state === 'paused') {
        const paused = game.togglePause();
        audio.sfx('pause');
        if (paused) {
          audio.setMusic('none');
          audio.setEngine(0);
        } else {
          audio.setMusic('stage');
        }
      }
      break;
    case 'mute': {
      if (!audio.isMuted) void audio.resume();
      const muted = audio.toggleMute();
      hud.setMuted(muted);
      break;
    }
    case 'retry':
      if (game.state === 'over') {
        saveHi();
        void startRun(game.mode);
      }
      break;
  }
};

let last = performance.now();
let accumulator = 0;
let unlocked = false;

async function unlockAudio(): Promise<void> {
  if (unlocked) return;
  unlocked = true;
  await audio.resume();
  if (game.state === 'title') audio.setMusic('title');
}
window.addEventListener('pointerdown', () => void unlockAudio());
window.addEventListener('keydown', () => void unlockAudio());

function dispatch(event: ReturnType<Game['drainEvents']>[number]): void {
  view.handleEvent(event, game);
  switch (event.type) {
    case 'stageStart':
      hud.onStageStart(game);
      audio.sfx('start');
      break;
    case 'shoot':
      audio.sfx(event.team === 'player' ? 'shoot' : 'enemyShoot');
      break;
    case 'brickBreak':
      audio.sfx('brick');
      break;
    case 'steelHit':
    case 'steelBreak':
      audio.sfx('steel');
      break;
    case 'tankHit':
      audio.sfx('hit');
      break;
    case 'tankDestroyed':
      audio.sfx(event.team === 'player' ? 'bigExplode' : 'explode');
      break;
    case 'playerOut':
      audio.sfx('out');
      hud.showToast('PLAYER DOWN', '#ff7a52');
      break;
    case 'powerupSpawn':
      audio.sfx('powerup');
      break;
    case 'powerupPickup':
      audio.sfx('pickup');
      hud.powerupToast(event.kind);
      break;
    case 'shield':
      audio.sfx('shield');
      break;
    case 'freeze':
      audio.sfx('freeze');
      break;
    case 'shovel':
      if (event.active) audio.sfx('shovel');
      break;
    case 'grenade':
      audio.sfx('grenade');
      hud.flash('#ffb15a', 0.5);
      break;
    case 'extraLife':
      audio.sfx('life');
      hud.showToast('EXTRA TANK', '#7dff9a');
      break;
    case 'baseHit':
      audio.sfx('base');
      hud.flash('#ff7a35', 0.6);
      break;
    case 'baseDestroyed':
      break;
    case 'stageClear':
      audio.sfx('clear');
      saveHi();
      break;
    case 'gameOver':
      audio.sfx('gameover');
      audio.setMusic('none');
      saveHi();
      break;
    case 'score':
      if (game.totalScore > hiScore) saveHi();
      break;
    default:
      break;
  }
}

function frame(now: number): void {
  const dt = Math.min(0.1, Math.max(0, (now - last) / 1000));
  last = now;

  const players = input.getPlayers(game.mode);

  if (game.state === 'playing') {
    accumulator += dt;
    let steps = 0;
    while (accumulator >= 1 / 60 && steps < 5) {
      game.update(1 / 60, players);
      accumulator -= 1 / 60;
      steps++;
    }
    if (steps === 5) accumulator = 0;
  } else {
    accumulator = 0;
    if (game.state === 'intro' || game.state === 'clear' || game.state === 'over') {
      game.update(dt, players);
    }
  }

  for (const event of game.drainEvents()) dispatch(event);

  hud.update(game);
  view.sync(game, dt);
  view.render();

  const engine = game.state === 'playing' ? Math.max(0.12, game.playerSpeed) : 0;
  audio.setEngine(engine);

  requestAnimationFrame(frame);
}

function handleResize(): void {
  view.resize();
}
window.addEventListener('resize', handleResize);

view.showTitle(game);
hud.ready();
requestAnimationFrame(frame);

// Debug/automation hook: lets tooling jump straight into a stage.
(window as any).__battleCity = {
  game,
  view,
  audio,
  hud,
  input,
  dispatch,
  start: (mode: 1 | 2 = 1) => startRun(mode),
  advance: (seconds: number) => {
    for (let i = 0; i < seconds * 60; i++) game.update(1 / 60, input.getPlayers(game.mode));
    for (const event of game.drainEvents()) dispatch(event);
  },
};

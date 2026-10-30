import { DIRS } from '../core/constants';
import type { Dir, PlayerInput } from '../core/types';

type Action = 'start' | 'pause' | 'mute' | 'retry' | 'one' | 'two';

const P1_KEYS: Record<string, Dir> = {
  ArrowUp: 0,
  ArrowRight: 1,
  ArrowDown: 2,
  ArrowLeft: 3,
};
const P2_KEYS: Record<string, Dir> = {
  KeyW: 0,
  KeyD: 1,
  KeyS: 2,
  KeyA: 3,
};

export class InputManager {
  onAction: ((action: Action) => void) | null = null;
  private keys = new Set<string>();
  private lastPressed: Array<Dir | null> = [null, null];
  private lastButtons: boolean[][] = [];
  private boundKeyDown: (e: KeyboardEvent) => void;
  private boundKeyUp: (e: KeyboardEvent) => void;

  constructor() {
    this.boundKeyDown = (event: KeyboardEvent) => this.keyDown(event);
    this.boundKeyUp = (event: KeyboardEvent) => this.keyUp(event);
    window.addEventListener('keydown', this.boundKeyDown);
    window.addEventListener('keyup', this.boundKeyUp);
    window.addEventListener('blur', () => this.keys.clear());
  }

  private keyDown(event: KeyboardEvent): void {
    const code = event.code;
    if (
      code.startsWith('Arrow') ||
      code === 'Space' ||
      code === 'Enter' ||
      code === 'KeyW' ||
      code === 'KeyA' ||
      code === 'KeyS' ||
      code === 'KeyD' ||
      code === 'KeyF'
    ) {
      event.preventDefault();
    }
    if (event.repeat) {
      this.keys.add(code);
      return;
    }
    this.keys.add(code);

    if (code in P1_KEYS) this.lastPressed[0] = P1_KEYS[code];
    if (code in P2_KEYS) this.lastPressed[1] = P2_KEYS[code];

    switch (code) {
      case 'Enter':
        this.onAction?.('start');
        break;
      case 'KeyP':
      case 'Escape':
        this.onAction?.('pause');
        break;
      case 'KeyM':
        this.onAction?.('mute');
        break;
      case 'KeyR':
        this.onAction?.('retry');
        break;
      case 'Digit1':
        this.onAction?.('one');
        break;
      case 'Digit2':
        this.onAction?.('two');
        break;
    }
  }

  private keyUp(event: KeyboardEvent): void {
    this.keys.delete(event.code);
  }

  getPlayers(mode: number): PlayerInput[] {
    const players: PlayerInput[] = [
      {
        up: this.keys.has('ArrowUp'),
        down: this.keys.has('ArrowDown'),
        left: this.keys.has('ArrowLeft'),
        right: this.keys.has('ArrowRight'),
        fire: this.keys.has('Space'),
        lastPressed: this.lastPressed[0],
      },
      {
        up: this.keys.has('KeyW'),
        down: this.keys.has('KeyS'),
        left: this.keys.has('KeyA'),
        right: this.keys.has('KeyD'),
        fire: this.keys.has('KeyF'),
        lastPressed: this.lastPressed[1],
      },
    ];

    const pads = typeof navigator.getGamepads === 'function' ? navigator.getGamepads() : [];
    for (let index = 0; index < Math.min(2, pads.length); index++) {
      const pad = pads[index];
      if (!pad) continue;
      const previous = this.lastButtons[index] ?? [];
      const pressed = pad.buttons.map((b) => b.pressed);
      const input = players[index];
      const axisX = pad.axes[0] ?? 0;
      const axisY = pad.axes[1] ?? 0;
      if (Math.abs(axisX) > 0.35 || Math.abs(axisY) > 0.35) {
        if (Math.abs(axisX) > Math.abs(axisY)) {
          input.left = input.left || axisX < -0.35;
          input.right = input.right || axisX > 0.35;
          if (axisX < -0.35) this.lastPressed[index] = 3;
          if (axisX > 0.35) this.lastPressed[index] = 1;
        } else {
          input.up = input.up || axisY < -0.35;
          input.down = input.down || axisY > 0.35;
          if (axisY < -0.35) this.lastPressed[index] = 0;
          if (axisY > 0.35) this.lastPressed[index] = 2;
        }
      }
      input.fire = input.fire || pressed[0] || pressed[2] || pressed[7];
      input.up = input.up || pressed[12];
      input.down = input.down || pressed[13];
      input.left = input.left || pressed[14];
      input.right = input.right || pressed[15];
      input.lastPressed = this.lastPressed[index] ?? input.lastPressed ?? null;

      if (pressed[9] && !previous[9]) this.onAction?.('start');
      if (pressed[8] && !previous[8]) this.onAction?.('pause');
      this.lastButtons[index] = pressed;
    }

    void mode;
    return players;
  }

  clearAxes(): void {
    this.keys.clear();
  }

  destroy(): void {
    window.removeEventListener('keydown', this.boundKeyDown);
    window.removeEventListener('keyup', this.boundKeyUp);
  }
}

export function directionVector(dir: Dir): { x: number; z: number } {
  return DIRS[dir];
}

import * as THREE from 'three';

type Ctx = CanvasRenderingContext2D;

let anisotropy = 4;

export function setTextureAnisotropy(value: number): void {
  anisotropy = Math.max(1, Math.min(16, value));
}

function makeCanvas(size: number): { canvas: HTMLCanvasElement; ctx: Ctx } {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  return { canvas, ctx };
}

function finish(canvas: HTMLCanvasElement, srgb = true, repeat?: [number, number]): THREE.CanvasTexture {
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = anisotropy;
  if (srgb) texture.colorSpace = THREE.SRGBColorSpace;
  if (repeat) texture.repeat.set(repeat[0], repeat[1]);
  texture.needsUpdate = true;
  return texture;
}

function noise(ctx: Ctx, size: number, amount: number, alpha: number, light = true): void {
  for (let i = 0; i < amount; i++) {
    const v = light ? 255 : 0;
    ctx.fillStyle = `rgba(${v},${v},${v},${Math.random() * alpha})`;
    ctx.fillRect(Math.random() * size, Math.random() * size, Math.random() * 2 + 0.5, Math.random() * 2 + 0.5);
  }
}

const cache = new Map<string, THREE.Texture>();

function cached<T extends THREE.Texture>(key: string, make: () => T): T {
  const existing = cache.get(key);
  if (existing) return existing as T;
  const value = make();
  cache.set(key, value);
  return value;
}

export function brickTexture(): THREE.CanvasTexture {
  return cached('brick', () => {
    const size = 256;
    const { canvas, ctx } = makeCanvas(size);
    ctx.fillStyle = '#2a1c16';
    ctx.fillRect(0, 0, size, size);

    const rows = 6;
    const rowH = size / rows;
    const brickW = size / 3;
    for (let row = 0; row < rows; row++) {
      const offset = row % 2 === 0 ? 0 : -brickW / 2;
      for (let col = -1; col < 4; col++) {
        const x = col * brickW + offset + 3;
        const y = row * rowH + 3;
        const w = brickW - 6;
        const h = rowH - 6;
        const tone = 0.8 + Math.random() * 0.35;
        const r = Math.floor(114 * tone);
        const g = Math.floor(82 * tone);
        const b = Math.floor(69 * tone);
        const grad = ctx.createLinearGradient(x, y, x, y + h);
        grad.addColorStop(0, `rgb(${r + 14},${g + 9},${b + 7})`);
        grad.addColorStop(0.55, `rgb(${r},${g},${b})`);
        grad.addColorStop(1, `rgb(${r - 20},${g - 14},${b - 11})`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, 3);
        ctx.fill();

        ctx.fillStyle = 'rgba(255,220,190,0.16)';
        ctx.fillRect(x + 1, y + 1, w - 2, 2);
        ctx.fillStyle = 'rgba(0,0,0,0.25)';
        ctx.fillRect(x + 1, y + h - 3, w - 2, 2);

        for (let n = 0; n < 8; n++) {
          ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.14})`;
          ctx.fillRect(x + Math.random() * w, y + Math.random() * h, Math.random() * 8 + 2, Math.random() * 3 + 1);
        }
      }
    }
    noise(ctx, size, 1600, 0.14, false);
    noise(ctx, size, 900, 0.12, true);
    return finish(canvas, true);
  });
}

export function metalTexture(): THREE.CanvasTexture {
  return cached('metal', () => {
    const size = 256;
    const { canvas, ctx } = makeCanvas(size);
    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, '#8b949e');
    grad.addColorStop(0.45, '#6c757d');
    grad.addColorStop(0.55, '#7c858d');
    grad.addColorStop(1, '#515960');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    for (let i = 0; i < 260; i++) {
      ctx.strokeStyle = `rgba(255,255,255,${Math.random() * 0.09})`;
      ctx.lineWidth = Math.random() * 1.6;
      ctx.beginPath();
      const y = Math.random() * size;
      ctx.moveTo(0, y);
      ctx.lineTo(size, y + Math.random() * 3 - 1.5);
      ctx.stroke();
    }
    for (let i = 0; i < 50; i++) {
      ctx.strokeStyle = `rgba(20,24,28,${Math.random() * 0.35})`;
      ctx.lineWidth = Math.random() * 2;
      const x = Math.random() * size;
      const y = Math.random() * size;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.random() * 40 - 20, y + Math.random() * 40 - 20);
      ctx.stroke();
    }

    // Rivets along the border.
    for (let i = 0; i < 6; i++) {
      for (const [x, y] of [
        [14 + i * 45, 14],
        [14 + i * 45, size - 14],
        [14, 14 + i * 45],
        [size - 14, 14 + i * 45],
      ]) {
        const r = 4.2;
        const g = ctx.createRadialGradient(x - 1, y - 1, 0.5, x, y, r);
        g.addColorStop(0, '#cdd6de');
        g.addColorStop(0.6, '#7e8891');
        g.addColorStop(1, '#3a4148');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    noise(ctx, size, 900, 0.12, false);
    return finish(canvas, true);
  });
}

export function groundTexture(): THREE.CanvasTexture {
  return cached('ground', () => {
    const size = 1024;
    const { canvas, ctx } = makeCanvas(size);
    ctx.fillStyle = '#565b57';
    ctx.fillRect(0, 0, size, size);

    for (let i = 0; i < 2400; i++) {
      const tone = Math.random();
      ctx.fillStyle = `rgba(${tone > 0.5 ? 28 : 205},${tone > 0.5 ? 30 : 212},${tone > 0.5 ? 27 : 200},${Math.random() * 0.16})`;
      const s = Math.random() * 5 + 1;
      ctx.fillRect(Math.random() * size, Math.random() * size, s, s);
    }

    // Block seams every 1/13th.
    const step = size / 13;
    for (let i = 0; i <= 13; i++) {
      ctx.strokeStyle = 'rgba(28,24,19,0.45)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(i * step, 0);
      ctx.lineTo(i * step, size);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * step);
      ctx.lineTo(size, i * step);
      ctx.stroke();
      ctx.strokeStyle = 'rgba(220,205,180,0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(i * step + 2, 0);
      ctx.lineTo(i * step + 2, size);
      ctx.stroke();
    }

    // Weathered patches.
    for (let i = 0; i < 34; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const r = 20 + Math.random() * 90;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      const dark = Math.random() > 0.45;
      grad.addColorStop(0, dark ? 'rgba(30,26,20,0.18)' : 'rgba(214,198,164,0.11)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }

    // Hairline cracks.
    ctx.strokeStyle = 'rgba(25,21,17,0.35)';
    for (let i = 0; i < 22; i++) {
      let x = Math.random() * size;
      let y = Math.random() * size;
      ctx.beginPath();
      ctx.moveTo(x, y);
      for (let s = 0; s < 7; s++) {
        x += Math.random() * 30 - 15;
        y += Math.random() * 30 - 15;
        ctx.lineTo(x, y);
      }
      ctx.lineWidth = Math.random() * 1.4;
      ctx.stroke();
    }
    noise(ctx, size, 2400, 0.1, false);
    return finish(canvas, true);
  });
}

export function asphaltTexture(): THREE.CanvasTexture {
  return cached('asphalt', () => {
    const size = 512;
    const { canvas, ctx } = makeCanvas(size);
    ctx.fillStyle = '#17191c';
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 7000; i++) {
      const v = Math.random() * 90;
      ctx.fillStyle = `rgba(${v},${v},${v + 4},${Math.random() * 0.22})`;
      ctx.fillRect(Math.random() * size, Math.random() * size, Math.random() * 2 + 0.5, Math.random() * 2 + 0.5);
    }
    for (let i = 0; i < 18; i++) {
      ctx.strokeStyle = `rgba(0,0,0,${0.2 + Math.random() * 0.3})`;
      ctx.lineWidth = 1 + Math.random() * 2;
      ctx.beginPath();
      let x = Math.random() * size;
      let y = Math.random() * size;
      ctx.moveTo(x, y);
      for (let s = 0; s < 6; s++) {
        x += Math.random() * 40 - 20;
        y += Math.random() * 40 - 20;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    return finish(canvas, true, [4, 4]);
  });
}

export function iceTexture(): THREE.CanvasTexture {
  return cached('ice', () => {
    const size = 256;
    const { canvas, ctx } = makeCanvas(size);
    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, '#b9d8e4');
    grad.addColorStop(0.45, '#8fb8c9');
    grad.addColorStop(1, '#a9cfdd');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    for (let i = 0; i < 26; i++) {
      ctx.strokeStyle = `rgba(245,253,255,${0.2 + Math.random() * 0.5})`;
      ctx.lineWidth = Math.random() * 1.6 + 0.3;
      ctx.beginPath();
      let x = Math.random() * size;
      let y = Math.random() * size;
      ctx.moveTo(x, y);
      const segs = 2 + Math.floor(Math.random() * 4);
      for (let s = 0; s < segs; s++) {
        x += Math.random() * 60 - 30;
        y += Math.random() * 60 - 30;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    for (let i = 0; i < 28; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const r = Math.random() * 24 + 4;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(255,255,255,0.28)');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
    noise(ctx, size, 900, 0.14, true);
    return finish(canvas, true);
  });
}

export function forestFloorTexture(): THREE.CanvasTexture {
  return cached('forest', () => {
    const size = 256;
    const { canvas, ctx } = makeCanvas(size);
    ctx.fillStyle = '#33472a';
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 900; i++) {
      const g = 60 + Math.random() * 70;
      ctx.fillStyle = `rgba(${g * 0.55},${g},${g * 0.4},${Math.random() * 0.42})`;
      ctx.fillRect(Math.random() * size, Math.random() * size, Math.random() * 4 + 1, Math.random() * 6 + 1);
    }
    for (let i = 0; i < 20; i++) {
      ctx.fillStyle = `rgba(20,30,16,${Math.random() * 0.3})`;
      ctx.beginPath();
      ctx.arc(Math.random() * size, Math.random() * size, Math.random() * 26 + 6, 0, Math.PI * 2);
      ctx.fill();
    }
    return finish(canvas, true);
  });
}

export function waterNormalTexture(): THREE.DataTexture {
  return cached('waterNormal', () => {
    const size = 128;
    const data = new Uint8Array(size * size * 4);
    const height = (x: number, y: number) =>
      Math.sin(x * 0.16 + y * 0.07) * 0.5 +
      Math.sin(x * 0.05 - y * 0.13) * 0.5 +
      Math.sin(x * 0.31 + y * 0.23) * 0.22;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const dx = height(x + 1, y) - height(x - 1, y);
        const dy = height(x, y + 1) - height(x, y - 1);
        const nx = -dx * 0.9;
        const ny = -dy * 0.9;
        const len = Math.hypot(nx, ny, 1);
        const i = (y * size + x) * 4;
        data[i] = ((nx / len) * 0.5 + 0.5) * 255;
        data[i + 1] = ((ny / len) * 0.5 + 0.5) * 255;
        data[i + 2] = ((1 / len) * 0.5 + 0.5) * 255;
        data[i + 3] = 255;
      }
    }
    const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    texture.needsUpdate = true;
    return texture;
  });
}

export function treadTexture(): THREE.CanvasTexture {
  return cached('tread', () => {
    const size = 128;
    const { canvas, ctx } = makeCanvas(size);
    ctx.fillStyle = '#23262a';
    ctx.fillRect(0, 0, size, size);
    for (let y = 0; y < size; y += 16) {
      ctx.fillStyle = '#40454b';
      ctx.fillRect(0, y, size, 7);
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      ctx.fillRect(0, y, size, 1.5);
      ctx.fillStyle = 'rgba(0,0,0,0.4)';
      ctx.fillRect(0, y + 8, size, 2);
    }
    return finish(canvas, true, [1, 2]);
  });
}

export function sparkTexture(): THREE.CanvasTexture {
  return cached('spark', () => {
    const size = 64;
    const { canvas, ctx } = makeCanvas(size);
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.25, 'rgba(255,235,180,0.95)');
    g.addColorStop(0.6, 'rgba(255,150,50,0.45)');
    g.addColorStop(1, 'rgba(255,90,10,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    return finish(canvas);
  });
}

export function smokeTexture(): THREE.CanvasTexture {
  return cached('smoke', () => {
    const size = 128;
    const { canvas, ctx } = makeCanvas(size);
    ctx.clearRect(0, 0, size, size);
    for (let i = 0; i < 18; i++) {
      const x = size / 2 + (Math.random() - 0.5) * size * 0.45;
      const y = size / 2 + (Math.random() - 0.5) * size * 0.45;
      const r = size * (0.16 + Math.random() * 0.22);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(210,205,198,0.22)');
      g.addColorStop(0.6, 'rgba(160,155,148,0.1)');
      g.addColorStop(1, 'rgba(120,115,110,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
    return finish(canvas);
  });
}

export function scorchTexture(): THREE.CanvasTexture {
  return cached('scorch', () => {
    const size = 128;
    const { canvas, ctx } = makeCanvas(size);
    ctx.clearRect(0, 0, size, size);
    for (let i = 0; i < 26; i++) {
      const x = size / 2 + (Math.random() - 0.5) * size * 0.4;
      const y = size / 2 + (Math.random() - 0.5) * size * 0.4;
      const r = size * (0.1 + Math.random() * 0.3);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(10,8,7,0.4)');
      g.addColorStop(0.7, 'rgba(16,12,10,0.18)');
      g.addColorStop(1, 'rgba(20,15,12,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
    return finish(canvas);
  });
}

export function beamTexture(): THREE.CanvasTexture {
  return cached('beam', () => {
    const size = 64;
    const { canvas, ctx } = makeCanvas(size);
    const grad = ctx.createLinearGradient(0, 0, 0, size);
    grad.addColorStop(0, 'rgba(255,255,255,0)');
    grad.addColorStop(0.4, 'rgba(255,230,170,0.55)');
    grad.addColorStop(0.7, 'rgba(255,190,90,0.8)');
    grad.addColorStop(1, 'rgba(255,150,40,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(size * 0.25, 0, size * 0.5, size);
    return finish(canvas);
  });
}

export function concreteTexture(): THREE.CanvasTexture {
  return cached('concrete', () => {
    const size = 512;
    const { canvas, ctx } = makeCanvas(size);
    ctx.fillStyle = '#2a2c30';
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 5000; i++) {
      const v = 30 + Math.random() * 60;
      ctx.fillStyle = `rgba(${v},${v + 2},${v + 5},${Math.random() * 0.25})`;
      ctx.fillRect(Math.random() * size, Math.random() * size, Math.random() * 3 + 1, Math.random() * 3 + 1);
    }
    noise(ctx, size, 1600, 0.16, false);
    return finish(canvas, true, [6, 6]);
  });
}

export function disposeTextures(): void {
  for (const texture of cache.values()) texture.dispose();
  cache.clear();
}

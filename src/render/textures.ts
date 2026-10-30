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

/** Deterministic hash so texture detail is stable between reloads. */
function hash2(x: number, y: number): number {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

/** Converts a greyscale height canvas into a tangent-space normal map. */
function normalFromHeight(heightCanvas: HTMLCanvasElement, strength: number): THREE.DataTexture {
  const size = heightCanvas.width;
  const ctx = heightCanvas.getContext('2d')!;
  const src = ctx.getImageData(0, 0, size, size).data;
  const out = new Uint8Array(size * size * 4);
  const h = (x: number, y: number): number => {
    const xi = (x + size) % size;
    const yi = (y + size) % size;
    return src[(yi * size + xi) * 4] / 255;
  };
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (h(x + 1, y) - h(x - 1, y)) * strength;
      const dy = (h(x, y + 1) - h(x, y - 1)) * strength;
      const nx = -dx;
      const ny = -dy;
      const len = Math.hypot(nx, ny, 1);
      const i = (y * size + x) * 4;
      out[i] = Math.round(((nx / len) * 0.5 + 0.5) * 255);
      out[i + 1] = Math.round(((ny / len) * 0.5 + 0.5) * 255);
      out[i + 2] = Math.round(((1 / len) * 0.5 + 0.5) * 255);
      out[i + 3] = 255;
    }
  }
  const texture = new THREE.DataTexture(out, size, size, THREE.RGBAFormat);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = anisotropy;
  texture.needsUpdate = true;
  return texture;
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
    const size = 2048;
    const { canvas, ctx } = makeCanvas(size);
    // Packed, oil-stained earth rather than a flat green table.
    ctx.fillStyle = '#48453c';
    ctx.fillRect(0, 0, size, size);

    // Broad patches of mud, dust, ash and worn concrete.
    for (let i = 0; i < 110; i++) {
      const x = hash2(i, 1) * size;
      const y = hash2(i, 2) * size;
      const r = 60 + hash2(i, 3) * 300;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      const kind = hash2(i, 4);
      if (kind > 0.62) g.addColorStop(0, 'rgba(104,92,68,0.30)');
      else if (kind > 0.3) g.addColorStop(0, 'rgba(24,24,22,0.34)');
      else g.addColorStop(0, 'rgba(96,98,94,0.16)');
      g.addColorStop(0.7, 'rgba(0,0,0,0.05)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }

    // Gravel and grit.
    for (let i = 0; i < 24000; i++) {
      const tone = Math.random();
      const v = 40 + tone * 120;
      ctx.fillStyle = `rgba(${v},${v - 2},${v - 8},${Math.random() * 0.3})`;
      const s = Math.random() * 3.4 + 0.6;
      ctx.fillRect(Math.random() * size, Math.random() * size, s, s);
    }

    // Tyre ruts: two worn bands crossing the field.
    ctx.save();
    for (const [sx, ex, sy, ey, width] of [
      [size * 0.18, size * 0.92, size * 0.34, size * 0.78, 30],
      [size * 0.72, size * 0.28, size * 0.16, size * 0.9, 22],
    ] as const) {
      for (const offset of [-width * 0.5, width * 0.5]) {
        const grad = ctx.createLinearGradient(0, sy + offset, 0, sy + offset + width * 0.5);
        grad.addColorStop(0, 'rgba(18,17,15,0)');
        grad.addColorStop(0.5, 'rgba(18,17,15,0.22)');
        grad.addColorStop(1, 'rgba(18,17,15,0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = width * 0.5;
        ctx.beginPath();
        ctx.moveTo(sx, sy + offset);
        ctx.lineTo(ex, ey + offset);
        ctx.stroke();
      }
    }
    ctx.restore();

    // Tile seams, soft and slightly broken rather than graph-paper.
    const step = size / 13;
    for (let i = 0; i <= 13; i++) {
      ctx.strokeStyle = 'rgba(20,18,15,0.30)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(i * step, 0);
      ctx.lineTo(i * step, size);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * step);
      ctx.lineTo(size, i * step);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(190,182,160,0.05)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(i * step + 2, 0);
      ctx.lineTo(i * step + 2, size);
      ctx.stroke();
    }

    // Cracks and scattered debris.
    for (let i = 0; i < 34; i++) {
      let x = hash2(i, 9) * size;
      let y = hash2(i, 10) * size;
      ctx.strokeStyle = `rgba(16,14,12,${0.25 + hash2(i, 11) * 0.3})`;
      ctx.lineWidth = 0.8 + hash2(i, 12) * 1.4;
      ctx.beginPath();
      ctx.moveTo(x, y);
      for (let s = 0; s < 8; s++) {
        x += (hash2(i, 20 + s) - 0.5) * 90;
        y += (hash2(i, 30 + s) - 0.5) * 90;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Scorch marks from earlier battles.
    for (let i = 0; i < 16; i++) {
      const x = hash2(i, 40) * size;
      const y = hash2(i, 41) * size;
      const r = 26 + hash2(i, 42) * 70;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(8,7,6,0.5)');
      g.addColorStop(0.55, 'rgba(12,10,9,0.24)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }

    noise(ctx, size, 5000, 0.1, false);
    noise(ctx, size, 2600, 0.08, true);
    return finish(canvas, true);
  });
}

export function groundNormalTexture(): THREE.DataTexture {
  return cached('groundNormal', () => {
    const size = 1024;
    const { canvas, ctx } = makeCanvas(size);
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, size, size);

    // Granular relief.
    for (let i = 0; i < 16000; i++) {
      const v = Math.floor(90 + Math.random() * 90);
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(Math.random() * size, Math.random() * size, Math.random() * 3 + 1, Math.random() * 3 + 1);
    }
    // Seams sit lower than the tiles.
    const step = size / 13;
    ctx.lineWidth = 3;
    for (let i = 0; i <= 13; i++) {
      ctx.strokeStyle = 'rgba(70,70,70,0.9)';
      ctx.beginPath();
      ctx.moveTo(i * step, 0);
      ctx.lineTo(i * step, size);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * step);
      ctx.lineTo(size, i * step);
      ctx.stroke();
    }
    return normalFromHeight(canvas, 2.4);
  });
}

export function groundRoughnessTexture(): THREE.CanvasTexture {
  return cached('groundRough', () => {
    const size = 1024;
    const { canvas, ctx } = makeCanvas(size);
    ctx.fillStyle = '#e8e8e8';
    ctx.fillRect(0, 0, size, size);
    // Oil and water sheen: darker = smoother.
    for (let i = 0; i < 26; i++) {
      const x = hash2(i, 60) * size;
      const y = hash2(i, 61) * size;
      const r = 18 + hash2(i, 62) * 60;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(40,40,40,0.85)');
      g.addColorStop(0.6, 'rgba(120,120,120,0.35)');
      g.addColorStop(1, 'rgba(200,200,200,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
    noise(ctx, size, 3000, 0.25, true);
    return finish(canvas, false);
  });
}

export function brickNormalTexture(): THREE.DataTexture {
  return cached('brickNormal', () => {
    const size = 512;
    const { canvas, ctx } = makeCanvas(size);
    ctx.fillStyle = '#4a4a4a';
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
        const grad = ctx.createLinearGradient(x, y, x, y + h);
        grad.addColorStop(0, '#c8c8c8');
        grad.addColorStop(0.5, '#dcdcdc');
        grad.addColorStop(1, '#b0b0b0');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, 4);
        ctx.fill();
        // Pitted brick surface.
        for (let n = 0; n < 40; n++) {
          const v = Math.floor(150 + Math.random() * 70);
          ctx.fillStyle = `rgb(${v},${v},${v})`;
          ctx.fillRect(x + Math.random() * w, y + Math.random() * h, 2, 2);
        }
      }
    }
    return normalFromHeight(canvas, 2.2);
  });
}

export function steelNormalTexture(): THREE.DataTexture {
  return cached('steelNormal', () => {
    const size = 512;
    const { canvas, ctx } = makeCanvas(size);
    ctx.fillStyle = '#8a8a8a';
    ctx.fillRect(0, 0, size, size);

    // Recessed panel with raised rim.
    ctx.strokeStyle = '#d8d8d8';
    ctx.lineWidth = 10;
    ctx.strokeRect(26, 26, size - 52, size - 52);
    ctx.strokeStyle = '#5a5a5a';
    ctx.lineWidth = 6;
    ctx.strokeRect(40, 40, size - 80, size - 80);
    ctx.fillStyle = '#9c9c9c';
    ctx.fillRect(40, 40, size - 80, size - 80);

    // Rivets.
    for (let i = 0; i < 6; i++) {
      for (const [x, y] of [
        [58 + i * 79, 58],
        [58 + i * 79, size - 58],
        [58, 58 + i * 79],
        [size - 58, 58 + i * 79],
      ]) {
        const g = ctx.createRadialGradient(x - 1, y - 1, 1, x, y, 9);
        g.addColorStop(0, '#ffffff');
        g.addColorStop(0.55, '#c0c0c0');
        g.addColorStop(1, '#6a6a6a');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 9, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    noise(ctx, size, 1200, 0.15, true);
    return normalFromHeight(canvas, 2.0);
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

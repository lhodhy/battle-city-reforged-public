import * as THREE from 'three';
import { FIELD } from '../core/constants';

export type WeatherKind = 'embers' | 'rain' | 'snow' | 'clear';

/** Each sector has its own weather so stages feel like places, not resets. */
export function weatherForStage(stage: number): WeatherKind {
  const cycle: WeatherKind[] = ['embers', 'rain', 'snow', 'clear'];
  return cycle[(Math.max(1, stage) - 1) % cycle.length];
}

const AREA = FIELD + 10;
const HEIGHT = 11;
const ORIGIN = FIELD / 2;

/**
 * GPU-driven battlefield weather: rising embers, slanted rain with lightning,
 * or drifting snow. One draw call per kind, no per-frame CPU work.
 */
export class Weather {
  readonly group = new THREE.Group();

  private kind: WeatherKind = 'clear';
  private time = 0;
  private rain: THREE.LineSegments;
  private snow: THREE.Points;
  private embers: THREE.Points;
  private rainUniforms: Record<string, THREE.IUniform>;
  private snowUniforms: Record<string, THREE.IUniform>;
  private emberUniforms: Record<string, THREE.IUniform>;
  private nextStrike = 3;
  private pendingFlash = 0;
  private materials: THREE.ShaderMaterial[] = [];
  private geometries: THREE.BufferGeometry[] = [];
  private textures: THREE.Texture[] = [];

  constructor(lowQuality = false) {
    this.group.name = 'weather';
    const scale = lowQuality ? 0.55 : 1;

    // --- Rain: one line segment per drop, animated in the vertex shader. ---
    const drops = Math.round(1400 * scale);
    const rainPos = new Float32Array(drops * 2 * 3);
    const rainBase = new Float32Array(drops * 2 * 3);
    const rainSpeed = new Float32Array(drops * 2);
    const rainTip = new Float32Array(drops * 2);
    for (let i = 0; i < drops; i++) {
      const x = (Math.random() - 0.5) * AREA;
      const y = Math.random() * HEIGHT;
      const z = (Math.random() - 0.5) * AREA;
      const speed = 14 + Math.random() * 8;
      for (let v = 0; v < 2; v++) {
        const n = i * 2 + v;
        rainBase[n * 3] = x;
        rainBase[n * 3 + 1] = y;
        rainBase[n * 3 + 2] = z;
        rainSpeed[n] = speed;
        rainTip[n] = v;
        rainPos[n * 3] = x;
        rainPos[n * 3 + 1] = y;
        rainPos[n * 3 + 2] = z;
      }
    }
    const rainGeo = new THREE.BufferGeometry();
    rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
    rainGeo.setAttribute('aBase', new THREE.BufferAttribute(rainBase, 3));
    rainGeo.setAttribute('aSpeed', new THREE.BufferAttribute(rainSpeed, 1));
    rainGeo.setAttribute('aTip', new THREE.BufferAttribute(rainTip, 1));
    this.rainUniforms = {
      uTime: { value: 0 },
      uHeight: { value: HEIGHT },
      uWind: { value: 2.6 },
      uLength: { value: 0.55 },
      uOpacity: { value: 0.5 },
    };
    const rainMat = new THREE.ShaderMaterial({
      uniforms: this.rainUniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        uniform float uTime;
        uniform float uHeight;
        uniform float uWind;
        uniform float uLength;
        attribute vec3 aBase;
        attribute float aSpeed;
        attribute float aTip;
        varying float vFade;
        void main() {
          float y = mod(aBase.y - uTime * aSpeed, uHeight) - aTip * uLength;
          if (y < 0.0) y += uHeight;
          vec3 p = vec3(aBase.x + uTime * uWind * 0.35, y, aBase.z);
          p.x = mod(p.x + ${(AREA / 2).toFixed(1)}, ${AREA.toFixed(1)}) - ${(AREA / 2).toFixed(1)};
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          vFade = smoothstep(0.0, 2.0, y) * (1.0 - smoothstep(uHeight - 3.0, uHeight, y));
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uOpacity;
        varying float vFade;
        void main() {
          gl_FragColor = vec4(0.62, 0.76, 0.92, uOpacity * vFade);
        }
      `,
    });
    this.rain = new THREE.LineSegments(rainGeo, rainMat);
    this.rain.position.set(ORIGIN, 0, ORIGIN);
    this.rain.frustumCulled = false;
    this.rain.visible = false;
    this.group.add(this.rain);
    this.materials.push(rainMat);
    this.geometries.push(rainGeo);

    // --- Snow ---
    const flakes = Math.round(900 * scale);
    const snowBase = new Float32Array(flakes * 3);
    const snowSpeed = new Float32Array(flakes);
    const snowPhase = new Float32Array(flakes);
    const snowSize = new Float32Array(flakes);
    const snowPos = new Float32Array(flakes * 3);
    for (let i = 0; i < flakes; i++) {
      snowBase[i * 3] = (Math.random() - 0.5) * AREA;
      snowBase[i * 3 + 1] = Math.random() * HEIGHT;
      snowBase[i * 3 + 2] = (Math.random() - 0.5) * AREA;
      snowSpeed[i] = 0.7 + Math.random() * 1.2;
      snowPhase[i] = Math.random() * Math.PI * 2;
      snowSize[i] = 0.05 + Math.random() * 0.075;
      snowPos[i * 3] = snowBase[i * 3];
      snowPos[i * 3 + 1] = snowBase[i * 3 + 1];
      snowPos[i * 3 + 2] = snowBase[i * 3 + 2];
    }
    const snowGeo = new THREE.BufferGeometry();
    snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPos, 3));
    snowGeo.setAttribute('aBase', new THREE.BufferAttribute(snowBase, 3));
    snowGeo.setAttribute('aSpeed', new THREE.BufferAttribute(snowSpeed, 1));
    snowGeo.setAttribute('aPhase', new THREE.BufferAttribute(snowPhase, 1));
    snowGeo.setAttribute('aSize', new THREE.BufferAttribute(snowSize, 1));
    this.snowUniforms = {
      uTime: { value: 0 },
      uHeight: { value: HEIGHT },
      uPixel: { value: 1 },
    };
    const snowMat = this.pointMaterial(this.snowUniforms, {
      color: 'vec3(0.86, 0.93, 1.0)',
      alpha: 0.85,
      additive: false,
      body: /* glsl */ `
        float y = mod(aBase.y - uTime * aSpeed, uHeight);
        float phase = aPhase + uTime * 0.55;
        vec3 p = vec3(aBase.x + sin(phase) * 0.7, y, aBase.z + cos(phase * 0.8) * 0.55);
        p.x = mod(p.x + ${(AREA / 2).toFixed(1)}, ${AREA.toFixed(1)}) - ${(AREA / 2).toFixed(1)};
        p.z = mod(p.z + ${(AREA / 2).toFixed(1)}, ${AREA.toFixed(1)}) - ${(AREA / 2).toFixed(1)};
        vFade = smoothstep(0.0, 1.5, y) * (1.0 - smoothstep(uHeight - 2.5, uHeight, y));
      `,
    });
    this.snow = new THREE.Points(snowGeo, snowMat);
    this.snow.position.set(ORIGIN, 0, ORIGIN);
    this.snow.frustumCulled = false;
    this.snow.visible = false;
    this.group.add(this.snow);
    this.materials.push(snowMat);
    this.geometries.push(snowGeo);

    // --- Embers ---
    const motes = Math.round(340 * scale);
    const emberBase = new Float32Array(motes * 3);
    const emberSpeed = new Float32Array(motes);
    const emberPhase = new Float32Array(motes);
    const emberSize = new Float32Array(motes);
    const emberPos = new Float32Array(motes * 3);
    for (let i = 0; i < motes; i++) {
      emberBase[i * 3] = (Math.random() - 0.5) * AREA;
      emberBase[i * 3 + 1] = Math.random() * HEIGHT;
      emberBase[i * 3 + 2] = (Math.random() - 0.5) * AREA;
      emberSpeed[i] = 0.5 + Math.random() * 1.1;
      emberPhase[i] = Math.random() * Math.PI * 2;
      emberSize[i] = 0.03 + Math.random() * 0.06;
      emberPos[i * 3] = emberBase[i * 3];
      emberPos[i * 3 + 1] = emberBase[i * 3 + 1];
      emberPos[i * 3 + 2] = emberBase[i * 3 + 2];
    }
    const emberGeo = new THREE.BufferGeometry();
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPos, 3));
    emberGeo.setAttribute('aBase', new THREE.BufferAttribute(emberBase, 3));
    emberGeo.setAttribute('aSpeed', new THREE.BufferAttribute(emberSpeed, 1));
    emberGeo.setAttribute('aPhase', new THREE.BufferAttribute(emberPhase, 1));
    emberGeo.setAttribute('aSize', new THREE.BufferAttribute(emberSize, 1));
    this.emberUniforms = {
      uTime: { value: 0 },
      uHeight: { value: HEIGHT },
      uPixel: { value: 1 },
    };
    const emberMat = this.pointMaterial(this.emberUniforms, {
      color: 'vec3(1.0, 0.52, 0.16)',
      alpha: 0.9,
      additive: true,
      body: /* glsl */ `
        float y = mod(aBase.y + uTime * aSpeed, uHeight);
        float phase = aPhase + uTime * 1.4;
        vec3 p = vec3(aBase.x + sin(phase) * 0.5, y, aBase.z + cos(phase * 0.7) * 0.4);
        p.x = mod(p.x + ${(AREA / 2).toFixed(1)}, ${AREA.toFixed(1)}) - ${(AREA / 2).toFixed(1)};
        float twinkle = 0.55 + 0.45 * sin(phase * 3.0);
        vFade = smoothstep(0.0, 1.2, y) * (1.0 - smoothstep(uHeight - 4.0, uHeight, y)) * twinkle;
      `,
    });
    this.embers = new THREE.Points(emberGeo, emberMat);
    this.embers.position.set(ORIGIN, 0, ORIGIN);
    this.embers.frustumCulled = false;
    this.embers.visible = false;
    this.group.add(this.embers);
    this.materials.push(emberMat);
    this.geometries.push(emberGeo);
  }

  private pointMaterial(
    uniforms: Record<string, THREE.IUniform>,
    options: { color: string; alpha: number; additive: boolean; body: string },
  ): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: options.additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      vertexShader: /* glsl */ `
        uniform float uTime;
        uniform float uHeight;
        uniform float uPixel;
        attribute vec3 aBase;
        attribute float aSpeed;
        attribute float aPhase;
        attribute float aSize;
        varying float vFade;
        void main() {
          ${options.body}
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = clamp(aSize * uPixel / max(0.001, -mv.z), 0.0, 64.0);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        varying float vFade;
        void main() {
          vec2 d = gl_PointCoord - vec2(0.5);
          float r = length(d);
          if (r > 0.5) discard;
          float soft = smoothstep(0.5, 0.05, r);
          gl_FragColor = vec4(${options.color}, soft * vFade * ${options.alpha.toFixed(2)});
        }
      `,
    });
  }

  setPixelScale(scale: number): void {
    (this.snowUniforms.uPixel.value as number) = scale;
    (this.emberUniforms.uPixel.value as number) = scale;
  }

  set(kind: WeatherKind): void {
    this.kind = kind;
    this.rain.visible = kind === 'rain';
    this.snow.visible = kind === 'snow';
    this.embers.visible = kind === 'embers';
    this.nextStrike = 2 + Math.random() * 4;
  }

  get current(): WeatherKind {
    return this.kind;
  }

  /** Advances the shader clock and returns a lightning flash amount (0..1). */
  update(dt: number): number {
    this.time += dt;
    (this.rainUniforms.uTime.value as number) = this.time;
    (this.snowUniforms.uTime.value as number) = this.time;
    (this.emberUniforms.uTime.value as number) = this.time;

    if (this.kind === 'rain') {
      this.nextStrike -= dt;
      if (this.nextStrike <= 0) {
        this.nextStrike = 4 + Math.random() * 6;
        this.pendingFlash = 1;
      }
    } else {
      this.pendingFlash = 0;
    }
    const flash = this.pendingFlash;
    this.pendingFlash = Math.max(0, this.pendingFlash - dt * 6);
    return flash;
  }

  dispose(): void {
    for (const mat of this.materials) mat.dispose();
    for (const geo of this.geometries) geo.dispose();
    for (const tex of this.textures) tex.dispose();
    this.group.removeFromParent();
  }
}

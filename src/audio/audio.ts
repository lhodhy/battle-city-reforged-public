type MusicMode = 'none' | 'title' | 'stage';

interface Track {
  tempo: number;
  lead: number[];
  bass: number[];
  chords: number[][];
  kick: number[];
  snare: number[];
  hat: number[];
  arpGain: number;
}

const STAGE_TRACK: Track = {
  tempo: 138,
  lead: [
    69, 0, 72, 0, 76, 0, 81, 0,
    79, 0, 76, 0, 74, 0, 72, 0,
    71, 0, 74, 0, 79, 0, 83, 0,
    81, 0, 79, 0, 76, 0, 74, 0,
  ],
  bass: [
    45, 45, 52, 45, 40, 40, 47, 40,
    41, 41, 48, 41, 43, 43, 50, 43,
    45, 45, 52, 45, 40, 40, 47, 40,
    41, 43, 45, 47, 45, 45, 45, 45,
  ],
  chords: [
    [69, 72, 76, 81],
    [65, 69, 72, 77],
    [67, 72, 76, 79],
    [67, 71, 74, 79],
  ],
  kick: [0, 3, 8, 11, 16, 19, 24, 27],
  snare: [4, 12, 20, 28],
  hat: [2, 6, 10, 14, 18, 22, 26, 30],
  arpGain: 1,
};

const TITLE_TRACK: Track = {
  tempo: 96,
  lead: [
    69, 0, 0, 0, 72, 0, 76, 0,
    81, 0, 0, 0, 79, 0, 76, 0,
    77, 0, 0, 0, 72, 0, 69, 0,
    67, 0, 71, 0, 74, 0, 79, 0,
  ],
  bass: [
    45, 0, 0, 0, 45, 0, 0, 0,
    41, 0, 0, 0, 41, 0, 0, 0,
    48, 0, 0, 0, 48, 0, 0, 0,
    43, 0, 0, 0, 43, 0, 0, 0,
  ],
  chords: [
    [69, 72, 76, 81],
    [65, 69, 72, 77],
    [67, 72, 76, 79],
    [67, 71, 74, 79],
  ],
  kick: [0, 8, 16, 24],
  snare: [12, 28],
  hat: [4, 12, 20, 28],
  arpGain: 0.55,
};

const RAIN_TRACK: Track = {
  tempo: 134,
  lead: [
    64, 0, 67, 0, 71, 0, 76, 0,
    74, 0, 71, 0, 69, 0, 67, 0,
    62, 0, 66, 0, 69, 0, 74, 0,
    72, 0, 71, 0, 69, 0, 66, 0,
  ],
  bass: [
    40, 40, 47, 40, 40, 40, 47, 40,
    38, 38, 45, 38, 38, 38, 45, 38,
    36, 36, 43, 36, 36, 36, 43, 36,
    38, 40, 43, 45, 47, 43, 40, 38,
  ],
  chords: [
    [64, 67, 71, 76],
    [62, 66, 69, 74],
    [60, 64, 67, 72],
    [59, 64, 67, 71],
  ],
  kick: [0, 6, 8, 14, 16, 22, 24, 30],
  snare: [4, 12, 20, 28],
  hat: [2, 4, 6, 10, 12, 14, 18, 20, 22, 26, 28, 30],
  arpGain: 1.05,
};

const SNOW_TRACK: Track = {
  tempo: 128,
  lead: [
    72, 0, 76, 79, 0, 76, 74, 0,
    72, 0, 71, 0, 67, 0, 71, 0,
    69, 0, 72, 76, 0, 74, 72, 0,
    71, 0, 69, 0, 67, 0, 64, 0,
  ],
  bass: [
    48, 0, 48, 55, 48, 0, 43, 0,
    45, 0, 45, 52, 45, 0, 40, 0,
    41, 0, 41, 48, 41, 0, 43, 0,
    48, 0, 43, 0, 40, 0, 43, 0,
  ],
  chords: [
    [60, 64, 67, 72],
    [57, 60, 64, 69],
    [53, 57, 60, 65],
    [55, 59, 62, 67],
  ],
  kick: [0, 8, 16, 24, 28],
  snare: [4, 12, 20, 28],
  hat: [2, 6, 10, 14, 18, 22, 26, 30],
  arpGain: 0.9,
};

const CLEAR_TRACK: Track = {
  tempo: 144,
  lead: [
    67, 0, 71, 0, 74, 0, 79, 0,
    78, 0, 74, 0, 76, 0, 79, 0,
    81, 0, 79, 0, 76, 0, 74, 0,
    72, 0, 74, 0, 76, 0, 79, 0,
  ],
  bass: [
    43, 43, 50, 43, 43, 43, 50, 43,
    40, 40, 47, 40, 40, 40, 47, 40,
    45, 45, 52, 45, 42, 42, 49, 42,
    43, 45, 47, 50, 48, 47, 45, 43,
  ],
  chords: [
    [67, 71, 74, 79],
    [64, 67, 71, 76],
    [69, 72, 76, 81],
    [67, 71, 74, 79],
  ],
  kick: [0, 3, 8, 11, 16, 19, 24, 27],
  snare: [4, 12, 20, 28, 30],
  hat: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  arpGain: 1.05,
};

const STAGE_TRACKS: Track[] = [STAGE_TRACK, RAIN_TRACK, SNOW_TRACK, CLEAR_TRACK];

function midiToFreq(note: number): number {
  return 440 * Math.pow(2, (note - 69) / 12);
}

export class AudioEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private musicBus: GainNode | null = null;
  private musicFilter: BiquadFilterNode | null = null;
  private sfxBus: GainNode | null = null;
  private engineGain: GainNode | null = null;
  private engineFilter: BiquadFilterNode | null = null;
  private engineClatterFilter: BiquadFilterNode | null = null;
  private engineClatterGain: GainNode | null = null;
  private engineOsc: OscillatorNode | null = null;
  private engineSubOsc: OscillatorNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;

  private muted = false;
  private musicMode: MusicMode = 'none';
  private stageTrack: Track = STAGE_TRACK;
  private activeTrack: Track = STAGE_TRACK;
  private tempoMultiplier = 1;
  private step = 0;
  private nextNoteTime = 0;
  private schedulerId: number | null = null;
  private engineTarget = 0;

  get isMuted(): boolean {
    return this.muted;
  }

  async resume(): Promise<void> {
    const ctx = this.ensure();
    if (ctx.state === 'suspended') {
      try {
        await ctx.resume();
      } catch {
        /* ignored */
      }
    }
  }

  private ensure(): AudioContext {
    if (this.ctx) return this.ctx;
    const Ctor = window.AudioContext ?? (window as any).webkitAudioContext;
    const ctx: AudioContext = new Ctor();
    this.ctx = ctx;

    const master = ctx.createGain();
    master.gain.value = this.muted ? 0 : 0.68;
    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -14;
    compressor.knee.value = 18;
    compressor.ratio.value = 5;
    compressor.attack.value = 0.003;
    compressor.release.value = 0.18;
    master.connect(compressor).connect(ctx.destination);
    this.master = master;

    // Urban night-arena convolution reverb send for spatial depth
    const convolver = ctx.createConvolver();
    convolver.buffer = this.makeReverbIR(ctx, 1.15);
    const reverbOut = ctx.createGain();
    reverbOut.gain.value = 0.24;
    convolver.connect(reverbOut).connect(master);

    const musicFilter = ctx.createBiquadFilter();
    musicFilter.type = 'lowpass';
    musicFilter.frequency.value = 18000;
    musicFilter.Q.value = 0.8;
    const musicBus = ctx.createGain();
    musicBus.gain.value = 0.46;
    const musicVerb = ctx.createGain();
    musicVerb.gain.value = 0.22;
    musicBus.connect(musicFilter);
    musicFilter.connect(master);
    musicFilter.connect(musicVerb).connect(convolver);
    this.musicBus = musicBus;
    this.musicFilter = musicFilter;

    const sfxBus = ctx.createGain();
    sfxBus.gain.value = 0.9;
    const sfxVerb = ctx.createGain();
    sfxVerb.gain.value = 0.28;
    sfxBus.connect(master);
    sfxBus.connect(sfxVerb).connect(convolver);
    this.sfxBus = sfxBus;

    this.noiseBuffer = this.makeNoise(ctx, 2.2);
    this.startEngine();
    return ctx;
  }

  private makeReverbIR(ctx: AudioContext, seconds: number): AudioBuffer {
    const length = Math.floor(ctx.sampleRate * seconds);
    const buffer = ctx.createBuffer(2, length, ctx.sampleRate);
    const slapSample = Math.floor(ctx.sampleRate * 0.045);
    for (let ch = 0; ch < 2; ch++) {
      const data = buffer.getChannelData(ch);
      let lp = 0;
      for (let i = 0; i < length; i++) {
        const t = i / length;
        const decay = Math.pow(1 - t, 2.8);
        const white = (Math.random() * 2 - 1) * decay;
        lp = lp * 0.68 + white * 0.32;
        data[i] = lp * 0.7;
        if (i === slapSample) data[i] += (ch === 0 ? 0.28 : -0.28);
      }
    }
    return buffer;
  }

  private makeNoise(ctx: AudioContext, seconds: number): AudioBuffer {
    const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * seconds), ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) {
      const white = Math.random() * 2 - 1;
      last = last * 0.7 + white * 0.3;
      data[i] = last;
    }
    return buffer;
  }

  private startEngine(): void {
    const ctx = this.ctx;
    if (!ctx || !this.master || !this.noiseBuffer) return;
    const gain = ctx.createGain();
    gain.gain.value = 0;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 160;
    filter.Q.value = 2.4;
    const noise = ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;
    noise.loop = true;
    noise.connect(filter).connect(gain).connect(this.master);
    noise.start();

    const clatterFilter = ctx.createBiquadFilter();
    clatterFilter.type = 'bandpass';
    clatterFilter.frequency.value = 620;
    clatterFilter.Q.value = 1.6;
    const clatterGain = ctx.createGain();
    clatterGain.gain.value = 0;
    const clatterNoise = ctx.createBufferSource();
    clatterNoise.buffer = this.noiseBuffer;
    clatterNoise.loop = true;
    clatterNoise.connect(clatterFilter).connect(clatterGain).connect(this.master);
    clatterNoise.start();

    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 42;
    const oscGain = ctx.createGain();
    oscGain.gain.value = 0.45;
    osc.connect(oscGain).connect(gain);
    osc.start();

    const subOsc = ctx.createOscillator();
    subOsc.type = 'triangle';
    subOsc.frequency.value = 21;
    const subGain = ctx.createGain();
    subGain.gain.value = 0.55;
    subOsc.connect(subGain).connect(gain);
    subOsc.start();

    this.engineGain = gain;
    this.engineFilter = filter;
    this.engineClatterFilter = clatterFilter;
    this.engineClatterGain = clatterGain;
    this.engineOsc = osc;
    this.engineSubOsc = subOsc;
  }

  setEngine(intensity: number): void {
    if (!this.ctx || !this.engineGain) return;
    const target = intensity > 0.001 ? 0.032 + intensity * 0.045 : 0;
    this.engineTarget = target;
    const now = this.ctx.currentTime;
    this.engineGain.gain.setTargetAtTime(target, now, 0.16);
    if (this.engineFilter) {
      this.engineFilter.frequency.setTargetAtTime(140 + intensity * 220, now, 0.18);
    }
    if (this.engineOsc) {
      const f = 38 + intensity * 16;
      this.engineOsc.frequency.setTargetAtTime(f, now, 0.18);
      this.engineSubOsc?.frequency.setTargetAtTime(f * 0.5, now, 0.18);
    }
    if (this.engineClatterGain && this.engineClatterFilter) {
      this.engineClatterGain.gain.setTargetAtTime(intensity > 0.2 ? (intensity - 0.15) * 0.022 : 0, now, 0.12);
      this.engineClatterFilter.frequency.setTargetAtTime(520 + intensity * 560, now, 0.15);
    }
  }

  setStageTrack(stage: number): void {
    const idx = ((Math.max(1, Math.floor(stage)) - 1) % STAGE_TRACKS.length + STAGE_TRACKS.length) % STAGE_TRACKS.length;
    this.stageTrack = STAGE_TRACKS[idx];
    if (this.musicMode === 'stage') {
      this.activeTrack = this.stageTrack;
    }
  }

  setMusicState(frozen: boolean, lowEnemyUrgency: boolean): void {
    this.tempoMultiplier = lowEnemyUrgency ? 1.09 : 1.0;
    if (this.ctx && this.musicFilter) {
      const target = frozen ? 680 : 18000;
      this.musicFilter.frequency.setTargetAtTime(target, this.ctx.currentTime, 0.14);
    }
  }

  setMusic(mode: MusicMode): void {
    if (mode === this.musicMode) return;
    this.musicMode = mode;
    if (!this.ctx) return;
    this.step = 0;
    this.nextNoteTime = this.ctx.currentTime + 0.08;
    if (mode === 'none') {
      if (this.schedulerId !== null) {
        window.clearInterval(this.schedulerId);
        this.schedulerId = null;
      }
      return;
    }
    this.activeTrack = mode === 'stage' ? this.stageTrack : TITLE_TRACK;
    if (this.schedulerId === null) {
      this.schedulerId = window.setInterval(() => this.scheduler(), 24);
    }
  }

  private scheduler(): void {
    const ctx = this.ctx;
    if (!ctx || this.musicMode === 'none') return;
    const track = this.activeTrack;
    const stepDur = 60 / (track.tempo * this.tempoMultiplier) / 2;
    while (this.nextNoteTime < ctx.currentTime + 0.16) {
      this.scheduleStep(this.step, this.nextNoteTime, track, stepDur);
      this.nextNoteTime += stepDur;
      this.step = (this.step + 1) % 32;
    }
  }

  private scheduleStep(step: number, time: number, track: Track, stepDur: number): void {
    const lead = track.lead[step];
    if (lead) {
      const f = midiToFreq(lead);
      // Detuned dual-oscillator analog lead with resonant lowpass sweep
      this.tone('sawtooth', f * 0.996, f * 0.996, stepDur * 1.55, 0.032, time, 2800);
      this.tone('square', f * 1.004, f * 1.004, stepDur * 1.45, 0.028, time, 2400);
    }
    const bass = track.bass[step];
    if (bass) {
      const bf = midiToFreq(bass);
      this.tone('sawtooth', bf, bf, stepDur * 1.65, 0.065, time, 520);
      this.tone('sine', bf, bf, stepDur * 1.7, 0.11, time);
    }
    const chord = track.chords[Math.floor(step / 8) % track.chords.length];
    const arpIndex = step % 4;
    const arpNote = chord[arpIndex] + 12;
    this.tone('triangle', midiToFreq(arpNote), midiToFreq(arpNote), stepDur * 0.5, 0.022 * track.arpGain, time, 3400);
    this.tone('square', midiToFreq(chord[(arpIndex + 1) % 4] + 12), midiToFreq(chord[(arpIndex + 1) % 4] + 12), stepDur * 0.4, 0.012 * track.arpGain, time + stepDur * 0.5, 3800);

    if (track.kick.includes(step)) this.kick(time);
    if (track.snare.includes(step)) this.noiseHit(time, 0.12, 'highpass', 1050, 0.18);
    if (track.hat.includes(step)) this.noiseHit(time, 0.032, 'highpass', 6400, 0.075);
  }

  private tone(
    type: OscillatorType,
    freq: number,
    endFreq: number,
    duration: number,
    gain: number,
    when = 0,
    filterFreq?: number,
  ): void {
    const ctx = this.ctx;
    if (!ctx || !this.musicBus) return;
    const start = when || ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(20, freq), start);
    if (endFreq !== freq) osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), start + duration * 0.9);
    const env = ctx.createGain();
    env.gain.setValueAtTime(0.0001, start);
    env.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), start + 0.012);
    env.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    let node: AudioNode = env;
    if (filterFreq) {
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = filterFreq;
      env.connect(filter);
      node = filter;
    }
    osc.connect(env);
    node.connect(this.musicBus);
    osc.start(start);
    osc.stop(start + duration + 0.05);
  }

  private kick(time: number): void {
    const ctx = this.ctx;
    if (!ctx || !this.musicBus) return;
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(128, time);
    osc.frequency.exponentialRampToValueAtTime(42, time + 0.13);
    const env = ctx.createGain();
    env.gain.setValueAtTime(0.18, time);
    env.gain.exponentialRampToValueAtTime(0.0001, time + 0.2);
    osc.connect(env).connect(this.musicBus);
    osc.start(time);
    osc.stop(time + 0.22);
  }

  private noiseHit(time: number, gain: number, filterType: BiquadFilterType, freq: number, duration: number): void {
    const ctx = this.ctx;
    if (!ctx || !this.musicBus || !this.noiseBuffer) return;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.value = freq;
    const env = ctx.createGain();
    env.gain.setValueAtTime(gain, time);
    env.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    src.connect(filter).connect(env).connect(this.musicBus);
    src.start(time, Math.random() * 1.2, duration + 0.02);
  }

  sfx(name: string, worldX?: number): void {
    if (!this.ctx || !this.sfxBus) return;
    const ctx = this.ctx;
    const now = ctx.currentTime + 0.001;
    const rand = (spread: number) => 1 + (Math.random() - 0.5) * spread;

    let outNode: AudioNode = this.sfxBus;
    if (worldX !== undefined && typeof ctx.createStereoPanner === 'function') {
      const panner = ctx.createStereoPanner();
      panner.pan.value = Math.max(-0.85, Math.min(0.85, (worldX - 6.5) / 6.5));
      panner.connect(this.sfxBus);
      outNode = panner;
    }

    const playerTone = (type: OscillatorType, freq: number, endFreq: number, dur: number, gain: number, delay = 0, filterFreq?: number) => {
      const start = now + delay;
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.setValueAtTime(Math.max(20, freq * rand(0.03)), start);
      osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), start + dur * 0.92);
      const env = ctx.createGain();
      env.gain.setValueAtTime(0.0001, start);
      env.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), start + 0.005);
      env.gain.exponentialRampToValueAtTime(0.0001, start + dur);
      let node: AudioNode = env;
      if (filterFreq) {
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = filterFreq;
        env.connect(filter);
        node = filter;
      }
      osc.connect(env);
      node.connect(outNode);
      osc.start(start);
      osc.stop(start + dur + 0.05);
    };

    const noise = (dur: number, gain: number, type: BiquadFilterType, freq: number, endFreq?: number, delay = 0, q = 1) => {
      if (!this.noiseBuffer) return;
      const start = now + delay;
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const filter = ctx.createBiquadFilter();
      filter.type = type;
      filter.frequency.setValueAtTime(freq, start);
      if (endFreq) filter.frequency.exponentialRampToValueAtTime(Math.max(30, endFreq), start + dur);
      filter.Q.value = q;
      const env = ctx.createGain();
      env.gain.setValueAtTime(gain, start);
      env.gain.exponentialRampToValueAtTime(0.0001, start + dur);
      src.connect(filter).connect(env).connect(outNode);
      src.start(start, Math.random() * 1.5, dur + 0.02);
    };

    switch (name) {
      case 'shoot':
        playerTone('sine', 165, 36, 0.14, 0.22);
        playerTone('sawtooth', 460, 95, 0.11, 0.09, 0, 1600);
        noise(0.075, 0.15, 'bandpass', 1900, 650, 0, 1.1);
        playerTone('sine', 2850, 2680, 0.06, 0.025, 0.11);
        break;
      case 'enemyShoot':
        playerTone('sine', 125, 34, 0.13, 0.14);
        playerTone('sawtooth', 320, 80, 0.1, 0.055, 0, 1200);
        noise(0.06, 0.09, 'bandpass', 1500, 500, 0, 1.1);
        break;
      case 'brick':
        noise(0.18, 0.22, 'bandpass', 850, 260, 0, 1.0);
        noise(0.14, 0.12, 'highpass', 1800, 900, 0.05, 0.9);
        playerTone('triangle', 150, 55, 0.14, 0.12);
        break;
      case 'steel':
        playerTone('sine', 2150, 1620, 0.14, 0.065);
        playerTone('triangle', 3180, 2400, 0.11, 0.04);
        noise(0.07, 0.09, 'highpass', 3600);
        break;
      case 'steelBreak':
        playerTone('sawtooth', 240, 48, 0.24, 0.14, 0, 1300);
        playerTone('sine', 1480, 520, 0.22, 0.08);
        noise(0.28, 0.24, 'bandpass', 1600, 320, 0, 1.1);
        break;
      case 'hit':
        playerTone('sine', 130, 48, 0.12, 0.14);
        noise(0.11, 0.14, 'bandpass', 1400, 480, 0, 1.4);
        break;
      case 'armorHit':
        playerTone('sine', 115, 42, 0.14, 0.18);
        playerTone('triangle', 440, 210, 0.18, 0.1);
        playerTone('sine', 685, 640, 0.16, 0.06);
        playerTone('sine', 1120, 980, 0.12, 0.04);
        noise(0.12, 0.14, 'bandpass', 1900, 700, 0, 1.7);
        break;
      case 'combo':
        [587, 880, 1175].forEach((f, i) => {
          playerTone('triangle', f, f * 1.01, 0.16, 0.09, i * 0.055);
          playerTone('sine', f * 2, f * 2, 0.12, 0.04, i * 0.055);
        });
        break;
      case 'thunder':
        noise(1.5, 0.38, 'lowpass', 340, 42, 0, 0.7);
        playerTone('sine', 62, 22, 1.25, 0.28);
        break;
      case 'ice':
        noise(0.12, 0.07, 'bandpass', 4200, 2100, 0, 1.8);
        break;
      case 'ricochet':
        playerTone('sine', 2800, 1150, 0.13, 0.045);
        break;
      case 'explode':
        noise(0.06, 0.3, 'highpass', 1400, 400, 0, 0.8);
        noise(0.68, 0.36, 'lowpass', 1800, 72, 0.01, 0.65);
        playerTone('sine', 98, 26, 0.55, 0.32);
        playerTone('sawtooth', 190, 44, 0.26, 0.09, 0, 750);
        noise(0.35, 0.12, 'bandpass', 2400, 900, 0.12, 1.2);
        break;
      case 'bigExplode':
        noise(0.08, 0.38, 'highpass', 1600, 350, 0, 0.8);
        noise(1.05, 0.44, 'lowpass', 2200, 55, 0.01, 0.6);
        playerTone('sine', 110, 22, 0.85, 0.38);
        playerTone('sawtooth', 260, 40, 0.4, 0.12, 0, 680);
        noise(0.5, 0.16, 'bandpass', 2200, 700, 0.15, 1.1);
        break;
      case 'base':
        noise(1.5, 0.52, 'lowpass', 2600, 44, 0, 0.5);
        playerTone('sine', 88, 20, 1.25, 0.44);
        playerTone('sawtooth', 175, 36, 0.65, 0.15, 0, 580);
        playerTone('triangle', 390, 95, 0.55, 0.1, 0.32, 1100);
        break;
      case 'powerup':
        playerTone('square', 660, 660, 0.1, 0.07, 0);
        playerTone('square', 880, 880, 0.1, 0.07, 0.09);
        playerTone('square', 1320, 1320, 0.16, 0.07, 0.18);
        break;
      case 'pickup':
        [660, 880, 1100, 1320].forEach((f, i) => playerTone('square', f, f, 0.1, 0.07, i * 0.06));
        break;
      case 'shield':
        playerTone('sine', 880, 1760, 0.35, 0.07);
        playerTone('sine', 1320, 2200, 0.45, 0.05, 0.05);
        break;
      case 'freeze':
        [1760, 1320, 990, 660].forEach((f, i) => playerTone('triangle', f, f * 0.98, 0.22, 0.07, i * 0.08));
        noise(0.5, 0.04, 'highpass', 5000, undefined, 0, 0.8);
        break;
      case 'shovel':
        playerTone('triangle', 260, 520, 0.18, 0.09);
        playerTone('triangle', 390, 780, 0.2, 0.07, 0.08);
        noise(0.2, 0.08, 'bandpass', 1600, 900, 0.04);
        break;
      case 'grenade':
        noise(1.1, 0.42, 'lowpass', 2000, 50, 0, 0.6);
        playerTone('sine', 90, 28, 0.9, 0.3);
        break;
      case 'life':
        [784, 988, 1175, 1568].forEach((f, i) => playerTone('square', f, f, 0.16, 0.06, i * 0.09));
        break;
      case 'start':
        [440, 554, 659, 880].forEach((f, i) => playerTone('square', f, f, 0.14, 0.06, i * 0.1));
        break;
      case 'clear':
        [659, 784, 988, 1319].forEach((f, i) => playerTone('square', f, f, 0.22, 0.07, i * 0.11));
        playerTone('triangle', 330, 660, 0.6, 0.08);
        break;
      case 'gameover':
        [659, 622, 587, 554, 523, 440].forEach((f, i) => playerTone('square', f, f * 0.99, 0.32, 0.08, i * 0.16));
        break;
      case 'out':
        playerTone('square', 330, 110, 0.4, 0.08);
        break;
      case 'pause':
        playerTone('square', 880, 660, 0.08, 0.05);
        break;
      case 'click':
        playerTone('square', 520, 780, 0.05, 0.04);
        break;
      case 'splash':
        noise(0.3, 0.08, 'bandpass', 1400, 500, 0, 1.5);
        break;
      default:
        break;
    }
  }

  toggleMute(): boolean {
    this.muted = !this.muted;
    if (this.ctx && this.master) {
      this.master.gain.setTargetAtTime(this.muted ? 0 : 0.68, this.ctx.currentTime, 0.05);
    }
    return this.muted;
  }

  dispose(): void {
    if (this.schedulerId !== null) window.clearInterval(this.schedulerId);
    this.schedulerId = null;
    this.ctx?.close();
    this.ctx = null;
  }
}

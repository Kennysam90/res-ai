// Small interface sounds made with the Web Audio API: no audio files to download.
// Sounds only ever play in response to something the visitor does, and the
// choice to mute is remembered.

const KEY = 'rbx-sound'
let ctx: AudioContext | null = null
let enabled = true

function readPref() {
  try {
    return localStorage.getItem(KEY) !== 'off'
  } catch {
    return true
  }
}

if (typeof window !== 'undefined') enabled = readPref()

export const soundOn = () => enabled

// Lets components follow the preference with useSyncExternalStore.
const listeners = new Set<() => void>()
export function subscribeSound(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function setSound(on: boolean) {
  enabled = on
  try {
    localStorage.setItem(KEY, on ? 'on' : 'off')
  } catch {
    /* storage can be blocked; the choice then lasts for this visit */
  }
  listeners.forEach((l) => l())
  if (on) play('toggle')
}

function tone(freq: number, start: number, dur: number, gain: number, type: OscillatorType = 'sine', slideTo?: number) {
  if (!ctx) return
  const t0 = ctx.currentTime + start
  const osc = ctx.createOscillator()
  const g = ctx.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(freq, t0)
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur)
  g.gain.setValueAtTime(0.0001, t0)
  g.gain.exponentialRampToValueAtTime(gain, t0 + 0.008)
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
  osc.connect(g).connect(ctx.destination)
  osc.start(t0)
  osc.stop(t0 + dur + 0.02)
}

export type SoundName = 'tick' | 'nav' | 'toggle' | 'open' | 'close' | 'success' | 'error'

const SOUNDS: Record<SoundName, () => void> = {
  tick: () => tone(1250, 0, 0.05, 0.035, 'sine', 820),
  nav: () => { tone(660, 0, 0.07, 0.03); tone(990, 0.06, 0.09, 0.03) },
  toggle: () => { tone(520, 0, 0.06, 0.035); tone(780, 0.05, 0.1, 0.035) },
  open: () => tone(420, 0, 0.09, 0.03, 'triangle', 640),
  close: () => tone(640, 0, 0.09, 0.03, 'triangle', 420),
  success: () => { tone(523, 0, 0.12, 0.04); tone(659, 0.09, 0.12, 0.04); tone(784, 0.18, 0.2, 0.04) },
  error: () => { tone(220, 0, 0.14, 0.04, 'triangle'); tone(196, 0.1, 0.18, 0.04, 'triangle') },
}

export function play(kind: SoundName = 'tick') {
  if (!enabled || typeof window === 'undefined') return
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!AC) return
  try {
    if (!ctx) ctx = new AC()
    if (ctx.state === 'suspended') ctx.resume()
    SOUNDS[kind]()
  } catch {
    /* audio is a nicety; never let it break the page */
  }
}

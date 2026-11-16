// The Resbrotherx mark: two bars, joined by two interlocking hooks that form an "S".
// It also stands in for the "o" in the wordmark ("Resbr◼therx").
// One source for the site header, the press kit and the generated icon files.

/** The mark is drawn on a 96 × 100 grid. */
export const MARK_VIEWBOX = '0 0 96 100'
export const MARK_RATIO = 96 / 100

/** Top and bottom bars. */
export const BARS = [
  { x: 4, y: 4, w: 88, h: 16, r: 5 },
  { x: 4, y: 80, w: 88, h: 16, r: 5 },
]

/** Left hook (rises from the bottom bar, ends in a tab at the upper middle). */
export const HOOK =
  'M39 30H43Q47 30 47 34V43Q47 47 43 47H39C31 47 25 53 25 60C25 68 33 75 44 81L48 84H22C11 77 5 68 5 59C5 43 20 30 39 30Z'

/** The right hook is the left one turned half a circle around the centre. */
export const HOOK_TURN = 'rotate(180 48 50)'

/** Gradient stops, as [offset, colour]. Coordinates are in the 96 × 100 grid. */
export const GRADIENTS = {
  bar: { x1: 8, y1: 20, x2: 88, y2: 0, stops: [[0, '#087FF5'], [0.3, '#1831FF'], [0.65, '#691CF5'], [1, '#B43CF5']] },
  left: { x1: 6, y1: 60, x2: 46, y2: 40, stops: [[0, '#16E4F4'], [0.45, '#1B7BFF'], [1, '#1A22F0']] },
  // Drawn before the half turn, so it reads from the tab outwards.
  right: { x1: 46, y1: 40, x2: 6, y2: 60, stops: [[0, '#2A16D6'], [0.5, '#6A2CF0'], [1, '#B43CF5']] },
} as const

export type GradientName = keyof typeof GRADIENTS

export const BRAND_COLORS = {
  ink: '#0B0B14',
  cyan: '#16E4F4',
  blue: '#1F3BFF',
  violet: '#5B2CF5',
  purple: '#B43CF5',
}

/** The mark as a standalone SVG string (for files). `prefix` keeps gradient ids unique. */
export function markSvg(opts: { size?: number; prefix?: string; background?: string; padding?: number } = {}): string {
  const { size = 100, prefix = 'rbx', background, padding = 0 } = opts
  const vbW = 96 + padding * 2
  const vbH = 100 + padding * 2
  const side = Math.max(vbW, vbH)
  const ox = (side - vbW) / 2 + padding
  const oy = (side - vbH) / 2 + padding
  const defs = (Object.keys(GRADIENTS) as GradientName[])
    .map((n) => {
      const g = GRADIENTS[n]
      const stops = g.stops.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join('')
      return `<linearGradient id="${prefix}-${n}" gradientUnits="userSpaceOnUse" x1="${g.x1}" y1="${g.y1}" x2="${g.x2}" y2="${g.y2}">${stops}</linearGradient>`
    })
    .join('')
  const bg = background ? `<rect width="${side}" height="${side}" fill="${background}"/>` : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${side} ${side}"><defs>${defs}</defs>${bg}<g transform="translate(${ox} ${oy})">${markBody(prefix)}</g></svg>`
}

/** The shapes of the mark, referencing gradients named `${prefix}-bar|left|right`. */
export function markBody(prefix: string): string {
  const bars = BARS.map((b) => `<rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="${b.r}" fill="url(#${prefix}-bar)"/>`).join('')
  return `<path d="${HOOK}" fill="url(#${prefix}-left)"/><path d="${HOOK}" transform="${HOOK_TURN}" fill="url(#${prefix}-right)"/>${bars}`
}

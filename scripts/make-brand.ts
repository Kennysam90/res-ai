// Draws the brand files from the mark in src/brand/mark.ts:
//   icons/logo.svg              the mark (also the browser-tab icon)
//   icons/logo-512.png          the mark on white (search engines, Organization logo)
//   icons/icon-192.png, apple-touch-icon.png, favicon.ico
//   icons/resbrotherx-logo.svg / -white.svg, and 1200px PNGs of both (wordmark for press)
//   og/default.jpg              the default social card
//
//   node scripts/make-brand.ts
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { createRequire } from 'node:module'
import sharp from 'sharp'
import opentype from 'opentype.js'
import { BRAND_COLORS, GRADIENTS, markBody, markSvg, type GradientName } from '../src/brand/mark.ts'

const ROOT = join(import.meta.dirname, '..')
const PUBLIC = join(ROOT, 'public')
await mkdir(join(PUBLIC, 'icons'), { recursive: true })
await mkdir(join(PUBLIC, 'og'), { recursive: true })

const svgPng = (svg: string, w: number, h = w) => sharp(Buffer.from(svg), { density: 300 }).resize(w, h).png().toBuffer()

/* ---------------------------------------------------------------- mark */

await writeFile(join(PUBLIC, 'icons', 'logo.svg'), markSvg({ size: 100, prefix: 'm' }))
await writeFile(join(PUBLIC, 'icons', 'logo-512.png'), await svgPng(markSvg({ size: 512, background: '#ffffff', padding: 14 }), 512))
await writeFile(join(PUBLIC, 'icons', 'icon-192.png'), await svgPng(markSvg({ size: 192, background: '#ffffff', padding: 16 }), 192))
await writeFile(join(PUBLIC, 'icons', 'apple-touch-icon.png'), await svgPng(markSvg({ size: 180, background: '#ffffff', padding: 16 }), 180))

// favicon.ico: a single 32px PNG inside an ICO container.
const p32 = await svgPng(markSvg({ size: 32, padding: 2 }), 32)
const ico = Buffer.alloc(22)
ico.writeUInt16LE(0, 0)
ico.writeUInt16LE(1, 2)
ico.writeUInt16LE(1, 4)
ico.writeUInt8(32, 6)
ico.writeUInt8(32, 7)
ico.writeUInt16LE(1, 10)
ico.writeUInt16LE(32, 12)
ico.writeUInt32LE(p32.length, 14)
ico.writeUInt32LE(22, 18)
await writeFile(join(PUBLIC, 'favicon.ico'), Buffer.concat([ico, p32]))

/* ------------------------------------------------------------ wordmark */

// The site sets the wordmark in DM Sans Bold; outline it so the files need no font.
const require = createRequire(import.meta.url)
const fontFile = require.resolve('@fontsource/dm-sans/files/dm-sans-latin-700-normal.woff')
const font = opentype.loadSync(fontFile)

const SIZE = 100 // font size in wordmark units
const TRACK = -0.033 * SIZE // matches letter-spacing in .rbx-logo-text
const MARK_W = 0.79 * SIZE
const MARK_H = 0.84 * SIZE

/** Outlines `text` from x at the baseline; returns the path data and the new x. */
function setText(text: string, x: number, baseline: number): { d: string; x: number } {
  const glyphs = font.stringToGlyphs(text)
  const scale = SIZE / font.unitsPerEm
  let d = ''
  glyphs.forEach((g, i) => {
    d += g.getPath(x, baseline, SIZE).toPathData(2)
    x += (g.advanceWidth ?? 0) * scale + TRACK
    if (i < glyphs.length - 1) x += font.getKerningValue(g, glyphs[i + 1]) * scale
  })
  return { d, x }
}

function gradientDefs(prefix: string): string {
  return (Object.keys(GRADIENTS) as GradientName[])
    .map((n) => {
      const g = GRADIENTS[n]
      const stops = g.stops.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join('')
      return `<linearGradient id="${prefix}-${n}" gradientUnits="userSpaceOnUse" x1="${g.x1}" y1="${g.y1}" x2="${g.x2}" y2="${g.y2}">${stops}</linearGradient>`
    })
    .join('')
}

/** "Resbr" + mark + "therx" as SVG content, top-left at (0,0). */
function wordmark(ink: string, prefix: string): { body: string; defs: string; w: number; h: number } {
  const ascent = 0.74 * SIZE
  const baseline = ascent + 0.02 * SIZE
  const a = setText('Resbr', 0, baseline)
  const markX = a.x + 0.02 * SIZE
  const markY = baseline - MARK_H + 0.045 * SIZE
  const b = setText('therx', markX + MARK_W + 0.035 * SIZE, baseline)
  const s = MARK_H / 100
  const body =
    `<path d="${a.d}${b.d}" fill="${ink}"/>` +
    `<g transform="translate(${markX.toFixed(2)} ${markY.toFixed(2)}) scale(${(MARK_W / 96).toFixed(4)} ${s.toFixed(4)})">${markBody(prefix)}</g>`
  return { body, defs: gradientDefs(prefix), w: b.x - TRACK, h: baseline + 0.03 * SIZE }
}

function wordmarkSvg(ink: string, background?: string): { svg: string; w: number; h: number } {
  const pad = 0.12 * SIZE
  const wm = wordmark(ink, 'w')
  const W = Math.ceil(wm.w + pad * 2)
  const H = Math.ceil(wm.h + pad * 2)
  const bg = background ? `<rect width="${W}" height="${H}" fill="${background}"/>` : ''
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><title>Resbrotherx</title><defs>${wm.defs}</defs>${bg}<g transform="translate(${pad} ${pad})">${wm.body}</g></svg>`
  return { svg, w: W, h: H }
}

for (const [name, ink] of [['resbrotherx-logo', BRAND_COLORS.ink], ['resbrotherx-logo-white', '#ffffff']] as const) {
  const { svg, w, h } = wordmarkSvg(ink)
  await writeFile(join(PUBLIC, 'icons', `${name}.svg`), svg)
  await writeFile(join(PUBLIC, 'icons', `${name}.png`), await svgPng(svg, 1200, Math.round((1200 * h) / w)))
}

/* --------------------------------------------------------- social card */

const PHI = (1 + Math.sqrt(5)) / 2
const verts: number[][] = []
for (const a of [-1, 1]) for (const b of [-PHI, PHI]) verts.push([0, a, b], [a, b, 0], [b, 0, a])
const [ay, ax] = [0.55, 0.42]
const pts = verts.map(([x, y, z]) => {
  const x1 = x * Math.cos(ay) + z * Math.sin(ay)
  const z1 = -x * Math.sin(ay) + z * Math.cos(ay)
  const y1 = y * Math.cos(ax) - z1 * Math.sin(ax)
  const z2 = y * Math.sin(ax) + z1 * Math.cos(ax)
  const p = 4.2 / (4.2 + z2)
  return [930 + x1 * 118 * p, 330 + y1 * 118 * p, z2]
})
let wire = ''
for (let i = 0; i < verts.length; i++) {
  for (let j = i + 1; j < verts.length; j++) {
    const d = Math.hypot(verts[i][0] - verts[j][0], verts[i][1] - verts[j][1], verts[i][2] - verts[j][2])
    if (Math.abs(d - 2) < 0.01) {
      const o = (0.25 + 0.65 * (1 - ((pts[i][2] + pts[j][2]) / 2 + 2) / 4)).toFixed(2)
      wire += `<line x1="${pts[i][0].toFixed(1)}" y1="${pts[i][1].toFixed(1)}" x2="${pts[j][0].toFixed(1)}" y2="${pts[j][1].toFixed(1)}" stroke="#9C8CFF" stroke-opacity="${o}" stroke-width="2.4" stroke-linecap="round"/>`
    }
  }
}
wire += pts.map(([x, y]) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" fill="#fff"/>`).join('')

const cardMark = wordmark('#ffffff', 'c')
const FONT = `font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"`
const card = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="78%" cy="52%" r="62%">
      <stop offset="0" stop-color="#3B2BE8"/><stop offset=".55" stop-color="#1A1660"/><stop offset="1" stop-color="#0B0B14"/>
    </radialGradient>
    ${cardMark.defs}
  </defs>
  <rect width="1200" height="630" fill="#0B0B14"/>
  <rect width="1200" height="630" fill="url(#g)" opacity=".9"/>
  ${wire}
  <g transform="translate(80 70) scale(0.62)">${cardMark.body}</g>
  <text ${FONT} font-size="76" font-weight="700" fill="#fff" letter-spacing="-2.5">
    <tspan x="80" y="300">AI, robotics, 3D</tspan>
    <tspan x="80" y="386">and software.</tspan>
  </text>
  <text x="80" y="462" ${FONT} font-size="30" fill="#D6D2FF">The company behind Apsuni, AnimeDoc and Adorė</text>
  <text x="80" y="556" ${FONT} font-size="24" fill="#16E4F4" letter-spacing="3">WWW.RESBROTHERX.COM</text>
</svg>`
await sharp(Buffer.from(card)).jpeg({ quality: 86, mozjpeg: true }).toFile(join(PUBLIC, 'og', 'default.jpg'))
console.log('brand: logo.svg, logo-512.png, icon-192.png, apple-touch-icon.png, favicon.ico, resbrotherx-logo(-white).svg/.png, og/default.jpg')

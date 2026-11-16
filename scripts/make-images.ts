// Turns the source pictures in media-src/ into the WebP files the site serves,
// and writes the catalogue (src/data/images.json) the <Img> component reads.
//
//   node scripts/make-images.ts
//
// To add a picture: put the file in media-src/, add an entry to
// media-src/catalogue.json (alt text, and a credit if it is not ours), run this.
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import sharp from 'sharp'

interface Credit {
  title: string
  author: string
  license: string
  licenseUrl: string
  source: string
}

interface Entry {
  slug: string
  file: string
  alt: string
  credit?: Credit
  /** Crop to this width / height ratio, keeping the most interesting part. */
  ratio?: number
}

const ROOT = join(import.meta.dirname, '..')
const SRC = join(ROOT, 'media-src')
const OUT = join(ROOT, 'public', 'assets', 'media')
const WIDTHS = [640, 1280]

const entries = JSON.parse(await readFile(join(SRC, 'catalogue.json'), 'utf8')) as Entry[]
await mkdir(OUT, { recursive: true })

const catalogue: Record<string, unknown> = {}
for (const e of entries) {
  const input = join(SRC, e.file)
  if (!existsSync(input)) {
    console.warn('missing', e.file)
    continue
  }
  const meta = await sharp(input).rotate().metadata()
  const srcW = meta.width ?? 0
  const srcH = meta.height ?? 0
  const ratio = e.ratio ?? srcW / srcH
  const widths = WIDTHS.filter((w, i) => i === 0 || srcW >= w * 0.9)
  for (const w of widths) {
    const width = Math.min(w, srcW)
    await sharp(input)
      .rotate()
      .resize({ width, height: Math.round(width / ratio), fit: 'cover', position: 'attention' })
      .webp({ quality: w > 800 ? 72 : 76, effort: 5 })
      .toFile(join(OUT, `${e.slug}-${w}.webp`))
  }
  // A 1200 x 630 JPEG for link previews: every platform that shows a share card reads JPEG.
  await sharp(input).rotate().resize({ width: 1200, height: 630, fit: 'cover', position: 'attention' }).jpeg({ quality: 80, mozjpeg: true }).toFile(join(OUT, `${e.slug}-og.jpg`))
  const top = Math.min(widths[widths.length - 1], srcW)
  catalogue[e.slug] = { w: top, h: Math.round(top / ratio), widths, alt: e.alt, ...(e.credit ? { credit: e.credit } : {}) }
  console.log('ok', e.slug, widths.join('/'))
}

await writeFile(join(ROOT, 'src', 'data', 'images.json'), JSON.stringify(catalogue, null, 2) + '\n')
console.log(`${Object.keys(catalogue).length} images written`)

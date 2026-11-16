// A small static server that answers the way the production Nginx config does:
// /about is served from dist/about/index.html, and unknown addresses get the
// 404 page with a real 404 status.
//
//   node scripts/serve.ts [port]
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'

const DIST = join(import.meta.dirname, '..', 'dist')
const PORT = Number(process.argv[2] ?? 4319)
const TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.webmanifest': 'application/manifest+json',
}

const isFile = async (p: string) => (await stat(p).catch(() => null))?.isFile() ?? false

createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url ?? '/', 'http://x').pathname)).replace(/\/+$/, '')
  const candidates = [join(DIST, path, 'index.html'), join(DIST, path)]
  let file = ''
  for (const c of candidates) {
    if (c.startsWith(DIST) && (await isFile(c))) {
      file = c
      break
    }
  }
  const status = file ? 200 : 404
  if (!file) file = join(DIST, '404.html')
  res.writeHead(status, { 'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream' })
  res.end(await readFile(file))
}).listen(PORT, () => console.log(`Serving dist at http://localhost:${PORT}`))

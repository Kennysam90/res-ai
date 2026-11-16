import { useEffect, useRef } from 'react'

// Two light canvas animations drawn by hand (no 3D library to download):
// a rotating wireframe solid and a drifting "neural network" of linked points.
// Both pause when off screen and stay still for people who ask for less motion.

type Vec3 = [number, number, number]
type ShapeName = 'icosahedron' | 'cube' | 'octahedron'

interface Geometry {
  v: Vec3[]
  edgeLen: number
}

const PHI = (1 + Math.sqrt(5)) / 2

const SHAPES: Record<ShapeName, () => Geometry> = {
  icosahedron: () => {
    const v: Vec3[] = []
    for (const a of [-1, 1]) for (const b of [-PHI, PHI]) v.push([0, a, b], [a, b, 0], [b, 0, a])
    return { v, edgeLen: 2 }
  },
  cube: () => {
    const v: Vec3[] = []
    for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) v.push([x, y, z])
    return { v, edgeLen: 2 }
  },
  octahedron: () => ({
    v: [[1.6, 0, 0], [-1.6, 0, 0], [0, 1.6, 0], [0, -1.6, 0], [0, 0, 1.6], [0, 0, -1.6]],
    edgeLen: 1.6 * Math.SQRT2,
  }),
}

function edgesOf({ v, edgeLen }: Geometry): [number, number][] {
  const e: [number, number][] = []
  for (let i = 0; i < v.length; i++) {
    for (let j = i + 1; j < v.length; j++) {
      const d = Math.hypot(v[i][0] - v[j][0], v[i][1] - v[j][1], v[i][2] - v[j][2])
      if (Math.abs(d - edgeLen) < 0.01) e.push([i, j])
    }
  }
  return e
}

type Draw<S> = (c: CanvasRenderingContext2D, w: number, h: number, t: number, state: S) => void

function useCanvas<S extends object>(draw: Draw<S>, deps: unknown[]) {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current
    const c = canvas?.getContext('2d')
    if (!canvas || !c) return undefined
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let visible = true
    let w = 0
    let h = 0
    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const r = canvas.getBoundingClientRect()
      w = r.width
      h = r.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      c.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const state = {} as S
    const frame = (t: number) => {
      if (visible) draw(c, w, h, t / 1000, state)
      if (!still) raf = requestAnimationFrame(frame)
    }
    size()
    const ro = new ResizeObserver(() => {
      size()
      if (still) draw(c, w, h, 0, state)
    })
    ro.observe(canvas)
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
    })
    io.observe(canvas)
    raf = requestAnimationFrame(frame)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
    // The draw function is rebuilt on every render; deps list what it actually reads.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return ref
}

interface WireState {
  geo?: Geometry
  edges?: [number, number][]
}

/** A slowly rotating wireframe solid. */
export function Wireframe({ shape = 'icosahedron', color = '#1351D8', className = '' }: { shape?: ShapeName; color?: string; className?: string }) {
  const ref = useCanvas<WireState>(
    (c, w, h, t, s) => {
      if (!s.geo || !s.edges) {
        s.geo = SHAPES[shape]()
        s.edges = edgesOf(s.geo)
      }
      c.clearRect(0, 0, w, h)
      const scale = Math.min(w, h) * 0.24
      const ay = t * 0.45
      const ax = 0.5 + Math.sin(t * 0.3) * 0.25
      const pts = s.geo.v.map(([x, y, z]): Vec3 => {
        const x1 = x * Math.cos(ay) + z * Math.sin(ay)
        const z1 = -x * Math.sin(ay) + z * Math.cos(ay)
        const y1 = y * Math.cos(ax) - z1 * Math.sin(ax)
        const z2 = y * Math.sin(ax) + z1 * Math.cos(ax)
        const p = 4.2 / (4.2 + z2)
        return [w / 2 + x1 * scale * p, h / 2 + y1 * scale * p, z2]
      })
      c.lineWidth = 1.4
      c.lineCap = 'round'
      for (const [a, b] of s.edges) {
        const depth = (pts[a][2] + pts[b][2]) / 2
        c.globalAlpha = 0.25 + 0.6 * (1 - (depth + 2) / 4)
        c.strokeStyle = color
        c.beginPath()
        c.moveTo(pts[a][0], pts[a][1])
        c.lineTo(pts[b][0], pts[b][1])
        c.stroke()
      }
      c.globalAlpha = 1
      c.fillStyle = color
      for (const [x, y, z] of pts) {
        c.beginPath()
        c.arc(x, y, 2.2 + (1 - (z + 2) / 4) * 1.6, 0, Math.PI * 2)
        c.fill()
      }
    },
    [shape, color],
  )
  return <canvas ref={ref} className={`rbx-canvas ${className}`} aria-hidden="true" />
}

interface Point {
  x: number
  y: number
  vx: number
  vy: number
}

interface FieldState {
  pts?: Point[]
  w?: number
  h?: number
}

/** Drifting points joined by lines when they come close: a quiet network backdrop. */
export function NeuralField({ color = '19, 81, 216', count = 46, className = '' }: { color?: string; count?: number; className?: string }) {
  const ref = useCanvas<FieldState>(
    (c, w, h, _t, s) => {
      if (!s.pts || s.w !== w || s.h !== h) {
        s.w = w
        s.h = h
        // A fixed seed, so every visit starts from the same field.
        let seed = 7
        const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647
        const n = Math.round(count * Math.min(1, (w * h) / (900 * 520)))
        s.pts = Array.from({ length: Math.max(14, n) }, () => ({ x: rnd() * w, y: rnd() * h, vx: (rnd() - 0.5) * 0.28, vy: (rnd() - 0.5) * 0.28 }))
      }
      const pts = s.pts
      c.clearRect(0, 0, w, h)
      for (const p of pts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }
      const reach = 130
      c.lineWidth = 1
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i]
          const b = pts[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < reach) {
            c.strokeStyle = `rgba(${color}, ${(0.2 * (1 - d / reach)).toFixed(3)})`
            c.beginPath()
            c.moveTo(a.x, a.y)
            c.lineTo(b.x, b.y)
            c.stroke()
          }
        }
      }
      c.fillStyle = `rgba(${color}, 0.38)`
      for (const p of pts) {
        c.beginPath()
        c.arc(p.x, p.y, 1.8, 0, Math.PI * 2)
        c.fill()
      }
    },
    [color, count],
  )
  return <canvas ref={ref} className={`rbx-canvas ${className}`} aria-hidden="true" />
}

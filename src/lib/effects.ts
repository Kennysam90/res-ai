// Page effects that work on plain DOM, so React never re-renders for them:
// scroll reveal, count-up numbers, card tilt, the reading progress bar and
// the click sound. Call refresh() after each navigation.
import { play } from './sound'

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

let revealObserver: IntersectionObserver | null = null
let countObserver: IntersectionObserver | null = null

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count)
  const suffix = el.dataset.suffix || ''
  if (!Number.isFinite(target) || reduceMotion()) {
    el.textContent = (el.dataset.count ?? '') + suffix
    return
  }
  // A year reads oddly counting up from zero, so start it close to its value.
  const from = target > 1000 ? target - 12 : 0
  const dur = 1100
  const t0 = performance.now()
  const step = (now: number) => {
    const p = Math.min(1, (now - t0) / dur)
    const eased = 1 - Math.pow(1 - p, 3)
    el.textContent = Math.round(from + (target - from) * eased) + suffix
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export function refresh() {
  if (typeof window === 'undefined') return
  // Content is visible by default. Only blocks that start below the fold are
  // hidden, so they can rise into view as the visitor scrolls. A crawler that
  // never scrolls, or a browser without scripts, still sees everything.
  const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-seen])')
  nodes.forEach((n) => n.setAttribute('data-seen', ''))
  if (!('IntersectionObserver' in window) || reduceMotion()) {
    document.querySelectorAll<HTMLElement>('[data-count]').forEach((n) => { n.textContent = (n.dataset.count ?? '') + (n.dataset.suffix || '') })
    return
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            revealObserver?.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    )
    countObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            countUp(e.target as HTMLElement)
            countObserver?.unobserve(e.target)
          }
        }
      },
      { threshold: 0.6 },
    )
  }
  const fold = window.innerHeight
  nodes.forEach((n) => {
    if (n.getBoundingClientRect().top > fold) {
      n.classList.add('rbx-pre')
      revealObserver?.observe(n)
    }
  })
  document.querySelectorAll('[data-count]:not([data-counted])').forEach((n) => {
    n.setAttribute('data-counted', '')
    countObserver?.observe(n)
  })
}

/** Starts the listeners that live for the whole visit. Returns a cleanup function. */
export function start() {
  if (typeof window === 'undefined') return () => {}
  const bar = document.getElementById('rbx-progress')
  let ticking = false
  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`
      document.documentElement.classList.toggle('is-scrolled', window.scrollY > 12)
      ticking = false
    })
  }

  const onClick = (e: MouseEvent) => {
    const el = (e.target as Element | null)?.closest?.('a, button, summary, [role="tab"]')
    if (!el || el.hasAttribute('data-silent')) return
    play(el.matches('a[href]') && !(el.getAttribute('href') ?? '').startsWith('#') ? 'nav' : 'tick')
  }

  // Tilt cards toward the pointer. Only for mouse users, and only when motion is welcome.
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  let tilted: HTMLElement | null = null
  const onMove = (e: MouseEvent) => {
    const el = (e.target as Element | null)?.closest?.<HTMLElement>('[data-tilt]') ?? null
    if (tilted && tilted !== el) {
      tilted.style.transform = ''
      tilted = null
    }
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`
    tilted = el
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onClick, true)
  if (fine && !reduceMotion()) document.addEventListener('mousemove', onMove, { passive: true })
  onScroll()
  return () => {
    window.removeEventListener('scroll', onScroll)
    document.removeEventListener('click', onClick, true)
    document.removeEventListener('mousemove', onMove)
  }
}

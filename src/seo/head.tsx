import { createContext, useContext, useEffect } from 'react'
import { SITE, abs } from '../data/site'
import type { Head, HeadTag, SeoProps } from '../types'

// On the server (pre-render) this is a function that receives the page's head.
// In the browser it is null and the page updates document.head instead.
export const HeadContext = createContext<((head: Head) => void) | null>(null)

export const DEFAULT_OG = '/og/default.jpg'

const esc = (s: string) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Turn page props into a flat list of head tags. */
export function buildHead({ title, description, path = '/', image, type = 'website', jsonLd, noindex = false, published, modified }: SeoProps): Head {
  const fullTitle = /resbrotherx/i.test(title) ? title : `${title} | ${SITE.name}`
  const url = abs(path)
  const img = abs(image || DEFAULT_OG)
  const tags: HeadTag[] = [
    ['meta', { name: 'description', content: description }],
    // A page that should not be indexed (the 404 page) has no canonical address.
    ...(noindex ? [] : [['link', { rel: 'canonical', href: url }] as HeadTag]),
    ['meta', { name: 'robots', content: noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
    ['meta', { property: 'og:site_name', content: SITE.name }],
    ['meta', { property: 'og:type', content: type }],
    ['meta', { property: 'og:title', content: fullTitle }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: url }],
    ['meta', { property: 'og:image', content: img }],
    ['meta', { property: 'og:locale', content: SITE.locale }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: fullTitle }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:image', content: img }],
  ]
  if (published) tags.push(['meta', { property: 'article:published_time', content: published }])
  if (modified) tags.push(['meta', { property: 'article:modified_time', content: modified }])
  const graph = (Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []).filter(Boolean)
  return { title: fullTitle, tags, jsonLd: graph.length ? { '@context': 'https://schema.org', '@graph': graph } : null }
}

/** Head as an HTML string, for the pre-rendered files. */
export function renderHead(head: Head) {
  const out = [`<title>${esc(head.title)}</title>`]
  for (const [tag, attrs] of head.tags) {
    const a = Object.entries(attrs).map(([k, v]) => `${k}="${esc(v)}"`).join(' ')
    out.push(`<${tag} ${a} data-seo>`)
  }
  if (head.jsonLd) {
    out.push(`<script type="application/ld+json" data-seo>${JSON.stringify(head.jsonLd).replace(/</g, '\\u003c')}</script>`)
  }
  return out.join('\n    ')
}

function applyHead(head: Head) {
  document.title = head.title
  document.head.querySelectorAll('[data-seo]').forEach((n) => n.remove())
  for (const [tag, attrs] of head.tags) {
    const el = document.createElement(tag)
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
    el.setAttribute('data-seo', '')
    document.head.appendChild(el)
  }
  if (head.jsonLd) {
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.setAttribute('data-seo', '')
    s.textContent = JSON.stringify(head.jsonLd)
    document.head.appendChild(s)
  }
}

/** Sets the title, description, canonical link, share tags and JSON-LD for a page. */
export function Seo(props: SeoProps) {
  const report = useContext(HeadContext)
  const head = buildHead(props)
  if (report) report(head)
  const key = JSON.stringify(head)
  useEffect(() => {
    applyHead(JSON.parse(key) as Head)
  }, [key])
  return null
}

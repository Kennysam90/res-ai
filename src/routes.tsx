import type { ReactElement } from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { About, Founder, TeamPage, Careers, Press } from './pages/Company'
import { Products, ProductDetail, Services, ServiceDetail, Labs, LabDetail, Portfolio, ProjectDetail, Technologies } from './pages/Catalog'
import { Docs, DocDetail, Blog, BlogPost, FaqPage, Newsletter } from './pages/Content'
import { Privacy, Terms, Cookies, Credits, SitemapPage } from './pages/Misc'
import { PRODUCTS } from './data/products'
import { SERVICES } from './data/services'
import { LABS } from './data/labs'
import { PROJECTS } from './data/projects'
import { POSTS } from './data/posts'
import { DOCS } from './data/docs'

export interface RouteDef {
  path: string
  element: ReactElement
}

export const ROUTES: RouteDef[] = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/founder', element: <Founder /> },
  { path: '/team', element: <TeamPage /> },
  { path: '/careers', element: <Careers /> },
  { path: '/press', element: <Press /> },
  { path: '/contact', element: <Contact /> },
  { path: '/products', element: <Products /> },
  { path: '/products/:slug', element: <ProductDetail /> },
  { path: '/services', element: <Services /> },
  { path: '/services/:slug', element: <ServiceDetail /> },
  { path: '/labs', element: <Labs /> },
  { path: '/labs/:slug', element: <LabDetail /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/portfolio/:slug', element: <ProjectDetail /> },
  { path: '/technologies', element: <Technologies /> },
  { path: '/docs', element: <Docs /> },
  { path: '/docs/:slug', element: <DocDetail /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/faq', element: <FaqPage /> },
  { path: '/newsletter', element: <Newsletter /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <Terms /> },
  { path: '/cookies', element: <Cookies /> },
  { path: '/credits', element: <Credits /> },
  { path: '/sitemap', element: <SitemapPage /> },
  { path: '*', element: <NotFound /> },
]

export interface PageEntry {
  path: string
  /** How much this page matters relative to the others, for the XML sitemap. */
  priority: number
  /** ISO date the page last changed. */
  lastmod?: string
}

/** Every real URL on the site. The pre-renderer writes one HTML file for each. */
export function allPages(): PageEntry[] {
  const fixed: [string, number][] = [
    ['/', 1],
    ['/about', 0.9],
    ['/founder', 0.9],
    ['/products', 0.9],
    ['/services', 0.8],
    ['/labs', 0.8],
    ['/portfolio', 0.8],
    ['/docs', 0.8],
    ['/blog', 0.8],
    ['/contact', 0.8],
    ['/team', 0.7],
    ['/press', 0.7],
    ['/faq', 0.7],
    ['/technologies', 0.6],
    ['/careers', 0.6],
    ['/newsletter', 0.5],
    ['/sitemap', 0.3],
    ['/privacy', 0.2],
    ['/terms', 0.2],
    ['/cookies', 0.2],
    ['/credits', 0.2],
  ]
  return [
    ...fixed.map(([path, priority]) => ({ path, priority })),
    ...PRODUCTS.map((p) => ({ path: `/products/${p.slug}`, priority: 0.9 })),
    ...SERVICES.map((s) => ({ path: `/services/${s.slug}`, priority: 0.7 })),
    ...LABS.map((l) => ({ path: `/labs/${l.slug}`, priority: 0.7 })),
    ...PROJECTS.map((p) => ({ path: `/portfolio/${p.slug}`, priority: 0.6 })),
    ...DOCS.map((d) => ({ path: `/docs/${d.slug}`, priority: 0.7, lastmod: d.updated })),
    ...POSTS.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.6, lastmod: p.updated || p.date })),
  ]
}

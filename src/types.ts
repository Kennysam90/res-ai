// Shared shapes for the site's content and metadata.

/** One piece of long-form content. Exactly one of the main keys is set per block. */
export interface Block {
  h2?: string
  h3?: string
  p?: string
  ul?: string[]
  ol?: string[]
  code?: string
  /** Caption shown above a code block. */
  title?: string
  /** Name of an image in the generated catalogue. */
  img?: string
  caption?: string
  note?: string
  table?: { head: string[]; rows: string[][] }
  facts?: [string, string][]
  cta?: LinkItem[]
}

export interface LinkItem {
  label: string
  to: string
}

export interface ExternalLink {
  label: string
  url: string
}

export interface Faq {
  q: string
  a: string
}

export interface Feature {
  icon: string
  title: string
  text: string
}

export interface Crumb {
  name: string
  path: string
}

export interface SocialLink {
  name: string
  handle?: string
  url: string
  icon: string
  /** Set to false until the account is checked; unconfirmed links stay out of JSON-LD. */
  confirmed?: boolean
}

export interface Product {
  slug: string
  name: string
  altNames?: string[]
  kicker: string
  tagline: string
  menuLine: string
  summary: string
  /** Page title for search results, about 60 characters. */
  seoTitle: string
  /** Page description for search results, at most 160 characters. */
  metaDescription: string
  /** schema.org applicationCategory */
  category: string
  platforms: string
  status: 'Live' | 'In development'
  url: string | null
  displayUrl?: string
  cardImage: string
  images: string[]
  docs: string
  links: ExternalLink[]
  sameAs?: string[]
  facts: [string, string][]
  highlights: Feature[]
  body: Block[]
  faqs: Faq[]
}

export interface Service {
  slug: string
  name: string
  menuTitle: string
  menuSub: string
  icon: string
  image: string
  summary: string
  cardText: string
  tools: string[]
  proof: LinkItem[]
  body: Block[]
  faqs: Faq[]
}

export interface Lab {
  slug: string
  name: string
  kicker: string
  title: string
  icon: string
  image: string
  shape: 'icosahedron' | 'cube' | 'octahedron'
  summary: string
  areas: Feature[]
  body: Block[]
}

export interface Project {
  slug: string
  name: string
  kicker: string
  category: string
  image: string
  summary: string
  stack: string[]
  repo: string
  body: Block[]
}

export interface RepoLink {
  name: string
  text: string
  url: string
  tags: string[]
}

export interface Post {
  slug: string
  title: string
  description: string
  /** ISO date the article was published. */
  date: string
  updated?: string
  category: string
  tags: string[]
  image: string
  body: Block[]
}

export interface Doc {
  slug: string
  title: string
  navTitle: string
  description: string
  icon: string
  /** ISO date the page was last checked against the product. */
  updated: string
  product?: string
  body: Block[]
}

export interface Team {
  slug: string
  name: string
  icon: string
  summary: string
  does: string[]
  links: LinkItem[]
}

export interface TechGroup {
  name: string
  icon: string
  intro: string
  items: { name: string; use: string }[]
}

export interface ImageMeta {
  w: number
  h: number
  widths: number[]
  alt: string
  credit?: {
    title: string
    author: string
    license: string
    licenseUrl: string
    source: string
  }
}

export type HeadTag = ['meta' | 'link', Record<string, string>]

export interface Head {
  title: string
  tags: HeadTag[]
  jsonLd: Record<string, unknown> | null
}

export interface SeoProps {
  title: string
  description: string
  path?: string
  image?: string | null
  type?: 'website' | 'article' | 'profile'
  jsonLd?: unknown
  noindex?: boolean
  published?: string
  modified?: string
}

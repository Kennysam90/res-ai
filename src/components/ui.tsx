import type { AnchorHTMLAttributes, CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import IMAGES_JSON from '../data/images.json'
import { slugify } from '../lib/blocks'
import type { Block, Faq, ImageMeta } from '../types'

const IMAGES = IMAGES_JSON as Record<string, ImageMeta>

type AProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { to?: string; href?: string; children?: ReactNode }

/** A link that uses the router for site pages and a new tab for other sites. */
export function A({ to, href, children, ...rest }: AProps) {
  const target = to || href || '/'
  if (/^(https?:|mailto:|tel:)/.test(target)) {
    const ext = /^https?:/.test(target)
    return (
      <a href={target} {...(ext ? { target: '_blank', rel: 'noopener' } : {})} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link to={target} {...rest}>
      {children}
    </Link>
  )
}

/** Staggers the scroll-reveal of an item in a row. */
export const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

export const Icon = ({ name, className = '' }: { name: string; className?: string }) => <i className={`${name} ${className}`.trim()} aria-hidden="true" />

/** A responsive image from the generated image catalogue (public/assets/media). */
interface ImgProps {
  name: string
  alt?: string
  className?: string
  sizes?: string
  /** Load at once and at high priority: for the image at the top of a page. */
  eager?: boolean
  /** Smallest rendition to use for the plain src. */
  width?: number
}

export function Img({ name, alt, className, sizes = '(max-width: 900px) 100vw, 50vw', eager = false, width }: ImgProps) {
  const im = IMAGES[name]
  if (!im) return null
  const base = `/assets/media/${name}`
  const srcSet = im.widths.map((w) => `${base}-${w}.webp ${w}w`).join(', ')
  const pick = width ? im.widths.find((w) => w >= width) || im.widths[im.widths.length - 1] : im.widths[0]
  return (
    <img
      src={`${base}-${pick}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      width={im.w}
      height={im.h}
      alt={alt ?? im.alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      {...(eager ? { fetchPriority: 'high' } : {})}
    />
  )
}

/** The 1200 x 630 JPEG of an image, for link previews. */
export const ogImage = (name: string): string | null => (IMAGES[name] ? `/assets/media/${name}-og.jpg` : null)

/** Small inline markup: **bold**, `code` and [links](url). Bold may contain links and code. */
export function inline(text: string): ReactNode {
  const parts: ReactNode[] = []
  const re = /(\*\*.+?\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g
  let last = 0
  let m: RegExpExecArray | null
  let i = 0
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    const t = m[0]
    if (t.startsWith('**')) parts.push(<strong key={i++}>{inline(t.slice(2, -2))}</strong>)
    else if (t.startsWith('`')) parts.push(<code key={i++}>{t.slice(1, -1)}</code>)
    else {
      const mm = /\[([^\]]+)\]\(([^)]+)\)/.exec(t)!
      parts.push(
        <A key={i++} to={mm[2]}>
          {mm[1]}
        </A>,
      )
    }
    last = m.index + t.length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}

/** Renders the block arrays used by articles, docs, products and services. */
export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="rbx-prose">
      {blocks.map((b, i) => {
        if (b.h2) return <h2 key={i} id={slugify(b.h2)}>{b.h2}</h2>
        if (b.h3) return <h3 key={i} id={slugify(b.h3)}>{b.h3}</h3>
        if (b.p) return <p key={i}>{inline(b.p)}</p>
        if (b.ul) return <ul key={i} className="rbx-list">{b.ul.map((li, j) => <li key={j}><Icon name="iconoir-check" /><span>{inline(li)}</span></li>)}</ul>
        if (b.ol) return <ol key={i} className="rbx-steps">{b.ol.map((li, j) => <li key={j}><span className="n">{String(j + 1).padStart(2, '0')}</span><span>{inline(li)}</span></li>)}</ol>
        if (b.code) return (
          <figure key={i} className="rbx-code">
            {b.title && <figcaption>{b.title}</figcaption>}
            <pre><code>{b.code}</code></pre>
          </figure>
        )
        if (b.img) return (
          <figure key={i} className="rbx-figure">
            <Img name={b.img} sizes="(max-width: 900px) 100vw, 860px" />
            {b.caption && <figcaption>{b.caption}</figcaption>}
          </figure>
        )
        if (b.note) return <p key={i} className="rbx-note"><Icon name="iconoir-light-bulb-on" /><span>{inline(b.note)}</span></p>
        if (b.table) return (
          <div key={i} className="rbx-table-wrap">
            <table className="rbx-table">
              <thead><tr>{b.table.head.map((h, j) => <th key={j} scope="col">{h}</th>)}</tr></thead>
              <tbody>{b.table.rows.map((r, j) => <tr key={j}>{r.map((c, k) => <td key={k}>{inline(c)}</td>)}</tr>)}</tbody>
            </table>
          </div>
        )
        if (b.facts) return (
          <dl key={i} className="rbx-facts">
            {b.facts.map(([k, v], j) => <div key={j}><dt>{k}</dt><dd>{inline(v)}</dd></div>)}
          </dl>
        )
        if (b.cta) return (
          <div key={i} className="btns-group d-flex rbx-cta-row">
            {b.cta.map((c, j) => (
              <A key={j} to={c.to} className={j === 0 ? 'theme-btn' : 'theme-btn2'}>
                {c.label} <Icon name="iconoir-arrow-up-right" />
              </A>
            ))}
          </div>
        )
        return null
      })}
    </div>
  )
}

/** Headline, kicker and optional lead, in the template's section header style. */
interface SectionHeaderProps {
  kicker: string
  title: ReactNode
  text?: ReactNode
  action?: ReactNode
  center?: boolean
  as?: 'h1' | 'h2'
}

export function SectionHeader({ kicker, title, text, action, center = false, as: H = 'h2' }: SectionHeaderProps) {
  if (center) {
    return (
      <div className="case-studio-header text-center" data-reveal>
        <h5 className="section-subtitle">{kicker}</h5>
        <H className="section-title">{title}</H>
        {text && <p className="rbx-lead">{text}</p>}
      </div>
    )
  }
  return (
    <div className="section-header service-section-header d-flex align-items-end justify-content-between" data-reveal>
      <div className="left">
        <h5 className="section-subtitle">{kicker}</h5>
        <H className="section-title">{title}</H>
      </div>
      {text && <p>{text}</p>}
      {action}
    </div>
  )
}

/** The page-closing call to action from the template. */
export function Cta({ title = 'Have a project in mind?', text = 'Tell us what you want to build. We read every message.', label = 'Start a conversation', to = '/contact' }: { title?: string; text?: string; label?: string; to?: string }) {
  return (
    <section className="cta-area">
      <div className="custom-container">
        <div className="cta-body text-center" data-reveal>
          <img src="/assets/imgs/bg-shape-11.svg" alt="" className="animation-slide-left bg-shape" loading="lazy" />
          <h2>{title}</h2>
          <p>{text}</p>
          <A to={to} className="theme-btn">
            {label} <Icon name="iconoir-arrow-up-right" />
          </A>
        </div>
      </div>
    </section>
  )
}

/** Card grid used for products, services, labs, posts and projects. */
export interface CardItem {
  to: string
  title: string
  text: string
  image?: string
  icon?: string
  kicker?: string
  badge?: string
  tags?: string[]
  cta?: string
}

export function CardGrid({ items, cols = 3 }: { items: CardItem[]; cols?: 2 | 3 | 4 }) {
  return (
    <div className={`rbx-grid rbx-grid-${cols}`}>
      {items.map((it, i) => (
        <article className="rbx-card card-h" key={it.to || i} data-reveal style={delay((i % cols) * 80)}>
          {it.image && (
            <A to={it.to} className="rbx-card-media" aria-label={it.title} tabIndex={-1}>
              <Img name={it.image} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
              {it.badge && <span className="rbx-badge">{it.badge}</span>}
            </A>
          )}
          <div className="rbx-card-body">
            {it.kicker && <h5 className="section-subtitle section-subtitle1">{it.kicker}</h5>}
            {it.icon && !it.image && <span className="rbx-card-icon"><Icon name={it.icon} /></span>}
            <h3><A to={it.to}>{it.title}</A></h3>
            <p>{it.text}</p>
            {it.tags && <ul className="rbx-tags">{it.tags.map((t) => <li key={t}>{t}</li>)}</ul>}
            <A to={it.to} className="rbx-card-link" aria-label={`${it.cta || 'Read more'}: ${it.title}`}>
              {it.cta || 'Read more'} <Icon name="iconoir-arrow-up-right" />
            </A>
          </div>
        </article>
      ))}
    </div>
  )
}

/** Question and answer list that opens one answer at a time (native <details>). */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="rbx-faq">
      {faqs.map((f, i) => (
        <details key={i} name="faq" data-reveal {...(i === 0 ? { open: true } : {})}>
          <summary>
            <span>{f.q}</span>
            <Icon name="iconoir-nav-arrow-down" />
          </summary>
          <div className="rbx-faq-a">
            <p>{inline(f.a)}</p>
          </div>
        </details>
      ))}
    </div>
  )
}

import { useParams } from 'react-router-dom'
import Page, { PageHero, SubscribeForm } from '../components/Layout'
import { A, Icon, Img, Blocks, SectionHeader, Cta, CardGrid, FaqList, ogImage, delay } from '../components/ui'
import NotFound from './NotFound'
import { DOCS, getDoc } from '../data/docs'
import { POSTS, getPost } from '../data/posts'
import { PRODUCTS } from '../data/products'
import { FAQS } from '../data/company'
import { SITE, SOCIAL, PRODUCT_CHANNELS } from '../data/site'
import { headings, readingMinutes } from '../lib/blocks'
import { breadcrumbs, webPage, article, techArticle, faqPage, orgRef } from '../seo/schema'
import type { Post } from '../types'

const fmtDate = (iso: string) =>
  new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

/* ------------------------------------------------------------------- Docs */

export function Docs() {
  const path = '/docs'
  const description = 'Documentation for Resbrotherx products: the AnimeDoc API guide, Apsuni and Adorė guides, the Brainbox design overview, and feeds and files for AI assistants.'
  return (
    <Page
      className="docs-page"
      seo={{ title: 'Resbrotherx Documentation — API Guides for AnimeDoc, Apsuni, Adorė and Brainbox', description, path, jsonLd: [webPage({ path, name: 'Resbrotherx documentation', description, type: 'CollectionPage', about: orgRef }), breadcrumbs([{ name: 'Docs', path }])] }}
    >
      <PageHero kicker="Documentation" title="Guides and API docs" text="One place to start for everything Resbrotherx ships. Each guide links to the product's full reference." crumbs={[{ name: 'Docs', path }]} />
      <section className="rbx-section">
        <div className="custom-container">
          <div className="rbx-grid rbx-grid-3">
            {DOCS.map((d, i) => (
              <article className="rbx-card is-plain card-h" key={d.slug} data-reveal data-tilt style={delay((i % 3) * 70)}>
                <div className="rbx-card-body">
                  <span className="rbx-card-icon"><Icon name={d.icon} /></span>
                  <h2 className="rbx-h3"><A to={`/docs/${d.slug}`}>{d.navTitle}</A></h2>
                  <p>{d.description}</p>
                  <A to={`/docs/${d.slug}`} className="rbx-card-link" aria-label={`Open: ${d.title}`}>Open guide <Icon name="iconoir-arrow-up-right" /></A>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="rbx-section is-tint">
        <div className="custom-container">
          <div className="rbx-split">
            <div className="rbx-prose" data-reveal>
              <h2>Quick start: your first API call</h2>
              <p>The AnimeDoc API is our public REST API. Create a free key at <A href="https://animedoc.cloud">animedoc.cloud</A>, then:</p>
              <Blocks blocks={[{ code: 'curl -X POST "https://api.animedoc.cloud/api/v2/anime/search/" \\\n  -H "X-API-Key: $ANIMEDOC_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"keyword": "one piece", "page": 1, "perPage": 10}\'', title: 'Search the catalogue' }]} />
              <A to="/docs/animedoc-api" className="theme-btn">Read the API guide <Icon name="iconoir-arrow-up-right" /></A>
            </div>
            <div className="rbx-prose" data-reveal>
              <h2>Official references</h2>
              <p>Our guides are overviews. These are the sources of truth:</p>
              <ul className="rbx-linklist">
                <li><A href="https://animedoc.cloud/docs"><Icon name="iconoir-terminal" /> <span>AnimeDoc API reference and console</span> <Icon name="iconoir-open-new-window" /></A></li>
                <li><A href="https://animedoc.cloud/tutorials"><Icon name="iconoir-book" /> <span>AnimeDoc tutorials</span> <Icon name="iconoir-open-new-window" /></A></li>
                <li><A href="https://apsuni.com/docs"><Icon name="iconoir-page" /> <span>Apsuni documentation</span> <Icon name="iconoir-open-new-window" /></A></li>
                <li><A href="https://github.com/resbrotherx"><Icon name="iconoir-github" /> <span>Source code on GitHub</span> <Icon name="iconoir-open-new-window" /></A></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Cta title="Can't find what you need?" text="Tell us what is missing and we will add it." label="Ask a question" />
    </Page>
  )
}

export function DocDetail() {
  const { slug } = useParams()
  const d = getDoc(slug)
  if (!d) return <NotFound />
  const path = `/docs/${d.slug}`
  const crumbs = [{ name: 'Docs', path: '/docs' }, { name: d.navTitle, path }]
  const toc = headings(d.body)
  const product = PRODUCTS.find((p) => p.slug === d.product)
  return (
    <Page
      className="doc-details-page"
      seo={{ title: `${d.title} | Resbrotherx Docs`, description: d.description, path, type: 'article', modified: d.updated, jsonLd: [techArticle(d), webPage({ path, name: d.title, description: d.description }), breadcrumbs(crumbs)] }}
    >
      <PageHero kicker="Documentation" title={d.title} text={d.description} crumbs={crumbs} />
      <section className="rbx-section is-tight">
        <div className="custom-container">
          <div className="rbx-docs-grid">
            <nav className="rbx-docs-nav" aria-label="Documentation">
              <h2 className="rbx-panel-title">Guides</h2>
              <ul>
                {DOCS.map((x) => (
                  <li key={x.slug}>
                    <A to={`/docs/${x.slug}`} {...(x.slug === d.slug ? { 'aria-current': 'page' as const } : {})}><Icon name={x.icon} /> {x.navTitle}</A>
                  </li>
                ))}
              </ul>
              <h2 className="rbx-panel-title">On this page</h2>
              <ul className="rbx-toc">
                {toc.map((h) => <li key={h.id}><a href={`#${h.id}`}>{h.text}</a></li>)}
              </ul>
            </nav>
            <article className="rbx-doc" data-reveal>
              <p className="rbx-meta">
                <Icon name="iconoir-clock" /> Last checked {fmtDate(d.updated)}
                {product && <> · <A to={`/products/${product.slug}`}>About {product.name}</A></>}
              </p>
              <Blocks blocks={d.body} />
            </article>
          </div>
        </div>
      </section>
      <Cta title="Something unclear?" text="Tell us and we will fix the page." label="Send feedback" />
    </Page>
  )
}

/* ------------------------------------------------------------------- Blog */

const postCard = (p: Post) => ({ to: `/blog/${p.slug}`, image: p.image, kicker: p.category, title: p.title, text: p.description, cta: 'Read article' })

export function Blog() {
  const path = '/blog'
  const description = 'The Resbrotherx blog: company news, and practical guides on AI assistants, robotics with Arduino and Raspberry Pi, 3D animation in Blender, mobile apps and SaaS.'
  const [featured, ...rest] = POSTS
  const categories = [...new Set(POSTS.map((p) => p.category))]
  return (
    <Page
      className="blog-page"
      seo={{
        title: 'Resbrotherx Blog — AI, Robotics, 3D and Software Engineering',
        description,
        path,
        jsonLd: [
          { '@type': 'Blog', '@id': SITE.url + path + '#blog', url: SITE.url + path, name: 'Resbrotherx Blog', description, publisher: orgRef, blogPost: POSTS.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE.url}/blog/${p.slug}`, datePublished: p.date })) },
          breadcrumbs([{ name: 'Blog', path }]),
        ],
      }}
    >
      <PageHero kicker="Blog" title="Notes from the people doing the work" text="Company news from Resbrotherx, and guides on AI, robotics, 3D and building software." crumbs={[{ name: 'Blog', path }]} />
      <section className="news-area rbx-blog-list">
        <div className="custom-container">
          <div className="sticky-news d-flex card-h" data-reveal>
            <A to={`/blog/${featured.slug}`} className="news-img-box" tabIndex={-1} aria-hidden="true">
              <Img name={featured.image} alt="" eager sizes="(max-width: 900px) 100vw, 50vw" />
            </A>
            <div className="news-content">
              <h5 className="section-subtitle section-subtitle1">{featured.category} · {fmtDate(featured.date)}</h5>
              <h2 className="section-title"><A to={`/blog/${featured.slug}`}>{featured.title}</A></h2>
              <p>{featured.description}</p>
              <ul>{featured.tags.slice(0, 2).map((t) => <li key={t}><Icon name="iconoir-check" /> {t}</li>)}</ul>
              <A to={`/blog/${featured.slug}`} className="theme-btn" aria-label={`Read: ${featured.title}`}><Icon name="iconoir-arrow-up-right" /></A>
            </div>
          </div>
        </div>
      </section>
      {categories.map((c, i) => {
        const posts = rest.filter((p) => p.category === c)
        if (!posts.length) return null
        return (
          <section className={`rbx-section is-tight${i % 2 ? ' is-tint' : ''}`} key={c} id={c.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
            <div className="custom-container">
              <SectionHeader kicker="Category" title={c} />
              <CardGrid items={posts.map(postCard)} />
            </div>
          </section>
        )
      })}
      <section className="rbx-section">
        <div className="custom-container">
          <div className="rbx-panel rbx-subscribe" data-reveal>
            <div>
              <h2 className="rbx-panel-title">Get new articles</h2>
              <p>Follow by email or add the <a href="/feed.xml">RSS feed</a> to your reader.</p>
            </div>
            <SubscribeForm />
          </div>
        </div>
      </section>
    </Page>
  )
}

export function BlogPost() {
  const { slug } = useParams()
  const p = getPost(slug)
  if (!p) return <NotFound />
  const path = `/blog/${p.slug}`
  const crumbs = [{ name: 'Blog', path: '/blog' }, { name: p.title, path }]
  const related = POSTS.filter((x) => x.slug !== p.slug && (x.category === p.category || x.tags.some((t) => p.tags.includes(t)))).slice(0, 3)
  const more = related.length >= 3 ? related : [...related, ...POSTS.filter((x) => x.slug !== p.slug && !related.includes(x))].slice(0, 3)
  const toc = headings(p.body)
  const share = encodeURIComponent(SITE.url + path)
  const text = encodeURIComponent(p.title)
  return (
    <Page
      className="blog-details-page"
      seo={{ title: p.title, description: p.description, path, type: 'article', image: ogImage(p.image), published: p.date, modified: p.updated || p.date, jsonLd: [article(p, ogImage(p.image)), breadcrumbs(crumbs)] }}
    >
      <PageHero kicker={p.category} title={p.title} text={p.description} crumbs={[{ name: 'Blog', path: '/blog' }, { name: p.category, path }]} wide>
        <p className="rbx-meta is-center">
          <span><Icon name="iconoir-calendar" /> <time dateTime={p.date}>{fmtDate(p.date)}</time></span>
          <span><Icon name="iconoir-clock" /> {readingMinutes(p.body)} min read</span>
          <span><Icon name="iconoir-user" /> <A to="/about">Resbrotherx</A></span>
        </p>
      </PageHero>
      <section className="rbx-section is-tight">
        <div className="custom-container">
          <div className="rbx-article-grid">
            <article data-reveal>
              <figure className="rbx-figure is-lead"><Img name={p.image} eager sizes="(max-width: 900px) 100vw, 860px" /></figure>
              <Blocks blocks={p.body} />
              <ul className="rbx-tags is-post">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </article>
            <aside className="rbx-aside" data-reveal>
              {toc.length > 1 && (
                <div className="rbx-panel">
                  <h2 className="rbx-panel-title">In this article</h2>
                  <ul className="rbx-toc">{toc.map((h) => <li key={h.id}><a href={`#${h.id}`}>{h.text}</a></li>)}</ul>
                </div>
              )}
              <div className="rbx-panel">
                <h2 className="rbx-panel-title">Share</h2>
                <ul className="rbx-social-row">
                  <li><A href={`https://x.com/intent/tweet?url=${share}&text=${text}`} aria-label="Share on X"><Icon name="iconoir-x" /></A></li>
                  <li><A href={`https://www.linkedin.com/sharing/share-offsite/?url=${share}`} aria-label="Share on LinkedIn"><Icon name="iconoir-linkedin" /></A></li>
                  <li><A href={`https://www.facebook.com/sharer/sharer.php?u=${share}`} aria-label="Share on Facebook"><Icon name="iconoir-facebook" /></A></li>
                  <li><A href={`https://wa.me/?text=${text}%20${share}`} aria-label="Share on WhatsApp"><Icon name="iconoir-whatsapp" /></A></li>
                  <li><A href={`mailto:?subject=${text}&body=${share}`} aria-label="Share by email"><Icon name="iconoir-mail" /></A></li>
                </ul>
              </div>
              <div className="rbx-panel is-accent">
                <h2 className="rbx-panel-title">About Resbrotherx</h2>
                <p>{SITE.oneLiner}</p>
                <A to="/about" className="rbx-card-link">About the company <Icon name="iconoir-arrow-up-right" /></A>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="rbx-section is-tint">
        <div className="custom-container">
          <SectionHeader kicker="Keep reading" title="Related articles" />
          <CardGrid items={more.map(postCard)} />
        </div>
      </section>
      <Cta />
    </Page>
  )
}

/* -------------------------------------------------------------------- FAQ */

export function FaqPage() {
  const path = '/faq'
  const description = 'Answers about Resbrotherx: what it is, who founded it, who Patrick Francis Ugochukwu is, what products it makes, where it is based and how to get in touch.'
  return (
    <Page
      className="faq-page"
      seo={{ title: 'Resbrotherx FAQ — Company, Founder and Products Explained', description, path, jsonLd: [faqPage(FAQS, path), webPage({ path, name: 'Resbrotherx frequently asked questions', description, about: orgRef }), breadcrumbs([{ name: 'FAQ', path }])] }}
    >
      <PageHero kicker="FAQ" title="Questions, answered plainly" text="What Resbrotherx is, who is behind it and what it makes." crumbs={[{ name: 'FAQ', path }]} />
      <section className="rbx-section is-tight">
        <div className="custom-container">
          <div className="rbx-narrow">
            <FaqList faqs={FAQS} />
          </div>
        </div>
      </section>
      <section className="rbx-section is-tint">
        <div className="custom-container">
          <SectionHeader center kicker="Product questions" title="About each product" />
          <CardGrid cols={4} items={PRODUCTS.map((p) => ({ to: `/products/${p.slug}`, icon: 'iconoir-chat-bubble', title: `${p.name} questions`, text: p.faqs[0].a, cta: `${p.name} FAQ` }))} />
        </div>
      </section>
      <Cta title="Still have a question?" text="Ask us directly. We read every message." label="Contact us" />
    </Page>
  )
}

/* ------------------------------------------------------------ Newsletter */

export function Newsletter() {
  const path = '/newsletter'
  const description = 'Follow Resbrotherx: subscribe by email, add the RSS or JSON feed to your reader, or follow the company and its products on YouTube, Instagram, X and GitHub.'
  return (
    <Page
      className="newsletter-page"
      seo={{ title: 'Resbrotherx Updates — Newsletter, RSS Feed and Channels', description, path, jsonLd: [webPage({ path, name: 'Resbrotherx updates', description, about: orgRef }), breadcrumbs([{ name: 'Updates', path }])] }}
    >
      <PageHero kicker="Updates" title="Follow what we are building" text="New products, articles and videos, by email, by feed or on the channel you already use." crumbs={[{ name: 'Updates', path }]} />
      <section className="rbx-section is-tight">
        <div className="custom-container">
          <div className="rbx-split">
            <div className="rbx-panel" data-reveal>
              <h2 className="rbx-panel-title">By email</h2>
              <p>Enter your address and confirm from your email app. We write when there is something to say: a launch, a new article or a new video.</p>
              <SubscribeForm />
            </div>
            <div className="rbx-panel" data-reveal>
              <h2 className="rbx-panel-title">By feed</h2>
              <p>Feeds carry the full text of every article. Newsletters and curators are welcome to use them, with a link back.</p>
              <ul className="rbx-linklist">
                <li><a href="/feed.xml"><Icon name="iconoir-rss-feed" /> <span>RSS feed</span> <code>/feed.xml</code></a></li>
                <li><a href="/feed.json"><Icon name="iconoir-code" /> <span>JSON feed</span> <code>/feed.json</code></a></li>
                <li><a href="/llms.txt"><Icon name="iconoir-brain" /> <span>For AI assistants</span> <code>/llms.txt</code></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="rbx-section is-tint">
        <div className="custom-container">
          <SectionHeader kicker="Channels" title="Where to find us" text="The company's own channels, and the channels run by our products." />
          <div className="rbx-grid rbx-grid-3">
            {[...SOCIAL.map((s) => ({ ...s, name: `Resbrotherx on ${s.name}` })), ...PRODUCT_CHANNELS].map((s, i) => (
              <A href={s.url} className="rbx-channel card-h" key={s.url} data-reveal style={delay((i % 3) * 60)}>
                <span className="rbx-card-icon"><Icon name={s.icon} /></span>
                <span>
                  <strong>{s.name}</strong>
                  <small>{s.url.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')}</small>
                </span>
                <Icon name="iconoir-arrow-up-right" />
              </A>
            ))}
          </div>
        </div>
      </section>
      <section className="rbx-section">
        <div className="custom-container">
          <SectionHeader kicker="Latest" title="Recent articles" />
          <CardGrid items={POSTS.slice(0, 3).map(postCard)} />
          <p className="rbx-more text-center"><A to="/blog" className="theme-btn2">All articles <Icon name="iconoir-arrow-up-right" /></A></p>
        </div>
      </section>
    </Page>
  )
}

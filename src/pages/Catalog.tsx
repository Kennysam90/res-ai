import { useParams } from 'react-router-dom'
import Page, { PageHero } from '../components/Layout'
import { A, Icon, Img, Blocks, SectionHeader, Cta, CardGrid, FaqList, ogImage, delay } from '../components/ui'
import { Wireframe } from '../components/Canvas3D'
import NotFound from './NotFound'
import { PRODUCTS, getProduct } from '../data/products'
import { SERVICES, getService } from '../data/services'
import { LABS, getLab } from '../data/labs'
import { PROJECTS, MORE_ON_GITHUB, GITHUB_PROFILE, getProject } from '../data/projects'
import { TECH } from '../data/company'
import { SITE } from '../data/site'
import { breadcrumbs, webPage, software, service as serviceSchema, faqPage, orgRef } from '../seo/schema'
import type { Feature } from '../types'

const FeatureGrid = ({ items }: { items: Feature[] }) => (
  <div className="rbx-grid rbx-grid-3">
    {items.map((f, i) => (
      <article className="rbx-card is-plain" key={f.title} data-reveal data-tilt style={delay((i % 3) * 70)}>
        <div className="rbx-card-body">
          <span className="rbx-card-icon"><Icon name={f.icon} /></span>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
      </article>
    ))}
  </div>
)

/* --------------------------------------------------------------- Products */

export function Products() {
  const path = '/products'
  const description = 'The software Resbrotherx builds and runs: Apsuni for websites and apps, Adorė for made-to-measure fashion, and Brainbox in development.'
  return (
    <Page
      className="portfolio-page"
      seo={{
        title: 'Resbrotherx Products — Apsuni, Adorė and Brainbox',
        description,
        path,
        jsonLd: [
          webPage({ path, name: 'Resbrotherx products', description, type: 'CollectionPage', about: orgRef }),
          { '@type': 'ItemList', itemListElement: PRODUCTS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.name, url: `https://www.resbrotherx.com/products/${p.slug}` })) },
          breadcrumbs([{ name: 'Products', path }]),
        ],
      }}
    >
      <PageHero kicker="Products" title="Software we build and run" text="Each product has its own name, website and customers. Resbrotherx owns and operates all of them." crumbs={[{ name: 'Products', path }]} />
      <section className="rbx-section">
        <div className="custom-container">
          {PRODUCTS.map((p, i) => (
            <article className={`rbx-feature-row${i % 2 ? ' is-flip' : ''}`} key={p.slug} data-reveal>
              <A to={`/products/${p.slug}`} className="rbx-feature-media" tabIndex={-1} aria-hidden="true">
                <Img name={p.cardImage} alt="" sizes="(max-width: 900px) 100vw, 50vw" eager={i === 0} />
              </A>
              <div className="rbx-feature-text">
                <h5 className="section-subtitle">{p.kicker}</h5>
                <h2 className="section-title rbx-h2"><A to={`/products/${p.slug}`}>{p.name}</A></h2>
                <p className="rbx-lead">{p.summary}</p>
                <ul className="rbx-tags">
                  <li className="rbx-status" data-status={p.status}>{p.status}</li>
                  {p.platforms.split(', ').map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className="btns-group d-flex rbx-cta-row">
                  <A to={`/products/${p.slug}`} className="theme-btn">About {p.name} <Icon name="iconoir-arrow-up-right" /></A>
                  {p.url && <A href={p.url} className="theme-btn2">Visit {p.displayUrl || p.url.replace('https://', '')} <Icon name="iconoir-open-new-window" /></A>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="rbx-section is-tint">
        <div className="custom-container">
          <SectionHeader kicker="For developers" title="Documentation" text="Step-by-step guides for every product we ship." />
          <CardGrid cols={4} items={PRODUCTS.map((p) => ({ to: p.docs, icon: 'iconoir-book', title: `${p.name} docs`, text: p.menuLine, cta: 'Open guide' }))} />
        </div>
      </section>
      <Cta title="Need something built?" text="A website or app from a template or Figma design starts at Apsuni. For anything else, talk to us." />
    </Page>
  )
}

export function ProductDetail() {
  const { slug } = useParams()
  const p = getProduct(slug)
  if (!p) return <NotFound />
  const path = `/products/${p.slug}`
  const others = PRODUCTS.filter((x) => x.slug !== p.slug)
  const crumbs = [{ name: 'Products', path: '/products' }, { name: p.name, path }]
  return (
    <Page
      className="portfolio-details-page"
      seo={{
        title: p.seoTitle,
        description: p.metaDescription,
        path,
        image: ogImage(p.cardImage),
        jsonLd: [software(p, ogImage(p.cardImage)), faqPage(p.faqs, path), webPage({ path, name: `${p.name} by Resbrotherx`, description: p.summary }), breadcrumbs(crumbs)],
      }}
    >
      <PageHero kicker={p.kicker} title={p.name} text={p.tagline} crumbs={crumbs} wide>
        <div className="btns-group d-flex justify-content-center rbx-cta-row">
          {p.url && <A href={p.url} className="theme-btn">Visit {p.displayUrl || p.url.replace('https://', '')} <Icon name="iconoir-open-new-window" /></A>}
          <A to={p.docs} className="theme-btn2">Read the guide <Icon name="iconoir-arrow-up-right" /></A>
        </div>
        <div className="rbx-shots" data-reveal>
          {p.images.map((im, i) => <Img key={im} name={im} eager={i === 0} sizes="(max-width: 900px) 100vw, 50vw" />)}
        </div>
      </PageHero>
      <section className="rbx-section is-tight">
        <div className="custom-container">
          <SectionHeader kicker="Highlights" title={`What ${p.name} does`} text={p.summary} />
          <FeatureGrid items={p.highlights} />
        </div>
      </section>
      <section className="rbx-section">
        <div className="custom-container">
          <div className="rbx-article-grid">
            <div data-reveal><Blocks blocks={p.body} /></div>
            <aside className="rbx-aside" data-reveal>
              <div className="rbx-panel">
                <h2 className="rbx-panel-title">{p.name} at a glance</h2>
                <span className="rbx-status" data-status={p.status}>{p.status}</span>
                <Blocks blocks={[{ facts: p.facts }]} />
              </div>
              <div className="rbx-panel">
                <h2 className="rbx-panel-title">Links</h2>
                <ul className="rbx-linklist is-compact">
                  {p.links.map((l) => <li key={l.url}><A href={l.url}>{l.label} <Icon name="iconoir-open-new-window" /></A></li>)}
                  <li><A to={p.docs}>{p.name} guide <Icon name="iconoir-arrow-up-right" /></A></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="rbx-section is-tint">
        <div className="custom-container">
          <div className="rbx-narrow">
            <h2 className="section-title rbx-h2 text-center">Questions about {p.name}</h2>
            <FaqList faqs={p.faqs} />
          </div>
        </div>
      </section>
      <section className="rbx-section">
        <div className="custom-container">
          <SectionHeader kicker="More from Resbrotherx" title="Other products" />
          <CardGrid items={others.map((o) => ({ to: `/products/${o.slug}`, image: o.cardImage, kicker: o.kicker, title: o.name, text: o.summary, cta: `About ${o.name}` }))} />
        </div>
      </section>
      <Cta />
    </Page>
  )
}

/* --------------------------------------------------------------- Services */

export function Services() {
  const path = '/services'
  const description = 'Resbrotherx services: AI application development, robotics and embedded systems, 3D modelling and animation, mobile apps, web apps, SaaS, APIs and product design.'
  return (
    <Page
      className="service-page"
      seo={{
        title: 'Resbrotherx Services — AI, Robotics, 3D, Mobile, Web and SaaS',
        description,
        path,
        jsonLd: [webPage({ path, name: 'Resbrotherx services', description, type: 'CollectionPage', about: orgRef }), ...SERVICES.map(serviceSchema), breadcrumbs([{ name: 'Services', path }])],
      }}
    >
      <PageHero kicker="Services" title="What we build" text="Eight services, each one something our own products depend on every day." crumbs={[{ name: 'Services', path }]} />
      <section className="service-area rbx-services-all">
        <div className="custom-container">
          <div className="rbx-grid rbx-grid-4">
            {SERVICES.map((s, i) => (
              <div className="service-card simple-shadow" key={s.slug} data-reveal data-tilt style={delay((i % 4) * 60)}>
                {s.slug === 'robotics-embedded' && <span className="service-badge">New</span>}
                <span className="service-icon rbx-service-icon"><Icon name={s.icon} /></span>
                <h3><A to={`/services/${s.slug}`}>{s.name}</A></h3>
                <p>{s.cardText}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="rbx-section is-tint">
        <div className="custom-container">
          {SERVICES.map((s, i) => (
            <article className={`rbx-feature-row${i % 2 ? ' is-flip' : ''}`} key={s.slug} id={s.slug} data-reveal>
              <A to={`/services/${s.slug}`} className="rbx-feature-media" tabIndex={-1} aria-hidden="true">
                <Img name={s.image} alt="" sizes="(max-width: 900px) 100vw, 50vw" />
              </A>
              <div className="rbx-feature-text">
                <h5 className="section-subtitle">Service {String(i + 1).padStart(2, '0')}</h5>
                <h2 className="section-title rbx-h2"><A to={`/services/${s.slug}`}>{s.name}</A></h2>
                <p className="rbx-lead">{s.summary}</p>
                <ul className="rbx-tags">{s.tools.map((t) => <li key={t}>{t}</li>)}</ul>
                <A to={`/services/${s.slug}`} className="theme-btn2">Read more <Icon name="iconoir-arrow-up-right" /></A>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="rbx-section" id="pricing">
        <div className="custom-container">
          <div className="rbx-prose rbx-narrow" data-reveal>
            <h2>How pricing works</h2>
            <ol>
              <li><strong>Tell us what you need.</strong> Use the <A to="/contact">contact page</A> or write to <A href={`mailto:${SITE.email}`}>{SITE.email}</A>.</li>
              <li><strong>Get a written quote.</strong> Every project is priced in Nigerian naira (₦) before you pay anything. The quote lists what is delivered, the price and the dates.</li>
              <li><strong>Pay securely.</strong> Usually a deposit to start and the balance at agreed milestones, by card, bank transfer or USSD through our payment provider. You get a receipt for every payment.</li>
              <li><strong>Receive the work.</strong> We deliver what the quote describes. If something does not match, we fix it.</li>
            </ol>
            <p>For a website or mobile app from a template or a Figma design, <A to="/products/apsuni">Apsuni</A> has fixed plans with prices shown up front. Refunds and cancellations are covered by our <A to="/refunds">payments and refund policy</A>.</p>
          </div>
        </div>
      </section>
      <Cta title="Not sure which one you need?" text="Describe the result you want and we will tell you what it takes." label="Ask us" />
    </Page>
  )
}

export function ServiceDetail() {
  const { slug } = useParams()
  const s = getService(slug)
  if (!s) return <NotFound />
  const path = `/services/${s.slug}`
  const crumbs = [{ name: 'Services', path: '/services' }, { name: s.name, path }]
  return (
    <Page
      className="service-details-page"
      seo={{
        title: `${s.name} — Resbrotherx`,
        description: s.summary,
        path,
        image: ogImage(s.image),
        jsonLd: [serviceSchema(s), faqPage(s.faqs, path), webPage({ path, name: `${s.name} at Resbrotherx`, description: s.summary }), breadcrumbs(crumbs)],
      }}
    >
      <PageHero kicker="Service" title={s.name} text={s.summary} crumbs={crumbs} />
      <section className="rbx-section is-tight">
        <div className="custom-container">
          <div className="rbx-article-grid">
            <div data-reveal>
              <figure className="rbx-figure is-lead"><Img name={s.image} eager sizes="(max-width: 900px) 100vw, 860px" /></figure>
              <Blocks blocks={s.body} />
            </div>
            <aside className="rbx-aside" data-reveal>
              <div className="rbx-panel">
                <h2 className="rbx-panel-title">Tools we use</h2>
                <ul className="rbx-tags">{s.tools.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
              <div className="rbx-panel">
                <h2 className="rbx-panel-title">See it in our work</h2>
                <ul className="rbx-linklist is-compact">
                  {s.proof.map((l) => <li key={l.to}><A to={l.to}>{l.label} <Icon name="iconoir-arrow-up-right" /></A></li>)}
                </ul>
              </div>
              <div className="rbx-panel is-accent">
                <h2 className="rbx-panel-title">Start a project</h2>
                <p>Tell us what you want to build and we will reply by email.</p>
                <A to="/contact" className="theme-btn">Contact us <Icon name="iconoir-arrow-up-right" /></A>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="rbx-section is-tint">
        <div className="custom-container">
          <div className="rbx-narrow">
            <h2 className="section-title rbx-h2 text-center">Common questions</h2>
            <FaqList faqs={s.faqs} />
          </div>
        </div>
      </section>
      <section className="rbx-section">
        <div className="custom-container">
          <SectionHeader kicker="More services" title="What else we do" />
          <CardGrid cols={4} items={SERVICES.filter((x) => x.slug !== s.slug).slice(0, 4).map((o) => ({ to: `/services/${o.slug}`, icon: o.icon, title: o.name, text: o.cardText }))} />
        </div>
      </section>
      <Cta />
    </Page>
  )
}

/* ------------------------------------------------------------------- Labs */

export function Labs() {
  const path = '/labs'
  const description = 'Resbrotherx Labs: research in artificial intelligence, robotics with Arduino and Raspberry Pi, and 3D characters and animation in Blender.'
  return (
    <Page
      className="labs-page"
      seo={{ title: 'Resbrotherx Labs — AI, Robotics and 3D Animation Research', description, path, jsonLd: [webPage({ path, name: 'Resbrotherx Labs', description, type: 'CollectionPage', about: orgRef }), breadcrumbs([{ name: 'Labs', path }])] }}
    >
      <PageHero kicker="Resbrotherx Labs" title="Where the next things are made" text="Three labs feed every product we run. Here is what each one works on, and how it thinks." crumbs={[{ name: 'Labs', path }]} />
      <section className="rbx-section">
        <div className="custom-container">
          {LABS.map((l, i) => (
            <article className={`rbx-feature-row${i % 2 ? ' is-flip' : ''}`} key={l.slug} data-reveal>
              <A to={`/labs/${l.slug}`} className="rbx-feature-media rbx-lab-media" tabIndex={-1} aria-hidden="true">
                <Img name={l.image} alt="" sizes="(max-width: 900px) 100vw, 50vw" eager={i === 0} />
                <Wireframe shape={l.shape} color="#ffffff" className="rbx-lab-wire" />
              </A>
              <div className="rbx-feature-text">
                <h5 className="section-subtitle">{l.kicker}</h5>
                <h2 className="section-title rbx-h2"><A to={`/labs/${l.slug}`}>{l.title}</A></h2>
                <p className="rbx-lead">{l.summary}</p>
                <ul className="rbx-list is-compact">
                  {l.areas.map((a) => <li key={a.title}><Icon name="iconoir-check" /><span><strong>{a.title}.</strong> {a.text}</span></li>)}
                </ul>
                <A to={`/labs/${l.slug}`} className="theme-btn">Enter the {l.name} lab <Icon name="iconoir-arrow-up-right" /></A>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="rbx-section is-tint">
        <div className="custom-container">
          <div className="rbx-narrow rbx-prose" data-reveal>
            <h2>How the labs work</h2>
            <p>A lab at Resbrotherx is not a separate research department. It is the place where a problem that several products share gets solved once. Try-on began as an Adorė problem and became shared knowledge about visual AI. Monitoring a single service became a general tool.</p>
            <p>Lab pages describe what we are working on and how we think about it. They do not announce products. When something is ready, it appears on the <A to="/products">products page</A>, with a status that says whether it is live or in development.</p>
          </div>
        </div>
      </section>
      <Cta title="Working on something similar?" text="We are happy to compare notes on AI, robotics and 3D." label="Write to the labs" />
    </Page>
  )
}

export function LabDetail() {
  const { slug } = useParams()
  const l = getLab(slug)
  if (!l) return <NotFound />
  const path = `/labs/${l.slug}`
  const crumbs = [{ name: 'Labs', path: '/labs' }, { name: l.name, path }]
  return (
    <Page
      className="lab-details-page"
      seo={{ title: `${l.title} | Resbrotherx Labs`, description: l.summary, path, image: ogImage(l.image), jsonLd: [webPage({ path, name: `${l.name} at Resbrotherx Labs`, description: l.summary, about: orgRef }), breadcrumbs(crumbs)] }}
    >
      <PageHero kicker={l.kicker} title={l.title} text={l.summary} crumbs={crumbs} wide>
        <div className="rbx-lab-hero" data-reveal>
          <Img name={l.image} eager sizes="(max-width: 900px) 100vw, 1100px" />
          <Wireframe shape={l.shape} color="#ffffff" className="rbx-lab-wire is-big" />
        </div>
      </PageHero>
      <section className="rbx-section is-tight">
        <div className="custom-container">
          <SectionHeader kicker="Focus" title="What this lab works on" />
          <div className="rbx-grid rbx-grid-4">
            {l.areas.map((a, i) => (
              <article className="rbx-card is-plain" key={a.title} data-reveal data-tilt style={delay(i * 70)}>
                <div className="rbx-card-body">
                  <span className="rbx-card-icon"><Icon name={a.icon} /></span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="rbx-section">
        <div className="custom-container">
          <div className="rbx-narrow" data-reveal><Blocks blocks={l.body} /></div>
        </div>
      </section>
      <section className="rbx-section is-tint">
        <div className="custom-container">
          <SectionHeader kicker="More labs" title="The other labs" />
          <CardGrid cols={2} items={LABS.filter((x) => x.slug !== l.slug).map((o) => ({ to: `/labs/${o.slug}`, image: o.image, kicker: o.kicker.split(' · ')[0], title: o.name, text: o.summary, cta: 'Enter the lab' }))} />
        </div>
      </section>
      <Cta title="Have a project for this lab?" text="Tell us what you are trying to make." />
    </Page>
  )
}

/* -------------------------------------------------------------- Portfolio */

export function Portfolio() {
  const path = '/portfolio'
  const description = 'The Resbrotherx portfolio: products we run and software published on GitHub, including e-commerce APIs, mobile apps, dashboards and monitoring tools.'
  return (
    <Page
      className="portfolio-page"
      seo={{ title: 'Resbrotherx Portfolio — Products and Public Software Projects', description, path, jsonLd: [webPage({ path, name: 'Resbrotherx portfolio', description, type: 'CollectionPage', about: orgRef }), breadcrumbs([{ name: 'Portfolio', path }])] }}
    >
      <PageHero kicker="Portfolio" title="Work you can check" text="Everything here is either a product you can open or code you can read. Nothing is a mock-up." crumbs={[{ name: 'Portfolio', path }]} />
      <section className="rbx-section">
        <div className="custom-container">
          <SectionHeader kicker="Our products" title="Built and run by Resbrotherx" text="Products with their own websites and customers." />
          <CardGrid cols={4} items={PRODUCTS.map((p) => ({ to: `/products/${p.slug}`, image: p.cardImage, kicker: p.kicker, title: p.name, text: p.menuLine, badge: p.status === 'Live' ? 'Live' : 'In development', cta: 'View product' }))} />
        </div>
      </section>
      <section className="rbx-section is-tint">
        <div className="custom-container">
          <SectionHeader kicker="Case studies" title="Projects in detail" text="Described from each project's own public repository." />
          <CardGrid items={PROJECTS.map((p) => ({ to: `/portfolio/${p.slug}`, image: p.image, kicker: p.kicker, title: p.name, text: p.summary, tags: p.stack.slice(0, 4), cta: 'Read the case study' }))} />
        </div>
      </section>
      <section className="rbx-section">
        <div className="custom-container">
          <SectionHeader kicker="Open code" title="More on GitHub" text="Public repositories from the Resbrotherx account, active since 2020." />
          <div className="rbx-grid rbx-grid-3">
            {MORE_ON_GITHUB.map((r, i) => (
              <article className="rbx-card is-plain card-h" key={r.url} data-reveal style={delay((i % 3) * 70)}>
                <div className="rbx-card-body">
                  <span className="rbx-card-icon"><Icon name="iconoir-github" /></span>
                  <h3><A href={r.url}>{r.name}</A></h3>
                  <p>{r.text}</p>
                  <ul className="rbx-tags">{r.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                  <A href={r.url} className="rbx-card-link" aria-label={`${r.name} on GitHub`}>View on GitHub <Icon name="iconoir-open-new-window" /></A>
                </div>
              </article>
            ))}
          </div>
          <p className="rbx-more text-center" data-reveal>
            <A href={GITHUB_PROFILE} className="theme-btn"><Icon name="iconoir-github" /> All repositories on GitHub</A>
          </p>
        </div>
      </section>
      <Cta title="Want yours on this page?" text="Tell us what you need built." />
    </Page>
  )
}

export function ProjectDetail() {
  const { slug } = useParams()
  const p = getProject(slug)
  if (!p) return <NotFound />
  const path = `/portfolio/${p.slug}`
  const crumbs = [{ name: 'Portfolio', path: '/portfolio' }, { name: p.name, path }]
  return (
    <Page
      className="portfolio-details-page"
      seo={{
        title: `${p.name} — ${p.kicker} | Resbrotherx Portfolio`,
        description: p.summary,
        path,
        image: ogImage(p.image),
        jsonLd: [
          { '@type': 'SoftwareSourceCode', '@id': `https://www.resbrotherx.com${path}#code`, name: p.name, description: p.summary, codeRepository: p.repo, programmingLanguage: p.stack[0], author: orgRef },
          webPage({ path, name: p.name, description: p.summary }),
          breadcrumbs(crumbs),
        ],
      }}
    >
      <PageHero kicker={p.kicker} title={p.name} text={p.summary} crumbs={crumbs} />
      <section className="rbx-section is-tight">
        <div className="custom-container">
          <div className="rbx-article-grid">
            <div data-reveal>
              <figure className="rbx-figure is-lead"><Img name={p.image} eager sizes="(max-width: 900px) 100vw, 860px" /></figure>
              <Blocks blocks={p.body} />
            </div>
            <aside className="rbx-aside" data-reveal>
              <div className="rbx-panel">
                <h2 className="rbx-panel-title">Project facts</h2>
                <Blocks blocks={[{ facts: [['Type', p.category], ['Built by', '[Resbrotherx](/about)'], ['Source', `[GitHub](${p.repo})`]] }]} />
              </div>
              <div className="rbx-panel">
                <h2 className="rbx-panel-title">Built with</h2>
                <ul className="rbx-tags">{p.stack.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
              <div className="rbx-panel is-accent">
                <h2 className="rbx-panel-title">Read the code</h2>
                <p>This project is public on GitHub.</p>
                <A href={p.repo} className="theme-btn"><Icon name="iconoir-github" /> Open repository</A>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="rbx-section is-tint">
        <div className="custom-container">
          <SectionHeader kicker="More work" title="Other projects" />
          <CardGrid cols={2} items={PROJECTS.filter((x) => x.slug !== p.slug).map((o) => ({ to: `/portfolio/${o.slug}`, image: o.image, kicker: o.kicker, title: o.name, text: o.summary }))} />
        </div>
      </section>
      <Cta />
    </Page>
  )
}

/* ----------------------------------------------------------- Technologies */

export function Technologies() {
  const path = '/technologies'
  const description = 'The technologies Resbrotherx builds with: Python, Django, React, React Native, Node.js, TypeScript, Blender, Arduino, Raspberry Pi and more, and what each is used for.'
  return (
    <Page
      className="tech-page"
      seo={{ title: 'Technologies We Use — Resbrotherx Stack for AI, Web, Mobile, Robotics and 3D', description, path, jsonLd: [webPage({ path, name: 'Technologies at Resbrotherx', description, about: orgRef }), breadcrumbs([{ name: 'Labs', path: '/labs' }, { name: 'Technologies', path }])] }}
    >
      <PageHero kicker="Technologies" title="What we build with" text="The tools behind our products and labs, and what we use each one for." crumbs={[{ name: 'Labs', path: '/labs' }, { name: 'Technologies', path }]} />
      <section className="rbx-section">
        <div className="custom-container">
          <div className="rbx-grid rbx-grid-2">
            {TECH.map((g, i) => (
              <article className="rbx-panel rbx-tech" key={g.name} data-reveal style={delay((i % 2) * 80)}>
                <header>
                  <span className="rbx-card-icon"><Icon name={g.icon} /></span>
                  <div>
                    <h2 className="rbx-panel-title">{g.name}</h2>
                    <p>{g.intro}</p>
                  </div>
                </header>
                <dl className="rbx-facts">
                  {g.items.map((it) => (
                    <div key={it.name}>
                      <dt>{it.name}</dt>
                      <dd>{it.use}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="rbx-section is-tint">
        <div className="custom-container">
          <div className="rbx-narrow rbx-prose" data-reveal>
            <h2>How we choose tools</h2>
            <ul className="rbx-list">
              {[
                'Mature and well documented, so the next person can pick it up.',
                'Open where possible: Blender, PostgreSQL, React and Django are all open source.',
                'One stack across products, so what we learn in one carries to the others.',
                'The smallest tool that does the job. No framework for its own sake.',
              ].map((t) => <li key={t}><Icon name="iconoir-check" /><span>{t}</span></li>)}
            </ul>
          </div>
        </div>
      </section>
      <Cta title="Building on the same stack?" text="We can help you design it, build it or untangle it." />
    </Page>
  )
}

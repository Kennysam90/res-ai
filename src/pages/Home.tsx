import { useState } from 'react'
import Page from '../components/Layout'
import { A, Icon, Img, SectionHeader, FaqList, CardGrid, delay } from '../components/ui'
import { NeuralField, Wireframe } from '../components/Canvas3D'
import { ContactSection } from './Contact'
import { SITE, FOUNDER, TECH_MARQUEE } from '../data/site'
import { PRODUCTS } from '../data/products'
import { SERVICES } from '../data/services'
import { LABS } from '../data/labs'
import { PROJECTS } from '../data/projects'
import { POSTS } from '../data/posts'
import { FAQS } from '../data/company'
import { organization, website, person, webPage } from '../seo/schema'
import { play } from '../lib/sound'

const STEPS = [
  { icon: '/assets/imgs/hwd-icon-1.svg', title: 'Idea', sub: 'Research', to: '/labs' },
  { icon: '/assets/imgs/hwd-icon-2.svg', title: 'Product', sub: 'Design', to: '/services/ui-ux-design' },
  { icon: '/assets/imgs/hwd-icon-3.svg', title: 'AI & Software', sub: 'Development', to: '/services/ai-development' },
  { icon: '/assets/imgs/hwd-icon-4.svg', title: 'Robotics', sub: 'Hardware', to: '/services/robotics-embedded' },
  { icon: '/assets/imgs/hwd-icon-5.svg', title: '3D', sub: 'Animation', to: '/services/3d-animation' },
  { icon: '/assets/imgs/hwd-icon-6.svg', title: 'Launch', sub: 'Support', to: '/services/saas-development' },
]

export default function Home() {
  const [tab, setTab] = useState(PRODUCTS[0].slug)
  const [featured, ...restPosts] = POSTS

  return (
    <Page
      className="homepage"
      seo={{
        title: 'Resbrotherx — AI, Robotics, 3D & Software Company',
        description:
          'Resbrotherx builds AI, robotics, 3D animation and software. Founded by Patrick Francis Ugochukwu, it is the company behind Apsuni, AnimeDoc and Adorė.',
        path: '/',
        jsonLd: [
          organization(PRODUCTS),
          website(),
          person(PRODUCTS),
          webPage({ path: '/', name: 'Resbrotherx', description: SITE.oneLiner, about: { '@id': SITE.orgId } }),
        ],
      }}
    >
      {/* Hero */}
      <section className="hero-empowerment-area rbx-home-hero">
        <NeuralField className="rbx-hero-field" />
        <div className="custom-container">
          <div className="custom-row align-items-center">
            <div className="hero-empowerment-left-content">
              <h5 className="section-subtitle">AI · Robotics · 3D · Software</h5>
              <h1 className="section-title fade-in">We build AI, robots and 3D worlds that ship.</h1>
              <p>
                Resbrotherx is the technology company behind Apsuni, AnimeDoc and Adorė,
                founded by {FOUNDER.name}.
              </p>
              <div className="btns-group d-flex">
                <A to="/products" className="theme-btn">Explore products</A>
                <A to="/contact" className="theme-btn2">
                  Let's Talk <Icon name="iconoir-arrow-up-right" />
                </A>
              </div>
            </div>
            <div className="hero-empowerment-right-content">
              <div className="top-content">
                <div className="rbx-mosaic fade-in">
                  <Img name="humanoid-robot" eager sizes="(max-width: 900px) 60vw, 420px" width={800} />
                  <Img name="render-cube" eager sizes="(max-width: 900px) 40vw, 280px" width={800} />
                  <Img name="3d-character" eager sizes="(max-width: 900px) 40vw, 280px" width={800} />
                </div>
                <div className="experience-box simple-shadow bounce-in">
                  <div className="experience-body d-flex align-items-center">
                    <img src="/assets/imgs/icon1.svg" alt="" width="44" height="44" />
                    <div className="experience-content d-flex align-items-center">
                      <div className="rbx-num">{SITE.foundedYear}</div>
                      <p>
                        Building
                        <span>since</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-content d-flex">
                <A to="/founder" className="our-expert-team-box simple-shadow bounce-in delay-2">
                  <div className="our-expert-team-box-inner d-flex align-items-center">
                    {FOUNDER.photo ? <img className="rbx-monogram is-photo" src={FOUNDER.photoThumbnail} alt="" width={44} height={44} /> : <span className="rbx-monogram" aria-hidden="true">{FOUNDER.initials}</span>}
                    <p>
                      Meet <span>the Founder</span>
                    </p>
                  </div>
                </A>
                <A to="/products" className="google-reviews-box simple-shadow bounce-in delay-3">
                  <div className="left">
                    <span>Live products</span>
                    <strong className="rbx-big">3</strong>
                  </div>
                  <div className="right">
                    <div className="stars d-flex align-items-center rbx-dots" aria-hidden="true">
                      <i /><i /><i />
                    </div>
                    <p>
                      Apsuni · AnimeDoc
                      <span> · Adorė</span>
                    </p>
                  </div>
                </A>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology marquee */}
      <section className="client-area" aria-label="Technologies we build with">
        <div className="clients clients-marquee d-flex align-items-center rbx-marquee">
          {[0, 1].map((n) => (
            <div className="rbx-marquee-track" key={n} aria-hidden={n === 1}>
              {TECH_MARQUEE.map((t) => (
                <div className="client-logo simple-shadow rbx-chip" key={t}>{t}</div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* How we build */}
      <section className="how-we-do-area">
        <div className="custom-container">
          <div className="custom-row">
            <img src="/assets/imgs/bg-shape-1.svg" alt="" className="animation-slide-left how-we-do-bg" loading="lazy" />
            <div className="how-we-do-left-content">
              <div className="top">
                <h5 className="section-subtitle">Our Model</h5>
                <h2 className="section-title">How we build</h2>
                <p>One team takes an idea from research to a product people use.</p>
              </div>
              <A to="/about" className="theme-btn">
                Learn More <Icon name="iconoir-arrow-up-right" />
              </A>
            </div>
            <div className="how-we-do-right-content">
              {[STEPS.slice(0, 3), STEPS.slice(3, 5), STEPS.slice(5)].map((row, r) => (
                <div className="how-we-do-items d-flex align-items-center justify-content-center" key={r}>
                  {row.map((s) => (
                    <A to={s.to} className="how-we-do-card" key={s.title}>
                      <div className="circle-shape" />
                      <div className="line-shape" />
                      <div className="how-we-do-icon">
                        <img src={s.icon} alt="" width="28" height="28" loading="lazy" />
                      </div>
                      <div className="how-we-do-content">
                        <h4>{s.title}</h4>
                        <p>{s.sub}</p>
                      </div>
                    </A>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="service-area">
        <div className="custom-container">
          <SectionHeader
            kicker="What we're offering"
            title={<>AI, robotics, 3D and <br />software, under one roof.</>}
            text="We build for ourselves first. Every service below is something we use in our own products, from AI try-on in Adorė to the API plans in AnimeDoc."
          />
          <div className="services-list d-flex">
            {SERVICES.slice(0, 5).map((s, i) => (
              <div className="service-card simple-shadow" key={s.slug} data-reveal data-tilt style={delay(i * 60)}>
                {s.slug === 'robotics-embedded' && <span className="service-badge">New</span>}
                <span className="service-icon rbx-service-icon"><Icon name={s.icon} /></span>
                <h3><A to={`/services/${s.slug}`}>{s.name}</A></h3>
                <p>{s.cardText}</p>
              </div>
            ))}
          </div>
          <p className="rbx-more" data-reveal>
            <A to="/services" className="theme-btn2">All {SERVICES.length} services <Icon name="iconoir-arrow-up-right" /></A>
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="case-studio-area">
        <div className="custom-container">
          <SectionHeader center kicker="Our products" title="Built and run by Resbrotherx" />
          <div className="case-studio" data-reveal>
            <ul className="nav nav-pills case-studio-tabs" role="tablist">
              {PRODUCTS.map((p) => (
                <li className="nav-item" key={p.slug}>
                  <button
                    type="button"
                    className={`nav-link ${tab === p.slug ? 'active' : ''}`}
                    id={`${p.slug}-tab`}
                    role="tab"
                    aria-controls={`${p.slug}-panel`}
                    aria-selected={tab === p.slug}
                    onClick={() => { setTab(p.slug); play('toggle') }}
                    data-silent
                  >
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="tab-content case-studio-tab-content">
              {PRODUCTS.map((p) => (
                <div className={`tab-pane fade ${tab === p.slug ? 'show active' : ''}`} id={`${p.slug}-panel`} role="tabpanel" aria-labelledby={`${p.slug}-tab`} key={p.slug}>
                  <div className="case-studio-body d-flex">
                    <div className="left d-flex flex-1">
                      {p.images.slice(0, 2).map((im, i) => (
                        <div className="case-studio-img-card simple-shadow" key={im}>
                          <A to={i === 0 ? `/products/${p.slug}` : p.docs} className="case-studio-cat">{i === 0 ? p.kicker.split(' · ')[0] : 'Documentation'}</A>
                          <Img name={im} sizes="(max-width: 900px) 50vw, 420px" />
                        </div>
                      ))}
                    </div>
                    <div className="right">
                      <div className="case-studio-contents service-card card-h">
                        <span className="rbx-status" data-status={p.status}>{p.status}</span>
                        <h3>{p.name}</h3>
                        <p>{p.summary}</p>
                        <A to={`/products/${p.slug}`} className="theme-btn" aria-label={`Read about ${p.name}`}>
                          <Icon name="iconoir-arrow-up-right" />
                        </A>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="about-area">
        <div className="custom-container">
          <div className="custom-row justify-content-between align-items-center">
            <div className="left-content" data-reveal>
              <h5 className="section-subtitle">From idea to launch</h5>
              <h2 className="section-title">The shortest path to a real product.</h2>
              <p>
                We start from the job the product has to do, build the smallest thing
                that does it, and put it in front of people.
              </p>
              <ul>
                <li><Icon name="iconoir-check" className="icon-check" /> AI with clear limits</li>
                <li><Icon name="iconoir-check" className="icon-check" /> People approve every release</li>
                <li><Icon name="iconoir-check" className="icon-check" /> One team, idea to support</li>
              </ul>
            </div>
            <div className="right-content">
              <div className="about-timeline">
                {[
                  ['01', 'Discover and define', 'Write down the goal, the users and how we will know it worked.'],
                  ['02', 'Design and build', 'Design, code, hardware and 3D move together, tied to the goal.'],
                  ['03', 'Launch and support', 'Release, measure, answer customers and keep improving.'],
                ].map(([n, t, d]) => (
                  <div className="about-timeline-item" key={n} data-reveal>
                    <div className="about-timeline-item-inner">
                      <img src="/assets/imgs/line-shape-3.png" alt="" className="line-shape" loading="lazy" />
                      <span className="number">{n}</span>
                      <h3>{t}</h3>
                      <p>{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="testimonial-area">
        <div className="custom-container">
          <div className="testimonial-slider-wrap">
            <div className="testimonial-item" data-reveal>
              <div className="testimonial-item-body">
                <img className="animation-slide-right bg-shape" src="/assets/imgs/bg-shape-5.svg" alt="" loading="lazy" />
                <span className="platform-name rbx-platform">Our mission</span>
                <h2 className="rbx-mission">{SITE.mission}</h2>
                <p>
                  Websites and apps with Apsuni, a streaming catalogue API with AnimeDoc and
                  made-to-measure African fashion with Adorė. Next: robots and 3D.
                </p>
                <A to="/founder" className="author-box d-flex align-items-center">
                  {FOUNDER.photo ? <img className="rbx-monogram is-lg is-photo" src={FOUNDER.photoThumbnail} alt="" width={54} height={54} loading="lazy" /> : <span className="rbx-monogram is-lg" aria-hidden="true">{FOUNDER.initials}</span>}
                  <div className="author-box-content">
                    <h4>{FOUNDER.name}</h4>
                    <p>{FOUNDER.role}, Resbrotherx</p>
                  </div>
                </A>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Labs */}
      <section className="rbx-section rbx-labs">
        <div className="custom-container">
          <SectionHeader
            kicker="Resbrotherx Labs"
            title={<>Where the next <br />things are made.</>}
            text="Three labs feed every product: AI that acts for people, robots built on Arduino and Raspberry Pi, and 3D characters and animation made in Blender."
          />
          <div className="rbx-grid rbx-grid-3">
            {LABS.map((l, i) => (
              <article className="rbx-lab card-h" key={l.slug} data-reveal data-tilt style={delay(i * 80)}>
                <A to={`/labs/${l.slug}`} className="rbx-lab-media" tabIndex={-1} aria-hidden="true">
                  <Img name={l.image} alt="" sizes="(max-width: 900px) 100vw, 33vw" />
                  <Wireframe shape={l.shape} color="#ffffff" className="rbx-lab-wire" />
                </A>
                <div className="rbx-card-body">
                  <h5 className="section-subtitle section-subtitle1">{l.kicker.split(' · ')[0]}</h5>
                  <h3><A to={`/labs/${l.slug}`}>{l.name}</A></h3>
                  <p>{l.summary}</p>
                  <A to={`/labs/${l.slug}`} className="rbx-card-link">Enter the lab <Icon name="iconoir-arrow-up-right" /></A>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="project-area">
        <div className="custom-container">
          <div className="custom-row justify-content-between">
            <div className="project-left-details" data-reveal>
              <h5 className="section-subtitle">Projects</h5>
              <h2 className="section-title">Showcase of our work</h2>
              <p>Products we run, and code we have published on GitHub.</p>
              <ul>
                <li><Icon name="iconoir-check" /> Three live products</li>
                <li><Icon name="iconoir-check" /> Public code on GitHub</li>
                <li><Icon name="iconoir-check" /> Web, mobile, API and AI</li>
              </ul>
              <p className="rbx-more"><A to="/portfolio" className="theme-btn">View portfolio <Icon name="iconoir-arrow-up-right" /></A></p>
            </div>
            <div className="project-right-slider">
              <div className="project-right-slider-inner">
                <div className="rbx-slider project-slider" tabIndex={0} aria-label="Projects">
                  {[
                    ...PRODUCTS.map((p) => ({ to: `/products/${p.slug}`, title: p.name, sub: p.kicker.split(' · ')[0], image: p.cardImage })),
                    ...PROJECTS.map((p) => ({ to: `/portfolio/${p.slug}`, title: p.name, sub: p.category, image: p.image })),
                  ].map((it) => (
                    <div className="project-item rbx-slide" key={it.to}>
                      <div className="project-item-inner">
                        <h2><A to={it.to}>{it.title}</A></h2>
                        <Img name={it.image} alt="" sizes="362px" />
                        <span className="rbx-slide-sub">{it.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="news-area">
        <div className="custom-container">
          <SectionHeader
            kicker="From the blog"
            title={<>Notes on AI, robotics, <br />3D and building products</>}
            text="Company news from Resbrotherx, and practical guides written by the people doing the work."
          />
          <div className="sticky-news d-flex card-h" data-reveal>
            <A to={`/blog/${featured.slug}`} className="news-img-box" tabIndex={-1} aria-hidden="true">
              <Img name={featured.image} alt="" sizes="(max-width: 900px) 100vw, 50vw" />
            </A>
            <div className="news-content">
              <h5 className="section-subtitle section-subtitle1">{featured.category}</h5>
              <h2 className="section-title"><A to={`/blog/${featured.slug}`}>{featured.title}</A></h2>
              <p>{featured.description}</p>
              <ul>{featured.tags.slice(0, 2).map((t) => <li key={t}><Icon name="iconoir-check" /> {t}</li>)}</ul>
              <A to={`/blog/${featured.slug}`} className="theme-btn" aria-label={`Read: ${featured.title}`}><Icon name="iconoir-arrow-up-right" /></A>
            </div>
          </div>
          <div className="news-items d-flex align-items-start">
            {restPosts.slice(0, 2).map((p) => (
              <div className="news-item card-h" key={p.slug} data-reveal>
                <A to={`/blog/${p.slug}`} className="news-img-box" tabIndex={-1} aria-hidden="true">
                  <Img name={p.image} alt="" sizes="(max-width: 900px) 100vw, 50vw" />
                </A>
                <div className="news-item-body">
                  <h5 className="section-subtitle">{p.category}</h5>
                  <h2 className="section-title"><A to={`/blog/${p.slug}`}>{p.title}</A></h2>
                  <p>{p.description}</p>
                  <ul>{p.tags.slice(0, 4).map((t) => <li key={t}><Icon name="iconoir-check" /> {t}</li>)}</ul>
                  <A to={`/blog/${p.slug}`} className="theme-btn" aria-label={`Read: ${p.title}`}><Icon name="iconoir-arrow-up-right" /></A>
                </div>
              </div>
            ))}
          </div>
          <p className="rbx-more" data-reveal><A to="/blog" className="theme-btn2">All articles <Icon name="iconoir-arrow-up-right" /></A></p>
        </div>
      </section>

      {/* Featured product */}
      <section className="feature-area">
        <div className="custom-container">
          <div className="custom-row align-items-center">
            <div className="feature-left d-flex">
              <div className="feature-img-card" data-reveal>
                <h3>One key, <br />clear limits, <br />real docs.</h3>
                <Img name="product-animedoc-docs" alt="The AnimeDoc API documentation" sizes="(max-width: 900px) 50vw, 380px" />
              </div>
              <div className="feature-img-card" data-reveal>
                <h3>Plans from <br />free to <br />business.</h3>
                <Img name="product-animedoc-pricing" alt="AnimeDoc API plans" sizes="(max-width: 900px) 50vw, 380px" />
              </div>
            </div>
            <div className="feature-right">
              <div className="feature-content" data-reveal>
                <h5 className="section-subtitle">For developers</h5>
                <h2 className="section-title">Documentation for everything we ship</h2>
                <p>Guides for Apsuni, Adorė and Brainbox, and an overview of the AnimeDoc REST API.</p>
                <ul>
                  <li><Icon name="iconoir-check" /> REST API with OpenAPI</li>
                  <li><Icon name="iconoir-check" /> Feeds and llms.txt</li>
                </ul>
                <div className="btns-group">
                  <A to="/docs" className="theme-simple-btn"><Icon name="iconoir-book" /> Read the docs</A>
                  <A to="/docs/animedoc-api" className="theme-simple-btn"><Icon name="iconoir-terminal" /> AnimeDoc API guide</A>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="rbx-section">
        <div className="custom-container">
          <SectionHeader center kicker="Questions" title="About Resbrotherx" />
          <div className="rbx-narrow">
            <FaqList faqs={FAQS.slice(0, 6)} />
            <p className="rbx-more text-center"><A to="/faq" className="theme-btn2">All questions <Icon name="iconoir-arrow-up-right" /></A></p>
          </div>
        </div>
      </section>

      {/* More on the company, as cards */}
      <section className="rbx-section is-tint">
        <div className="custom-container">
          <SectionHeader center kicker="Explore" title="More about the company" />
          <CardGrid
            cols={4}
            items={[
              { to: '/about', icon: 'iconoir-building', title: 'About', text: 'What Resbrotherx is, what it makes and where it is based.', cta: 'Read' },
              { to: '/founder', icon: 'iconoir-user', title: 'Founder', text: `${FOUNDER.name}, Founder & CEO.`, cta: 'Meet him' },
              { to: '/team', icon: 'iconoir-group', title: 'Teams', text: 'Eight teams, from AI and robotics to support.', cta: 'See teams' },
              { to: '/press', icon: 'iconoir-page', title: 'Press kit', text: 'Facts, names, logos and boilerplate for writers.', cta: 'Open' },
            ]}
          />
        </div>
      </section>

      <ContactSection />
    </Page>
  )
}

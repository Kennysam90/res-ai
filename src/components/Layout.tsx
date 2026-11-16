import { useEffect, useId, useState, useSyncExternalStore, type FormEvent, type ReactNode } from 'react'
import { BARS, GRADIENTS, HOOK, HOOK_TURN, MARK_VIEWBOX, type GradientName } from '../brand/mark'
import { useLocation } from 'react-router-dom'
import { A, Icon, Img } from './ui'
import { Seo } from '../seo/head'
import { SITE, FOUNDER, SOCIAL, NAV } from '../data/site'
import { PRODUCTS } from '../data/products'
import { SERVICES } from '../data/services'
import { play, setSound, soundOn, subscribeSound } from '../lib/sound'
import type { Crumb, LinkItem, SeoProps } from '../types'

/** The Resbrotherx mark (two bars and an interlocking "S"), drawn from src/brand/mark.ts. */
export function Mark({ className, title }: { className?: string; title?: string }) {
  // Gradient ids must be unique on the page; React's ids contain characters url(#…) dislikes.
  const id = 'rbx' + useId().replace(/[^a-zA-Z0-9]/g, '')
  return (
    <svg
      className={className}
      viewBox={MARK_VIEWBOX}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <defs>
        {(Object.keys(GRADIENTS) as GradientName[]).map((n) => {
          const g = GRADIENTS[n]
          return (
            <linearGradient key={n} id={`${id}-${n}`} gradientUnits="userSpaceOnUse" x1={g.x1} y1={g.y1} x2={g.x2} y2={g.y2}>
              {g.stops.map(([o, c]) => <stop key={o} offset={o} stopColor={c} />)}
            </linearGradient>
          )
        })}
      </defs>
      <path d={HOOK} fill={`url(#${id}-left)`} />
      <path d={HOOK} transform={HOOK_TURN} fill={`url(#${id}-right)`} />
      {BARS.map((b) => (
        <rect key={b.y} x={b.x} y={b.y} width={b.w} height={b.h} rx={b.r} fill={`url(#${id}-bar)`} />
      ))}
    </svg>
  )
}

/** The wordmark: "Resbr", the mark in place of the "o", then "therx". */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`rbx-logo${light ? ' is-light' : ''}`}>
      <span className="rbx-logo-text" aria-hidden="true">
        Resbr<Mark className="rbx-logo-o" />therx
      </span>
      <span className="visually-hidden">Resbrotherx</span>
    </span>
  )
}

function SoundToggle() {
  // The server and the first client render say "on"; the saved choice follows at once.
  const on = useSyncExternalStore(subscribeSound, soundOn, () => true)
  return (
    <button
      type="button"
      className="rbx-sound"
      aria-pressed={on}
      data-silent
      onClick={() => setSound(!on)}
    >
      <Icon name={on ? 'iconoir-sound-high' : 'iconoir-sound-off'} />
      <span>Sound {on ? 'on' : 'off'}</span>
    </button>
  )
}

function HeaderBar() {
  return (
    <div className="header-bar">
      <div className="custom-container">
        <div className="header-bar-body d-flex align-items-center justify-content-between">
          <div className="left">
            <SoundToggle />
          </div>
          <div className="right">
            <p>
              AI, robotics and 3D, built by{' '}
              <A to="/about" data-word="RESBROTHERX." id="dataWord">
                RESBROTHERX.
              </A>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const MegaFooter = ({ children }: { children: ReactNode }) => (
  <div className="mega-meu-footer d-flex align-items-center justify-content-between w-full">
    <ul className="mega-menu-social d-flex align-items-center">
      {SOCIAL.map((s) => (
        <li key={s.name}>
          <A href={s.url} aria-label={`${SITE.name} on ${s.name}`}>
            <Icon name={s.icon} />
          </A>
        </li>
      ))}
    </ul>
    <p>{children}</p>
  </div>
)

const LinkColumn = ({ title, links }: { title: string; links: LinkItem[] }) => (
  <div className="mega-menu-link">
    <h3>{title}</h3>
    <ul>
      {links.map((l) => (
        <li key={l.to}>
          <A to={l.to}>{l.label}</A>
        </li>
      ))}
    </ul>
  </div>
)

function Header() {
  const { pathname } = useLocation()
  // The menu state remembers which page it was opened on, so moving to another
  // page closes it without an effect.
  const [menu, setMenu] = useState<{ path: string; open: boolean; expanded: string | null }>({ path: pathname, open: false, expanded: null })
  const open = menu.path === pathname && menu.open
  const expanded = menu.path === pathname ? menu.expanded : null
  const setOpen = (value: boolean) => setMenu({ path: pathname, open: value, expanded: value ? expanded : null })
  const setExpanded = (key: string | null) => setMenu({ path: pathname, open, expanded: key })
  // After a menu link is clicked the pointer is still over the menu, so hide
  // the mega menus until it leaves.
  const [suppress, setSuppress] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenu((m) => ({ ...m, open: false }))
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const item = (key: string, label: string, to: string, menu: ReactNode) => (
    <li
      className={`mega-menu-item${expanded === key ? ' active' : ''}`}
      onClickCapture={(e) => {
        if ((e.target as Element).closest('a')) setSuppress(true)
      }}
    >
      <A to={to}>{label}</A>
      <button
        type="button"
        className="dropdown-menu-item-icon"
        aria-label={`${expanded === key ? 'Hide' : 'Show'} ${label} menu`}
        aria-expanded={expanded === key}
        onClick={() => {
          play(expanded === key ? 'close' : 'open')
          setExpanded(expanded === key ? null : key)
        }}
        data-silent
      >
        <Icon name="iconoir-nav-arrow-down" />
      </button>
      {menu}
    </li>
  )

  return (
    <header className={`header-area${suppress ? ' rbx-suppress' : ''}`}>
      <div className="custom-container">
        <div className="custom-row align-items-center justify-content-between">
          <div className="header-left d-flex align-items-center">
            <A to="/" className="logo" aria-label="Resbrotherx home">
              <Logo />
            </A>
            <div className="header-left-right">
              <A to="/contact" className="theme-btn">Contact Us</A>
              <button type="button" className="menu-bar" aria-label="Open menu" aria-expanded={open} onClick={() => { play('open'); setOpen(true) }} data-silent>
                <Icon name="iconoir-menu" />
              </button>
            </div>
            <nav className={`navbar-wrapper${open ? ' active' : ''}`} aria-label="Main" onMouseLeave={() => setSuppress(false)}>
              <button type="button" className="close-menu-bar" aria-label="Close menu" onClick={() => { play('close'); setOpen(false) }} data-silent>
                <Icon name="iconoir-xmark" />
              </button>
              <ul>
                {item(
                  'company',
                  'Company',
                  '/about',
                  <div className="mega-menu mega-menu-company">
                    <div className="mega-menu-inner">
                      <div className="custom-container d-flex">
                        <div className="left">
                          <div className="mega-menu-link-wrap d-flex justify-content-between">
                            <LinkColumn title="Company" links={NAV.company} />
                            <div className="mega-menu-links d-flex">
                              <LinkColumn title="Labs" links={NAV.labs} />
                              <LinkColumn title="Resources" links={NAV.resources} />
                              <LinkColumn title="Legal" links={NAV.legal} />
                            </div>
                          </div>
                          <MegaFooter>
                            Want to build with us? <A to="/careers">See careers</A>
                          </MegaFooter>
                        </div>
                        <div className="right">
                          <div className="mega-menu-ads">
                            <Img name="3d-character" sizes="340px" />
                            <h2>Meet the founder</h2>
                            <p>{FOUNDER.name}, Founder &amp; CEO of Resbrotherx.</p>
                            <A to="/founder">Read his story</A>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>,
                )}
                {item(
                  'products',
                  'Products',
                  '/products',
                  <div className="mega-menu mega-menu-portfolio">
                    <div className="mega-menu-inner">
                      <div className="custom-container d-flex">
                        <div className="left">
                          <div className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                            {PRODUCTS.map((p) => (
                              <div className="mega-menu-portfolio-card" key={p.slug}>
                                <A to={`/products/${p.slug}`} className="img-box" tabIndex={-1} aria-hidden="true">
                                  <Img name={p.cardImage} sizes="260px" alt="" />
                                </A>
                                <div className="content-box">
                                  <h3><A to={`/products/${p.slug}`}>{p.name}</A></h3>
                                  <p>{p.menuLine}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <MegaFooter>
                            <A to="/portfolio">View portfolio <Icon name="iconoir-arrow-up-right" /></A>
                          </MegaFooter>
                        </div>
                        <div className="right">
                          <div className="mega-menu-ads">
                            <Img name="product-animedoc-docs" sizes="340px" alt="" />
                            <h2>Developer docs</h2>
                            <p>APIs and guides for everything we ship.</p>
                            <A to="/docs">Open the docs</A>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>,
                )}
                {item(
                  'services',
                  'Services',
                  '/services',
                  <div className="mega-menu">
                    <div className="mega-menu-inner">
                      <div className="custom-container d-flex">
                        <div className="left">
                          <div className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                            <div className="mega-menu-service-cards align-items-start">
                              {SERVICES.slice(0, 4).map((s) => (
                                <div className="mega-menu-service-card" key={s.slug}>
                                  <span className="icon"><Icon name={s.icon} /></span>
                                  <div className="content">
                                    <h2><A to={`/services/${s.slug}`}>{s.menuTitle}</A></h2>
                                    <p>{s.menuSub}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="mega-menu-links d-flex">
                              <LinkColumn title="Services" links={SERVICES.slice(0, 4).map((s) => ({ label: s.name, to: `/services/${s.slug}` }))} />
                              <LinkColumn title="More services" links={[...SERVICES.slice(4).map((s) => ({ label: s.name, to: `/services/${s.slug}` })), { label: 'All services', to: '/services' }]} />
                            </div>
                          </div>
                          <MegaFooter>
                            Not sure what you need? <A to="/contact">Ask us</A>
                          </MegaFooter>
                        </div>
                        <div className="right">
                          <div className="mega-menu-ads">
                            <Img name="humanoid-robot" sizes="340px" alt="" />
                            <h2>Inside the labs</h2>
                            <p>AI, robotics and 3D research at Resbrotherx.</p>
                            <A to="/labs">Visit the labs</A>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>,
                )}
                <li><A to="/labs">Labs</A></li>
                <li><A to="/docs">Docs</A></li>
                <li><A to="/blog">Blog</A></li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <div className="header-contact-info d-flex align-items-center">
              <div className="phone-number">
                <A href={SOCIAL[0].url}>
                  Watch us <Icon name="iconoir-arrow-up-right" />
                </A>
                YouTube {SOCIAL[0].handle}
              </div>
              <A to="/contact" className="theme-btn">Contact Us</A>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

/** Email sign-up that hands the address to the visitor's mail app (there is no list server yet). */
export function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'error' | 'sent'>('idle')
  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState('error')
      play('error')
      return
    }
    const body = `Please add ${email} to the Resbrotherx updates list.`
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Subscribe to Resbrotherx updates')}&body=${encodeURIComponent(body)}`
    setState('sent')
    play('success')
  }
  return (
    <form className="subscribe-form" onSubmit={submit} noValidate>
      <div className="subscribe-box d-flex">
        <label htmlFor="sub_email" className="visually-hidden">Email address</label>
        <input type="email" id="sub_email" name="email" placeholder="Enter your email" autoComplete="email" value={email} onChange={(e) => { setEmail(e.target.value); setState('idle') }} />
        <button type="submit" className="theme-btn" data-silent>Get updates</button>
      </div>
      <p className="rbx-form-note" role="status">
        {state === 'error' && 'Enter a valid email address.'}
        {state === 'sent' && 'Your email app has opened. Press send to confirm.'}
        {state === 'idle' && 'Opens your email app to confirm. You can also follow the RSS feed.'}
      </p>
    </form>
  )
}

function Footer() {
  const year = 2026
  return (
    <footer className="footer-area">
      <img src="/assets/imgs/bg-shape-6.svg" alt="" className="animation-slide-right bg-shape" loading="lazy" />
      <div className="footer-top">
        <div className="custom-container">
          <div className="custom-row align-items-end justify-content-between">
            <div className="left-content">
              <A to="/" className="logo" aria-label="Resbrotherx home">
                <Logo light />
              </A>
              <p>{SITE.mission}</p>
              <SubscribeForm />
              <div className="footer-clients d-flex align-items-center">
                {PRODUCTS.map((p) => (
                  <A to={`/products/${p.slug}`} className="footer-client-img rbx-wordmark" key={p.slug}>
                    {p.name}
                  </A>
                ))}
              </div>
            </div>
            <div className="right-content">
              <div className="right-content-inner">
                <h2>Let’s get started on something great</h2>
                <p>
                  Tell us about the app, robot, 3D scene or AI system you want to build.
                  We read every message.
                </p>
                <A to="/contact" className="theme-btn">Start a project</A>
                <div className="footer-experience d-flex align-items-center">
                  <div className="footer-experience-item">
                    <div className="rbx-num">{SITE.foundedYear}</div>
                    <p>Building since</p>
                  </div>
                  <div className="footer-experience-item">
                    <div className="rbx-num">3 <span>Live</span></div>
                    <p>Products in use</p>
                  </div>
                  <div className="footer-experience-item">
                    <div className="rbx-num">4 <span>Fields</span></div>
                    <p>AI, robotics, 3D, software</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="custom-container">
          <div className="custom-row">
            <div className="footer-all-links-wrap justify-content-between d-flex">
              <div className="footer-links">
                <h3>Products</h3>
                <ul>{NAV.products.map((l) => <li key={l.to}><A to={l.to}>{l.label}</A></li>)}</ul>
              </div>
              <div className="footer-links">
                <h3>Company</h3>
                <ul>{NAV.company.map((l) => <li key={l.to}><A to={l.to}>{l.label}</A></li>)}</ul>
              </div>
              <div className="footer-links">
                <h3>Services</h3>
                <ul>
                  {SERVICES.slice(0, 5).map((s) => <li key={s.slug}><A to={`/services/${s.slug}`}>{s.name}</A></li>)}
                  <li><A to="/services">All services</A></li>
                </ul>
              </div>
              <div className="footer-links">
                <h3>Labs</h3>
                <ul>{NAV.labs.map((l) => <li key={l.to}><A to={l.to}>{l.label}{l.to === '/labs/robotics' && <span className="new">New</span>}</A></li>)}</ul>
              </div>
              <div className="footer-links">
                <h3>Resources</h3>
                <ul>{NAV.resources.map((l) => <li key={l.to}><A to={l.to}>{l.label}</A></li>)}</ul>
              </div>
              <div className="footer-links">
                <h3>Legal</h3>
                <ul>{NAV.legal.map((l) => <li key={l.to}><A to={l.to}>{l.label}</A></li>)}</ul>
              </div>
            </div>
            <div className="footer-contact-info">
              <div className="footer-contact-info-item">
                <h4>Mail</h4>
                <p><A href={`mailto:${SITE.email}`}>{SITE.email}</A></p>
              </div>
              <div className="footer-contact-info-item">
                <h4>Phone</h4>
                <p><A href={SITE.phoneHref}>{SITE.phone}</A></p>
              </div>
              <div className="footer-contact-info-item">
                <h4>Address</h4>
                <p>{SITE.location.street}, {SITE.location.city}, {SITE.location.region}, {SITE.location.country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="custom-container">
          <div className="custom-row d-flex align-items-center justify-content-between">
            <ul className="social-links d-flex align-items-center">
              {SOCIAL.map((s) => (
                <li key={s.name}>
                  <A href={s.url} aria-label={`${SITE.name} on ${s.name}`}><Icon name={s.icon} /></A>
                </li>
              ))}
              <li><a href="/feed.xml" aria-label="RSS feed"><Icon name="iconoir-rss-feed" /></a></li>
            </ul>
            <p>
              © {year} {SITE.legalName}. Founded by <A to="/founder">{FOUNDER.name}</A>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

/** Every page: head tags, top bar, header, content, footer. */
export default function Page({ seo, className = '', children }: { seo: SeoProps; className?: string; children: ReactNode }) {
  return (
    <div className={`main-page ${className}`}>
      <Seo {...seo} />
      <a href="#content" className="rbx-skip">Skip to content</a>
      <HeaderBar />
      <Header />
      <main id="content">{children}</main>
      <Footer />
    </div>
  )
}

/** Inner-page hero in the template's style, with a breadcrumb trail. */
interface PageHeroProps {
  kicker: string
  title: ReactNode
  text?: ReactNode
  crumbs?: Crumb[]
  children?: ReactNode
  wide?: boolean
}

export function PageHero({ kicker, title, text, crumbs = [], children, wide = false }: PageHeroProps) {
  return (
    <section className={`hero-service-wrap hero-section-wrap hero-about-wrap rbx-hero${wide ? ' is-wide' : ''}`}>
      <div className="hero-section-content-wrap">
        <div className="custom-container">
          <div className="hero-portfolio-body">
            <div className="hero-section-content text-center">
              <nav className="rbx-crumbs" aria-label="Breadcrumb">
                <ol>
                  <li><A to="/">Home</A></li>
                  {crumbs.map((c, i) => (
                    <li key={c.path} {...(i === crumbs.length - 1 ? { 'aria-current': 'page' } : {})}>
                      {i === crumbs.length - 1 ? c.name : <A to={c.path}>{c.name}</A>}
                    </li>
                  ))}
                </ol>
              </nav>
              <h5 className="section-subtitle">{kicker}</h5>
              <h1 className="section-title fade-in">{title}</h1>
              {text && <p>{text}</p>}
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

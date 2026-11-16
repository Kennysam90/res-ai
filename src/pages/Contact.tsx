import { useState, type FormEvent } from 'react'
import Page, { PageHero } from '../components/Layout'
import { A, Icon, Img, FaqList } from '../components/ui'
import { SITE, SOCIAL, PRODUCT_CHANNELS } from '../data/site'
import { SERVICES } from '../data/services'
import { breadcrumbs, webPage, orgRef } from '../seo/schema'
import { play } from '../lib/sound'

type Status = 'idle' | 'invalid' | 'sent'

const TOPICS = ['A new project', ...SERVICES.map((s) => s.name), 'Press or partnership', 'Careers', 'Something else']

/**
 * The contact form. There is no mail server behind this site yet, so the form
 * builds an email from the fields and hands it to the visitor's own mail app.
 * Nothing typed here is sent anywhere until they press send there.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [missing, setMissing] = useState<string[]>([])

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    const need: string[] = []
    if (!get('first_name')) need.push('your first name')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get('email'))) need.push('a valid email address')
    if (get('message').length < 10) need.push('a message of at least 10 characters')
    if (!data.get('agree')) need.push('your agreement to the terms')
    setMissing(need)
    if (need.length) {
      setStatus('invalid')
      play('error')
      return
    }
    const lines = [
      get('message'),
      '',
      '—',
      `Name: ${get('first_name')} ${get('last_name')}`.trim(),
      `Email: ${get('email')}`,
      get('phone') ? `Phone: ${get('phone')}` : '',
      get('country') ? `Country: ${get('country')}` : '',
      `Topic: ${get('topic')}`,
    ].filter((l, i) => l !== '' || i === 1)
    const subject = `[${get('topic')}] Message from ${get('first_name')} via resbrotherx.com`
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
    setStatus('sent')
    play('success')
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="first_name">First Name</label>
          <input id="first_name" type="text" name="first_name" placeholder="First Name" autoComplete="given-name" required />
        </div>
        <div className="input-group">
          <label htmlFor="last_name">Last Name</label>
          <input id="last_name" type="text" name="last_name" placeholder="Last Name" autoComplete="family-name" />
        </div>
      </div>
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" autoComplete="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="topic">What is it about?</label>
          <select id="topic" name="topic" className="rbx-select" defaultValue={TOPICS[0]}>
            {TOPICS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="phone">Phone Number (optional)</label>
          <input id="phone" type="tel" name="phone" placeholder="Your Number" autoComplete="tel" />
        </div>
        <div className="input-group">
          <label htmlFor="country">Country (optional)</label>
          <input type="text" id="country" name="country" placeholder="Your Country" autoComplete="country-name" />
        </div>
      </div>
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" placeholder="Tell us what you want to build..." required />
        </div>
      </div>
      <div className="input-row">
        <div className="input-group input-checkbox">
          <input type="checkbox" id="agree" name="agree" />
          <label htmlFor="agree">You agree to our <A to="/terms">terms</A> and <A to="/privacy">privacy policy</A>.</label>
        </div>
      </div>
      <div className="input-row">
        <div className="input-group">
          <button type="submit" className="theme-btn" data-silent>Send message <Icon name="iconoir-send" /></button>
        </div>
      </div>
      <div className="input-row">
        <div className="input-group alert-notification">
          <div className={`alert-msg rbx-alert is-${status}`} role="status" aria-live="polite">
            {status === 'invalid' && <>Please add {missing.join(', ')}.</>}
            {status === 'sent' && (
              <>
                Your email app has opened with the message ready. Press send there to deliver it.
                If nothing opened, write to <A href={`mailto:${SITE.email}`}>{SITE.email}</A>.
              </>
            )}
            {status === 'idle' && <>Sending opens your email app with the message filled in.</>}
          </div>
        </div>
      </div>
    </form>
  )
}

/** The contact block from the template: form, facts and contact details. */
export function ContactSection({ heading = 'h2' }: { heading?: 'h1' | 'h2' }) {
  const H = heading
  return (
    <section className="contact-area" id="contact">
      <div className="custom-container">
        <div className="custom-row">
          <div className="contact-form-wrap">
            <div className="contact-form-body">
              <h5 className="section-subtitle">Contact</h5>
              <H className="section-title">Lets get in touch</H>
              <p>You can reach us anytime via <A href={`mailto:${SITE.email}`}>{SITE.email}</A></p>
              <ContactForm />
            </div>
          </div>
          <div className="contact-experience">
            <ul>
              <li>
                <div className="rbx-num"><span data-count={SITE.foundedYear}>{SITE.foundedYear}</span></div>
                <p>Building since</p>
              </li>
              <li>
                <div className="rbx-num"><span data-count="3">3</span> <span>Products</span></div>
                <p>Live and in use</p>
              </li>
              <li>
                <div className="rbx-num"><span data-count="3">3</span> <span>Labs</span></div>
                <p>AI, robotics, 3D</p>
              </li>
              <li>
                <div className="rbx-num"><span data-count="8">8</span> <span>Teams</span></div>
                <p>One company</p>
              </li>
              <li>
                <div className="rbx-num"><span data-count="30" data-suffix="+">30+</span> <span>Repos</span></div>
                <p>Public on GitHub</p>
              </li>
            </ul>
          </div>
          <div className="contact-infos">
            <div className="contact-infos-inner">
              <div className="contact-info">
                <img src="/assets/imgs/icon1.svg" alt="" width="44" height="44" loading="lazy" />
                <h3>Contact Info</h3>
                <p>
                  <A href={`mailto:${SITE.email}`}>{SITE.email}</A>
                  <br />
                  <A href={SITE.phoneHref}>{SITE.phone}</A>
                  <br />
                  Replies in English
                </p>
              </div>
              <div className="contact-office-info contact-info">
                <img src="/assets/imgs/map.svg" alt="" width="44" height="44" loading="lazy" />
                <h3>Where we are</h3>
                <p>
                  {SITE.legalName}
                  <br />
                  {SITE.location.street}, {SITE.location.city}
                  <br />
                  {SITE.location.region}, {SITE.location.country}
                </p>
              </div>
              <ul className="contact-social-links">
                {SOCIAL.map((s) => (
                  <li key={s.name}>
                    <A href={s.url}>
                      <Icon name={s.icon} /> {s.name}
                    </A>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const CONTACT_FAQS = [
  { q: 'How do I contact Resbrotherx?', a: `Fill in the form on this page, or write to ${SITE.email}. Tell us what you want to build and we will reply by email.` },
  { q: 'Where do I get help with Apsuni, AnimeDoc or Adorė?', a: 'Each product has its own support. For Apsuni write to support@apsuni.com. For AnimeDoc write to support@animedoc.cloud or open a ticket in your dashboard. For Adorė use the help section on adorė.com.' },
  { q: 'Who do I contact about press or partnerships?', a: `Choose "Press or partnership" in the form, or write to ${SITE.email}. Facts and logos are on the [press page](/press).` },
  { q: 'Where is Resbrotherx located?', a: 'Resbrotherx is based in Enugu, Enugu State, Nigeria. We work with people everywhere by email and video call.' },
]

export default function Contact() {
  const path = '/contact'
  const description = `Contact Resbrotherx about AI, robotics, 3D, mobile, web or SaaS work, press and partnerships. Email ${SITE.email}. Based in Enugu, Nigeria.`
  return (
    <Page
      className="contact-page"
      seo={{
        title: 'Contact Resbrotherx — Start a Project or Ask a Question',
        description,
        path,
        jsonLd: [
          webPage({ path, name: 'Contact Resbrotherx', description, type: 'ContactPage', about: orgRef }),
          breadcrumbs([{ name: 'Contact', path }]),
        ],
      }}
    >
      <PageHero
        kicker="Contact"
        title="Tell us what you want to build"
        text="An AI feature, a robot, a 3D character, an app or a whole product. Write a few lines and we will take it from there."
        crumbs={[{ name: 'Contact', path }]}
      />
      <ContactSection />
      <section className="rbx-section">
        <div className="custom-container">
          <div className="rbx-split">
            <div data-reveal>
              <h5 className="section-subtitle">Other ways to reach us</h5>
              <h2 className="section-title rbx-h2">Follow the work</h2>
              <p className="rbx-lead">We post builds, tutorials and product news on these channels.</p>
              <ul className="rbx-linklist">
                {[...SOCIAL, ...PRODUCT_CHANNELS].map((s) => (
                  <li key={s.url}>
                    <A href={s.url}><Icon name={s.icon} /> <span>{s.name === 'YouTube' || s.name === 'Instagram' || s.name === 'GitHub' ? `Resbrotherx on ${s.name}` : s.name}</span> <Icon name="iconoir-arrow-up-right" /></A>
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <Img name="enugu" sizes="(max-width: 900px) 100vw, 50vw" className="rbx-rounded" />
              <p className="rbx-caption">Enugu, Nigeria, where Resbrotherx is based.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="rbx-section is-tint">
        <div className="custom-container">
          <div className="rbx-narrow">
            <h2 className="section-title rbx-h2 text-center">Before you write</h2>
            <FaqList faqs={CONTACT_FAQS} />
          </div>
        </div>
      </section>
    </Page>
  )
}

import Page, { PageHero, Logo } from '../components/Layout'
import { A, Icon, Img, Blocks, SectionHeader, Cta, CardGrid, FaqList, delay } from '../components/ui'
import { Wireframe } from '../components/Canvas3D'
import { SITE, FOUNDER, SOCIAL } from '../data/site'
import { PRODUCTS } from '../data/products'
import { LABS } from '../data/labs'
import { PROJECTS, MORE_ON_GITHUB } from '../data/projects'
import { TEAMS } from '../data/company'
import { organization, person, breadcrumbs, webPage, orgRef, founderRef } from '../seo/schema'
import type { Block, Faq } from '../types'

const productCards = () =>
  PRODUCTS.map((p) => ({ to: `/products/${p.slug}`, image: p.cardImage, kicker: p.kicker, title: p.name, text: p.summary, badge: p.status === 'Live' ? undefined : p.status, cta: `About ${p.name}` }))

/* ------------------------------------------------------------------ About */

const ABOUT_FACTS: [string, string][] = [
  ['Name', 'Resbrotherx (also written ResBrotherX)'],
  ['Registered business name', SITE.legalName],
  ['Type', 'Technology company'],
  ['Founder and CEO', `[${FOUNDER.name}](/founder)`],
  ['Building since', String(SITE.foundedYear)],
  ['Registered', `${SITE.registration.dateText}, ${SITE.registration.body}`],
  ['Based in', `${SITE.location.city}, ${SITE.location.region}, ${SITE.location.country}`],
  ['Fields', 'Artificial intelligence, robotics, 3D animation, software'],
  ['Products', '[Apsuni](/products/apsuni), [AnimeDoc](/products/animedoc), [Adorė](/products/adore), [Brainbox](/products/brainbox) (in development)'],
  ['Website', '[www.resbrotherx.com](https://www.resbrotherx.com/)'],
]

const ABOUT_BODY: Block[] = [
  { h2: 'What Resbrotherx is' },
  { p: `**Resbrotherx** is a technology company founded and led by [${FOUNDER.name}](/founder). It builds and runs its own products, and it works in four fields: artificial intelligence, robotics, 3D animation and software.` },
  { p: 'The company owns three products that are live today. [Apsuni](/products/apsuni) turns a template or a Figma design into a live website or mobile app. [AnimeDoc](/products/animedoc) is a streaming catalogue API for developers, with a website on the same catalogue. [Adorė](/products/adore) sells made-to-measure African fashion with AI try-on. A fourth, [Brainbox](/products/brainbox), is in development.' },
  { h2: 'How it started' },
  { p: `The name came first. ${FOUNDER.name} has published software as Resbrotherx since 2020, when he opened a GitHub account under that name. Websites, dashboards, APIs and mobile apps followed, many of them [still public](/portfolio).` },
  { p: `In ${SITE.registration.dateText} the name was made formal: **${SITE.legalName}** was registered as a business name with the ${SITE.registration.body}, for computer programming, consultancy and related activities. The company is based in ${SITE.location.city}, ${SITE.location.region}.` },
  { h2: 'What we believe' },
  { ul: [
    '**Ship it.** A finished product in front of people teaches more than a plan.',
    '**Build for ourselves first.** Every service we offer is something our own products depend on.',
    '**AI with limits.** AI drafts, suggests and acts inside clear boundaries. People approve what matters.',
    '**Say what is true.** A preview is labelled a preview. A product in development is labelled in development.',
    '**Make it fast and findable.** A product nobody can load or find has not shipped.',
  ] },
  { h2: 'Where we are going' },
  { p: 'Software is the centre of Resbrotherx, and the company is growing outward from it. The [AI lab](/labs/ai) works on assistants that act for people. The [robotics lab](/labs/robotics), our newest, connects software to sensors and motors with Arduino and Raspberry Pi. The [3D and animation lab](/labs/3d-animation) builds characters and animation in Blender.' },
]

export function About() {
  const path = '/about'
  const description = 'Resbrotherx is a technology company founded by Patrick Francis Ugochukwu. Learn what it builds, where it is based, how it started and where it is going.'
  return (
    <Page
      className="about-page"
      seo={{
        title: 'About Resbrotherx — The Company Behind Apsuni, AnimeDoc and Adorė',
        description,
        path,
        jsonLd: [organization(PRODUCTS), person(), webPage({ path, name: 'About Resbrotherx', description, type: 'AboutPage', about: orgRef }), breadcrumbs([{ name: 'About', path }])],
      }}
    >
      <PageHero kicker="Company" title="The company behind Apsuni, AnimeDoc and Adorė" text={SITE.mission} crumbs={[{ name: 'About', path }]}>
        <div className="hero-company-boxes">
          {[
            [String(SITE.foundedYear), 'Building since', 'Software published under the Resbrotherx name.'],
            ['3', 'Live products', 'Apsuni, AnimeDoc and Adorė.'],
            ['4', 'Fields', 'AI, robotics, 3D and software.'],
            ['8', 'Teams', 'From research to customer support.'],
          ].map(([n, t, d]) => (
            <div className="hero-company-box simple-shadow" key={t} data-reveal>
              <div className="rbx-num rbx-stat">{n}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="rbx-section">
        <div className="custom-container">
          <div className="rbx-article-grid">
            <div data-reveal>
              <Blocks blocks={ABOUT_BODY} />
            </div>
            <aside className="rbx-aside" data-reveal>
              <div className="rbx-panel">
                <h2 className="rbx-panel-title">Company facts</h2>
                <Blocks blocks={[{ facts: ABOUT_FACTS }]} />
                <A to="/press" className="rbx-card-link">Press &amp; media kit <Icon name="iconoir-arrow-up-right" /></A>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="about-service3-area">
        <div className="custom-container">
          <div className="custom-row align-items-center">
            <div className="img-box" data-reveal>
              <Img name="3d-animation-scene" sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className="content-box" data-reveal>
              <h2>One team for the idea, <br />the build and the launch.</h2>
              <p>Most products are slowed down at the hand-offs: from idea to design, design to code, code to launch. We keep all of it in one team, so nothing is lost between them.</p>
              <p>The same people who design an interface build it, and the same people who build it answer the customers who use it.</p>
              <ul>
                <li><Icon name="iconoir-check" /> Research to release</li>
                <li><Icon name="iconoir-check" /> Software and hardware</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="rbx-section">
        <div className="custom-container">
          <SectionHeader kicker="Products" title="What we have built" text="Three products live today and one in development. Each has its own site and its own customers. Resbrotherx owns and runs all of them." />
          <CardGrid cols={4} items={productCards()} />
        </div>
      </section>

      <section className="rbx-section is-tint">
        <div className="custom-container">
          <SectionHeader kicker="Labs" title="What we are working on" text="Research that feeds every product. These pages describe the work and the thinking, not products that do not exist yet." />
          <CardGrid items={LABS.map((l) => ({ to: `/labs/${l.slug}`, image: l.image, kicker: l.kicker.split(' · ')[0], title: l.name, text: l.summary, cta: 'Enter the lab' }))} />
        </div>
      </section>

      <FounderStrip />
      <Cta title="Want to know more?" text="Read the press kit for facts and logos, or write to us." label="Contact Resbrotherx" />
    </Page>
  )
}

function FounderPortrait({ large = false }: { large?: boolean }) {
  if (FOUNDER.photo) {
    return <img src={large ? FOUNDER.photo : FOUNDER.photoThumbnail} alt={`${FOUNDER.name}, ${FOUNDER.role} of Resbrotherx`} className={`rbx-portrait${large ? ' is-lg' : ''}`} width={large ? 608 : 240} height={large ? 1000 : 240} />
  }
  return (
    <div className={`rbx-portrait is-mark${large ? ' is-lg' : ''}`} role="img" aria-label={`${FOUNDER.name}, ${FOUNDER.role} of Resbrotherx`}>
      <Wireframe shape="icosahedron" color="#8FB4FF" className="rbx-portrait-wire" />
      <span>{FOUNDER.initials}</span>
    </div>
  )
}

function FounderStrip() {
  return (
    <section className="rbx-section">
      <div className="custom-container">
        <div className="rbx-founder-strip" data-reveal>
          <FounderPortrait />
          <div>
            <h5 className="section-subtitle">Leadership</h5>
            <h2 className="section-title rbx-h2">{FOUNDER.name}</h2>
            <p className="rbx-lead">{FOUNDER.summary}</p>
            <A to="/founder" className="theme-btn">Meet the founder <Icon name="iconoir-arrow-up-right" /></A>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- Founder */

const FOUNDER_FAQS: Faq[] = [
  { q: 'Who is Patrick Francis Ugochukwu?', a: 'Patrick Francis Ugochukwu is a software engineer and the founder and chief executive officer of Resbrotherx, the technology company behind Apsuni, AnimeDoc and Adorė. He is also the CEO of Apsuni.' },
  { q: 'Who is the founder of Resbrotherx?', a: 'Resbrotherx was founded by Patrick Francis Ugochukwu, who leads the company as its CEO.' },
  { q: 'Is Francis Patrick Ugochukwu the same person as Patrick Francis Ugochukwu?', a: 'Yes. His name is written Patrick Francis Ugochukwu. He is also referred to as Patrick Ugochukwu, Francis Patrick Ugochukwu and Patrick Francis.' },
  { q: 'What software has Patrick Francis Ugochukwu developed?', a: 'He founded and built Apsuni (websites and mobile apps built, hosted and deployed), AnimeDoc (a streaming catalogue API and website) and Adorė (made-to-measure African fashion with AI try-on). His public GitHub account also holds e-commerce and content APIs, mobile apps written with React Native, dashboards and a server monitoring tool.' },
  { q: 'What is Patrick Francis Ugochukwu working on now?', a: 'He leads Resbrotherx\'s work on AI assistants and agents, including Brainbox, an AI operations platform in development, along with the company\'s newer work in robotics with Arduino and Raspberry Pi and in 3D animation with Blender.' },
  { q: 'What technologies does he work with?', a: 'Python and Django, JavaScript and TypeScript, React, React Native and Node.js, with Blender for 3D and Arduino and Raspberry Pi for robotics.' },
  { q: 'How can I contact Patrick Francis Ugochukwu?', a: 'For press, partnerships and speaking requests, use the [Resbrotherx contact page](/contact).' },
]

const FOUNDER_BODY: Block[] = [
  { h2: 'Biography' },
  { p: `**${FOUNDER.name}** is a software engineer and the founder and chief executive officer of **Resbrotherx**, the technology company behind [Apsuni](/products/apsuni), [AnimeDoc](/products/animedoc) and [Adorė](/products/adore). He is also the chief executive of Apsuni.` },
  { p: `He is also known as **${FOUNDER.shortName}** and **Francis Patrick Ugochukwu**. He began publishing software under the Resbrotherx name in ${FOUNDER.githubSince}, and registered ${SITE.legalName} as a business in Nigeria in ${SITE.registration.dateText}. The company is based in ${SITE.location.city}, ${SITE.location.region}.` },
  { h2: 'What he has built' },
  { p: 'Patrick founded each of the Resbrotherx products and leads their development:' },
  { ul: [
    '**[Apsuni](/products/apsuni)**: turns a website template or a Figma design into a live, branded website or mobile app, built, hosted and deployed for the customer. He is its CEO.',
    '**[AnimeDoc](/products/animedoc)**: a streaming catalogue API for developers, with search, details and playback endpoints, and a website built on the same catalogue.',
    '**[Adorė](/products/adore)**: a boutique for made-to-measure African fashion, with AI try-on and designs that can be viewed in 3D.',
    '**[Brainbox](/products/brainbox)**: an AI operations platform, in development, in which AI agents analyse logs and query data through read-only, audited access.',
  ] },
  { h2: 'Earlier software' },
  { p: 'His public GitHub account, [github.com/resbrotherx](https://github.com/resbrotherx), has been active since 2020. It includes:' },
  { ul: [
    ...PROJECTS.map((p) => `**[${p.name}](/portfolio/${p.slug})**: ${p.summary}`),
    ...MORE_ON_GITHUB.slice(0, 2).map((r) => `**[${r.name}](${r.url})**: ${r.text}`),
  ] },
  { p: 'The full list is on the [portfolio page](/portfolio).' },
  { h2: 'What he is working on now' },
  { ul: [
    '**AI that acts.** Assistants and agents that do real tasks inside products, with clear limits and a person approving what matters. See the [AI lab](/labs/ai).',
    '**Robotics.** Connecting software to sensors and motors with Arduino, Raspberry Pi and ESP32. See the [robotics lab](/labs/robotics).',
    '**3D and animation.** 3D characters, models and animation made in Blender, and 3D inside products. See the [3D lab](/labs/3d-animation).',
    '**The products.** Continuing to build Apsuni, AnimeDoc and Adorė.',
  ] },
  { h2: 'Skills and tools' },
  { p: `He works across the stack: ${FOUNDER.skills.join(', ')}. For 3D he uses Blender, and for robotics Arduino and Raspberry Pi.` },
]

export function Founder() {
  const path = '/founder'
  const description = 'Patrick Francis Ugochukwu is a software engineer and the founder and CEO of Resbrotherx, the company behind Apsuni, AnimeDoc and Adorė. Biography and work.'
  const facts: [string, string][] = [
    ['Full name', FOUNDER.name],
    ['Also known as', FOUNDER.altNames.slice(0, 2).join(', ')],
    ['Occupation', 'Software engineer, entrepreneur'],
    ['Title', 'Founder and CEO of Resbrotherx; CEO of Apsuni'],
    ['Known for', 'Founding Resbrotherx; Apsuni, AnimeDoc and Adorė'],
    ['Active since', '2020'],
    ['Company', `[Resbrotherx](/about)`],
    ['GitHub', `[resbrotherx](${FOUNDER.github})`],
  ]
  return (
    <Page
      className="founder-page"
      seo={{
        title: 'Patrick Francis Ugochukwu — Founder & CEO of Resbrotherx',
        description,
        path,
        type: 'profile',
        image: FOUNDER.photo,
        jsonLd: [
          { '@type': 'ProfilePage', '@id': SITE.url + path + '#webpage', url: SITE.url + path, name: `${FOUNDER.name}, ${FOUNDER.role} of Resbrotherx`, description, inLanguage: 'en', isPartOf: { '@id': SITE.websiteId }, mainEntity: founderRef },
          person(PRODUCTS),
          organization(PRODUCTS),
          breadcrumbs([{ name: 'About', path: '/about' }, { name: FOUNDER.name, path }]),
        ],
      }}
    >
      <PageHero
        kicker="Founder & CEO"
        title={FOUNDER.name}
        text="Software engineer. Founder and chief executive of Resbrotherx, the company behind Apsuni, AnimeDoc and Adorė."
        crumbs={[{ name: 'About', path: '/about' }, { name: 'Founder', path }]}
      />
      <section className="rbx-section">
        <div className="custom-container">
          <div className="rbx-article-grid is-profile">
            <aside className="rbx-aside" data-reveal>
              <FounderPortrait large />
              <div className="rbx-panel">
                <h2 className="rbx-panel-title">{FOUNDER.name}</h2>
                <Blocks blocks={[{ facts }]} />
                <ul className="rbx-social-row">
                  <li><A href={FOUNDER.github} aria-label="Patrick Francis Ugochukwu on GitHub"><Icon name="iconoir-github" /></A></li>
                  {SOCIAL.filter((s) => s.name !== 'GitHub').map((s) => (
                    <li key={s.name}><A href={s.url} aria-label={`Resbrotherx on ${s.name}`}><Icon name={s.icon} /></A></li>
                  ))}
                </ul>
              </div>
            </aside>
            <div data-reveal>
              <Blocks blocks={FOUNDER_BODY} />
            </div>
          </div>
        </div>
      </section>

      <section className="rbx-section is-tint">
        <div className="custom-container">
          <SectionHeader kicker="His products" title="Software founded by Patrick Francis Ugochukwu" />
          <CardGrid cols={4} items={productCards()} />
        </div>
      </section>

      <section className="rbx-section">
        <div className="custom-container">
          <div className="rbx-narrow">
            <h2 className="section-title rbx-h2 text-center">Questions about the founder</h2>
            <FaqList faqs={FOUNDER_FAQS} />
          </div>
        </div>
      </section>
      <Cta title="Press, partnerships and speaking" text="For interviews, partnerships or speaking requests, write to Resbrotherx." label="Get in touch" />
    </Page>
  )
}

export { FOUNDER_FAQS }

/* ------------------------------------------------------------------- Team */

export function TeamPage() {
  const path = '/team'
  const description = 'The teams at Resbrotherx: leadership, AI, robotics, 3D and design, web and SaaS, mobile, platform and support, led by founder Patrick Francis Ugochukwu.'
  return (
    <Page
      className="team-page"
      seo={{ title: 'Resbrotherx Teams — AI, Robotics, 3D, Web, Mobile and Support', description, path, jsonLd: [webPage({ path, name: 'Resbrotherx teams', description, about: orgRef }), breadcrumbs([{ name: 'About', path: '/about' }, { name: 'Teams', path }])] }}
    >
      <PageHero kicker="Our teams" title="Eight teams, one company" text="Resbrotherx is organised by craft. Each team owns its part of every product, and all of them ship together." crumbs={[{ name: 'About', path: '/about' }, { name: 'Teams', path }]} />
      <FounderStrip />
      <section className="rbx-section is-tint">
        <div className="custom-container">
          <SectionHeader kicker="Teams" title="Who does what" text="From the first sketch of an idea to answering the customer who uses it." />
          <div className="rbx-grid rbx-grid-2">
            {TEAMS.map((t, i) => (
              <article className="rbx-team" id={t.slug} key={t.slug} data-reveal style={delay((i % 2) * 80)}>
                <span className="rbx-card-icon"><Icon name={t.icon} /></span>
                <div>
                  <h3>{t.name}</h3>
                  <p>{t.summary}</p>
                  <ul className="rbx-list is-compact">
                    {t.does.map((d) => <li key={d}><Icon name="iconoir-check" /><span>{d}</span></li>)}
                  </ul>
                  <p className="rbx-team-links">
                    {t.links.map((l) => <A to={l.to} key={l.to} className="rbx-card-link">{l.label} <Icon name="iconoir-arrow-up-right" /></A>)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="rbx-section">
        <div className="custom-container">
          <div className="rbx-narrow rbx-prose">
            <h2>How the teams work together</h2>
            <p>A product does not belong to one team. Take <A to="/products/adore">Adorė</A>: the AI team builds try-on and the assistant, the 3D team produces the multi-angle views, mobile and web engineering build the app and the site on one backend, platform keeps it running and support answers shoppers.</p>
            <p>Because every team works on every product, what one team learns reaches all of them. That is the reason Resbrotherx is one company and not several.</p>
          </div>
        </div>
      </section>
      <Cta title="Want to work with us?" text="We like hearing from people who build things." label="See careers" to="/careers" />
    </Page>
  )
}

/* ---------------------------------------------------------------- Careers */

export function Careers() {
  const path = '/careers'
  const description = 'Work with Resbrotherx on AI, robotics, 3D animation, web and mobile products. There are no listed openings right now, and introductions are always welcome.'
  const fields = [
    { icon: 'iconoir-brain', title: 'AI engineering', text: 'Assistants, agents, visual AI and the evaluation that keeps them honest.' },
    { icon: 'iconoir-cpu', title: 'Robotics & embedded', text: 'Arduino, Raspberry Pi and ESP32: firmware, electronics and vision.' },
    { icon: 'iconoir-box-3d-center', title: '3D & animation', text: 'Modelling, rigging, animation and rendering in Blender.' },
    { icon: 'iconoir-code', title: 'Web engineering', text: 'React front ends, Django and Node.js back ends.' },
    { icon: 'iconoir-smartphone-device', title: 'Mobile engineering', text: 'React Native and Expo apps for iOS and Android.' },
    { icon: 'iconoir-design-nib', title: 'Product design', text: 'Interfaces in Figma that survive the trip into code.' },
  ]
  return (
    <Page
      className="career-page"
      seo={{ title: 'Careers at Resbrotherx — Build AI, Robots, 3D and Software', description, path, jsonLd: [webPage({ path, name: 'Careers at Resbrotherx', description, about: orgRef }), breadcrumbs([{ name: 'Careers', path }])] }}
    >
      <PageHero kicker="Careers" title="Build things that ship" text="We are a small company that makes real products. If that is how you like to work, we would like to meet you." crumbs={[{ name: 'Careers', path }]} />
      <section className="rbx-section">
        <div className="custom-container">
          <div className="rbx-narrow">
            <p className="rbx-note is-plain" data-reveal><Icon name="iconoir-light-bulb-on" /><span><strong>No listed openings right now.</strong> We do not have open roles to advertise today. We still read every introduction, and we keep the ones that fit for when a role opens.</span></p>
          </div>
          <SectionHeader kicker="Disciplines" title="The work we do" text="These are the crafts inside Resbrotherx. If one of them is yours, tell us what you have built." />
          <div className="rbx-grid rbx-grid-3">
            {fields.map((f, i) => (
              <article className="rbx-card is-plain" key={f.title} data-reveal style={delay((i % 3) * 80)}>
                <div className="rbx-card-body">
                  <span className="rbx-card-icon"><Icon name={f.icon} /></span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
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
              <h2>How we work</h2>
              <ul className="rbx-list">
                {['Small teams with real ownership of a product.', 'Finished work over long plans.', 'Writing things down, so the next person can pick them up.', 'Honest labels: a demo is called a demo.', 'Learning in the open: we publish what we figure out.'].map((t) => (
                  <li key={t}><Icon name="iconoir-check" /><span>{t}</span></li>
                ))}
              </ul>
              <h2>How to introduce yourself</h2>
              <ol className="rbx-steps">
                {['Write to us through the contact page and choose "Careers".', 'Tell us which discipline is yours.', 'Send links to things you have made: a repository, an app, a render, a robot.'].map((t, i) => (
                  <li key={t}><span className="n">{String(i + 1).padStart(2, '0')}</span><span>{t}</span></li>
                ))}
              </ol>
            </div>
            <div data-reveal>
              <Img name="workbench" sizes="(max-width: 900px) 100vw, 50vw" className="rbx-rounded" />
            </div>
          </div>
        </div>
      </section>
      <Cta title="Introduce yourself" text="Show us what you have built. That tells us more than a CV." label="Write to us" />
    </Page>
  )
}

/* ------------------------------------------------------------------ Press */

const BOILERPLATE_SHORT = 'Resbrotherx is a technology company founded by Patrick Francis Ugochukwu. It builds AI applications, robotics, 3D animation and software, and is the company behind Apsuni, AnimeDoc and Adorė.'

const BOILERPLATE_LONG = `Resbrotherx is a technology company based in ${SITE.location.city}, ${SITE.location.country}, founded and led by Patrick Francis Ugochukwu. The company builds and runs its own products: Apsuni, which turns a template or a Figma design into a live website or mobile app; AnimeDoc, a streaming catalogue API for developers with a website on the same catalogue; and Adorė, a platform for made-to-measure African fashion with AI try-on. Resbrotherx works in four fields: artificial intelligence, robotics, 3D animation and software. Its founder has published software under the Resbrotherx name since 2020, and ${SITE.legalName} was registered as a business name with the ${SITE.registration.body} in ${SITE.registration.dateText}.`

export function Press() {
  const path = '/press'
  const description = 'Press and media kit for Resbrotherx: verified company facts, founder biography, product descriptions, name and spelling guide, logos and a press contact.'
  const body: Block[] = [
    { h2: 'Company facts' },
    { facts: ABOUT_FACTS },
    { h2: 'About Resbrotherx (short)' },
    { p: BOILERPLATE_SHORT },
    { h2: 'About Resbrotherx (long)' },
    { p: BOILERPLATE_LONG },
    { h2: 'Founder' },
    { p: `${FOUNDER.summary} He has published software under the Resbrotherx name since 2020. Read the full [founder biography](/founder).` },
    { h2: 'Products' },
    { table: {
      head: ['Product', 'Description', 'Website', 'Status'],
      rows: PRODUCTS.map((p) => [`[${p.name}](/products/${p.slug})`, p.tagline, p.url ? `[${p.displayUrl || p.url.replace('https://', '')}](${p.url})` : '—', p.status]),
    } },
    { h2: 'Names and spelling' },
    { ul: [
      'The company is **Resbrotherx**, one word. It is also written **ResBrotherX**. The registered business name is **Resbrotherx Technologies**.',
      `The founder is **${FOUNDER.name}**. On second mention, **Ugochukwu** or **Patrick Ugochukwu**.`,
      '**Adorė** is written with an ė. Where that is not possible, **Adore** is acceptable.',
      '**AnimeDoc** and **Apsuni** are each one word.',
    ] },
    { h2: 'Timeline' },
    { table: {
      head: ['Date', 'Event'],
      rows: [
        ['May 2020', 'Patrick Francis Ugochukwu begins publishing software on GitHub under the name Resbrotherx.'],
        ['2020 onwards', 'Websites, APIs, dashboards and mobile apps are published under the name.'],
        ['By 2026', 'Apsuni, AnimeDoc and Adorė are live as Resbrotherx products.'],
        [SITE.registration.dateText, `${SITE.legalName} is registered as a business name with the ${SITE.registration.body}.`],
        [SITE.registration.dateText, 'The company website, resbrotherx.com, is published.'],
      ],
    } },
    { h2: 'Sources' },
    { p: 'Each fact on this page can be checked against a primary source:' },
    { ul: [
      'Company registration: the public register of the Corporate Affairs Commission of Nigeria.',
      'Products and ownership: [apsuni.com/founder](https://apsuni.com/founder), [animedoc.cloud/founder](https://animedoc.cloud/founder) and [adorė.com](https://xn--ador-yva.com).',
      'Public code and its dates: [github.com/resbrotherx](https://github.com/resbrotherx).',
    ] },
    { h2: 'Using our name and logo' },
    { ul: [
      'You may use the Resbrotherx name and logo to refer to the company in articles, videos and directories.',
      'Do not alter the logo, and do not use it to suggest a partnership or endorsement that does not exist.',
      'Screenshots of our products may be used to illustrate coverage of them.',
    ] },
  ]
  return (
    <Page
      className="press-page"
      seo={{ title: 'Resbrotherx Press & Media Kit — Company Facts, Founder and Logos', description, path, jsonLd: [organization(PRODUCTS), person(), webPage({ path, name: 'Resbrotherx press and media kit', description, about: orgRef }), breadcrumbs([{ name: 'Press', path }])] }}
    >
      <PageHero kicker="Press & media" title="Facts, names and logos" text="Everything a writer, editor or directory needs to describe Resbrotherx accurately." crumbs={[{ name: 'Press', path }]} />
      <section className="rbx-section">
        <div className="custom-container">
          <div className="rbx-article-grid">
            <div data-reveal><Blocks blocks={body} /></div>
            <aside className="rbx-aside" data-reveal>
              <div className="rbx-panel">
                <h2 className="rbx-panel-title">Logos</h2>
                <div className="rbx-logo-tile"><Logo /></div>
                <div className="rbx-logo-tile is-dark"><Logo light /></div>
                <ul className="rbx-linklist is-compact">
                  <li><a href="/icons/resbrotherx-logo.svg" download>Logo, for light backgrounds (SVG) <Icon name="iconoir-download" /></a></li>
                  <li><a href="/icons/resbrotherx-logo.png" download>Logo, for light backgrounds (PNG) <Icon name="iconoir-download" /></a></li>
                  <li><a href="/icons/resbrotherx-logo-white.svg" download>Logo, for dark backgrounds (SVG) <Icon name="iconoir-download" /></a></li>
                  <li><a href="/icons/resbrotherx-logo-white.png" download>Logo, for dark backgrounds (PNG) <Icon name="iconoir-download" /></a></li>
                  <li><a href="/icons/logo.svg" download>Icon only (SVG) <Icon name="iconoir-download" /></a></li>
                  <li><a href="/icons/logo-512.png" download>Icon only (PNG, 512px) <Icon name="iconoir-download" /></a></li>
                  <li><a href="/og/default.jpg" download>Social card (JPG) <Icon name="iconoir-download" /></a></li>
                </ul>
              </div>
              <div className="rbx-panel">
                <h2 className="rbx-panel-title">Press contact</h2>
                <p>For interviews and questions, write to <A href={`mailto:${SITE.email}`}>{SITE.email}</A> with "Press" in the subject.</p>
                <A to="/contact" className="rbx-card-link">Contact page <Icon name="iconoir-arrow-up-right" /></A>
              </div>
              <div className="rbx-panel">
                <h2 className="rbx-panel-title">Brand colours</h2>
                <ul className="rbx-swatches">
                  {[['#16E4F4', 'Cyan'], ['#1F3BFF', 'Resbrotherx blue'], ['#5B2CF5', 'Violet'], ['#B43CF5', 'Purple'], ['#0B0B14', 'Ink']].map(([c, n]) => (
                    <li key={c}><span style={{ background: c }} /> <b>{n}</b> <code>{c}</code></li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Cta title="Writing about Resbrotherx?" text="We are glad to answer questions and check facts." label="Contact us" />
    </Page>
  )
}

export { BOILERPLATE_SHORT, BOILERPLATE_LONG, ABOUT_FACTS, ABOUT_BODY, FOUNDER_BODY }

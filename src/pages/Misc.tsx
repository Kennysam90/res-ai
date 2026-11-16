import Page, { PageHero } from '../components/Layout'
import { A, Blocks, Cta } from '../components/ui'
import IMAGES_JSON from '../data/images.json'
import { SITE, NAV } from '../data/site'
import { PRODUCTS } from '../data/products'
import { SERVICES } from '../data/services'
import { LABS } from '../data/labs'
import { PROJECTS } from '../data/projects'
import { POSTS } from '../data/posts'
import { DOCS } from '../data/docs'
import { breadcrumbs, webPage } from '../seo/schema'
import type { Block, ImageMeta, LinkItem } from '../types'

const IMAGES = IMAGES_JSON as Record<string, ImageMeta>
const UPDATED = '16 November 2026'

/* ------------------------------------------------------------ Legal pages */

function Legal({ path, title, kicker, intro, description, body }: { path: string; title: string; kicker: string; intro: string; description: string; body: Block[] }) {
  return (
    <Page className="legal-page" seo={{ title: `${title} | Resbrotherx`, description, path, jsonLd: [webPage({ path, name: title, description }), breadcrumbs([{ name: title, path }])] }}>
      <PageHero kicker={kicker} title={title} text={intro} crumbs={[{ name: title, path }]} />
      <section className="rbx-section is-tight">
        <div className="custom-container">
          <div className="rbx-narrow" data-reveal>
            <p className="rbx-meta">Last updated {UPDATED}</p>
            <Blocks blocks={body} />
          </div>
        </div>
      </section>
    </Page>
  )
}

export const Privacy = () => (
  <Legal
    path="/privacy"
    title="Privacy Policy"
    kicker="Legal"
    intro="What this website collects, and what it does not."
    description="The resbrotherx.com privacy policy: this website sets no tracking cookies, runs no advertising trackers and only receives the details you choose to email to us."
    body={[
      { h2: 'The short version' },
      { ul: [
        'This website sets no cookies and runs no advertising or analytics trackers.',
        'We only receive personal details that you choose to send us by email.',
        'We do not sell personal data.',
      ] },
      { h2: 'Who we are' },
      { p: `This website, www.resbrotherx.com, is run by ${SITE.legalName} ("Resbrotherx", "we"), a business registered in Nigeria and based in ${SITE.location.city}, ${SITE.location.region}. You can reach us at [${SITE.email}](mailto:${SITE.email}).` },
      { h2: 'What this website stores on your device' },
      { p: 'One thing: your choice of interface sound (on or off) is saved in your browser\'s local storage so that it is remembered on your next visit. It is not sent to us and it does not identify you. You can clear it at any time by clearing the site data in your browser.' },
      { h2: 'What we receive when you contact us' },
      { p: 'The contact and subscribe forms do not send anything to our servers. They open your own email app with a message you can read and edit before sending. If you send it, we receive what any email contains: your email address, your name if you gave it, and what you wrote. We use it to reply to you and, if you asked to subscribe, to send you updates.' },
      { h2: 'Server logs' },
      { p: 'Like every website, ours is delivered by servers that record technical details of each request: IP address, the page requested, the time, and the browser\'s user-agent string. Our site is served through Cloudflare, which processes the same details to deliver pages and protect against abuse. We use these logs to keep the site running and secure, and we do not use them to build profiles of visitors.' },
      { h2: 'Links to other sites' },
      { p: 'This site links to our products ([Apsuni](https://apsuni.com), [AnimeDoc](https://animedoc.cloud), [Adorė](https://xn--ador-yva.com)) and to services such as YouTube, Instagram and GitHub. Each has its own privacy policy, which applies once you are there.' },
      { h2: 'Your choices' },
      { ul: [
        'To stop receiving updates, reply to any message we sent and ask to be removed.',
        `To see, correct or delete what we hold about you, write to [${SITE.email}](mailto:${SITE.email}).`,
      ] },
      { h2: 'Changes' },
      { p: 'If this policy changes, the new version will be published on this page with a new date.' },
    ]}
  />
)

export const Terms = () => (
  <Legal
    path="/terms"
    title="Terms of Use"
    kicker="Legal"
    intro="The terms for using this website."
    description="Terms of use for resbrotherx.com: how you may use the site and its content, our trademarks, links to our products and limits of liability."
    body={[
      { h2: 'About these terms' },
      { p: `These terms cover your use of www.resbrotherx.com, the website of ${SITE.legalName} ("Resbrotherx"). By using the site you agree to them. Our products, [Apsuni](https://apsuni.com), [AnimeDoc](https://animedoc.cloud) and [Adorė](https://xn--ador-yva.com), have their own terms, which apply when you use those products.` },
      { h2: 'Using the content' },
      { ul: [
        'You may read, link to, quote and summarise the pages of this site, with a link back to the page.',
        'Search engines and AI assistants may crawl and index the site.',
        'You may not present our content as your own, or use it in a way that suggests we endorse you.',
      ] },
      { h2: 'Names and logos' },
      { p: 'Resbrotherx, Apsuni, AnimeDoc and Adorė, and their logos, are our names and marks. You may use them to refer to us or our products. The [press page](/press) explains how.' },
      { h2: 'Photographs' },
      { p: 'Some photographs on this site come from Wikimedia Commons and remain under their own licences. Each is credited on the [image credits](/credits) page. Other brand and product names mentioned on this site, such as Arduino, Raspberry Pi and Blender, belong to their owners and are used only to describe the tools we work with.' },
      { h2: 'Accuracy' },
      { p: 'We work to keep this site accurate and up to date. Prices and plan details for our products are a snapshot, and each product\'s own site is the source of truth. Articles and guides are general information, not professional advice for your particular situation.' },
      { h2: 'Paying Resbrotherx' },
      { p: `Payments to ${SITE.legalName} are made in Nigerian naira through a licensed payment provider. Card details are entered on the provider's secure page and never reach us. How to pay, what we charge for and how refunds work are set out in our [payments and refund policy](/refunds).` },
      { h2: 'Liability' },
      { p: 'This website is provided as it is. To the extent the law allows, Resbrotherx is not liable for loss arising from your use of the site or from relying on its content.' },
      { h2: 'Governing law' },
      { p: 'These terms are governed by the laws of the Federal Republic of Nigeria.' },
      { h2: 'Contact' },
      { p: `Questions about these terms can be sent to [${SITE.email}](mailto:${SITE.email}).` },
    ]}
  />
)

export const Cookies = () => (
  <Legal
    path="/cookies"
    title="Cookie Policy"
    kicker="Legal"
    intro="This website does not use cookies."
    description="The resbrotherx.com cookie policy: the site sets no cookies. It saves one preference, interface sound on or off, in your browser's local storage."
    body={[
      { h2: 'No cookies' },
      { p: 'www.resbrotherx.com does not set cookies. There are no advertising cookies, no analytics cookies and no third-party trackers on this site, so there is no cookie banner to accept.' },
      { h2: 'One saved preference' },
      { table: {
        head: ['Name', 'Where', 'Purpose', 'How long'],
        rows: [['`rbx-sound`', 'Local storage in your browser', 'Remembers whether you turned interface sounds on or off', 'Until you clear it']],
      } },
      { p: 'This value stays in your browser. It is never sent to our servers and it does not identify you.' },
      { h2: 'Our delivery network' },
      { p: 'The site is delivered through Cloudflare. Cloudflare may set a strictly necessary security cookie when it needs to check that a visitor is not an automated attack. This is used only for security.' },
      { h2: 'Our products' },
      { p: 'Apsuni, AnimeDoc and Adorė are separate websites with accounts and payments, and they use cookies or similar storage for sign-in. See each product\'s own policy.' },
      { h2: 'More' },
      { p: 'See the [privacy policy](/privacy) for everything else this site does and does not collect.' },
    ]}
  />
)

export const Refunds = () => (
  <Legal
    path="/refunds"
    title="Payments & Refund Policy"
    kicker="Legal"
    intro="What you pay Resbrotherx for, how payment works and how to get your money back."
    description="How payments to Resbrotherx Technologies work: what we charge for, prices in Nigerian naira, secure card payments, and how to request a refund."
    body={[
      { h2: 'Who you are paying' },
      { p: `Payments are made to ${SITE.legalName}, a business name registered with the ${SITE.registration.body}, at ${SITE.location.street}, ${SITE.location.city}, ${SITE.location.region}, ${SITE.location.country}. The name RESBROTHERX may appear on your bank or card statement.` },
      { h2: 'What we charge for' },
      { ul: [
        '**Software and design projects.** Websites, web apps, mobile apps, SaaS platforms, AI features, 3D and animation work and robotics prototypes, as described on our [services](/services) pages. Every project is priced in a written quote before you pay anything.',
        '**Plans on our products.** Plans for [Apsuni](/products/apsuni) and our other products are listed with their prices on each product\'s own pricing page. You see the price, in naira, before you pay.',
      ] },
      { h2: 'How payment works' },
      { ul: [
        'Prices are in Nigerian naira (₦) unless a quote says otherwise.',
        'You can pay by card, bank transfer or USSD through our payment provider. Card details are entered on the provider\'s secure page and never reach our servers.',
        'For projects, we usually ask for a deposit before work starts and the balance at agreed milestones. The quote sets out the amounts and dates.',
        'You receive a receipt by email for every successful payment.',
      ] },
      { h2: 'Refunds' },
      { ul: [
        '**Charged twice or charged for a failed payment.** We refund the extra or failed charge in full.',
        '**Product plans.** If a plan does not work as described, write to us within 7 days of payment and we will fix it or refund you.',
        '**Projects not yet started.** If you cancel before work starts, we refund your deposit in full.',
        '**Projects in progress.** If you cancel after work starts, we refund what you paid for work that has not been done. Work already delivered is not refunded.',
        '**Delivered work.** If what we deliver does not match the agreed quote, tell us within 14 days of delivery and we will correct it. If we cannot, we will agree a partial or full refund with you.',
      ] },
      { h2: 'How to ask for a refund' },
      { ol: [
        `Write to [${SITE.email}](mailto:${SITE.email}) or call ${SITE.phone}.`,
        'Include your name, the email used to pay, the amount, the date and the payment reference from your receipt.',
        'We reply within 3 working days. An approved refund goes back to the card or account you paid with, normally within 5 to 10 working days, depending on your bank.',
      ] },
      { h2: 'Disputes' },
      { p: 'Please contact us before raising a dispute with your bank, so we can resolve the problem quickly. These terms are governed by the laws of the Federal Republic of Nigeria.' },
    ]}
  />
)

/* ---------------------------------------------------------------- Credits */

export function Credits() {
  const path = '/credits'
  const description = 'Credits and licences for the photographs used on resbrotherx.com, most of them from Wikimedia Commons, with links to each author and licence.'
  const credited = Object.entries(IMAGES).filter(([, im]) => im.credit)
  return (
    <Page className="credits-page" seo={{ title: 'Image Credits | Resbrotherx', description, path, jsonLd: [webPage({ path, name: 'Image credits', description }), breadcrumbs([{ name: 'Image credits', path }])] }}>
      <PageHero kicker="Credits" title="Image credits" text="Photographs on this site that are not our own, with their authors and licences. Thank you to everyone who shares their work openly." crumbs={[{ name: 'Image credits', path }]} />
      <section className="rbx-section is-tight">
        <div className="custom-container">
          <div className="rbx-prose rbx-narrow">
            <p>The photographs listed here come from <A href="https://commons.wikimedia.org">Wikimedia Commons</A>. They have been cropped and resized. Each remains under the licence shown, and images under a ShareAlike licence are offered here under that same licence. Screenshots of Apsuni, AnimeDoc and Adorė are our own.</p>
          </div>
          <div className="rbx-credits">
            {credited.map(([slug, im]) => (
              <figure key={slug} data-reveal>
                <img src={`/assets/media/${slug}-640.webp`} alt={im.alt} width="640" height={Math.round((640 * im.h) / im.w)} loading="lazy" decoding="async" />
                <figcaption>
                  <strong>{im.alt}</strong>
                  <span>
                    <A href={im.credit!.source}>{im.credit!.title}</A> by {im.credit!.author}.{' '}
                    {im.credit!.licenseUrl ? <A href={im.credit!.licenseUrl}>{im.credit!.license}</A> : im.credit!.license}.
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </Page>
  )
}

/* --------------------------------------------------------------- Site map */

export function SitemapPage() {
  const path = '/sitemap'
  const description = 'Every page on resbrotherx.com in one list: company, products, services, labs, portfolio, documentation, blog articles and legal pages.'
  const groups: { title: string; links: LinkItem[] }[] = [
    { title: 'Company', links: [{ label: 'Home', to: '/' }, ...NAV.company] },
    { title: 'Products', links: [{ label: 'All products', to: '/products' }, ...PRODUCTS.map((p) => ({ label: p.name, to: `/products/${p.slug}` }))] },
    { title: 'Services', links: [{ label: 'All services', to: '/services' }, ...SERVICES.map((s) => ({ label: s.name, to: `/services/${s.slug}` }))] },
    { title: 'Labs', links: [{ label: 'All labs', to: '/labs' }, ...LABS.map((l) => ({ label: l.name, to: `/labs/${l.slug}` })), { label: 'Technologies', to: '/technologies' }] },
    { title: 'Portfolio', links: [{ label: 'Portfolio', to: '/portfolio' }, ...PROJECTS.map((p) => ({ label: p.name, to: `/portfolio/${p.slug}` }))] },
    { title: 'Documentation', links: [{ label: 'Docs home', to: '/docs' }, ...DOCS.map((d) => ({ label: d.navTitle, to: `/docs/${d.slug}` }))] },
    { title: 'Blog', links: [{ label: 'All articles', to: '/blog' }, ...POSTS.map((p) => ({ label: p.title, to: `/blog/${p.slug}` }))] },
    { title: 'More', links: [{ label: 'FAQ', to: '/faq' }, { label: 'Updates & newsletter', to: '/newsletter' }, ...NAV.legal] },
  ]
  return (
    <Page className="sitemap-page" seo={{ title: 'Site Map | Resbrotherx', description, path, jsonLd: [webPage({ path, name: 'Site map', description }), breadcrumbs([{ name: 'Site map', path }])] }}>
      <PageHero kicker="Site map" title="Every page, in one place" text="A full list of what is on resbrotherx.com." crumbs={[{ name: 'Site map', path }]} />
      <section className="rbx-section is-tight">
        <div className="custom-container">
          <div className="rbx-sitemap">
            {groups.map((g) => (
              <div key={g.title} data-reveal>
                <h2 className="rbx-panel-title">{g.title}</h2>
                <ul>{g.links.map((l) => <li key={l.to}><A to={l.to}>{l.label}</A></li>)}</ul>
              </div>
            ))}
            <div data-reveal>
              <h2 className="rbx-panel-title">For machines</h2>
              <ul>
                <li><a href="/sitemap.xml">sitemap.xml</a></li>
                <li><a href="/feed.xml">RSS feed</a></li>
                <li><a href="/feed.json">JSON feed</a></li>
                <li><a href="/llms.txt">llms.txt</a></li>
                <li><a href="/llms-full.txt">llms-full.txt</a></li>
                <li><a href="/robots.txt">robots.txt</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </Page>
  )
}

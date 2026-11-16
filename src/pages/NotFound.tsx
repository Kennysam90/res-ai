import Page, { PageHero } from '../components/Layout'
import { A, Icon, CardGrid } from '../components/ui'
import { Wireframe } from '../components/Canvas3D'

export default function NotFound() {
  return (
    <Page
      className="notfound-page"
      seo={{ title: 'Page not found | Resbrotherx', description: 'This page does not exist on resbrotherx.com. Use the links to find products, services, labs, documentation and the blog.', path: '/404', noindex: true }}
    >
      <PageHero kicker="Error 404" title="This page is not here" text="The address may be mistyped, or the page may have moved. These will get you back on track.">
        <div className="rbx-404">
          <Wireframe shape="icosahedron" className="rbx-404-wire" />
          <div className="btns-group d-flex justify-content-center rbx-cta-row">
            <A to="/" className="theme-btn">Go to the home page <Icon name="iconoir-arrow-up-right" /></A>
            <A to="/sitemap" className="theme-btn2">See every page <Icon name="iconoir-arrow-up-right" /></A>
          </div>
        </div>
      </PageHero>
      <section className="rbx-section is-tight">
        <div className="custom-container">
          <CardGrid
            cols={4}
            items={[
              { to: '/products', icon: 'iconoir-cube', title: 'Products', text: 'Apsuni, Adorė and Brainbox.', cta: 'Browse' },
              { to: '/services', icon: 'iconoir-tools', title: 'Services', text: 'AI, robotics, 3D, mobile, web and SaaS.', cta: 'Browse' },
              { to: '/docs', icon: 'iconoir-book', title: 'Documentation', text: 'Guides and API docs.', cta: 'Open' },
              { to: '/contact', icon: 'iconoir-mail', title: 'Contact', text: 'Ask us anything.', cta: 'Write' },
            ]}
          />
        </div>
      </section>
    </Page>
  )
}

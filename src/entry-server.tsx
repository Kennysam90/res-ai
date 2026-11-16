// Server entry, used only at build time by scripts/prerender.ts to turn every
// route into a static HTML file.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { HeadContext, renderHead } from './seo/head'
import type { Head } from './types'

export function render(url: string): { html: string; head: string } {
  let head: Head | undefined
  const html = renderToString(
    <StrictMode>
      <HeadContext.Provider value={(h) => { head = h }}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HeadContext.Provider>
    </StrictMode>,
  )
  if (!head) throw new Error(`No <Seo> rendered for ${url}`)
  return { html, head: renderHead(head) }
}

// Content the build script needs for the sitemap, feeds and llms.txt.
export { allPages } from './routes'
export { SITE, FOUNDER, SOCIAL, PRODUCT_CHANNELS, abs } from './data/site'
export { PRODUCTS } from './data/products'
export { SERVICES } from './data/services'
export { LABS } from './data/labs'
export { PROJECTS, MORE_ON_GITHUB } from './data/projects'
export { POSTS } from './data/posts'
export { DOCS } from './data/docs'
export { FAQS, TEAMS } from './data/company'
export { ABOUT_FACTS, ABOUT_BODY, FOUNDER_BODY, FOUNDER_FAQS, BOILERPLATE_LONG } from './pages/Company'
export { toMarkdown, toHtml, plainText } from './lib/blocks'

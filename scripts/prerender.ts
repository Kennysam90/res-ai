// Runs after `vite build`. Renders every route to its own HTML file and writes
// the files crawlers look for: sitemap.xml, robots.txt, llms.txt, llms-full.txt,
// the RSS and JSON feeds, the web manifest and a 404 page.
import { mkdir, readFile, writeFile, rm, readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { PurgeCSS } from 'purgecss'
import type * as Server from '../src/entry-server.tsx'

const ROOT = join(import.meta.dirname, '..')
const DIST = join(ROOT, 'dist')
const server = (await import(pathToFileURL(join(ROOT, 'dist-server', 'entry-server.js')).href)) as typeof Server
const { SITE, FOUNDER, SOCIAL, PRODUCT_CHANNELS, PRODUCTS, SERVICES, LABS, PROJECTS, POSTS, DOCS, FAQS, TEAMS } = server
const { abs, toMarkdown, toHtml, plainText } = server

const BUILD_DATE = new Date().toISOString().slice(0, 10)
const xml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const write = async (rel: string, body: string) => {
  const file = join(DIST, rel)
  await mkdir(join(file, '..'), { recursive: true })
  await writeFile(file, body)
}

/* ------------------------------------------------------------------ pages */

const template = await readFile(join(DIST, 'index.html'), 'utf8')
if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) throw new Error('index.html is missing its placeholders')

const page = (url: string) => {
  const { html, head } = server.render(url)
  return template.replace('<!--app-head-->', head).replace('<!--app-html-->', html)
}

const pages = server.allPages()
for (const p of pages) {
  await write(p.path === '/' ? 'index.html' : `${p.path.slice(1)}/index.html`, page(p.path))
}
await write('404.html', page('/this-page-does-not-exist'))
console.log(`pages: ${pages.length} + 404`)

/* ---------------------------------------------- remove CSS no page uses */

const assets = join(DIST, 'assets')
const htmlFiles: string[] = []
const walk = async (dir: string) => {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) await walk(p)
    else if (e.name.endsWith('.html')) htmlFiles.push(p)
  }
}
await walk(DIST)
for (const name of (await readdir(assets)).filter((f) => f.endsWith('.css'))) {
  const file = join(assets, name)
  const before = (await readFile(file, 'utf8')).length
  const [result] = await new PurgeCSS().purge({
    content: htmlFiles,
    css: [file],
    // Classes that scripts add after the page loads, so no HTML file contains them.
    safelist: { standard: [/^is-/, /^js$/, /^iconoir-/, 'active', 'show', 'fade', 'rbx-suppress', 'rbx-pre'], greedy: [/data-status/, /aria-/] },
    defaultExtractor: (content) => content.match(/[A-Za-z0-9_-]+/g) ?? [],
    fontFace: false,
    keyframes: false,
    variables: false,
  })
  await writeFile(file, result.css)
  console.log(`css: ${name} ${(before / 1024).toFixed(0)} KB -> ${(result.css.length / 1024).toFixed(0)} KB`)
}

/* ------------------------------------------------------------ sitemap.xml */

await write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map((p) => `  <url><loc>${xml(abs(p.path))}</loc><lastmod>${p.lastmod ?? BUILD_DATE}</lastmod><priority>${p.priority.toFixed(1)}</priority></url>`)
    .join('\n')}\n</urlset>\n`,
)

/* ------------------------------------------------------------- robots.txt */

await write(
  'robots.txt',
  `# ${SITE.name}: everyone is welcome to crawl this site, including AI assistants.
User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml

# A plain-language guide to this site for AI assistants: ${SITE.url}/llms.txt
`,
)

/* --------------------------------------------------------------- llms.txt */

const productLine = (p: (typeof PRODUCTS)[number]) => `- [${p.name}](${abs(`/products/${p.slug}`)}): ${p.summary}${p.url ? ` Website: ${p.url}` : ''}`

const llms = `# ${SITE.name}

> ${SITE.oneLiner}

${SITE.name} (also written ${SITE.altNames[0]}; registered business name ${SITE.legalName}) is based in ${SITE.location.city}, ${SITE.location.region}, ${SITE.location.country}. Its founder and chief executive is ${FOUNDER.name} (also known as ${FOUNDER.altNames.slice(0, 2).join(' and ')}), who has published software under the ${SITE.name} name since ${SITE.foundedYear}. ${SITE.legalName} was registered with the ${SITE.registration.body} in ${SITE.registration.dateText}. The company works in four fields: artificial intelligence, robotics, 3D animation and software.

## Company

- [About ${SITE.name}](${abs('/about')}): what the company is, how it started and where it is going
- [${FOUNDER.name}, Founder & CEO](${abs('/founder')}): biography, products and current work
- [Teams](${abs('/team')}): ${TEAMS.map((t) => t.name).join(', ')}
- [Press & media kit](${abs('/press')}): verified facts, names and spelling, logos
- [FAQ](${abs('/faq')}): short answers about the company, its founder and its products
- [Contact](${abs('/contact')}): ${SITE.email}

## Products

${PRODUCTS.map(productLine).join('\n')}

## Services

${SERVICES.map((s) => `- [${s.name}](${abs(`/services/${s.slug}`)}): ${s.summary}`).join('\n')}

## Labs

${LABS.map((l) => `- [${l.name}](${abs(`/labs/${l.slug}`)}): ${l.summary}`).join('\n')}

## Documentation

${DOCS.map((d) => `- [${d.title}](${abs(`/docs/${d.slug}`)}): ${d.description}`).join('\n')}

## Portfolio

${PROJECTS.map((p) => `- [${p.name}](${abs(`/portfolio/${p.slug}`)}): ${p.summary}`).join('\n')}
- [Full portfolio](${abs('/portfolio')}): products and public code on GitHub

## Blog

${POSTS.map((p) => `- [${p.title}](${abs(`/blog/${p.slug}`)}): ${p.description}`).join('\n')}

## Official profiles

${[...SOCIAL.filter((s) => s.confirmed !== false).map((s) => `- ${SITE.name} on ${s.name}: ${s.url}`), ...PRODUCT_CHANNELS.map((s) => `- ${s.name}: ${s.url}`)].join('\n')}

## Optional

- [Full text of the main pages](${abs('/llms-full.txt')})
- [RSS feed](${abs('/feed.xml')})
- [Sitemap](${abs('/sitemap.xml')})
`
await write('llms.txt', llms)

const section = (title: string, url: string, body: string) => `# ${title}\n\nSource: ${url}\n\n${body}`
const full = [
  `# ${SITE.name}: full text for AI assistants\n\n> ${SITE.oneLiner}\n\nThis file contains the main pages of ${SITE.url} as Markdown. Last built ${BUILD_DATE}.`,
  section(`About ${SITE.name}`, abs('/about'), `${toMarkdown([{ facts: server.ABOUT_FACTS }], SITE.url)}\n\n${toMarkdown(server.ABOUT_BODY, SITE.url)}`),
  section(`${FOUNDER.name}, Founder & CEO of ${SITE.name}`, abs('/founder'), `${toMarkdown(server.FOUNDER_BODY, SITE.url)}\n\n${server.FOUNDER_FAQS.map((f) => `**${f.q}**\n${plainText(f.a)}`).join('\n\n')}`),
  section(`${SITE.name} teams`, abs('/team'), TEAMS.map((t) => `- **${t.name}**: ${t.summary} (${t.does.join('; ')})`).join('\n')),
  ...PRODUCTS.map((p) => section(`${p.name} (${p.status})`, abs(`/products/${p.slug}`), `${p.summary}\n\n${toMarkdown([{ facts: p.facts }], SITE.url)}\n\n${toMarkdown(p.body, SITE.url)}`)),
  ...SERVICES.map((s) => section(s.name, abs(`/services/${s.slug}`), `${s.summary}\n\n${toMarkdown(s.body, SITE.url)}`)),
  ...LABS.map((l) => section(`${l.name} lab: ${l.title}`, abs(`/labs/${l.slug}`), `${l.summary}\n\n${toMarkdown(l.body, SITE.url)}`)),
  ...DOCS.map((d) => section(d.title, abs(`/docs/${d.slug}`), toMarkdown(d.body, SITE.url))),
  ...PROJECTS.map((p) => section(p.name, abs(`/portfolio/${p.slug}`), `${p.summary}\n\nSource code: ${p.repo}\n\n${toMarkdown(p.body, SITE.url)}`)),
  section('Frequently asked questions', abs('/faq'), FAQS.map((f) => `**${f.q}**\n${plainText(f.a)}`).join('\n\n')),
  ...POSTS.map((p) => section(p.title, abs(`/blog/${p.slug}`), `Published ${p.date}. ${p.description}\n\n${toMarkdown(p.body, SITE.url)}`)),
].join('\n\n---\n\n')
await write('llms-full.txt', full + '\n')

/* ------------------------------------------------------------------ feeds */

const rfc822 = (iso: string) => new Date(iso + 'T08:00:00Z').toUTCString()
await write(
  'feed.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
  <title>${SITE.name} Blog</title>
  <link>${abs('/blog')}</link>
  <atom:link href="${abs('/feed.xml')}" rel="self" type="application/rss+xml"/>
  <description>${xml(`Company news from ${SITE.name}, and guides on AI, robotics, 3D and building software.`)}</description>
  <language>en</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${POSTS.map(
  (p) => `  <item>
    <title>${xml(p.title)}</title>
    <link>${abs(`/blog/${p.slug}`)}</link>
    <guid isPermaLink="true">${abs(`/blog/${p.slug}`)}</guid>
    <pubDate>${rfc822(p.date)}</pubDate>
    <category>${xml(p.category)}</category>
    <description>${xml(p.description)}</description>
    <content:encoded><![CDATA[${toHtml(p.body, SITE.url)}]]></content:encoded>
  </item>`,
).join('\n')}
</channel>
</rss>
`,
)

await write(
  'feed.json',
  JSON.stringify(
    {
      version: 'https://jsonfeed.org/version/1.1',
      title: `${SITE.name} Blog`,
      home_page_url: abs('/blog'),
      feed_url: abs('/feed.json'),
      description: `Company news from ${SITE.name}, and guides on AI, robotics, 3D and building software.`,
      language: 'en',
      authors: [{ name: SITE.name, url: SITE.url + '/' }],
      items: POSTS.map((p) => ({
        id: abs(`/blog/${p.slug}`),
        url: abs(`/blog/${p.slug}`),
        title: p.title,
        summary: p.description,
        content_html: toHtml(p.body, SITE.url),
        date_published: `${p.date}T08:00:00Z`,
        tags: p.tags,
      })),
    },
    null,
    1,
  ),
)

/* ----------------------------------------------------- manifest and extras */

await write(
  'site.webmanifest',
  JSON.stringify({
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1351D8',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/logo-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }),
)

await write('humans.txt', `/* TEAM */\nFounder & CEO: ${FOUNDER.name}\nCompany: ${SITE.legalName}\nLocation: ${SITE.location.city}, ${SITE.location.country}\nSite: ${SITE.url}\n\n/* SITE */\nBuilt with: TypeScript, React, Vite. Pre-rendered to static HTML.\nIcons: Iconoir. Fonts: DM Sans, Yantramanav, Syne.\n`)

await rm(join(ROOT, 'dist-server'), { recursive: true, force: true })
console.log('extras: sitemap.xml, robots.txt, llms.txt, llms-full.txt, feed.xml, feed.json, site.webmanifest')

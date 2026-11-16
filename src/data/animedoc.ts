// AnimeDoc content, kept out of the site while SHOW_ANIMEDOC (site.ts) is false.
// It is only bundled when that switch is true.
import type { Doc, Post, Product } from '../types'
import { PRICES_AS_OF } from './products'

const CHECKED = '2026-11-15'
const TODAY = '2026-11-16'

export const ANIMEDOC_PRODUCT: Product =
  {
    slug: 'animedoc',
    name: 'AnimeDoc',
    kicker: 'Streaming catalogue API',
    tagline: 'A developer API for search, title details and playback, plus a site to watch on.',
    menuLine: 'A streaming catalogue API for developers, and a site to watch on.',
    summary:
      'AnimeDoc is an anime and movie streaming API with search, details and playback endpoints, plus a site to watch anime online. Developers use the REST API to build streaming sites, apps and bots.',
    seoTitle: 'AnimeDoc — Streaming Catalogue API for Developers | Resbrotherx',
    metaDescription: 'AnimeDoc by Resbrotherx is a streaming catalogue REST API with search, details and playback endpoints, plus a website built on the same catalogue.',
    category: 'DeveloperApplication',
    platforms: 'Web, REST API',
    status: 'Live',
    url: 'https://animedoc.cloud',
    cardImage: 'product-animedoc-docs',
    images: ['product-animedoc-docs', 'product-animedoc-pricing'],
    docs: '/docs/animedoc-api',
    links: [
      { label: 'Visit animedoc.cloud', url: 'https://animedoc.cloud' },
      { label: 'API documentation', url: 'https://animedoc.cloud/docs' },
      { label: 'Tutorials', url: 'https://animedoc.cloud/tutorials' },
      { label: 'Pricing & API keys', url: 'https://animedoc.cloud/pricing' },
    ],
    sameAs: ['https://animedoc.cloud', 'https://www.youtube.com/@animedoc'],
    facts: [
      ['What it is', 'A REST API for a streaming catalogue, and a website built on the same catalogue'],
      ['Website', '[animedoc.cloud](https://animedoc.cloud)'],
      ['API base URL', '`https://api.animedoc.cloud`'],
      ['Authentication', 'An API key sent in the `X-API-Key` header'],
      ['Built and run by', 'Resbrotherx'],
      ['Founder', '[Patrick Francis Ugochukwu](/founder)'],
      ['Support', '[support@animedoc.cloud](mailto:support@animedoc.cloud)'],
    ],
    highlights: [
      { icon: 'iconoir-search', title: 'Search and suggestions', text: 'Full-text catalogue search with pagination, plus autocomplete from a partial keyword.' },
      { icon: 'iconoir-page', title: 'Title details', text: 'Full metadata for a title, with its seasons and episode counts, in one call.' },
      { icon: 'iconoir-play', title: 'Playback sources', text: 'Playable sources in several resolutions and subtitle tracks for an episode or a movie.' },
      { icon: 'iconoir-key', title: 'One key, clear limits', text: 'One API key per account. Upgrading changes the limits, not the key. Limits are returned with every response.' },
      { icon: 'iconoir-terminal', title: 'Built for developers', text: 'An OpenAPI 3.1 description, an interactive console and tutorials for React, React Native, Discord and Telegram.' },
      { icon: 'iconoir-stats-up-square', title: 'Usage dashboard', text: 'Pro and Business plans include request charts, top endpoints and a CSV download.' },
    ],
    body: [
      { h2: 'Two products on one catalogue' },
      { p: '**AnimeDoc** is two things built on the same catalogue. The first is a website where people browse and watch. The second is the **AnimeDoc API**, a REST API for developers who want the same search, title details, episodes and playback inside their own app, website or bot.' },
      { p: 'AnimeDoc is built and run by Resbrotherx. Its card payment page shows the Resbrotherx name, because Resbrotherx is the company that owns and operates it.' },
      { h2: 'What the API covers' },
      { table: {
        head: ['Endpoint', 'Method', 'What it returns'],
        rows: [
          ['Home feed', 'GET', 'Banners and ready-made catalogue rows in one call'],
          ['Section', 'GET', 'A ready-made page for one section, or that section\'s filtered list'],
          ['Trending', 'GET', 'What people are watching now'],
          ['Browse', 'GET', 'A channel sorted by latest, most popular or top rated, with optional genre and country filters'],
          ['Search suggestions', 'POST', 'Autocomplete from a partial keyword'],
          ['Search', 'POST', 'Full-text catalogue search with pagination'],
          ['Details', 'GET', 'Full metadata for one title, plus seasons and episode counts'],
          ['Media sources', 'GET', 'Playable sources in several resolutions and subtitle tracks'],
          ['Stream proxy', 'GET', 'Streams a media source with byte-range support, so players can seek'],
        ],
      } },
      { p: 'The full reference, with parameters and response fields for every endpoint, lives at [animedoc.cloud/docs](https://animedoc.cloud/docs). Our own [AnimeDoc API guide](/docs/animedoc-api) gives a short overview.' },
      { h2: 'Plans and limits' },
      { p: `Every plan is a one-time payment for a period: nothing renews automatically. These figures were published on animedoc.cloud in ${PRICES_AS_OF}; the [pricing page](https://animedoc.cloud/pricing) is the source of truth.` },
      { table: {
        head: ['Plan', 'Requests per day', 'Requests per minute', 'Price'],
        rows: [
          ['Free', '20', '10', '$0'],
          ['3-Day Pass', '2,000', '60', '$1 for 3 days'],
          ['Starter', '3,000', '60', '$12.99 per month'],
          ['Pro', '20,000', '300', '$23.99 per month'],
          ['Business', '500,000+', '3,000', 'From $109 per month'],
        ],
      } },
      { h2: 'Using the website' },
      { ul: [
        'Sections with genre filters and trailers, and a search box that covers the whole catalogue.',
        'A player with a choice of video quality, subtitles in several languages where available, autoplay and auto-next.',
        'Continue watching: progress is saved in the browser, so you can pick up where you stopped.',
        'Save for offline: store a video on the device and play it without a connection.',
        'Light and dark themes, and a choice of site language.',
        'It runs in any modern browser on phones, tablets and computers. Native mobile and desktop apps are planned.',
      ] },
      { h2: 'Want a site built for you?' },
      { p: 'AnimeDoc\'s "Build my website" service is delivered by [Apsuni](/products/apsuni), its sister product at Resbrotherx: you choose the brand, design and domain, and Apsuni delivers the site.' },
      { cta: [{ label: 'Read the API guide', to: '/docs/animedoc-api' }, { label: 'Visit AnimeDoc', to: 'https://animedoc.cloud' }] },
    ],
    faqs: [
      { q: 'What is AnimeDoc?', a: 'AnimeDoc is an anime and movie streaming API with search, details and playback endpoints, plus a site to watch anime online. It is built and run by Resbrotherx.' },
      { q: 'Who made AnimeDoc?', a: 'AnimeDoc is built by Resbrotherx, the technology company founded and led by Patrick Francis Ugochukwu.' },
      { q: 'How do I get an AnimeDoc API key?', a: 'Sign in at animedoc.cloud, open Pricing or the Dashboard and press "Generate API key". The key works on the Free plan straight away. Send it in the X-API-Key header with every request.' },
      { q: 'Why does the payment page say Resbrotherx?', a: 'Resbrotherx is the company that owns and runs AnimeDoc, so its name appears on the secure payment page and may appear on a bank statement.' },
    ],
  }

export const ANIMEDOC_DOC: Doc =
  {
    slug: 'animedoc-api',
    title: 'AnimeDoc API guide',
    navTitle: 'AnimeDoc API',
    description: 'An overview of the AnimeDoc REST API: base URL, authentication with X-API-Key, the endpoints, rate limits, errors and where to find the full reference.',
    icon: 'iconoir-terminal',
    updated: CHECKED,
    product: 'animedoc',
    body: [
      { note: 'This is an overview. The complete reference, with every parameter and response field, an interactive console and an OpenAPI description, is at [animedoc.cloud/docs](https://animedoc.cloud/docs).' },
      { h2: 'Overview' },
      { p: 'The AnimeDoc API is a REST API that returns JSON. It gives your app, website or bot the same catalogue that powers [animedoc.cloud](https://animedoc.cloud): search, title details, episodes and playback sources.' },
      { facts: [
        ['Base URL', '`https://api.animedoc.cloud`'],
        ['Format', 'JSON over HTTPS'],
        ['Authentication', 'API key in the `X-API-Key` header'],
        ['Machine-readable description', 'OpenAPI 3.1, published with the docs'],
        ['Support', '[support@animedoc.cloud](mailto:support@animedoc.cloud)'],
      ] },
      { h2: 'Quick start' },
      { ol: [
        'Create a free account at [animedoc.cloud](https://animedoc.cloud) and press **Generate API key** on the Pricing page or in the Dashboard. The key works on the Free plan immediately.',
        'Send the key in the `X-API-Key` header with every request to `https://api.animedoc.cloud`.',
        'Search for a title, read its seasons with **Details**, then fetch an episode\'s sources with **Media sources**.',
      ] },
      { code: 'curl -X POST "https://api.animedoc.cloud/api/v2/anime/search/" \\\n  -H "X-API-Key: $ANIMEDOC_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"keyword": "one piece", "page": 1, "perPage": 10}\'', title: 'Search the catalogue' },
      { h2: 'Authentication' },
      { ul: [
        'Each account has **one API key**. Upgrading a plan changes the key\'s limits, not the key.',
        'Keep the key on your own server. Anyone who has it can use your quota, so never put it in public app code.',
        'If a key leaks, press **Regenerate** in the Dashboard. Your plan stays the same.',
        'The website login is separate: watching on animedoc.cloud needs no key, but your own app, server or script always does.',
      ] },
      { h2: 'Endpoints' },
      { table: {
        head: ['Endpoint', 'Method', 'Purpose'],
        rows: [
          ['Home feed', 'GET', 'Banners and ready-made catalogue rows in one call'],
          ['Section', 'GET', 'A ready-made page for one section, or that section\'s filtered list'],
          ['Trending', 'GET', 'What people are watching now'],
          ['Browse', 'GET', 'A channel sorted by latest, most popular or top rated, optionally filtered by genre and country'],
          ['Search suggestions', 'POST', 'Autocomplete from a partial keyword'],
          ['Search', 'POST', 'Full-text search with pagination (`keyword`, `page`, `perPage`)'],
          ['Details', 'GET', 'Full metadata for one title, plus seasons and episode counts'],
          ['Media sources', 'GET', 'Playable sources in several resolutions, and subtitle tracks'],
          ['Stream proxy', 'GET', 'Streams a media source with byte-range support so players can seek'],
        ],
      } },
      { p: 'Paths, parameters and example responses for each endpoint are in the [official reference](https://animedoc.cloud/docs).' },
      { h2: 'Rate limits' },
      { p: `Limits depend on the plan. These figures were published in ${PRICES_AS_OF}; the [pricing page](https://animedoc.cloud/pricing) is the source of truth.` },
      { table: {
        head: ['Plan', 'Per day', 'Per minute', 'Stream proxy'],
        rows: [
          ['Free', '20', '10', 'No'],
          ['3-Day Pass', '2,000', '60', 'Yes'],
          ['Starter', '3,000', '60', 'Yes'],
          ['Pro', '20,000', '300', 'Yes'],
          ['Business', '500,000+', '3,000', 'Yes'],
        ],
      } },
      { ul: [
        'Every response carries `X-RateLimit-Limit` and `X-RateLimit-Remaining` headers.',
        'Going over a limit returns HTTP **429** with a `Retry-After` header.',
        'Per-minute limits clear within a minute. Daily quotas reset at 00:00 UTC.',
        'Every call counts as one request, whatever the endpoint. A video player fetches in chunks, so one playback through the stream proxy can use several requests.',
        'Rejected requests (401, 403 and 429) do not count.',
      ] },
      { h2: 'Errors' },
      { table: {
        head: ['Status', 'Meaning', 'What to do'],
        rows: [
          ['401', 'The key is missing or not recognised', 'Check the `X-API-Key` header'],
          ['403', 'The request is not permitted for this key', 'Check what your plan includes'],
          ['429', 'A rate limit was reached', 'Wait for the time in `Retry-After`, then retry'],
        ],
      } },
      { h2: 'Plans and commercial use' },
      { ul: [
        '**Free** is for personal use and prototypes, and must show "Powered by AnimeDoc".',
        '**Starter** and the **3-Day Pass** are for personal and hobby projects.',
        '**Pro** and **Business** may be used in commercial products.',
        '**Business** includes a 99.9% monthly uptime commitment and custom limits on request.',
        'Plans are one-time payments for a period and do not renew automatically. When a plan ends, the key keeps working on Free limits.',
      ] },
      { h2: 'Tutorials and tools' },
      { ul: [
        'Tutorials for a React streaming app, a React Native (Expo) app, a Discord bot and a Telegram bot: [animedoc.cloud/tutorials](https://animedoc.cloud/tutorials).',
        'An interactive console to try requests with your own key.',
        'An OpenAPI 3.1 description for code generators, and an `llms.txt` for AI coding assistants.',
        'A usage dashboard on Pro and Business: requests over time, top endpoints and a CSV download.',
      ] },
      { cta: [{ label: 'Open the full reference', to: 'https://animedoc.cloud/docs' }, { label: 'About AnimeDoc', to: '/products/animedoc' }] },
    ],
  }

export const ANIMEDOC_POST: Post =
  {
    slug: 'one-company-three-products',
    title: 'One company, three products: how Apsuni and Adorė fit together',
    description: 'Apsuni builds websites and apps, AnimeDoc serves developers and Adorė sells fashion. Here is what they share, and why one company runs all three.',
    date: TODAY,
    category: 'Products',
    tags: ['Apsuni', 'AnimeDoc', 'Adorė', 'Resbrotherx'],
    image: 'product-apsuni',
    body: [
      { p: 'At first glance the three Resbrotherx products have nothing in common. One builds websites, one is a developer API and one sells clothes. Look underneath and they are closer than they seem.' },
      { h2: 'What each one does' },
      { table: {
        head: ['Product', 'For', 'What it does'],
        rows: [
          ['[Apsuni](/products/apsuni)', 'Founders, businesses and teams', 'Turns a template or a Figma design into a live website or mobile app, built, hosted and deployed for you'],
          ['[AnimeDoc](/products/animedoc)', 'Developers and viewers', 'A REST API for search, title details and playback, plus a website on the same catalogue'],
          ['[Adorė](/products/adore)', 'Shoppers and fashion businesses', 'Made-to-measure African fashion with AI try-on and 3D views'],
        ],
      } },
      { h2: 'What they share' },
      { h3: 'One engineering approach' },
      { p: 'All three are built the same way: a React interface, a Django REST backend, PostgreSQL for data, and Nginx behind Cloudflare. Mobile apps are written with React Native. Because the approach is shared, an improvement made for one product can be carried to the others.' },
      { h3: 'AI doing a specific job' },
      { p: 'None of the products treats AI as decoration. In Adorė it shows an outfit on the shopper\'s own photo. In Apsuni it turns a goal or a voice note into a structured brief. In AnimeDoc it answers support questions from a written knowledge base. Each has a defined task and a clear point where a person takes over.' },
      { h3: 'Payments and plans' },
      { p: 'Each product sells plans, takes payments and enforces limits. The patterns are common across them: one-time payments for a period, webhooks that confirm each transaction and a dashboard that shows what a plan includes.' },
      { h3: 'They send each other work' },
      { p: 'The products also connect directly. When an AnimeDoc customer wants a streaming site built for them, the "Build my website" service is delivered by Apsuni. Each product\'s founder page links to the others, and all of them point back to Resbrotherx.' },
      { h2: 'Why one company' },
      { p: 'Running three products inside one company keeps the shared parts shared. There is one way of deploying, one way of taking payments and one set of principles for AI. It also means that when Resbrotherx opens a new area, such as [robotics](/labs/robotics) or [3D](/labs/3d-animation), every product can draw on it.' },
      { cta: [{ label: 'See all products', to: '/products' }] },
    ],
  }

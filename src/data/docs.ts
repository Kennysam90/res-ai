// Documentation. These pages are overviews written from each product's public
// documentation. Where a product publishes its own full reference, we link to
// it instead of copying it, so there is one source of truth.
import type { Doc } from '../types'
import { PRICES_AS_OF } from './products'
import { SHOW_ANIMEDOC } from './site'
import { ANIMEDOC_DOC } from './animedoc'

const CHECKED = '2026-11-15'

const ALL_DOCS: Doc[] = [
  {
    slug: 'apsuni',
    title: 'Apsuni guide: from idea to a live website or app',
    navTitle: 'Apsuni',
    description: 'How to use Apsuni: start from a template, a Figma design or a voice note, what each plan includes and how a project reaches release.',
    icon: 'iconoir-page',
    updated: CHECKED,
    product: 'apsuni',
    body: [
      { h2: 'Overview' },
      { p: '[Apsuni](https://apsuni.com) turns a website template or your own Figma design into a live, branded website or mobile app. It is built, hosted and deployed for you. This guide explains the ways to start and what happens after.' },
      { h2: 'Three ways to start' },
      { table: {
        head: ['Start from', 'Good for', 'Where'],
        rows: [
          ['A website template', 'A business site you want live quickly', '[apsuni.com/web-store](https://apsuni.com/web-store)'],
          ['A mobile app template', 'An iOS and Android app', '[apsuni.com/app-store](https://apsuni.com/app-store)'],
          ['Your own Figma design', 'A product you have already designed', '[apsuni.com/figma-to-code](https://apsuni.com/figma-to-code)'],
        ],
      } },
      { p: 'You can also begin with less: a goal, a problem, a reference or a voice note. Apsuni\'s AI organises it into a brief.' },
      { h2: 'How a project moves' },
      { ol: [
        '**Brief.** You describe what you want. AI turns it into product direction, the screens needed, technical choices and the next decisions.',
        '**Design and build.** Design, code and delivery stay tied to the original goal.',
        '**Review.** Human reviewers approve the release against product, quality, security and stakeholder expectations.',
        '**Release.** The site or app is hosted and deployed for you.',
        '**Record.** Apsuni keeps a record of what shipped and what to improve next.',
      ] },
      { h2: 'What each plan includes' },
      { p: `Plans are one-time payments in Nigerian naira. Figures as published in ${PRICES_AS_OF}; see [apsuni.com](https://apsuni.com) for current plans.` },
      { table: {
        head: ['Plan', 'Price', 'What you get'],
        rows: [
          ['Starter', '₦30,000', 'AI business guidance (Insights), template search and chat, a personal wallet with sign-up credit'],
          ['Premium', '₦50,000', 'Everything in Starter, plus Figma to Code and Code to Figma, Image to Code, a brands and logos generator, and a choice of AI engine'],
          ['Golden', '₦80,000', 'Everything in Premium, plus shared project spaces, approval roles, release paths and team delivery visibility'],
        ],
      } },
      { h2: 'Figma to code' },
      { ul: [
        'Bring a Figma design and have it converted into real, working code.',
        'Premium also includes Code to Figma and Image to Code.',
        'The result goes through the same human review as any other release.',
      ] },
      { h2: 'Getting help' },
      { ul: [
        'Email [support@apsuni.com](mailto:support@apsuni.com).',
        'Frequently asked questions: [apsuni.com/faq](https://apsuni.com/faq).',
        'Videos on the [Apsuni YouTube channel](https://www.youtube.com/@APSUNI).',
      ] },
      { cta: [{ label: 'Start on apsuni.com', to: 'https://apsuni.com' }, { label: 'About Apsuni', to: '/products/apsuni' }] },
    ],
  },
  {
    slug: 'adore',
    title: 'Adorė guide: ordering made-to-measure fashion and using AI try-on',
    navTitle: 'Adorė',
    description: 'How Adorė works for shoppers: choosing a design, AI try-on, measurements and fittings, sewing times, delivery and the Adorė AI assistant.',
    icon: 'iconoir-sparks',
    updated: CHECKED,
    product: 'adore',
    body: [
      { h2: 'Overview' },
      { p: '[Adorė](https://xn--ador-yva.com) (also written Adore) is a shopping platform for African fashion that is sewn to your measurements. This guide walks through an order from the first look to delivery.' },
      { h2: 'Choosing a design' },
      { ul: [
        'Browse by who it is for: **Women**, **Men**, **Kids** or **Couples & Family**.',
        'Browse by kind: native wear, suits, bridal, crochet, footwear, bags, jewellery and hair.',
        'Designs with a multi-angle preview can be rotated to see every side. Photo products show a gallery.',
        'Couples & Family shows coordinated sets cut from one fabric, with each wearer measured separately.',
      ] },
      { h2: 'Using AI try-on' },
      { ol: [
        'Choose a fashion design from the catalogue.',
        'Sign in, upload a clear photo and review your consent choices.',
        'Generate an outfit preview, then discuss measurements with your tailor.',
      ] },
      { note: 'A try-on preview is a style guide, not a guarantee of fit. The studio labels demo results when a live AI provider is unavailable.' },
      { h3: 'Tips for a good preview' },
      { ul: [
        'Use a well-lit photo, standing, facing the camera.',
        'Keep your arms slightly away from your body.',
        'Avoid bags, coats or anything covering the outfit area.',
      ] },
      { h2: 'Measurements and fittings' },
      { ul: [
        'Share your measurements in the app or on the website.',
        'Or book a fitting at home, in the studio or by video call.',
        'Home fittings are available in Lagos and Abuja.',
      ] },
      { h2: 'Sewing and delivery' },
      { table: {
        head: ['Step', 'What happens'],
        rows: [
          ['Order placed', 'You choose the design and fabric colour, and share measurements or book a fitting'],
          ['Sewing', 'A master tailor sews the outfit. Most outfits are ready in 9 to 14 days'],
          ['Rush sewing', 'Available on many designs for an extra fee'],
          ['Tracking', 'You can follow every step until delivery'],
          ['Delivery', 'Across Nigeria'],
        ],
      } },
      { h2: 'The Adorė AI assistant' },
      { p: 'Adorė AI is an assistant built into the app and the website. It searches the whole catalogue and can act for you, so you can describe what you are looking for instead of filtering by hand.' },
      { h2: 'One account everywhere' },
      { p: 'The website and the mobile app share one account. A bag you fill on your phone is there when you open the website.' },
      { cta: [{ label: 'Shop on adorė.com', to: 'https://xn--ador-yva.com' }, { label: 'About Adorė', to: '/products/adore' }] },
    ],
  },
  {
    slug: 'brainbox',
    title: 'Brainbox design overview',
    navTitle: 'Brainbox',
    description: 'How Brainbox is designed: the SDKs, the background log collector, the backend pipeline and the safety rules for database access. Brainbox is in development.',
    icon: 'iconoir-brain',
    updated: CHECKED,
    product: 'brainbox',
    body: [
      { note: 'Brainbox is in development. Its packages have not been published, so this page describes the design and there is nothing to install yet. The source is on [GitHub](https://github.com/resbrotherx/Spres-Ai-Agent).' },
      { h2: 'Overview' },
      { p: 'Brainbox is an AI operations platform. It collects logs from a customer\'s systems, has AI agents analyse them, helps locate the code involved and lets those agents query the database through a read-only, audited gateway.' },
      { h2: 'Architecture' },
      { code: 'Customer infrastructure\n├── CLI service        collects logs on a schedule\n├── Application SDKs   Python, Node.js, React\n└── Customer database  reached through the database SDK\n\n        │  HTTPS\n        ▼\n\nBrainbox backend\n├── API gateway         authentication and validation\n├── Ingestion pipeline  processes what was collected\n├── AI agents           analyse and explain\n├── Database            stores results and the audit log\n└── Dashboard           shows findings', title: 'How the parts connect' },
      { h2: 'The five SDKs' },
      { table: {
        head: ['SDK', 'Runs in', 'Purpose'],
        rows: [
          ['Python SDK', 'Python applications', 'Send events and call Brainbox from Python'],
          ['Node.js SDK', 'Node.js back ends', 'The same for Node.js services'],
          ['React SDK', 'React front ends', 'Bring Brainbox into a web interface'],
          ['CLI service', 'The server', 'Collects logs automatically in the background'],
          ['Database SDK', 'Next to the database', 'Runs safe, read-only queries'],
        ],
      } },
      { h2: 'What the collector gathers' },
      { ul: [
        'Docker container logs',
        'System logs',
        'Database logs',
        'Nginx logs',
        'SSL certificate information',
      ] },
      { p: 'The collector is designed to run as a background service and send what it gathers every few minutes over HTTPS.' },
      { h2: 'Backend endpoints for database access' },
      { table: {
        head: ['Endpoint', 'Purpose'],
        rows: [
          ['`/api/db/test-connection`', 'Check that the database can be reached'],
          ['`/api/db/schema`', 'List tables and columns'],
          ['`/api/db/query`', 'Run a read-only query'],
          ['`/api/db/audit-log`', 'Read the history of queries'],
        ],
      } },
      { h2: 'Safety rules' },
      { ul: [
        '**Read-only enforcement**: DELETE, DROP and ALTER are blocked.',
        '**Parameterised queries** to prevent SQL injection.',
        '**Row limits** to prevent large exports.',
        '**Query auditing**: every query is logged.',
        '**Tenant isolation**: data is separated by tenant.',
        '**Rate limiting** and API key validation on every request.',
        '**HTTPS** for all data in transit.',
      ] },
      { p: 'The reasoning behind these rules is explained in [Designing safe database access for AI agents](/blog/safe-database-access-for-ai-agents).' },
      { h2: 'Planned installation methods' },
      { p: 'Brainbox is designed to install the way operations teams already install tools: through pip, npm, apt, rpm, snap or Docker. None of these packages has been published yet.' },
      { cta: [{ label: 'About Brainbox', to: '/products/brainbox' }, { label: 'Source on GitHub', to: 'https://github.com/resbrotherx/Spres-Ai-Agent' }] },
    ],
  },
  {
    slug: 'for-machines',
    title: 'Feeds, sitemap and files for AI assistants',
    navTitle: 'Feeds & machine-readable files',
    description: 'The machine-readable files resbrotherx.com publishes: sitemap, RSS and JSON feeds, llms.txt, and the structured data identifiers for the company and its founder.',
    icon: 'iconoir-rss-feed',
    updated: CHECKED,
    body: [
      { h2: 'Overview' },
      { p: 'Everything on this site is available in a form that software can read. If you are building a search index, a newsletter, a feed reader or an AI assistant, these are the files to use.' },
      { h2: 'Files' },
      { table: {
        head: ['File', 'Format', 'Contents'],
        rows: [
          ['[/sitemap.xml](https://www.resbrotherx.com/sitemap.xml)', 'XML sitemap', 'Every page and the date it last changed'],
          ['[/feed.xml](https://www.resbrotherx.com/feed.xml)', 'RSS 2.0', 'Blog articles, with full text'],
          ['[/feed.json](https://www.resbrotherx.com/feed.json)', 'JSON Feed 1.1', 'The same articles as JSON'],
          ['[/llms.txt](https://www.resbrotherx.com/llms.txt)', 'Markdown', 'A short guide to the company, its founder, its products and the main pages'],
          ['[/llms-full.txt](https://www.resbrotherx.com/llms-full.txt)', 'Markdown', 'The full text of the main pages in one file'],
          ['[/robots.txt](https://www.resbrotherx.com/robots.txt)', 'Text', 'Crawling rules and the sitemap location'],
        ],
      } },
      { h2: 'Structured data identifiers' },
      { p: 'Pages carry JSON-LD using schema.org. Two identifiers are used on every Resbrotherx site, so that all mentions resolve to one company and one person:' },
      { facts: [
        ['Organisation', '`https://www.resbrotherx.com/#organization`'],
        ['Founder', '`https://www.resbrotherx.com/#patrick-francis-ugochukwu`'],
        ['Website', '`https://www.resbrotherx.com/#website`'],
      ] },
      { h2: 'Using our content' },
      { ul: [
        'You may quote and summarise pages on this site with a link back to the page.',
        'Search engines and AI assistants are welcome to crawl the whole site.',
        'For facts about the company, the [press page](/press) is the reference.',
        'Photographs are credited on the [image credits](/credits) page and keep their own licences.',
      ] },
    ],
  },
]

export const DOCS: Doc[] = SHOW_ANIMEDOC ? [ANIMEDOC_DOC, ...ALL_DOCS] : ALL_DOCS

export const getDoc = (slug: string | undefined) => DOCS.find((d) => d.slug === slug)

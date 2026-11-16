// Company facts used by every page, the JSON-LD, the sitemap and llms.txt.
// Change a fact here and it changes everywhere. Stated facts only.

import type { SocialLink } from '../types'

// AnimeDoc is hidden from this site for now. Its product page, API guide and
// related article stay in the code and come back when this is set to true.
// The wording elsewhere was edited in one commit: revert that commit to restore it.
export const SHOW_ANIMEDOC = false

export const SITE = {
  name: 'Resbrotherx',
  // Other spellings people and our own products use. Kept so search engines
  // treat them as the same company.
  altNames: ['ResBrotherX', 'Resbrotherx Technologies', 'Res Brother X'],
  legalName: 'Resbrotherx Technologies',
  url: 'https://www.resbrotherx.com',
  // The same identifiers Apsuni and Adorė point at.
  orgId: 'https://www.resbrotherx.com/#organization',
  websiteId: 'https://www.resbrotherx.com/#website',
  tagline: 'AI, robotics, 3D and software, built to ship.',
  oneLiner:
    'Resbrotherx is a technology company founded by Patrick Francis Ugochukwu. It builds AI applications, robotics, 3D animation, mobile apps, web apps and SaaS platforms, and is the company behind Apsuni and Adorė.',
  mission:
    'We build products that make ambitious digital work easier to start and finish.',
  // The founder has published software under the Resbrotherx name since 2020
  // (GitHub account created May 2020). Confirm before relying on it elsewhere.
  foundedYear: 2020,
  // Business name registration with the Corporate Affairs Commission of Nigeria.
  registration: {
    body: 'Corporate Affairs Commission (CAC), Nigeria',
    type: 'Registered business name',
    date: '2026-11-15',
    dateText: 'November 2026',
    natureOfBusiness: 'Computer programming, consultancy and related activities',
  },
  location: {
    city: 'Enugu',
    region: 'Enugu State',
    country: 'Nigeria',
    countryCode: 'NG',
  },
  // resbrotherx.com has no mailbox yet, so company mail goes to the Apsuni
  // inbox, which the same team reads. Change this line when hello@resbrotherx.com exists.
  email: 'support@apsuni.com',
  // Business phone, the same number given to the payment provider.
  phone: '+234 802 052 7701',
  phoneHref: 'tel:+2348020527701',
  language: 'en',
  locale: 'en_NG',
}

export const FOUNDER = {
  id: 'https://www.resbrotherx.com/#patrick-francis-ugochukwu',
  name: 'Patrick Francis Ugochukwu',
  shortName: 'Patrick Ugochukwu',
  givenName: 'Patrick',
  additionalName: 'Francis',
  familyName: 'Ugochukwu',
  altNames: ['Patrick Ugochukwu', 'Francis Patrick Ugochukwu', 'Patrick Francis', 'Francis Patrick'],
  role: 'Founder & CEO',
  jobTitle: 'Founder and Chief Executive Officer of Resbrotherx; CEO of Apsuni',
  initials: 'PF',
  photo: '/assets/media/founder-first-nigerian.webp' as string | null,
  photoThumbnail: '/assets/media/founder-first-nigerian-square.webp',
  summary:
    'Patrick Francis Ugochukwu is a software engineer and the founder and CEO of Resbrotherx, the technology company behind Apsuni and Adorė. He is also the CEO of Apsuni.',
  skills: ['Python', 'Django', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Node.js', 'HTML & CSS'],
  github: 'https://github.com/resbrotherx',
  githubSince: 'May 2020',
  sameAs: [
    'https://github.com/resbrotherx',
    'https://apsuni.com/founder',
    ...(SHOW_ANIMEDOC ? ['https://animedoc.cloud/founder'] : []),
  ],
}

export const SOCIAL: SocialLink[] = [
  { name: 'YouTube', handle: '@resbrotherx', url: 'https://www.youtube.com/@resbrotherx', icon: 'iconoir-youtube' },
  // Not yet confirmed as the company's account, so it is left out of the JSON-LD
  // sameAs list. Remove `confirmed: false` once you have checked the handle.
  { name: 'Instagram', handle: '@resbrotherx', url: 'https://www.instagram.com/resbrotherx/', icon: 'iconoir-instagram', confirmed: false },
  { name: 'GitHub', handle: 'resbrotherx', url: 'https://github.com/resbrotherx', icon: 'iconoir-github' },
]

// Channels run by our products. Shown on the product pages and Updates page.
export const PRODUCT_CHANNELS: SocialLink[] = [
  { name: 'Apsuni on YouTube', url: 'https://www.youtube.com/@APSUNI', icon: 'iconoir-youtube' },
  { name: 'Apsuni on Instagram', url: 'https://www.instagram.com/apsuni_ai/', icon: 'iconoir-instagram' },
  { name: 'Apsuni on X', url: 'https://x.com/apsuni_ai', icon: 'iconoir-x' },
  ...(SHOW_ANIMEDOC ? [{ name: 'AnimeDoc on YouTube', url: 'https://www.youtube.com/@animedoc', icon: 'iconoir-youtube' }] : []),
]

// What we build with. Shown in the home page marquee and on /technologies.
export const TECH_MARQUEE: string[] = [
  'Python', 'Django', 'React', 'React Native', 'Node.js', 'TypeScript', 'Expo',
  'PostgreSQL', 'Docker', 'Blender', 'Arduino', 'Raspberry Pi', 'Three.js', 'Nginx',
]

export const NAV = {
  company: [
    { label: 'About Resbrotherx', to: '/about' },
    { label: 'Founder', to: '/founder' },
    { label: 'Teams', to: '/team' },
    { label: 'Careers', to: '/careers' },
    { label: 'Press & media kit', to: '/press' },
    { label: 'Contact', to: '/contact' },
  ],
  products: [
    { label: 'Apsuni', to: '/products/apsuni' },
    ...(SHOW_ANIMEDOC ? [{ label: 'AnimeDoc', to: '/products/animedoc' }] : []),
    { label: 'Adorė', to: '/products/adore' },
    { label: 'Brainbox', to: '/products/brainbox' },
    { label: 'All products', to: '/products' },
    { label: 'Portfolio', to: '/portfolio' },
  ],
  labs: [
    { label: 'AI research', to: '/labs/ai' },
    { label: 'Robotics', to: '/labs/robotics' },
    { label: '3D & animation', to: '/labs/3d-animation' },
    { label: 'All labs', to: '/labs' },
    { label: 'Technologies', to: '/technologies' },
  ],
  resources: [
    { label: 'Documentation', to: '/docs' },
    { label: 'Blog', to: '/blog' },
    { label: 'Updates & newsletter', to: '/newsletter' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Site map', to: '/sitemap' },
  ],
  legal: [
    { label: 'Privacy', to: '/privacy' },
    { label: 'Terms', to: '/terms' },
    { label: 'Payments & refunds', to: '/refunds' },
    { label: 'Cookies', to: '/cookies' },
    { label: 'Image credits', to: '/credits' },
  ],
}

export const abs = (path = '/') => SITE.url + (path === '/' ? '/' : path)

// JSON-LD builders. Every node uses the same @id values as Apsuni, AnimeDoc
// and Adorė, so search engines join all mentions into one company and one person.
import { SITE, FOUNDER, SOCIAL, abs } from '../data/site'
import { plainText } from '../lib/blocks'
import type { Crumb, Doc, Faq, Post, Product, Service } from '../types'

const sameAsOrg = SOCIAL.filter((s) => s.confirmed !== false).map((s) => s.url)

export const orgRef = { '@id': SITE.orgId }
export const founderRef = { '@id': FOUNDER.id }

export function organization(products: Product[] = []) {
  return {
    '@type': 'Organization',
    '@id': SITE.orgId,
    name: SITE.name,
    alternateName: SITE.altNames,
    legalName: SITE.legalName,
    url: SITE.url + '/',
    logo: { '@type': 'ImageObject', url: abs('/icons/logo-512.png'), width: 512, height: 512 },
    image: abs('/og/default.jpg'),
    description: SITE.oneLiner,
    slogan: SITE.tagline,
    foundingDate: String(SITE.foundedYear),
    founder: founderRef,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.region,
      addressCountry: SITE.location.countryCode,
    },
    email: SITE.email,
    contactPoint: [{ '@type': 'ContactPoint', contactType: 'customer support', email: SITE.email, availableLanguage: ['English'] }],
    sameAs: sameAsOrg,
    knowsAbout: [
      'Artificial intelligence', 'AI applications', 'Robotics', 'Arduino', 'Raspberry Pi', '3D animation',
      '3D modelling', 'Blender', 'Mobile app development', 'Web application development', 'Software as a service',
    ],
    subOrganization: [{ '@type': 'Organization', '@id': 'https://apsuni.com/#organization', name: 'Apsuni', url: 'https://apsuni.com/' }],
    brand: products.map((p) => ({ '@type': 'Brand', name: p.name, url: p.url || abs(`/products/${p.slug}`) })),
  }
}

export function website() {
  return {
    '@type': 'WebSite',
    '@id': SITE.websiteId,
    url: SITE.url + '/',
    name: SITE.name,
    alternateName: SITE.altNames,
    description: SITE.oneLiner,
    inLanguage: 'en',
    publisher: orgRef,
  }
}

export function person(products: Product[] = []) {
  return {
    '@type': 'Person',
    '@id': FOUNDER.id,
    name: FOUNDER.name,
    alternateName: FOUNDER.altNames,
    givenName: FOUNDER.givenName,
    additionalName: FOUNDER.additionalName,
    familyName: FOUNDER.familyName,
    jobTitle: FOUNDER.jobTitle,
    description: FOUNDER.summary,
    url: abs('/founder'),
    ...(FOUNDER.photo ? { image: abs(FOUNDER.photo) } : {}),
    worksFor: [orgRef, { '@id': 'https://apsuni.com/#organization' }],
    knowsAbout: [...FOUNDER.skills, 'Artificial intelligence', 'Robotics', '3D animation', 'Software engineering'],
    sameAs: FOUNDER.sameAs,
    ...(products.length
      ? { subjectOf: products.map((p) => ({ '@type': 'CreativeWork', name: p.name, url: abs(`/products/${p.slug}`) })) }
      : {}),
  }
}

export function breadcrumbs(items: Crumb[]) {
  const all = [{ name: 'Home', path: '/' }, ...items]
  return {
    '@type': 'BreadcrumbList',
    itemListElement: all.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
  }
}

export function webPage({ path, name, description, type = 'WebPage', about }: { path: string; name: string; description: string; type?: string; about?: unknown }) {
  return {
    '@type': type,
    '@id': abs(path) + '#webpage',
    url: abs(path),
    name,
    description,
    inLanguage: 'en',
    isPartOf: { '@id': SITE.websiteId },
    publisher: orgRef,
    ...(about ? { about } : {}),
  }
}

export function software(p: Product, image?: string | null) {
  return {
    '@type': 'SoftwareApplication',
    '@id': abs(`/products/${p.slug}`) + '#software',
    name: p.name,
    ...(p.altNames ? { alternateName: p.altNames } : {}),
    description: p.summary,
    url: p.url || abs(`/products/${p.slug}`),
    applicationCategory: p.category,
    operatingSystem: p.platforms,
    ...(image ? { image: abs(image) } : {}),
    author: orgRef,
    publisher: orgRef,
    creator: founderRef,
    ...(p.sameAs ? { sameAs: p.sameAs } : {}),
  }
}

export function service(s: Service) {
  return {
    '@type': 'Service',
    '@id': abs(`/services/${s.slug}`) + '#service',
    name: s.name,
    description: s.summary,
    serviceType: s.name,
    url: abs(`/services/${s.slug}`),
    provider: orgRef,
    areaServed: 'Worldwide',
  }
}

export function article(post: Post, image?: string | null) {
  return {
    '@type': 'BlogPosting',
    '@id': abs(`/blog/${post.slug}`) + '#article',
    headline: post.title,
    description: post.description,
    url: abs(`/blog/${post.slug}`),
    mainEntityOfPage: abs(`/blog/${post.slug}`),
    datePublished: post.date,
    dateModified: post.updated || post.date,
    inLanguage: 'en',
    articleSection: post.category,
    keywords: post.tags.join(', '),
    ...(image ? { image: abs(image) } : {}),
    author: orgRef,
    publisher: orgRef,
  }
}

export function faqPage(faqs: Faq[], path: string) {
  return {
    '@type': 'FAQPage',
    '@id': abs(path) + '#faq',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: plainText(f.a) },
    })),
  }
}

export function techArticle(doc: Doc) {
  return {
    '@type': 'TechArticle',
    '@id': abs(`/docs/${doc.slug}`) + '#doc',
    headline: doc.title,
    description: doc.description,
    url: abs(`/docs/${doc.slug}`),
    inLanguage: 'en',
    dateModified: doc.updated,
    author: orgRef,
    publisher: orgRef,
  }
}

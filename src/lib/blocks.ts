// Helpers for the block arrays that hold long-form content.

import type { Block } from '../types'

export const slugify = (s: string) =>
  String(s)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

/** Section headings of a block array, for the "On this page" list. */
export const headings = (blocks: Block[]) => blocks.filter((b) => b.h2).map((b) => ({ id: slugify(b.h2!), text: b.h2! }))

/** Text with the inline markup removed. */
export const plainText = (s: string) => String(s).replace(/\*\*(.+?)\*\*/g, '$1').replace(/`([^`]+)`/g, '$1').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')

const plain = (s: string) => String(s).replace(/\*\*(.+?)\*\*/g, '$1').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')

/** Rough word count, used for reading time. */
export function wordCount(blocks: Block[]) {
  let n = 0
  const add = (s: string) => { n += plain(s).split(/\s+/).filter(Boolean).length }
  for (const b of blocks) {
    if (b.h2) add(b.h2)
    if (b.h3) add(b.h3)
    if (b.p) add(b.p)
    if (b.note) add(b.note)
    if (b.ul) b.ul.forEach(add)
    if (b.ol) b.ol.forEach(add)
    if (b.facts) b.facts.forEach(([k, v]) => add(`${k} ${v}`))
    if (b.table) b.table.rows.forEach((r) => r.forEach(add))
  }
  return n
}

export const readingMinutes = (blocks: Block[]) => Math.max(1, Math.round(wordCount(blocks) / 220))

/** Blocks as Markdown, for llms-full.txt and the feeds. Site links become absolute. */
export function toMarkdown(blocks: Block[], origin = '') {
  const link = (s: string) => String(s).replace(/\]\((\/[^)]*)\)/g, `](${origin}$1)`)
  const out: string[] = []
  for (const b of blocks) {
    if (b.h2) out.push(`## ${b.h2}`)
    else if (b.h3) out.push(`### ${b.h3}`)
    else if (b.p) out.push(link(b.p))
    else if (b.note) out.push(`> ${link(b.note)}`)
    else if (b.ul) out.push(b.ul.map((x) => `- ${link(x)}`).join('\n'))
    else if (b.ol) out.push(b.ol.map((x, i) => `${i + 1}. ${link(x)}`).join('\n'))
    else if (b.code) out.push('```\n' + b.code + '\n```')
    else if (b.facts) out.push(b.facts.map(([k, v]) => `- **${k}:** ${link(v)}`).join('\n'))
    else if (b.table) {
      out.push(
        [`| ${b.table.head.join(' | ')} |`, `| ${b.table.head.map(() => '---').join(' | ')} |`, ...b.table.rows.map((r) => `| ${r.map(link).join(' | ')} |`)].join('\n'),
      )
    }
  }
  return out.join('\n\n')
}

/** Blocks as plain HTML, for the RSS feed. */
export function toHtml(blocks: Block[], origin = '') {
  const esc = (s: string) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const inl = (s: string) =>
    esc(s)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m: string, t: string, u: string) => `<a href="${u.startsWith('/') ? origin + u : u}">${t}</a>`)
  const out: string[] = []
  for (const b of blocks) {
    if (b.h2) out.push(`<h2>${esc(b.h2)}</h2>`)
    else if (b.h3) out.push(`<h3>${esc(b.h3)}</h3>`)
    else if (b.p) out.push(`<p>${inl(b.p)}</p>`)
    else if (b.note) out.push(`<blockquote>${inl(b.note)}</blockquote>`)
    else if (b.ul) out.push(`<ul>${b.ul.map((x) => `<li>${inl(x)}</li>`).join('')}</ul>`)
    else if (b.ol) out.push(`<ol>${b.ol.map((x) => `<li>${inl(x)}</li>`).join('')}</ol>`)
    else if (b.code) out.push(`<pre><code>${esc(b.code)}</code></pre>`)
    else if (b.facts) out.push(`<ul>${b.facts.map(([k, v]) => `<li><strong>${esc(k)}:</strong> ${inl(v)}</li>`).join('')}</ul>`)
  }
  return out.join('\n')
}

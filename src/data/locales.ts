import type { Metadata } from 'next'

/**
 * Locale primitives, deliberately in a module with no 'use client' directive
 * and no React import.
 *
 * The route list and the path helpers are needed by both the client language
 * switcher and by server-only files (sitemap.ts, every page's metadata). Had
 * they stayed in LangContext, importing them on the server would pull a client
 * module — and next/navigation's hooks — into the server graph for no reason.
 */

export type Lang = 'en' | 'pt' | 'es'

export const LANGS: Lang[] = ['en', 'pt', 'es']

const SITE_URL = 'https://www.blendhairboutique.com'

/**
 * Routes that exist in all three languages, without their locale prefix.
 *
 * English lives at the bare path (/about); Portuguese and Spanish live under a
 * prefix (/pt/about, /es/about). Anything not on this list — the sixteen SEO
 * landing pages, the blog and its articles, the service and stylist detail
 * pages — exists in English only, because the copy for them was never
 * translated. Those still switch language client-side wherever the underlying
 * strings support it; they just have no separate URL to be indexed at.
 */
export const LOCALIZED_ROUTES = [
  '/', '/services', '/gallery', '/team', '/about', '/gift-cards', '/contact', '/faq',
] as const

/** The locale a URL declares, or null for the unprefixed English tree. */
export function langFromPath(path: string | null | undefined): Lang | null {
  const seg = (path ?? '').split('/')[1]
  return seg === 'pt' ? 'pt' : seg === 'es' ? 'es' : null
}

/** Strip any locale prefix, so '/pt/about' and '/about' compare equal. */
export function routeWithoutLang(path: string): string {
  const stripped = path.replace(/^\/(?:pt|es)(?=\/|$)/, '')
  return stripped === '' ? '/' : stripped
}

/**
 * Route families that exist in all three languages under a dynamic segment.
 * The service detail pages are here because their copy — titles, descriptions,
 * price tables and FAQs — is fully translated in translations.ts, and because
 * "alisamento", "queratina" and "balayage" are the queries that actually earn
 * money in this market.
 *
 * /team/[slug] deliberately is not: that page is inline JSX whose related-service
 * links all point at the English-only landing pages, and nobody searches for a
 * stylist by name in Portuguese.
 */
export const LOCALIZED_PREFIXES = ['/services/'] as const

function isLocalized(base: string): boolean {
  if ((LOCALIZED_ROUTES as readonly string[]).includes(base)) return true
  return LOCALIZED_PREFIXES.some((p) => base.startsWith(p) && base.length > p.length)
}

/** The URL for `route` in `lang`, or null when that pairing has no page. */
export function pathForLang(route: string, lang: Lang): string | null {
  const base = routeWithoutLang(route)
  if (lang === 'en') return base
  if (!isLocalized(base)) return null
  return base === '/' ? `/${lang}` : `/${lang}${base}`
}

/** Absolute URLs for one route in every language. */
export function localeUrls(route: string) {
  const seg = route === '/' ? '' : route
  return {
    en: `${SITE_URL}${seg || '/'}`,
    pt: `${SITE_URL}/pt${seg}`,
    es: `${SITE_URL}/es${seg}`,
  }
}

/**
 * The `alternates` block for a page that exists in all three languages.
 *
 * Until these URLs existed, roughly 1,900 lines of finished pt-BR and es copy
 * were switched client-side at the same address, so Google only ever indexed
 * the English. For a Brazilian-owned salon in Broward County — where "salão de
 * beleza brasileiro" and "alisamento" are live local queries with almost no
 * competition — that was the largest single piece of unrealised value on the
 * site.
 *
 * hreflang must be reciprocal to be honoured: every page in the set has to
 * point at every other page in the set, itself included. Deriving all three
 * from one helper is what guarantees that, rather than hand-writing the block
 * on sixteen pages and getting one of them wrong.
 *
 * x-default goes to English, as the entry point for anyone whose language we
 * do not publish.
 */
export function hreflang(route: string, self: Lang): Metadata['alternates'] {
  const urls = localeUrls(route)
  return {
    canonical: urls[self],
    languages: {
      'en-US': urls.en,
      'pt-BR': urls.pt,
      es: urls.es,
      'x-default': urls.en,
    },
  }
}

export const OG_LOCALE: Record<Lang, string> = {
  en: 'en_US',
  pt: 'pt_BR',
  es: 'es_ES',
}

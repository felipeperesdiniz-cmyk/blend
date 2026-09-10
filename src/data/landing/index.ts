import type { Lang } from '@/data/locales'
import type { LandingSet } from './types'
import { LANDING_PT } from './pt'
import { LANDING_ES } from './es'

export * from './types'
export { LANDING_SHARED } from './shared'

/**
 * Landing copy by locale.
 *
 * English is absent on purpose: those twenty pages are hand-built files that
 * are already written, already indexed and already ranking, and rewriting them
 * onto this template would have meant transcribing 11,500 words of live SEO
 * copy with no way to build or diff the result. They keep their own markup and
 * gain only the hreflang tags that pair them with these translations.
 */
export const LANDING_COPY: Partial<Record<Lang, LandingSet>> = {
  pt: LANDING_PT,
  es: LANDING_ES,
}

/** Slugs that exist as landing pages, derived from the copy itself. */
export const LANDING_SLUGS = Object.keys(LANDING_PT)

/**
 * Landing pages whose indexing credit belongs to another page.
 *
 * These two answer the same intent as their primaries and differ only by the
 * word "best" / "melhor" / "mejor". Left self-canonical they would compete with
 * the primary for one query and split the signals — the same reasoning applied
 * to the English pair. The pages stay live and keep their own copy; only the
 * canonical moves, and they are kept out of the sitemap because submitting a
 * URL that points its canonical elsewhere asks Google to index a page while
 * simultaneously telling it not to.
 */
export const LANDING_CANONICAL_OVERRIDE: Record<string, string> = {
  'best-balayage-plantation-fl': 'balayage-plantation-fl',
  'best-hair-color-plantation-fl': 'hair-color-plantation',
}

/** The slugs that should actually be submitted for indexing. */
export const LANDING_INDEXABLE_SLUGS = LANDING_SLUGS.filter(
  (s) => !(s in LANDING_CANONICAL_OVERRIDE),
)

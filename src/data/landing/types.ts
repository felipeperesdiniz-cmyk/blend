/**
 * Copy for the twenty SEO landing pages, in one shape per locale.
 *
 * The English pages were twenty near-identical hand-built files across nine
 * structural variants — the same hero, prose block, card grid, areas-served
 * strip, FAQ and closing CTA rebuilt each time. Translating them by copying
 * those files twice would have produced sixty. This is the same page described
 * as data instead, so a locale is a file of strings rather than twenty files
 * of markup, and the pt/es pages cannot structurally drift from each other.
 *
 * Sections that a given page does not have are simply omitted; the template
 * skips them.
 */

export interface LandingCard {
  title: string
  body: string
}

export interface LandingFaq {
  q: string
  a: string
}

export interface LandingCopy {
  /** Fits the ~60-char budget once the layout appends ' | Blend Hair Boutique'. */
  title: string
  description: string
  ogTitle: string
  ogDescription: string

  /** schema.org Service name/description, and the breadcrumb leaf. */
  serviceName: string
  serviceDescription: string
  breadcrumb: string

  /** Hero. h1a/h1b straddle the line break; h1b renders in italic. */
  h1a: string
  h1b: string
  heroIntro: string
  bookLabel: string

  /** Prose block with a supporting image. */
  proseEyebrow: string
  proseH2a: string
  proseH2b: string
  prose: string[]
  imageAlt: string

  /** Card grid. Omitted on pages that do not have one. */
  cardsEyebrow?: string
  cardsH2a?: string
  cardsH2b?: string
  cards?: LandingCard[]

  faqH2a: string
  faqH2b: string
  faqs: LandingFaq[]

  ctaH2a: string
  ctaH2b: string
}

/**
 * The chrome every landing page repeats. In English this was retyped on all
 * twenty pages; here each locale states it once.
 */
export interface LandingShared {
  heroEyebrow: string
  callLabel: string
  areasEyebrow: string
  areasH2a: string
  areasH2b: string
  areasBody: string
  faqEyebrow: string
  ctaBody: string
  viewAllServices: string
}

export type LandingSet = Record<string, LandingCopy>

/**
 * Structural data shared by all locales: which image each page uses.
 * Kept out of the copy files because it is not copy.
 */
export const LANDING_IMAGES: Record<string, string> = {
  'balayage-plantation-fl': '/images/gallery/bronde-balayage-back.webp',
  'best-balayage-plantation-fl': '/images/gallery/caramel-balayage-brunette.webp',
  'best-hair-color-plantation-fl': '/images/gallery/rich-brunette-waves.webp',
  'blonding-specialist-plantation': '/images/gallery/platinum-blonde-long.webp',
  'blowout-plantation-fl': '/images/gallery/honey-blonde-blowout.webp',
  'brazilian-hair-salon-plantation-fl': '/images/gallery/glossy-straight-lob.webp',
  'bridal-hair-south-florida': '/images/gallery/bridal-updo.webp',
  'color-correction-plantation-fl': '/images/gallery/ash-silver-blend.webp',
  'facials-plantation-fl': '/images/gallery/salon-wine-service.webp',
  'hair-color-plantation': '/images/gallery/copper-red-waves.webp',
  'hair-extensions-plantation': '/images/gallery/blonde-lob-waves.webp',
  'hair-salon-plantation-fl': '/images/gallery/stylist-blend-wall.webp',
  'haircuts-plantation-fl': '/images/gallery/layered-brunette-cut.webp',
  'highlights-plantation-fl': '/images/gallery/blonde-highlights-long.webp',
  'keratin-treatment-plantation': '/images/gallery/glossy-straight-lob.webp',
  'luxury-hair-salon-plantation-fl': '/images/gallery/brunette-glam-waves.webp',
  'makeup-plantation-fl': '/images/gallery/makeup-special-occasion.webp',
  'micropigmentation-plantation-fl': '/images/gallery/brunette-layers-teen.webp',
  'nails-plantation-fl': '/images/gallery/nails-red-blend-wall.webp',
  'waxing-plantation-fl': '/images/gallery/bronde-waves-smile.webp',
}

/** The nine South Florida cities shown as chips. Place names, not copy. */
export const AREAS_SERVED = [
  'Plantation, FL', 'Davie, FL', 'Weston, FL', 'Fort Lauderdale, FL',
  'Sunrise, FL', 'Cooper City, FL', 'Pembroke Pines, FL', 'Miramar, FL',
  'Boca Raton, FL',
] as const

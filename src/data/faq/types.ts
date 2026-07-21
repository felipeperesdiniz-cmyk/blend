import { BUSINESS } from '@/data/constants'

export interface FAQItem {
  q: string
  a: string
}

export interface FAQSection {
  eyebrow: string
  heading: string
  em: string
  linkLabel: string
  faqs: FAQItem[]
}

export interface FAQTranslation {
  hero: {
    eyebrow: string
    heading: string
    em: string
    intro: string
  }
  cta: {
    eyebrow: string
    heading: string
    em: string
    body: string
    book: string
    whatsapp: string
  }
  explore: {
    eyebrow: string
    heading: string
    em: string
  }
  sections: Record<FAQSectionKey, FAQSection>
}

// Section order — drives both the on-page order and the jump nav.
// General comes first, then Balayage & Highlights.
export const FAQ_SECTION_KEYS = [
  'general',
  'balayageHighlights',
  'hairColor',
  'haircuts',
  'styling',
  'keratin',
  'treatments',
  'extensions',
  'nails',
  'eyebrows',
  'lashes',
  'makeup',
  'waxing',
  'facials',
  'southFlorida',
  'firstVisit',
  'services',
] as const

export type FAQSectionKey = (typeof FAQ_SECTION_KEYS)[number]

// Anchor ids stay language-independent so #hash links keep working across languages.
export const FAQ_ANCHORS: Record<FAQSectionKey, string> = {
  general: 'general',
  balayageHighlights: 'balayage-highlights',
  hairColor: 'hair-color',
  haircuts: 'haircuts',
  styling: 'styling',
  keratin: 'keratin',
  treatments: 'treatments',
  extensions: 'extensions',
  nails: 'nails',
  eyebrows: 'eyebrows',
  lashes: 'lashes',
  makeup: 'makeup',
  waxing: 'waxing',
  facials: 'facials',
  southFlorida: 'south-florida',
  firstVisit: 'first-visit',
  services: 'about-blend',
}

export const FAQ_LINKS: Record<FAQSectionKey, string> = {
  general: '/contact',
  balayageHighlights: '/balayage-plantation-fl',
  hairColor: '/hair-color-plantation',
  haircuts: '/haircuts-plantation-fl',
  styling: '/blowout-plantation-fl',
  keratin: '/keratin-treatment-plantation',
  treatments: '/services',
  extensions: '/hair-extensions-plantation',
  nails: '/nails-plantation-fl',
  eyebrows: '/micropigmentation-plantation-fl',
  lashes: '/services',
  makeup: '/makeup-plantation-fl',
  waxing: '/waxing-plantation-fl',
  facials: '/facials-plantation-fl',
  southFlorida: '/keratin-treatment-plantation',
  firstVisit: BUSINESS.bookingUrl,
  services: '/services',
}

// Service chips at the foot of the page — labels are proper service names and
// stay consistent across languages, so only the section heading is translated.
export const FAQ_SERVICE_LINKS = [
  { label: 'Balayage', href: '/balayage-plantation-fl' },
  { label: 'Hair Color', href: '/hair-color-plantation' },
  { label: 'Highlights', href: '/highlights-plantation-fl' },
  { label: 'Color Correction', href: '/color-correction-plantation-fl' },
  { label: 'Haircuts', href: '/haircuts-plantation-fl' },
  { label: 'Keratin Treatment', href: '/keratin-treatment-plantation' },
  { label: 'Brazilian Blowout', href: '/blowout-plantation-fl' },
  { label: 'Blonding Specialist', href: '/blonding-specialist-plantation' },
  { label: 'Hair Extensions', href: '/hair-extensions-plantation' },
  { label: 'Bridal Hair', href: '/bridal-hair-south-florida' },
  { label: 'Nails', href: '/nails-plantation-fl' },
  { label: 'Waxing', href: '/waxing-plantation-fl' },
  { label: 'Facials', href: '/facials-plantation-fl' },
  { label: 'Makeup', href: '/makeup-plantation-fl' },
  { label: 'Micropigmentation', href: '/micropigmentation-plantation-fl' },
] as const

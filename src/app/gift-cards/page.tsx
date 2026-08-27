import type { Metadata } from 'next'
import GiftCardsContent from '@/components/pages/GiftCardsContent'
import { OG_IMAGE } from '@/data/constants'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/gift-cards`

export const metadata: Metadata = {
  title: 'Salon Gift Cards · Plantation, FL',
  description:
    'Salon gift cards from Blend Hair Boutique, Plantation FL, redeemable against any service: balayage, colour, keratin, nails and facials. Buy online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    images: [OG_IMAGE],
    title: 'Gift Cards | Blend Hair Boutique',
    description:
      'Give the gift of luxury beauty at Blend Hair Boutique in Plantation, FL. Redeemable for any service: balayage, color, keratin, nails, facials, and more.',
    url: CANONICAL,
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Gift Cards at Blend Hair Boutique',
      description: 'Salon gift cards for Blend Hair Boutique, luxury hair salon in Plantation, Florida.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#business` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Gift Cards', item: CANONICAL },
      ],
    },
  ],
}

export default function GiftCardsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GiftCardsContent />
    </>
  )
}

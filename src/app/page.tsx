import type { Metadata } from 'next'
import HomeContent from '@/components/pages/HomeContent'
import { OG_IMAGE, REVIEW_COUNT } from '@/data/constants'
import { hreflang } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Blend Hair Boutique | Luxury Hair Salon in Plantation, FL',
  description:
    `A luxury hair salon in Plantation, Florida for balayage, Brazilian blowout, keratin, haircuts, nails and bridal beauty. 4.9★ · ${REVIEW_COUNT}+ reviews. Book online.`,
  alternates: hreflang('/', 'en'),
  openGraph: {
    images: [OG_IMAGE],
    title: 'Blend Hair Boutique | Luxury Hair Salon in Plantation, FL',
    description:
      'Luxury hair color, balayage, Brazilian blowout, keratin, nails, and bridal beauty in Plantation, Florida. Book your appointment online today.',
    url: `${SITE_URL}/`,
    locale: 'en_US',
  },
}

export default function HomePage() {
  return <HomeContent />
}

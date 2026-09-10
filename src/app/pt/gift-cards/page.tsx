import type { Metadata } from 'next'
import GiftCardsContent from '@/components/pages/GiftCardsContent'
import { OG_IMAGE } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Vale-Presente · Plantation, FL',
  description:
    'Vale-presente do Blend Hair Boutique, Plantation FL, válido para qualquer serviço: balayage, coloração, queratina, unhas e estética. Compre online.',
  alternates: hreflang('/gift-cards', 'pt'),
  openGraph: {
    images: [OG_IMAGE],
    title: 'Vale-Presente · Plantation, FL',
    description:
      'Vale-presente do Blend Hair Boutique, Plantation FL, válido para qualquer serviço: balayage, coloração, queratina, unhas e estética. Compre online.',
    url: `${SITE_URL}/pt/gift-cards`,
    locale: OG_LOCALE.pt,
  },
}

export default function Page() {
  return <GiftCardsContent />
}

import type { Metadata } from 'next'
import HomeContent from '@/components/pages/HomeContent'
import { OG_IMAGE, REVIEW_COUNT } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Salão de Luxo em Plantation, FL',
  description:
    `Salão brasileiro de luxo em Plantation, Flórida: balayage, escova brasileira, queratina, cortes, unhas e noivas. 4,9★ · ${REVIEW_COUNT}+ avaliações. Agende online.`,
  alternates: hreflang('/', 'pt'),
  openGraph: {
    images: [OG_IMAGE],
    title: 'Salão de Luxo em Plantation, FL',
    description:
      `Salão brasileiro de luxo em Plantation, Flórida: balayage, escova brasileira, queratina, cortes, unhas e noivas. 4,9★ · ${REVIEW_COUNT}+ avaliações. Agende online.`,
    url: `${SITE_URL}/pt`,
    locale: OG_LOCALE.pt,
  },
}

export default function Page() {
  return <HomeContent />
}

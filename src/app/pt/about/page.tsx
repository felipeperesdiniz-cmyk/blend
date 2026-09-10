import type { Metadata } from 'next'
import AboutContent from '@/components/pages/AboutContent'
import { OG_IMAGE, REVIEW_COUNT } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Sobre o Salão · Plantation, FL',
  description:
    `A história do Blend Hair Boutique, um salão de luxo brasileiro em Plantation, Flórida: nossos valores, nossa equipe e como trabalhamos. 4,9★ · ${REVIEW_COUNT}+ avaliações.`,
  alternates: hreflang('/about', 'pt'),
  openGraph: {
    images: [OG_IMAGE],
    title: 'Sobre o Salão · Plantation, FL',
    description:
      `A história do Blend Hair Boutique, um salão de luxo brasileiro em Plantation, Flórida: nossos valores, nossa equipe e como trabalhamos. 4,9★ · ${REVIEW_COUNT}+ avaliações.`,
    url: `${SITE_URL}/pt/about`,
    locale: OG_LOCALE.pt,
  },
}

export default function Page() {
  return <AboutContent />
}

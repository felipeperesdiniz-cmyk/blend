import type { Metadata } from 'next'
import AboutContent from '@/components/pages/AboutContent'
import { OG_IMAGE, REVIEW_COUNT } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Sobre el Salón · Plantation, FL',
  description:
    `La historia de Blend Hair Boutique, un salón de lujo brasileño en Plantation, Florida: nuestros valores, nuestro equipo y cómo trabajamos. 4,9★ · ${REVIEW_COUNT}+ reseñas.`,
  alternates: hreflang('/about', 'es'),
  openGraph: {
    images: [OG_IMAGE],
    title: 'Sobre el Salón · Plantation, FL',
    description:
      `La historia de Blend Hair Boutique, un salón de lujo brasileño en Plantation, Florida: nuestros valores, nuestro equipo y cómo trabajamos. 4,9★ · ${REVIEW_COUNT}+ reseñas.`,
    url: `${SITE_URL}/es/about`,
    locale: OG_LOCALE.es,
  },
}

export default function Page() {
  return <AboutContent />
}

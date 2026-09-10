import type { Metadata } from 'next'
import HomeContent from '@/components/pages/HomeContent'
import { OG_IMAGE, REVIEW_COUNT } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Salón de Lujo en Plantation, FL',
  description:
    `Salón brasileño de lujo en Plantation, Florida: balayage, brushing brasileño, keratina, cortes, uñas y novias. 4,9★ · ${REVIEW_COUNT}+ reseñas. Reserva en línea.`,
  alternates: hreflang('/', 'es'),
  openGraph: {
    images: [OG_IMAGE],
    title: 'Salón de Lujo en Plantation, FL',
    description:
      `Salón brasileño de lujo en Plantation, Florida: balayage, brushing brasileño, keratina, cortes, uñas y novias. 4,9★ · ${REVIEW_COUNT}+ reseñas. Reserva en línea.`,
    url: `${SITE_URL}/es`,
    locale: OG_LOCALE.es,
  },
}

export default function Page() {
  return <HomeContent />
}

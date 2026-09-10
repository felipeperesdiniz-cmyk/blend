import type { Metadata } from 'next'
import GalleryContent from '@/components/pages/GalleryContent'
import { OG_IMAGE } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Galería de Trabajos · Plantation, FL',
  description:
    'Trabajos reales de Blend Hair Boutique, Plantation FL: balayage, rubios, castaños iluminados, brushing brasileño, peinados de novia y uñas.',
  alternates: hreflang('/gallery', 'es'),
  openGraph: {
    images: [OG_IMAGE],
    title: 'Galería de Trabajos · Plantation, FL',
    description:
      'Trabajos reales de Blend Hair Boutique, Plantation FL: balayage, rubios, castaños iluminados, brushing brasileño, peinados de novia y uñas.',
    url: `${SITE_URL}/es/gallery`,
    locale: OG_LOCALE.es,
  },
}

export default function Page() {
  return <GalleryContent />
}

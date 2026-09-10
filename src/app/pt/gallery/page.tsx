import type { Metadata } from 'next'
import GalleryContent from '@/components/pages/GalleryContent'
import { OG_IMAGE } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Galeria de Trabalhos · Plantation, FL',
  description:
    'Trabalhos reais do Blend Hair Boutique, Plantation FL: balayage, loiros, morenas iluminadas, escova brasileira, penteados de noiva e unhas.',
  alternates: hreflang('/gallery', 'pt'),
  openGraph: {
    images: [OG_IMAGE],
    title: 'Galeria de Trabalhos · Plantation, FL',
    description:
      'Trabalhos reais do Blend Hair Boutique, Plantation FL: balayage, loiros, morenas iluminadas, escova brasileira, penteados de noiva e unhas.',
    url: `${SITE_URL}/pt/gallery`,
    locale: OG_LOCALE.pt,
  },
}

export default function Page() {
  return <GalleryContent />
}

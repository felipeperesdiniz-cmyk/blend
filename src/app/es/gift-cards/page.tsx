import type { Metadata } from 'next'
import GiftCardsContent from '@/components/pages/GiftCardsContent'
import { OG_IMAGE } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Tarjetas de Regalo · Plantation, FL',
  description:
    'Tarjetas de regalo de Blend Hair Boutique, Plantation FL, válidas para cualquier servicio: balayage, color, keratina, uñas y faciales. Compra en línea.',
  alternates: hreflang('/gift-cards', 'es'),
  openGraph: {
    images: [OG_IMAGE],
    title: 'Tarjetas de Regalo · Plantation, FL',
    description:
      'Tarjetas de regalo de Blend Hair Boutique, Plantation FL, válidas para cualquier servicio: balayage, color, keratina, uñas y faciales. Compra en línea.',
    url: `${SITE_URL}/es/gift-cards`,
    locale: OG_LOCALE.es,
  },
}

export default function Page() {
  return <GiftCardsContent />
}

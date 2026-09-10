import type { Metadata } from 'next'
import ServicesContent from '@/components/pages/ServicesContent'
import { OG_IMAGE } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Servicios y Precios · Plantation, FL',
  description:
    'Todos los servicios de Blend Hair Boutique en Plantation, FL: cortes, color, balayage, alisado, extensiones, uñas, cejas, maquillaje y faciales.',
  alternates: hreflang('/services', 'es'),
  openGraph: {
    images: [OG_IMAGE],
    title: 'Servicios y Precios · Plantation, FL',
    description:
      'Todos los servicios de Blend Hair Boutique en Plantation, FL: cortes, color, balayage, alisado, extensiones, uñas, cejas, maquillaje y faciales.',
    url: `${SITE_URL}/es/services`,
    locale: OG_LOCALE.es,
  },
}

export default function Page() {
  return <ServicesContent />
}

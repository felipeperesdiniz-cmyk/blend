import type { Metadata } from 'next'
import ServicesContent from '@/components/pages/ServicesContent'
import { OG_IMAGE } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Serviços e Preços · Plantation, FL',
  description:
    'Todos os serviços do Blend Hair Boutique em Plantation, FL: cortes, coloração, balayage, alisamento, mega hair, unhas, sobrancelhas, maquiagem e estética.',
  alternates: hreflang('/services', 'pt'),
  openGraph: {
    images: [OG_IMAGE],
    title: 'Serviços e Preços · Plantation, FL',
    description:
      'Todos os serviços do Blend Hair Boutique em Plantation, FL: cortes, coloração, balayage, alisamento, mega hair, unhas, sobrancelhas, maquiagem e estética.',
    url: `${SITE_URL}/pt/services`,
    locale: OG_LOCALE.pt,
  },
}

export default function Page() {
  return <ServicesContent />
}

import type { Metadata } from 'next'
import TeamContent from '@/components/pages/TeamContent'
import { OG_IMAGE } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Nuestro Equipo · Plantation, FL',
  description:
    'Conoce a las estilistas y especialistas de Blend Hair Boutique, Plantation FL. Equipo multilingüe en color, alisado, extensiones, uñas y novias.',
  alternates: hreflang('/team', 'es'),
  openGraph: {
    images: [OG_IMAGE],
    title: 'Nuestro Equipo · Plantation, FL',
    description:
      'Conoce a las estilistas y especialistas de Blend Hair Boutique, Plantation FL. Equipo multilingüe en color, alisado, extensiones, uñas y novias.',
    url: `${SITE_URL}/es/team`,
    locale: OG_LOCALE.es,
  },
}

export default function Page() {
  return <TeamContent />
}

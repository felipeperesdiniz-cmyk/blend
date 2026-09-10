import type { Metadata } from 'next'
import TeamContent from '@/components/pages/TeamContent'
import { OG_IMAGE } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Nossa Equipe · Plantation, FL',
  description:
    'Conheça as cabeleireiras e especialistas do Blend Hair Boutique, Plantation FL. Equipe multilíngue em coloração, alisamento, mega hair, unhas e noivas.',
  alternates: hreflang('/team', 'pt'),
  openGraph: {
    images: [OG_IMAGE],
    title: 'Nossa Equipe · Plantation, FL',
    description:
      'Conheça as cabeleireiras e especialistas do Blend Hair Boutique, Plantation FL. Equipe multilíngue em coloração, alisamento, mega hair, unhas e noivas.',
    url: `${SITE_URL}/pt/team`,
    locale: OG_LOCALE.pt,
  },
}

export default function Page() {
  return <TeamContent />
}

import type { Metadata } from 'next'
import FAQContent from '@/components/pages/FAQContent'
import { OG_IMAGE } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Perguntas Frequentes · Plantation, FL',
  description:
    'Respostas às perguntas que mais recebemos no Blend Hair Boutique, Plantation FL: agendamento, políticas, balayage, queratina, mega hair, unhas e sobrancelhas.',
  alternates: hreflang('/faq', 'pt'),
  openGraph: {
    images: [OG_IMAGE],
    title: 'Perguntas Frequentes · Plantation, FL',
    description:
      'Respostas às perguntas que mais recebemos no Blend Hair Boutique, Plantation FL: agendamento, políticas, balayage, queratina, mega hair, unhas e sobrancelhas.',
    url: `${SITE_URL}/pt/faq`,
    locale: OG_LOCALE.pt,
  },
}

export default function Page() {
  return <FAQContent />
}

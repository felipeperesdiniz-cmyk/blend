import type { Metadata } from 'next'
import ContactContent from '@/components/pages/ContactContent'
import { OG_IMAGE } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Contato e Localização · Plantation, FL',
  description:
    'Blend Hair Boutique fica na 10035 Cleary Blvd, Plantation, FL 33324. Telefone, WhatsApp, horários e como chegar. Agende seu horário online.',
  alternates: hreflang('/contact', 'pt'),
  openGraph: {
    images: [OG_IMAGE],
    title: 'Contato e Localização · Plantation, FL',
    description:
      'Blend Hair Boutique fica na 10035 Cleary Blvd, Plantation, FL 33324. Telefone, WhatsApp, horários e como chegar. Agende seu horário online.',
    url: `${SITE_URL}/pt/contact`,
    locale: OG_LOCALE.pt,
  },
}

export default function Page() {
  return <ContactContent />
}

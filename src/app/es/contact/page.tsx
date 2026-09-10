import type { Metadata } from 'next'
import ContactContent from '@/components/pages/ContactContent'
import { OG_IMAGE } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Contacto y Ubicación · Plantation, FL',
  description:
    'Blend Hair Boutique está en 10035 Cleary Blvd, Plantation, FL 33324. Teléfono, WhatsApp, horarios y cómo llegar. Reserva tu cita en línea.',
  alternates: hreflang('/contact', 'es'),
  openGraph: {
    images: [OG_IMAGE],
    title: 'Contacto y Ubicación · Plantation, FL',
    description:
      'Blend Hair Boutique está en 10035 Cleary Blvd, Plantation, FL 33324. Teléfono, WhatsApp, horarios y cómo llegar. Reserva tu cita en línea.',
    url: `${SITE_URL}/es/contact`,
    locale: OG_LOCALE.es,
  },
}

export default function Page() {
  return <ContactContent />
}

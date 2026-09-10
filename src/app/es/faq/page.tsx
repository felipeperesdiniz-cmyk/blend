import type { Metadata } from 'next'
import FAQContent from '@/components/pages/FAQContent'
import { OG_IMAGE } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes · Plantation, FL',
  description:
    'Respuestas a las preguntas que más nos hacen en Blend Hair Boutique, Plantation FL: reservas, políticas, balayage, keratina, extensiones, uñas y cejas.',
  alternates: hreflang('/faq', 'es'),
  openGraph: {
    images: [OG_IMAGE],
    title: 'Preguntas Frecuentes · Plantation, FL',
    description:
      'Respuestas a las preguntas que más nos hacen en Blend Hair Boutique, Plantation FL: reservas, políticas, balayage, keratina, extensiones, uñas y cejas.',
    url: `${SITE_URL}/es/faq`,
    locale: OG_LOCALE.es,
  },
}

export default function Page() {
  return <FAQContent />
}

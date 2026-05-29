import type { Metadata } from 'next'
import { SERVICES, FAQ } from '@/data/services'
import ServicesContent from '@/components/pages/ServicesContent'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Hair & Beauty Services | Blend Hair Boutique — Plantation, FL',
  description:
    'Explore all services at Blend Hair Boutique in Plantation, FL: balayage, Brazilian blowout, keratin treatments, precision haircuts, nail services, facials, waxing, hair extensions, and bridal beauty packages.',
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: 'Hair & Beauty Services | Blend Hair Boutique — Plantation, FL',
    description: 'Explore all services at Blend Hair Boutique in Plantation, FL: balayage, Brazilian blowout, keratin treatments, precision haircuts, nail services, facials, waxing, hair extensions, and bridal beauty.',
    url: `${SITE_URL}/services`,
  },
}

const serviceSchemas = SERVICES.map((s) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/services#${s.id}`,
  name: s.title,
  description: s.description,
  provider: { '@id': `${SITE_URL}/#business` },
  areaServed: { '@type': 'City', name: 'Plantation, FL' },
  url: `${SITE_URL}/services#${s.id}`,
}))

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
  ],
}

export default function ServicesPage() {
  return (
    <>
      {serviceSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicesContent />
    </>
  )
}

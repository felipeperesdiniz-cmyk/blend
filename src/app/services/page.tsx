import type { Metadata } from 'next'
import { SERVICES, FAQ } from '@/data/services'
import ServicesContent from '@/components/pages/ServicesContent'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Hair & Beauty Services | Blend Hair Boutique, Plantation FL',
  description:
    'Explore all services at Blend Hair Boutique in Plantation, FL: haircuts, color, balayage & highlights, styling, keratin smoothing, hair care, extensions, nails, brows, makeup, waxing, facials, and lashes.',
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: 'Hair & Beauty Services | Blend Hair Boutique, Plantation FL',
    description: 'Explore all services at Blend Hair Boutique in Plantation, FL: haircuts, color, balayage & highlights, styling, keratin smoothing, hair care, extensions, nails, brows, makeup, waxing, facials, and lashes.',
    url: `${SITE_URL}/services`,
  },
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `${SITE_URL}/services/${s.id}`,
  })),
}

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicesContent />
    </>
  )
}

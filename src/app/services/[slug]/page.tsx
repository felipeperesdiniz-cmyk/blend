import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICES } from '@/data/services'
import ServiceDetailContent from '@/components/pages/ServiceDetailContent'

const SITE_URL = 'https://www.blendhairboutique.com'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = SERVICES.find((service) => service.id === slug)
  if (!s) return {}

  const title = `${s.title} | Blend Hair Boutique, Plantation FL`
  return {
    title,
    description: s.description,
    alternates: { canonical: `${SITE_URL}/services/${s.id}` },
    openGraph: { title, description: s.description, url: `${SITE_URL}/services/${s.id}` },
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = SERVICES.find((service) => service.id === slug)
  if (!s) notFound()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${s.id}`,
    name: s.title,
    description: s.description,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: { '@type': 'City', name: 'Plantation, FL' },
    url: `${SITE_URL}/services/${s.id}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: s.title, item: `${SITE_URL}/services/${s.id}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceDetailContent id={s.id} />
    </>
  )
}

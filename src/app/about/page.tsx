import type { Metadata } from 'next'
import AboutContent from '@/components/pages/AboutContent'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'About Our Salon in Plantation, FL',
  description:
    'Learn the story behind Blend Hair Boutique, a Brazilian-inspired luxury hair salon and beauty boutique in Plantation, Florida. Meet our values, our team, and our commitment to personalized beauty.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About Blend Hair Boutique | Luxury Salon in Plantation, FL',
    description: 'Learn the story behind Blend Hair Boutique, a Brazilian-inspired luxury hair salon and beauty boutique in Plantation, Florida.',
    url: `${SITE_URL}/about`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AboutContent />
    </>
  )
}

import type { Metadata } from 'next'
import AboutContent from '@/components/pages/AboutContent'
import { OG_IMAGE, REVIEW_COUNT } from '@/data/constants'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'About Our Salon in Plantation, FL',
  description:
    `The story behind Blend Hair Boutique, a Brazilian-owned luxury salon in Plantation, Florida — our values, our team, and how we work. 4.9★ · ${REVIEW_COUNT}+ reviews.`,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    images: [OG_IMAGE],
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

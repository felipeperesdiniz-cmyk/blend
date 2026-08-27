import type { Metadata } from 'next'
import GalleryContent from '@/components/pages/GalleryContent'
import { OG_IMAGE } from '@/data/constants'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Hair Color & Styling Gallery',
  description:
    'Real work from Blend Hair Boutique, Plantation FL: balayage, blonde highlights, brunette colour, Brazilian blowout, bridal hair and nail art.',
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    images: [OG_IMAGE],
    title: 'Hair Color & Styling Gallery | Blend Hair Boutique, Plantation FL',
    description: 'Browse the Blend Hair Boutique gallery: balayage, blonde highlights, brunette color, Brazilian blowout, keratin, bridal hair, and nail art.',
    url: `${SITE_URL}/gallery`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${SITE_URL}/gallery` },
  ],
}

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GalleryContent />
    </>
  )
}

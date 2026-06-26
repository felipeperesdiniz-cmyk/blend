import type { Metadata } from 'next'
import BlogContent from '@/components/pages/BlogContent'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/blog`

export const metadata: Metadata = {
  title: 'Beauty Resource Center | Hair & Beauty Guide | Blend Hair Boutique',
  description:
    'Expert hair and beauty education from the colorists at Blend Hair Boutique in Plantation, FL. Balayage guides, color tips, keratin advice, extension care, and more.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Beauty Resource Center | Blend Hair Boutique',
    description:
      'Expert hair and beauty guides from Blend Hair Boutique in Plantation, Florida. Learn about balayage, color correction, keratin treatments, extensions, and more.',
    url: CANONICAL,
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Beauty Resource Center — Blend Hair Boutique',
      description: 'Hair and beauty education from the professionals at Blend Hair Boutique in Plantation, Florida.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Beauty Resource Center', item: CANONICAL },
      ],
    },
  ],
}

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BlogContent />
    </>
  )
}

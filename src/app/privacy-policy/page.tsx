import type { Metadata } from 'next'
import PrivacyPolicyContent from '@/components/pages/PrivacyPolicyContent'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/privacy-policy`

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Blend Hair Boutique, Plantation FL collects, uses, and protects your personal information, including data handled through our Fresha booking platform.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Privacy Policy | Blend Hair Boutique',
    description:
      'How Blend Hair Boutique, Plantation FL collects, uses, and protects your personal information.',
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
      name: 'Privacy Policy | Blend Hair Boutique',
      description: 'How Blend Hair Boutique in Plantation, Florida collects, uses, and protects client and website visitor information.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#business` },
      inLanguage: 'en',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: CANONICAL },
      ],
    },
  ],
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PrivacyPolicyContent />
    </>
  )
}

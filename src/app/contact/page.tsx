import type { Metadata } from 'next'
import ContactContent from '@/components/pages/ContactContent'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Contact & Location · Plantation, FL',
  description:
    'Contact Blend Hair Boutique in Plantation, FL. Book online 24/7, call (754) 206-3501, or visit us at 10035 Cleary Blvd, Plantation, FL 33324. Open Mon 10–5, Tue–Sat 10–7.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Contact & Location | Blend Hair Boutique, Plantation, FL',
    description: 'Contact Blend Hair Boutique in Plantation, FL. Book online 24/7, call (754) 206-3501, or visit us at 10035 Cleary Blvd, Plantation, FL 33324.',
    url: `${SITE_URL}/contact`,
  },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${SITE_URL}/contact`,
  url: `${SITE_URL}/contact`,
  name: 'Contact Blend Hair Boutique',
  description: 'Contact Blend Hair Boutique in Plantation, FL. Book an appointment online, call (754) 206-3501, WhatsApp (954) 544-6792, or visit us at 10035 Cleary Blvd, Plantation, FL 33324. Open Monday–Saturday.',
  mainEntity: { '@id': `${SITE_URL}/#business` },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactContent />
    </>
  )
}

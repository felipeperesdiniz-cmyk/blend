import type { Metadata } from 'next'
import FAQContent from '@/components/pages/FAQContent'
import { faqEn } from '@/data/faq/en'
import { FAQ_SECTION_KEYS } from '@/data/faq'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/faq`

export const metadata: Metadata = {
  title: 'FAQ | Blend Hair Boutique, Plantation, FL Hair Salon Questions Answered',
  description:
    'Answers to 130+ questions about Blend Hair Boutique in Plantation, FL: booking, policies, balayage, keratin, extensions, haircuts, nails, brows, lashes, facials, waxing, and makeup. 4.9★ salon.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'FAQ | Blend Hair Boutique Plantation, FL: 130+ Questions Answered',
    description: 'All your questions about Blend Hair Boutique answered: salon policies, hair, nails, brows, lashes, skincare, and South Florida hair care.',
    url: CANONICAL,
  },
}

// Schema mirrors the English copy — the canonical URL is the English page, and the
// language switcher is client-side only (no separate localized URLs to mark up).
const allFaqsFlat = FAQ_SECTION_KEYS.flatMap((key) => faqEn.sections[key].faqs)

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'FAQ | Blend Hair Boutique Plantation, FL',
      description: '130+ questions answered about salon policies, balayage, keratin, extensions, haircuts, nails, brows, lashes, facials, waxing, makeup, and South Florida hair care at Blend Hair Boutique.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#business` },
      inLanguage: ['en', 'pt', 'es'],
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'FAQ', item: CANONICAL },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faqpage`,
      mainEntity: allFaqsFlat.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <FAQContent />
    </>
  )
}

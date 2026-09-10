import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LandingPage from '@/components/pages/LandingPage'
import {
  LANDING_COPY, LANDING_SHARED, LANDING_SLUGS, LANDING_IMAGES,
  LANDING_CANONICAL_OVERRIDE,
} from '@/data/landing'
import { OG_IMAGE } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'

const SITE_URL = 'https://www.blendhairboutique.com'
const LANG = 'pt' as const

/**
 * All twenty Portuguese landing pages from one file.
 *
 * A static segment beats a dynamic one at the same level in the App Router, so
 * /pt/about and /pt/services keep their own folders and only the landing
 * slugs fall through to here. generateStaticParams limits that fall-through to
 * the twenty slugs the copy actually defines, so anything else 404s rather
 * than rendering an empty template.
 */
export function generateStaticParams() {
  return LANDING_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params
  const copy = LANDING_COPY[LANG]?.[slug]
  if (!copy) return {}

  return {
    title: copy.title,
    description: copy.description,
    // The two "best-" pages credit their primary instead of themselves.
    alternates: hreflang(`/${LANDING_CANONICAL_OVERRIDE[slug] ?? slug}`, LANG),
    openGraph: {
      images: [OG_IMAGE],
      title: copy.ogTitle,
      description: copy.ogDescription,
      url: `${SITE_URL}/pt/${slug}`,
      locale: OG_LOCALE.pt,
    },
  }
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const copy = LANDING_COPY[LANG]?.[slug]
  if (!copy) notFound()

  const url = `${SITE_URL}/pt/${slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: copy.serviceName,
        description: copy.serviceDescription,
        inLanguage: 'pt-BR',
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: [
          { '@type': 'City', name: 'Plantation, FL' },
          { '@type': 'AdministrativeArea', name: 'Broward County, FL' },
        ],
        url,
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: 'pt-BR',
        mainEntity: copy.faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/pt` },
          { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${SITE_URL}/pt/services` },
          { '@type': 'ListItem', position: 3, name: copy.breadcrumb, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingPage
        copy={copy}
        shared={LANDING_SHARED[LANG]}
        image={LANDING_IMAGES[slug]}
      />
    </>
  )
}

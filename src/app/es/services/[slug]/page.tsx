import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICES } from '@/data/services'
import ServiceDetailContent from '@/components/pages/ServiceDetailContent'
import { OG_IMAGE, pageTitle } from '@/data/constants'
import { hreflang, OG_LOCALE } from '@/data/locales'
import { T } from '@/data/translations'

const SITE_URL = 'https://www.blendhairboutique.com'
const LANG = 'es' as const

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }))
}

/**
 * The Spanish service pages.
 *
 * SERVICES carries the structure (id, image, category) and translations.ts
 * carries every word, index-aligned with it — so the localised title and
 * description come from servicesData at the same position, and the page body
 * needs nothing but the id, because ServiceDetailContent reads its copy from
 * the language context, which is derived from this URL's /es prefix.
 */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params
  const i = SERVICES.findIndex((s) => s.id === slug)
  if (i < 0) return {}
  const sd = T[LANG].servicesData[i]
  const title = `${sd.title} · Plantation, FL`

  return {
    title: pageTitle(title),
    description: sd.description,
    alternates: hreflang(`/services/${slug}`, LANG),
    openGraph: {
      images: [OG_IMAGE],
      title: `${sd.title} | Blend Hair Boutique`,
      description: sd.description,
      url: `${SITE_URL}/es/services/${slug}`,
      locale: OG_LOCALE.es,
    },
  }
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const i = SERVICES.findIndex((s) => s.id === slug)
  if (i < 0) notFound()
  const sd = T[LANG].servicesData[i]
  const url = `${SITE_URL}/es/services/${slug}`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: sd.title,
        description: sd.description,
        inLanguage: 'es',
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: { '@type': 'City', name: 'Plantation, FL' },
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/es` },
          { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE_URL}/es/services` },
          { '@type': 'ListItem', position: 3, name: sd.title, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServiceDetailContent id={slug} />
    </>
  )
}

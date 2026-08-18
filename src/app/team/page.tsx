import type { Metadata } from 'next'
import { TEAM } from '@/data/team'
import TeamContent from '@/components/pages/TeamContent'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Our Hair & Beauty Team | Blend Hair Boutique, Plantation FL',
  description:
    'Meet the stylists and beauty specialists at Blend Hair Boutique in Plantation, FL. Multilingual team (English, Portuguese, Spanish) specializing in color, balayage, smoothing, extensions, nails, and bridal beauty.',
  alternates: { canonical: `${SITE_URL}/team` },
  openGraph: {
    title: 'Our Hair & Beauty Team | Blend Hair Boutique, Plantation FL',
    description: 'Meet the stylists and beauty specialists at Blend Hair Boutique in Plantation, FL. Multilingual team specializing in color, balayage, smoothing, extensions, nails, and bridal beauty.',
    url: `${SITE_URL}/team`,
  },
}

const personSchemas = TEAM.map((member) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/team/${member.id}#person`,
  name: member.name,
  jobTitle: member.specialty,
  worksFor: { '@id': `${SITE_URL}/#business` },
  knowsLanguage: member.languages.split(', '),
  description: member.bio,
  url: `${SITE_URL}/team/${member.id}`,
}))

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Our Team', item: `${SITE_URL}/team` },
  ],
}

export default function TeamPage() {
  return (
    <>
      {personSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TeamContent />
    </>
  )
}

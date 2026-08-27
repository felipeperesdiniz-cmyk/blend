import type { MetadataRoute } from 'next'
import { ARTICLES } from '@/data/articles'
import { SERVICES } from '@/data/services'
import { TEAM } from '@/data/team'

const SITE_URL = 'https://www.blendhairboutique.com'

// Replaces the hand-maintained public/sitemap.xml, whose newest lastmod was
// five weeks behind the content by the time anyone noticed. Routes are derived
// from the same data the pages render from, so adding a stylist or an article
// updates this on the next build.
const OWNER_IDS = ['juliana', 'fernanda']

const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: '', priority: 1.0 },
  { path: '/services', priority: 0.9 },
  { path: '/gallery', priority: 0.8 },
  { path: '/team', priority: 0.8 },
  { path: '/about', priority: 0.7 },
  { path: '/contact', priority: 0.9 },
  { path: '/reviews', priority: 0.8 },
  { path: '/faq', priority: 0.8 },
  { path: '/hair-salon-plantation-fl', priority: 0.95 },
  { path: '/balayage-plantation-fl', priority: 0.9 },
  { path: '/hair-color-plantation', priority: 0.9 },
  { path: '/highlights-plantation-fl', priority: 0.85 },
  { path: '/haircuts-plantation-fl', priority: 0.85 },
  { path: '/keratin-treatment-plantation', priority: 0.9 },
  { path: '/hair-extensions-plantation', priority: 0.85 },
  { path: '/blowout-plantation-fl', priority: 0.8 },
  { path: '/color-correction-plantation-fl', priority: 0.85 },
  { path: '/blonding-specialist-plantation', priority: 0.8 },
  { path: '/bridal-hair-south-florida', priority: 0.85 },
  { path: '/nails-plantation-fl', priority: 0.8 },
  { path: '/waxing-plantation-fl', priority: 0.8 },
  { path: '/facials-plantation-fl', priority: 0.8 },
  { path: '/makeup-plantation-fl', priority: 0.8 },
  { path: '/micropigmentation-plantation-fl', priority: 0.8 },
  { path: '/luxury-hair-salon-plantation-fl', priority: 0.9 },
  { path: '/brazilian-hair-salon-plantation-fl', priority: 0.9 },
  { path: '/best-balayage-plantation-fl', priority: 0.9 },
  { path: '/best-hair-color-plantation-fl', priority: 0.9 },
  { path: '/gift-cards', priority: 0.8 },
  { path: '/blog', priority: 0.9 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    ...STATIC_ROUTES.map(({ path, priority }) => ({
      url: `${SITE_URL}${path}` || SITE_URL,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority,
    })),
    ...SERVICES.map((service) => ({
      url: `${SITE_URL}/services/${service.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...TEAM.filter((member) => !OWNER_IDS.includes(member.id)).map((member) => ({
      url: `${SITE_URL}/team/${member.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...ARTICLES.map((article) => ({
      url: `${SITE_URL}/blog/${article.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}

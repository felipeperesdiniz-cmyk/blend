import type { MetadataRoute } from 'next'
import { ARTICLES } from '@/data/articles'
import { SERVICES } from '@/data/services'
import { TEAM } from '@/data/team'
import { LOCALIZED_ROUTES, localeUrls } from '@/data/locales'

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
  // /best-balayage-plantation-fl and /best-hair-color-plantation-fl are
  // deliberately absent. Both now canonicalise to their primary counterparts
  // (/balayage-plantation-fl and /hair-color-plantation), and submitting a URL
  // that points its canonical somewhere else asks Google to index a page while
  // simultaneously telling it not to. The pages stay live and reachable; they
  // are just no longer put forward as index candidates.
  { path: '/gift-cards', priority: 0.8 },
  { path: '/blog', priority: 0.9 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // The eight routes that exist in all three languages. Each English entry
  // carries its alternates so the pt/es URLs are discoverable from the sitemap
  // as well as from the page head, and each locale URL is listed in its own
  // right. Slightly below the English priority: these are translations of the
  // same page, not additional pages competing with it.
  const localized = (LOCALIZED_ROUTES as readonly string[]).map(localeUrls)
  const languagesFor = (u: { en: string; pt: string; es: string }) => ({
    'en-US': u.en,
    'pt-BR': u.pt,
    es: u.es,
  })

  return [
    ...STATIC_ROUTES.map(({ path, priority }) => {
      const alt = localized.find((u) => u.en === `${SITE_URL}${path || '/'}`)
      return {
        url: `${SITE_URL}${path}` || SITE_URL,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority,
        ...(alt ? { alternates: { languages: languagesFor(alt) } } : {}),
      }
    }),
    ...localized.flatMap((u) =>
      (['pt', 'es'] as const).map((l) => ({
        url: u[l],
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: u.en === `${SITE_URL}/` ? 0.9 : 0.7,
        alternates: { languages: languagesFor(u) },
      })),
    ),
    // Service detail pages, in all three languages. These carry the queries
    // that convert — "balayage", "queratina", "alisamento" — so the pt and es
    // URLs are submitted alongside the English rather than left to discovery.
    ...SERVICES.flatMap((service) => {
      const u = localeUrls(`/services/${service.id}`)
      const languages = { 'en-US': u.en, 'pt-BR': u.pt, es: u.es }
      return (['en', 'pt', 'es'] as const).map((l) => ({
        url: u[l],
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: l === 'en' ? 0.7 : 0.6,
        alternates: { languages },
      }))
    }),
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

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ARTICLES } from '@/data/articles'
import ArticleContent from '@/components/pages/ArticleContent'

const SITE_URL = 'https://www.blendhairboutique.com'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = ARTICLES.find((a) => a.slug === slug)
  if (!article) return {}
  const canonical = `${SITE_URL}/blog/${slug}`
  return {
    title: `${article.title} | Blend Hair Boutique`,
    description: article.excerpt,
    alternates: { canonical },
    openGraph: {
      title: `${article.title} | Blend Hair Boutique`,
      description: article.excerpt,
      url: canonical,
      type: 'article',
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = ARTICLES.find((a) => a.slug === slug)
  if (!article) notFound()

  const canonical = `${SITE_URL}/blog/${slug}`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${canonical}#article`,
        headline: article.title,
        description: article.excerpt,
        datePublished: article.publishedAt,
        dateModified: article.publishedAt,
        image: `${SITE_URL}/og-image.jpg`,
        author: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#business`,
          name: 'Blend Hair Boutique',
          url: SITE_URL,
        },
        publisher: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#business`,
          name: 'Blend Hair Boutique',
          url: SITE_URL,
          logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
        },
        mainEntityOfPage: { '@id': `${canonical}#webpage` },
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: `${article.title} | Blend Hair Boutique`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonical}#faq`,
        mainEntity: article.faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Beauty Resource Center', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: article.title, item: canonical },
        ],
      },
    ],
  }

  return <ArticleContent article={article} schema={schema} />
}

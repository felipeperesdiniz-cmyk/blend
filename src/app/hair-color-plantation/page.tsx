import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS, OG_IMAGE } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/hair-color-plantation`

export const metadata: Metadata = {
  title: 'Hair Color Services in Plantation, FL',
  description:
    'Professional hair color services in Plantation, Florida at Blend Hair Boutique. All-over color, highlights, glossing, toning, balayage, and color correction. 4.9★ rated salon. Book online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    images: [OG_IMAGE],
    title: 'Hair Color Services in Plantation, FL | Blend Hair Boutique',
    description: 'Professional hair color in Plantation, FL. All-over color, highlights, glossing, toning, and color correction at Blend Hair Boutique. Book online.',
    url: CANONICAL,
  },
}

const faqs = [
  { q: 'What hair color services does Blend Hair Boutique offer?', a: 'Blend Hair Boutique offers a comprehensive range of hair color services including all-over color, highlights, lowlights, balayage, ombre, color glossing, toning, and professional color correction. Every service is customized to your hair type, skin tone, and lifestyle.' },
  { q: 'How long does all-over hair color last?', a: 'All-over permanent hair color typically lasts 4–6 weeks before roots become noticeable and 8–12 weeks before a full reapplication is needed. Semi-permanent color tends to fade gradually over 4–8 washes, making it ideal for clients who want less commitment.' },
  { q: 'What is a hair gloss treatment?', a: 'A hair gloss is a semi-permanent color treatment that adds shine, enhances your natural color, and neutralizes brassiness or unwanted tones. It\'s applied over your existing color or as a standalone treatment for luminous, healthy-looking hair. Results last approximately 4–6 weeks.' },
  { q: 'Can Blend Hair Boutique fix a bad color job?', a: 'Yes. Color correction is one of our specialties at Blend Hair Boutique. Whether you\'re dealing with brassiness, uneven color, damage from a previous treatment, or an unwanted tone, our colorists will assess your hair and create a safe, strategic correction plan.' },
  { q: 'Do you offer color services for gray hair coverage?', a: 'Absolutely. Blend Hair Boutique offers seamless gray coverage in a range of formulas: full coverage, blended coverage, and gray blending techniques that soften the transition. Our colorists match your natural color precisely for a natural, polished result.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Hair Color Services in Plantation, FL',
      description: 'Professional hair color services at Blend Hair Boutique in Plantation, Florida. All-over color, highlights, balayage, glossing, toning, and color correction.',
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: { '@type': 'City', name: 'Plantation, FL' },
      url: CANONICAL,
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question', name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Hair Color in Plantation', item: CANONICAL },
      ],
    },
  ],
}

export default function HairColorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Plantation, Florida · Color Artistry
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '16ch' }}>
              Hair <em>Color</em> in Plantation, FL
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Blend Hair Boutique is Plantation&apos;s premier destination for professional hair color: all-over color, highlights, balayage, glossing, toning, and color correction. Our colorists craft custom formulas tailored to your hair texture, skin tone, and maintenance lifestyle.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">Book Color Appointment</a>
              <a href={BUSINESS.phoneHref} className="btn btn--outline-light">Call (754) 206-3501</a>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>Our Color Services</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Custom Color for<br /><em>Every Client</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2rem' }}>
              {[
                { name: 'All-Over Color', desc: 'Full-coverage hair color using professional permanent or demi-permanent formulas. Customized shade, coverage, and undertone, tailored to your skin tone and natural hair.' },
                { name: 'Highlights & Lowlights', desc: 'Dimensional foil highlights or lowlights to add depth, contrast, and movement. More defined and precise than balayage, and ideal for clients wanting bolder dimension.' },
                { name: 'Hair Gloss & Toning', desc: 'Semi-permanent gloss treatments for intense shine, tonal refresh, and brassiness correction. A great maintenance service between full color appointments.' },
                { name: 'Color Correction', desc: 'Professional correction for uneven color, unwanted tones, brassiness, and previous color damage. Strategic, multi-step planning ensures the best result for your hair\'s health.' },
                { name: 'Gray Coverage', desc: 'Seamless gray blending or full coverage options. We match your natural shade precisely and can blend grays softly for a natural, low-maintenance result.' },
                { name: 'Balayage & Ombre', desc: 'Freehand color painting for sun-kissed, dimensional results with natural-looking grow-out. Blend Hair Boutique\'s most requested color service.' },
              ].map((s) => (
                <div key={s.name} style={{ padding: '1.75rem', border: '1px solid var(--line)' }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.6rem' }}>{s.name}</h3>
                  <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-2)', fontWeight: 300 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--beige" id="faq">
          <div className="container" style={{ maxWidth: '820px' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Hair Color <em>FAQ</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Book your <em>color appointment</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '2.5rem' }}>
              Blend Hair Boutique · 10035 Cleary Blvd, Plantation, FL 33324 · (754) 206-3501
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book Online</a>
              <Link href="/balayage-plantation-fl" className="btn btn--outline">Balayage Services</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

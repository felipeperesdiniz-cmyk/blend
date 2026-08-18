import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/blonding-specialist-plantation`

export const metadata: Metadata = {
  title: 'Blonding Specialist in Plantation, FL | Blend Hair Boutique',
  description:
    'Expert blonde hair coloring and blonding specialist in Plantation, Florida. Full bleach, highlights, toning, and blonde corrections at Blend Hair Boutique. 4.9★ rated. Book online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Blonding Specialist in Plantation, FL | Blend Hair Boutique',
    description: 'Expert blonde hair and blonding specialist in Plantation, FL. Full bleach, highlights, toning, and blonde corrections. Book online.',
    url: CANONICAL,
  },
}

const faqs = [
  { q: 'What blonding services does Blend Hair Boutique offer?', a: 'Blend Hair Boutique offers full blonding, partial highlights, bleach and tone, platinum blonde, icy blonde, honey blonde, and blonde color corrections. Each service is customized to your current hair color, texture, and target shade.' },
  { q: 'Is bleaching safe for my hair?', a: 'When performed by a trained colorist, bleaching can be done safely with minimal damage. At Blend, we conduct a thorough hair health assessment before any bleaching service. We use bond-protecting additives and professional-grade formulas to maintain hair integrity throughout the process.' },
  { q: 'How long does it take to go blonde?', a: 'Going blonde in a single session depends on your starting color. Clients with light brown or already lightened hair can often achieve their target in one visit. Those with dark hair may require multiple sessions over several weeks to lift safely while maintaining hair health. We\'ll set realistic expectations during your consultation.' },
  { q: 'How often do I need to tone my blonde hair?', a: 'Toning typically lasts 4–8 weeks before brassy or yellow tones return. We recommend a professional gloss or toning service every 4–6 weeks to keep your blonde fresh and vibrant. Our colorists will also recommend the right at-home purple shampoo for your specific blonde shade.' },
  { q: 'What is the difference between blonde highlights and a full blonding service?', a: 'Highlights create dimension by lightening specific sections of your hair, leaving darker roots and mid-lengths intact. Full blonding involves lightening all or most of the hair for an overall blonde result. Our colorists will recommend the right approach based on your current color and the look you want to achieve.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Blonding Specialist in Plantation, FL',
      description: 'Expert blonding services at Blend Hair Boutique in Plantation, Florida: bleach and tone, highlights, balayage, and blonde color corrections performed by trained color specialists.',
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
        { '@type': 'ListItem', position: 3, name: 'Blonding Specialist', item: CANONICAL },
      ],
    },
  ],
}

export default function BlondingSpecialistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Plantation, Florida · Color Expertise
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '16ch' }}>
              <em>Blonding</em> Specialist in Plantation, FL
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Blend Hair Boutique is Plantation&apos;s trusted destination for blonde hair, from sun-kissed highlights and balayage to full platinum transformations. Our color specialists are trained in bleach and tone, toning, and blonde color correction for every starting color.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">Book Blonding Appointment</a>
              <a href={BUSINESS.phoneHref} className="btn btn--outline-light">Call (754) 206-3501</a>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>Blonding Services</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Every Shade of <em>Blonde</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2rem' }}>
              {[
                { name: 'Full Blonding', desc: 'Complete blonde transformation from root to tip. Achievable in one session for lighter starting colors, or safely executed in multiple stages for dark hair.' },
                { name: 'Bleach & Tone', desc: 'Precision lightening followed by a professional toning treatment to achieve your exact target: platinum, icy, honey, or champagne blonde.' },
                { name: 'Blonde Highlights', desc: 'Dimensional blonde highlights woven through your natural color for a sunlit, multi-tonal effect with a natural-looking grow-out.' },
                { name: 'Blonde Color Correction', desc: 'Specializing in correcting brassiness, orange tones, patchy color, and previous blonde gone wrong, safely and precisely.' },
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
              Blonding <em>FAQ</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Book your <em>blonde transformation</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '2.5rem' }}>
              Blend Hair Boutique · 10035 Cleary Blvd, Plantation, FL 33324
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book Online</a>
              <Link href="/services/balayage-highlights" className="btn btn--outline">View Color Services</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/best-balayage-plantation-fl`

export const metadata: Metadata = {
  title: 'Best Balayage in Plantation, FL | Blend Hair Boutique',
  description:
    'Looking for the best balayage in Plantation, FL? Blend Hair Boutique has 1,230+ Google reviews and a 4.9★ rating. Expert hand-painted balayage by certified color specialists. Book online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Best Balayage in Plantation, FL | Blend Hair Boutique',
    description:
      'Plantation\'s top-rated balayage salon. 1,230+ Google reviews · 4.9★ · Expert hand-painted color by certified colorists. Book your balayage appointment at Blend Hair Boutique.',
    url: CANONICAL,
  },
}

const faqs = [
  {
    q: 'What should I look for when choosing a balayage salon?',
    a: 'The most important factors are a colorist\'s portfolio (ask to see real client results, not stock photos), their ability to perform a thorough consultation, their knowledge of color theory and hair health, and client reviews. A great balayage colorist will be honest about what your hair can achieve in a single session and set realistic expectations before touching your hair.',
  },
  {
    q: 'Why is Blend Hair Boutique considered one of the best balayage salons in Plantation?',
    a: 'Blend has a 4.9-star rating across over 1,230 Google reviews — the vast majority of which mention color and balayage services specifically. Our colorists are trained in multiple balayage techniques (soft, bold, ombre, lived-in) and use a mandatory consultation process to ensure every result is personalized. We also use professional-grade color lines and Kérastase aftercare to protect hair integrity.',
  },
  {
    q: 'How do I know if my hair is a good candidate for balayage?',
    a: 'Most hair types and colors are candidates for balayage. The technique is especially flattering on medium to dark hair where natural contrast can be created. Very light or previously highlighted hair may benefit more from toning or a different technique. If your hair has significant damage or color build-up, a consultation at Blend will help determine the safest, most effective path to your desired result.',
  },
  {
    q: 'How much does balayage cost at Blend Hair Boutique in Plantation?',
    a: 'Balayage pricing at Blend varies based on hair length, density, and the complexity of your color goal. We provide transparent pricing — your stylist will give you a full quote during the consultation before any color is applied. Book online or call (754) 206-3501 to schedule a consultation and get an accurate estimate for your specific hair.',
  },
  {
    q: 'How long does balayage last before needing a touch-up?',
    a: 'One of balayage\'s biggest advantages is how naturally it grows out — most clients can go 12–16 weeks between appointments, and many stretch to 6 months with a simple toning gloss at the 8–10 week mark. Your stylist at Blend will give you a personalized maintenance timeline based on your color goals and lifestyle.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/best-balayage-plantation-fl#service`,
      name: 'Best Balayage in Plantation, FL',
      description: 'Top-rated balayage services at Blend Hair Boutique in Plantation, Florida. Expert hand-painted color by certified colorists.',
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: [
        { '@type': 'City', name: 'Plantation, FL' },
        { '@type': 'AdministrativeArea', name: 'Broward County, FL' },
      ],
      url: CANONICAL,
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Best Balayage Plantation FL', item: CANONICAL },
      ],
    },
  ],
}

export default function BestBalayagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              4.9★ · 1,230+ Google Reviews · Plantation, FL
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '18ch' }}>
              The Best Balayage<br /><em>in Plantation, FL</em>
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '52ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Plantation's most-reviewed salon for balayage. Our certified colorists deliver custom hand-painted color designed for your hair texture, skin tone, and maintenance lifestyle — results that look effortless because they are crafted with precision.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
                Book Balayage Now
              </a>
              <a href={BUSINESS.phoneHref} className="btn btn--outline-light">
                Call (754) 206-3501
              </a>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 5rem)', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
                  Why Blend
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Balayage That<br /><em>Actually Looks Natural</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  Not all balayage is created equal. The difference between a result that looks painted-on and one that looks like you spent a summer at the beach comes down to technique, color theory knowledge, and — most importantly — a colorist who takes the time to understand your hair before touching it.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  At Blend, every balayage appointment begins with a consultation. Your colorist evaluates your hair's natural base, texture, density, and growth pattern — then maps a custom color placement plan. The result grows out naturally, requires fewer touch-ups, and adapts beautifully to South Florida's sun and lifestyle.
                </p>
              </div>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80"
                  alt="Best balayage results at Blend Hair Boutique in Plantation, FL"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Our Balayage Techniques
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Every Style of<br /><em>Balayage Done Right</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Soft Balayage', body: 'Subtle, natural-looking dimension with soft transitions — ideal for first-timers or low-maintenance color goals.' },
                { title: 'Bold Balayage', body: 'High-contrast, bright balayage for those who want visible sun-kissed brightness and defined dimension.' },
                { title: 'Lived-In Color', body: 'A seamless blend of your natural base and lighter ends — effortlessly grown out from day one.' },
                { title: 'Ombré', body: 'A deliberate, gradient fade from dark roots to lighter ends — bold and modern with soft or dramatic transitions.' },
              ].map((s) => (
                <div key={s.title} style={{ borderTop: '1px solid var(--line)', paddingTop: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--text-2)', fontWeight: 300 }}>{s.body}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <Link href="/balayage-plantation-fl" className="btn btn--primary">Learn More About Balayage</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Related Services
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Complete Your<br /><em>Color Experience</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Highlights', body: 'Foil highlights for precise, defined brightness and lift.', href: '/highlights-plantation-fl' },
                { title: 'Hair Color', body: 'All-over color, root touch-ups, and custom formulation.', href: '/hair-color-plantation' },
                { title: 'Color Correction', body: 'Fix unwanted tones or previous color results with expert correction.', href: '/color-correction-plantation-fl' },
                { title: 'Blonding', body: 'Specialized lightening for platinum, ash, and ultra-blonde results.', href: '/blonding-specialist-plantation' },
              ].map((s) => (
                <Link key={s.title} href={s.href} style={{ textDecoration: 'none', color: 'inherit', borderTop: '1px solid var(--line)', paddingTop: '1.5rem', display: 'block' }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--text-2)', fontWeight: 300 }}>{s.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Serving South Florida
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, textAlign: 'center', maxWidth: '56ch', margin: '0 auto 2.5rem' }}>
              Blend Hair Boutique is at 10035 Cleary Blvd, Plantation, FL 33324 — a short drive from Davie, Weston, Fort Lauderdale, Sunrise, Cooper City, Pembroke Pines, Miramar, Boca Raton, and Miami.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['Plantation, FL', 'Davie, FL', 'Weston, FL', 'Fort Lauderdale, FL', 'Sunrise, FL', 'Cooper City, FL', 'Pembroke Pines, FL', 'Miramar, FL', 'Boca Raton, FL'].map((city) => (
                <span key={city} style={{ fontSize: '0.75rem', padding: '0.4rem 1rem', border: '1px solid var(--line)', color: 'var(--text-2)', letterSpacing: '0.05em' }}>{city}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>FAQ</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Balayage <em>Questions</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>4.9 ★ · 1,230+ Google Reviews</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Book your balayage<br /><em>at Blend today</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book online 24/7 or call (754) 206-3501. Blend Hair Boutique is at 10035 Cleary Blvd, Plantation, FL 33324.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book Balayage Online</a>
              <Link href="/balayage-plantation-fl" className="btn btn--outline">Balayage Details</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

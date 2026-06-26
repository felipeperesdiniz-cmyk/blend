import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/reviews`

export const metadata: Metadata = {
  title: 'Reviews | Blend Hair Boutique — 4.9★ · 1,218 Google Reviews in Plantation, FL',
  description:
    'Read what Plantation, FL clients say about Blend Hair Boutique. 4.9★ rated across 1,218 Google reviews. Balayage, haircuts, keratin, nails, and more. See why we\'re Broward\'s most-loved salon.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Reviews | Blend Hair Boutique — 4.9★ · 1,218 Google Reviews',
    description: 'See why Blend Hair Boutique in Plantation, FL has a 4.9★ rating from 1,218 Google reviews. Read client testimonials and book your visit.',
    url: CANONICAL,
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Client Reviews — Blend Hair Boutique',
      description: 'Client reviews and testimonials for Blend Hair Boutique, luxury hair salon in Plantation, Florida.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#business` },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Reviews', item: CANONICAL },
        ],
      },
    },
    {
      '@type': 'AggregateRating',
      '@id': `${CANONICAL}#rating`,
      itemReviewed: { '@id': `${SITE_URL}/#business` },
      ratingValue: '4.9',
      reviewCount: '1218',
      bestRating: '5',
      worstRating: '1',
    },
  ],
}

const testimonials = [
  {
    name: 'Melissa R.',
    service: 'Balayage & Haircut',
    rating: 5,
    text: 'I got a balayage done with Beatriz as well as a haircut and I can\'t thank her enough. She listened to my concerns and did exactly what I wanted, which is hard to find in a hairstylist.',
  },
  {
    name: 'Lynn R.',
    service: 'Hair Color & Style',
    rating: 5,
    text: 'Roger and his assistant do an amazing job!!!',
  },
  {
    name: 'Doug M.',
    service: 'Haircut & Style',
    rating: 5,
    text: 'Really like the way Debora cuts and styles my hair. Everybody is really nice.',
  },
  {
    name: 'Kris S.',
    service: 'Color & Style',
    rating: 5,
    text: 'Nana and Olivia always make me feel welcome and take great care of me.',
  },
  {
    name: 'Pamela B.',
    service: 'Haircut & Color',
    rating: 5,
    text: 'I love the cut and the color. Lea really listened to what I wanted and delivered on and exceeded my expectations.',
  },
  {
    name: 'Andrea A.',
    service: 'Manicure',
    rating: 5,
    text: 'My manicure is the BEST! Ana takes her time and the results always last.',
  },
  {
    name: 'Jena R.',
    service: 'Haircut & Color',
    rating: 5,
    text: 'I lost my hairdresser over two years ago and live in Weston, so I was nervous to find someone new. So very happy I found Blend — I won\'t be going anywhere else.',
  },
  {
    name: 'Rebecca A.',
    service: 'Client Experience',
    rating: 5,
    text: 'Blend is the best hair salon in South Florida and the team is super professional and sweet.',
  },
  {
    name: 'Cynthia M.',
    service: 'Haircut',
    rating: 5,
    text: 'Great haircuts! They use good products and the cappuccino is always made perfect.',
  },
  {
    name: 'Roxy V.',
    service: 'Salon Experience',
    rating: 5,
    text: 'Everyone is really nice, the place is beautiful, and they are very knowledgeable. I\'m always happy after I go there.',
  },
]

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Client Reviews · Plantation, FL
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '18ch' }}>
              What Our <em>Clients</em> Say
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Blend Hair Boutique has earned a 4.9-star rating from over 1,218 Google reviews — not through advertising, but through consistent, exceptional work delivered one client at a time since 2012.
            </p>
          </div>
        </header>

        {/* Rating summary */}
        <section style={{ background: 'var(--bg-soft)', padding: '4rem 0' }}>
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 300, lineHeight: 1, color: 'var(--ink)', letterSpacing: '-0.03em' }}>4.9</p>
                <p style={{ color: 'var(--gold)', fontSize: '1.4rem', letterSpacing: '0.1em', marginTop: '0.25rem' }}>★★★★★</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', marginTop: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 500 }}>Google Rating</p>
              </div>
              <div style={{ width: '1px', height: '80px', background: 'var(--line)' }} />
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 300, lineHeight: 1, color: 'var(--ink)', letterSpacing: '-0.03em' }}>1,218</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', marginTop: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 500 }}>Verified Reviews</p>
              </div>
              <div style={{ width: '1px', height: '80px', background: 'var(--line)' }} />
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 300, lineHeight: 1, color: 'var(--ink)', letterSpacing: '-0.03em' }}>13+</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', marginTop: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 500 }}>Years in Plantation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials grid */}
        <section className="section">
          <div className="container" style={{ maxWidth: '1100px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Client Testimonials
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Real Stories.<br /><em>Real Results.</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  style={{
                    padding: '2rem',
                    border: '1px solid var(--line)',
                    background: 'var(--white)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <p style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontWeight: 400, color: 'var(--text)' }}>{t.name}</p>
                      <p style={{ fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '0.2rem' }}>{t.service}</p>
                    </div>
                    <span style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>{'★'.repeat(t.rating)}</span>
                  </div>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--text-2)', fontWeight: 300, fontStyle: 'italic' }}>"{t.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google reviews link */}
        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>On Google</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Read All 1,218<br /><em>Google Reviews</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Every one of our reviews is real, verified, and earned. See what Broward County clients say about Blend Hair Boutique on Google.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://www.google.com/maps/search/Blend+Hair+Boutique+Plantation+FL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Read Google Reviews
              </a>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                Book an Appointment
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Join 1,218+ Happy Clients
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Your turn to experience<br /><em>the Blend difference.</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book online 24/7 or call (754) 206-3501. Blend Hair Boutique, 10035 Cleary Blvd, Plantation, FL 33324.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book an Appointment</a>
              <Link href="/hair-salon-plantation-fl" className="btn btn--outline">About Our Salon</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

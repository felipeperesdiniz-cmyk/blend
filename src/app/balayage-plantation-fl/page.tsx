import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/balayage-plantation-fl`

export const metadata: Metadata = {
  title: 'Balayage in Plantation, FL | Blend Hair Boutique',
  description:
    'Expert balayage in Plantation, Florida at Blend Hair Boutique. Hand-painted, custom balayage, highlights, and ombre tailored to your hair texture and skin tone. 4.9★ rated salon. Book online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Balayage in Plantation, FL | Blend Hair Boutique',
    description: 'Expert balayage in Plantation, Florida at Blend Hair Boutique. Hand-painted, custom balayage, highlights, and ombre. 4.9★ rated salon. Book online.',
    url: CANONICAL,
  },
}

const faqs = [
  { q: 'How long does a balayage appointment take at Blend Hair Boutique?', a: 'Balayage appointments at Blend Hair Boutique typically take 2.5 to 4 hours, depending on your hair length, density, and the result you\'re aiming for. We provide a realistic time estimate during your consultation or booking.' },
  { q: 'What is the difference between balayage and highlights?', a: 'Balayage is a freehand painting technique that creates soft, sun-kissed color with no harsh lines — it grows out naturally and requires less frequent touch-ups. Traditional highlights use foils for more defined, uniform brightness. Our colorists will recommend the best technique for your goals during your consultation.' },
  { q: 'How do I maintain my balayage at home?', a: 'Use a sulfate-free shampoo to protect color longevity, apply a deep conditioning mask weekly, and use a UV-protective product before sun exposure. We recommend professional glossing treatments every 6–8 weeks to refresh vibrancy. Our team will provide a personalized home-care plan after your appointment.' },
  { q: 'Is balayage suitable for all hair types?', a: 'Yes — balayage can be adapted for straight, wavy, curly, fine, and thick hair. Our colorists at Blend Hair Boutique customize the technique, placement, and formula to work with your specific hair texture and natural color for results that look effortless and intentional.' },
  { q: 'What does balayage cost at Blend Hair Boutique in Plantation?', a: 'Balayage pricing at Blend Hair Boutique varies based on hair length, density, and the complexity of the color goal. Starting prices are available upon booking through our online system. We believe in transparent pricing — you\'ll receive a full quote during your consultation.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/balayage-plantation-fl#service`,
      name: 'Balayage in Plantation, FL',
      description: 'Custom hand-painted balayage, highlights, and ombre color services at Blend Hair Boutique in Plantation, Florida. Tailored to each client\'s hair texture, skin tone, and maintenance lifestyle.',
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: [
        { '@type': 'City', name: 'Plantation, FL' },
        { '@type': 'AdministrativeArea', name: 'Broward County, FL' },
        { '@type': 'AdministrativeArea', name: 'South Florida' },
      ],
      url: CANONICAL,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
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
        { '@type': 'ListItem', position: 3, name: 'Balayage in Plantation, FL', item: CANONICAL },
      ],
    },
  ],
}

export default function BalayagePlantationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Plantation, Florida · Broward County
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '16ch' }}>
              <em>Balayage</em> in Plantation, FL
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Blend Hair Boutique is a luxury balayage salon in Plantation, Florida, specializing in custom hand-painted color, highlights, and ombre. Our colorists create dimensional, sun-kissed results tailored to your hair texture and lifestyle — naturally beautiful, low-maintenance color that grows out gracefully.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
                Book Balayage Appointment
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
                  The Blend Difference
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Custom Color.<br /><em>Natural Results.</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  Balayage at Blend Hair Boutique begins with a thorough consultation — our colorists assess your natural hair color, texture, density, and growth patterns before any color is applied. We then hand-paint each section using a freehand technique that mimics how the sun naturally lightens hair, creating seamless transitions and dimension that look intentional, never overdone.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  The result grows out beautifully, requires fewer touch-ups than traditional highlights, and adapts to your lifestyle. Whether you want sun-kissed warmth, bold brightness, or subtle dimension, our colorists at Blend craft a formula made for you — using professional-grade color lines that protect hair integrity while delivering vibrant, lasting results.
                </p>
              </div>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
                  alt="Balayage hair color result at Blend Hair Boutique in Plantation, FL"
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
              What to Expect
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              The Balayage <em>Process</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                { step: '01', title: 'In-Depth Consultation', body: 'We review your hair history, natural color, texture, and maintenance lifestyle. We then map out a custom color plan.' },
                { step: '02', title: 'Color Application', body: 'Our colorist hand-paints each section using the freehand balayage technique — no foils, no harsh lines, just natural dimension.' },
                { step: '03', title: 'Processing & Toning', body: 'After processing, we apply a professional toner to dial in your exact shade — warm, cool, or perfectly neutral.' },
                { step: '04', title: 'Blowout & Style', body: 'We finish with a professional blowout to reveal your final result and show you exactly how to maintain your color at home.' },
              ].map((s) => (
                <div key={s.step} style={{ borderTop: '1px solid var(--line)', paddingTop: '1.5rem' }}>
                  <p style={{ fontSize: '0.82rem', letterSpacing: '0.2em', color: 'var(--gold)', fontWeight: 500, marginBottom: '0.6rem' }}>{s.step}</p>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.6rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-2)', fontWeight: 300 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Areas We Serve
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1rem', textAlign: 'center' }}>
              Serving <em>South Florida</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, textAlign: 'center', maxWidth: '56ch', margin: '0 auto 2.5rem' }}>
              Blend Hair Boutique is located at 10035 Cleary Blvd in Plantation, FL 33324. We serve clients from across Broward County and South Florida, including Plantation, Davie, Weston, Fort Lauderdale, Sunrise, Cooper City, Pembroke Pines, Miramar, Boca Raton, and Miami.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['Plantation, FL', 'Davie, FL', 'Weston, FL', 'Fort Lauderdale, FL', 'Sunrise, FL', 'Cooper City, FL', 'Pembroke Pines, FL', 'Miramar, FL', 'Boca Raton, FL'].map((city) => (
                <span key={city} style={{ fontSize: '0.75rem', padding: '0.4rem 1rem', border: '1px solid var(--line)', color: 'var(--text-2)', letterSpacing: '0.05em' }}>{city}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--beige" id="faq">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>FAQ</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Balayage <em>Questions</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>4.9 ★ · 1,218 Google Reviews</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Ready to book your<br /><em>balayage in Plantation?</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book online 24/7 through our Fresha booking system, or call us at (754) 206-3501 to schedule a consultation at Blend Hair Boutique, 10035 Cleary Blvd, Plantation, FL 33324.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book Balayage Online</a>
              <Link href="/services" className="btn btn--outline">View All Services</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

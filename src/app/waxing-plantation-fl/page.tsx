import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/waxing-plantation-fl`

export const metadata: Metadata = {
  title: 'Waxing in Plantation, FL | Eyebrow Waxing & Body Waxing | Blend Hair Boutique',
  description:
    'Professional waxing services in Plantation, Florida: eyebrow waxing, facial waxing, full and partial body waxing at Blend Hair Boutique. Gentle, precise, and effective. 4.9★ · 1,230+ reviews. Book online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Waxing in Plantation, FL | Blend Hair Boutique',
    description: 'Eyebrow waxing, facial waxing, and body waxing in Plantation, FL at Blend Hair Boutique. Professional, gentle, precise. 4.9★. Book online.',
    url: CANONICAL,
  },
}

const faqs = [
  {
    q: 'What waxing services does Blend Hair Boutique offer?',
    a: 'We offer a full range of waxing services including eyebrow waxing, upper lip waxing, chin waxing, full facial waxing, underarm waxing, arm waxing, leg waxing, and bikini waxing. All services are performed by trained estheticians using professional-grade wax.',
  },
  {
    q: 'Does eyebrow waxing hurt?',
    a: 'There is minimal discomfort involved in eyebrow waxing. Most clients describe it as a quick, brief sting followed by immediate relief. We use a high-quality soft wax that adheres to hair and not skin, minimizing irritation. If you have sensitive skin, let your esthetician know and we\'ll take extra precautions.',
  },
  {
    q: 'How long does waxing last?',
    a: 'Waxing results typically last 3–6 weeks depending on your individual hair growth cycle. Over time, with regular waxing, many clients notice that regrowth becomes finer and sparser, making each session less uncomfortable and longer-lasting.',
  },
  {
    q: 'How should I prepare for a waxing appointment?',
    a: 'Hair should be at least ¼ inch long for wax to adhere properly, typically 2–3 weeks of growth after shaving. Avoid retinol or exfoliating acids on the area for 48 hours before your appointment, and arrive with clean, dry skin. Avoid sun exposure immediately after waxing as skin will be more sensitive.',
  },
  {
    q: 'Can I get waxed if I have sensitive skin?',
    a: 'Yes, but please let your esthetician know before the service begins. We use gentle wax formulas suitable for sensitive skin, and we always do a small test patch for first-time clients with very sensitive skin. Certain medications and topical treatments can increase skin sensitivity, so disclose any relevant skincare products you\'re using.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Waxing in Plantation, FL',
      description: 'Professional waxing services at Blend Hair Boutique in Plantation, Florida: eyebrow waxing, facial waxing, and full and partial body waxing.',
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: [
        { '@type': 'City', name: 'Plantation, FL' },
        { '@type': 'AdministrativeArea', name: 'Broward County, FL' },
        { '@type': 'AdministrativeArea', name: 'South Florida' },
      ],
      url: CANONICAL,
    },
    {
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
        { '@type': 'ListItem', position: 3, name: 'Waxing in Plantation, FL', item: CANONICAL },
      ],
    },
  ],
}

export default function WaxingPlantationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Plantation, Florida · Broward County
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '16ch' }}>
              <em>Waxing</em> in Plantation, FL
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Professional eyebrow shaping, facial waxing, and body waxing at Blend Hair Boutique in Plantation, FL. Our estheticians work with precision and care, removing unwanted hair cleanly while keeping your skin smooth, calm, and comfortable.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
                Book Waxing Appointment
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
                <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>
                  Clean. Precise. Comfortable.
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Smooth Skin.<br /><em>Every Time.</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  Waxing at Blend Hair Boutique is performed by experienced estheticians who prioritize your comfort and skin health. We use professional wax formulas that grip the hair, not the skin, to minimize irritation and deliver the cleanest possible result.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  From a quick eyebrow cleanup to a full-body wax before vacation, we take every service seriously. Our team will assess your skin sensitivity and hair type to select the right technique and wax formula for your specific needs.
                </p>
              </div>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
                  alt="Waxing services at Blend Hair Boutique in Plantation, FL"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Waxing Services
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Our Waxing <em>Menu</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Eyebrow Waxing', body: 'Precise brow shaping that defines and frames your eyes. We work with your natural arch and facial structure for balanced, beautiful results.' },
                { title: 'Upper Lip & Chin', body: 'Quick and effective facial waxing for the upper lip, chin, and sideburns. Clean skin in minutes with minimal discomfort.' },
                { title: 'Full Facial Wax', body: 'Comprehensive facial waxing covering brows, upper lip, chin, cheeks, and forehead for completely smooth skin.' },
                { title: 'Underarm Waxing', body: 'Clean, smooth underarms with results that last 3–4 weeks. Faster and longer-lasting than shaving, with less irritation over time.' },
                { title: 'Leg Waxing', body: 'Available as half-leg or full-leg. Smooth, hair-free legs with 4–6 weeks of results, perfect for Florida\'s year-round warm weather.' },
                { title: 'Bikini Waxing', body: 'Standard and extended bikini waxing options. Performed with care, precision, and a focus on your comfort throughout the service.' },
              ].map((s) => (
                <div key={s.title} style={{ borderTop: '1px solid var(--line)', paddingTop: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.6rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-2)', fontWeight: 300 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>Areas We Serve</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1rem', textAlign: 'center' }}>
              Serving <em>South Florida</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, textAlign: 'center', maxWidth: '56ch', margin: '0 auto 2.5rem' }}>
              Blend Hair Boutique is located at 10035 Cleary Blvd, Plantation, FL 33324. We serve clients from Plantation, Davie, Weston, Fort Lauderdale, Sunrise, Cooper City, Pembroke Pines, Miramar, Boca Raton, and Miami.
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
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>FAQ</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Waxing <em>Questions</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>4.9 ★ · 1,230+ Google Reviews</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Book your waxing<br /><em>in Plantation, FL</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book online 24/7 or call us at (754) 206-3501. Blend Hair Boutique, 10035 Cleary Blvd, Plantation, FL 33324.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book Waxing Online</a>
              <Link href="/facials-plantation-fl" className="btn btn--outline">Facial Services</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

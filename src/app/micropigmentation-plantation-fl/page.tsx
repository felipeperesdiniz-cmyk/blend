import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/micropigmentation-plantation-fl`

export const metadata: Metadata = {
  title: 'Micropigmentation in Plantation, FL | Blend Hair Boutique',
  description:
    'Professional micropigmentation and permanent makeup in Plantation, Florida — eyebrow microblading, ombre brows, and lip blushing at Blend Hair Boutique. 4.9★ · 1,230+ reviews. Book a consultation.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Micropigmentation in Plantation, FL | Blend Hair Boutique',
    description: 'Eyebrow microblading, ombre brows, and lip blushing in Plantation, FL at Blend Hair Boutique. Professional permanent makeup. 4.9★. Book a consultation.',
    url: CANONICAL,
  },
}

const faqs = [
  {
    q: 'What is micropigmentation and how long does it last?',
    a: 'Micropigmentation — also called permanent makeup or semi-permanent makeup — is a cosmetic tattooing technique that deposits pigment into the superficial layers of the skin to define and enhance facial features. Results typically last 1–3 years depending on your skin type, sun exposure, and aftercare. A touch-up session is usually recommended 6–8 weeks after the initial procedure and then annually or as needed.',
  },
  {
    q: 'What micropigmentation services does Blend Hair Boutique offer?',
    a: 'We specialize in eyebrow micropigmentation — including microblading (hair-stroke technique for natural-looking brows), ombre powder brows (soft, powdered effect for defined, long-lasting brows), and combination brows. We also offer lip blushing to enhance lip color, definition, and symmetry. All procedures begin with a thorough consultation.',
  },
  {
    q: 'Is micropigmentation painful?',
    a: 'A topical numbing cream is applied prior to the procedure to minimize discomfort significantly. Most clients describe the sensation as mild scratching or pressure — quite manageable. Pain tolerance varies by individual, but our practitioners work carefully to keep you comfortable throughout.',
  },
  {
    q: 'How should I prepare for a micropigmentation appointment?',
    a: 'Avoid blood thinners (including aspirin and ibuprofen), alcohol, and caffeine for 24 hours before your appointment. Do not apply retinol or exfoliants to the area for one week prior. Arrive with a clean face and no makeup on the treatment area. If you\'ve had any botox or fillers, wait at least 2 weeks before micropigmentation.',
  },
  {
    q: 'What is the aftercare for microblading or ombre brows?',
    a: 'For the first 7–10 days, keep the area dry and avoid swimming, sweating heavily, and direct sun exposure. Apply the aftercare ointment provided by your practitioner as directed. Do not pick, scratch, or peel any flaking skin — this is a critical part of the healing process. Full healing takes approximately 4–6 weeks, after which colors settle to their final tone.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Micropigmentation in Plantation, FL',
      description: 'Professional micropigmentation and permanent makeup services at Blend Hair Boutique in Plantation, Florida — eyebrow microblading, ombre brows, and lip blushing.',
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
        { '@type': 'ListItem', position: 3, name: 'Micropigmentation in Plantation, FL', item: CANONICAL },
      ],
    },
  ],
}

export default function MicropigmentationPlantationPage() {
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
              <em>Micropigmentation</em> in Plantation, FL
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Wake up beautiful — every day. Blend Hair Boutique offers expert eyebrow microblading, ombre brows, and lip blushing in Plantation, FL. Semi-permanent results that enhance your natural features and eliminate your daily makeup routine.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
                Book a Consultation
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
                  Semi-Permanent Beauty
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Effortless Beauty.<br /><em>Every Morning.</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  Micropigmentation at Blend Hair Boutique begins with an in-depth consultation. Our certified practitioners assess your facial structure, natural brow or lip shape, skin tone, and lifestyle to design a result that enhances — not overpowers — your natural features.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  We use premium pigments, professional-grade tools, and meticulous technique to create results that look genuinely natural and beautifully crafted. Whether you want barely-there definition or bold, defined brows — we'll create the look that's right for you.
                </p>
              </div>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80"
                  alt="Micropigmentation and eyebrow treatment at Blend Hair Boutique in Plantation, FL"
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
              Services
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Our Micropigmentation <em>Treatments</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Microblading', body: 'Hair-stroke technique that creates ultra-realistic, individual brow hairs. Ideal for sparse or thin brows seeking a natural, fluffy appearance.' },
                { title: 'Ombre Powder Brows', body: 'A soft, powdered brow effect that mimics the look of filled brows. Longer-lasting than microblading and better suited to oily skin types.' },
                { title: 'Combination Brows', body: 'The best of both worlds — hair strokes at the front for a natural inner brow with ombre powder through the body and tail for definition and longevity.' },
                { title: 'Lip Blushing', body: 'Semi-permanent lip color that enhances your lip shape, adds symmetry, and creates a soft, natural-looking flush of color. No more re-applying lip liner throughout the day.' },
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
              Located at 10035 Cleary Blvd, Plantation, FL 33324. We serve Plantation, Davie, Weston, Fort Lauderdale, Sunrise, Cooper City, Pembroke Pines, Miramar, Boca Raton, and Miami.
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
              Micropigmentation <em>Questions</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>4.9 ★ · 1,230+ Google Reviews</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Ready for effortless beauty<br /><em>every morning?</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book a micropigmentation consultation at Blend Hair Boutique — 10035 Cleary Blvd, Plantation, FL 33324 — or call (754) 206-3501.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book a Consultation</a>
              <Link href="/makeup-plantation-fl" className="btn btn--outline">Makeup Services</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

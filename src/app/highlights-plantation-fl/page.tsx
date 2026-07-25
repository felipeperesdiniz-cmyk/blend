import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/highlights-plantation-fl`

export const metadata: Metadata = {
  title: 'Hair Highlights in Plantation, FL | Blend Hair Boutique',
  description:
    'Professional hair highlights in Plantation, Florida — foil highlights, babylights, money piece, and partial highlights at Blend Hair Boutique. 4.9★ · 1,230+ reviews. Book your color appointment online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Hair Highlights in Plantation, FL | Blend Hair Boutique',
    description: 'Foil highlights, babylights, money piece, and partial highlights in Plantation, FL at Blend Hair Boutique. Expert colorists. 4.9★. Book online.',
    url: CANONICAL,
  },
}

const faqs = [
  {
    q: 'What is the difference between highlights and balayage?',
    a: 'Highlights use foils to apply color in precise sections, delivering a more defined, uniform brightness throughout the hair. Balayage is a freehand painting technique that creates a softer, sun-kissed gradient with no harsh lines. Both are beautiful — the right choice depends on your hair goals, lifestyle, and how much contrast you want. Our colorists will recommend the best option during your consultation.',
  },
  {
    q: 'What are babylights and how are they different from regular highlights?',
    a: 'Babylights are ultra-fine, delicate highlights that mimic the natural lightness found in children\'s hair. They are applied in very small sections to create subtle, multi-dimensional brightness that looks completely natural. Unlike traditional highlights, babylights blend seamlessly into the base color and grow out without a harsh line of demarcation.',
  },
  {
    q: 'How long do highlights last before needing a touch-up?',
    a: 'Traditional foil highlights typically require a touch-up every 6–8 weeks as the roots grow in. Babylights and partial highlights, which are more subtle, can often go 10–12 weeks between appointments. With proper color-safe products and a gloss treatment between appointments, you can extend vibrancy and minimize brassiness.',
  },
  {
    q: 'Can I get highlights if my hair is damaged?',
    a: 'It depends on the condition of your hair. Our colorists conduct a full assessment before any lightening service. If your hair needs strengthening first, we\'ll recommend a bond-building treatment like Olaplex before or during the highlight process. We never compromise the integrity of your hair for the sake of color.',
  },
  {
    q: 'How much do highlights cost at Blend Hair Boutique in Plantation?',
    a: 'Pricing for highlights varies based on whether you choose full highlights, partial highlights, babylights, or a money piece, as well as your hair length and density. Pricing details are available when booking online, and your stylist will provide a full quote during consultation before any color is applied.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Hair Highlights in Plantation, FL',
      description: 'Professional hair highlights including foil highlights, babylights, money piece, and partial highlights at Blend Hair Boutique in Plantation, Florida.',
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
        { '@type': 'ListItem', position: 3, name: 'Hair Highlights in Plantation, FL', item: CANONICAL },
      ],
    },
  ],
}

export default function HighlightsPlantationPage() {
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
              Hair <em>Highlights</em> in Plantation, FL
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              From classic foil highlights and airy babylights to bold money pieces and sun-kissed partial color — Blend Hair Boutique's expert colorists in Plantation, FL deliver dimensional, luminous results tailored to your base color, texture, and brightness goal.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
                Book Highlights Appointment
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
                  Dimensional Color
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Bright. Dimensional.<br /><em>Made for You.</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  Highlights at Blend Hair Boutique are not one-size-fits-all. Our colorists approach every highlights service as a custom color event — analyzing your natural base, skin undertones, hair texture, and desired maintenance level before choosing placement, technique, and formula.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  Whether you want all-over brightness with full foils, delicate babylights woven throughout, a bold money piece framing your face, or a subtle partial highlight refresh, we deliver results that look luminous, intentional, and completely natural to your hair type.
                </p>
              </div>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="/images/gallery/blonde-balayage-straight.webp"
                  alt="Blonde highlights with soft dimension at Blend Hair Boutique, Plantation FL"
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
              Highlight Services
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Find Your <em>Perfect Brightness</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Full Foil Highlights', body: 'All-over brightness using foils placed throughout the entire head. Ideal for clients who want maximum luminosity and uniform lightening from roots to ends.' },
                { title: 'Partial Highlights', body: 'Foils placed on the top and crown sections of the hair for face-framing brightness without the commitment or cost of full highlights. Perfect for maintenance and refresh visits.' },
                { title: 'Babylights', body: 'Ultra-fine, delicate highlights applied in tiny sections that mimic the natural lightness of childhood hair. The most natural-looking highlight option — seamless and low-maintenance.' },
                { title: 'Money Piece', body: 'Bold, face-framing panels of lightened color placed at the front hairline. A high-impact look that requires minimal hair and creates maximum dimension.' },
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
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Areas We Serve
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1rem', textAlign: 'center' }}>
              Serving <em>South Florida</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, textAlign: 'center', maxWidth: '56ch', margin: '0 auto 2.5rem' }}>
              Blend Hair Boutique is located at 10035 Cleary Blvd in Plantation, FL 33324. We serve clients from Plantation, Davie, Weston, Fort Lauderdale, Sunrise, Cooper City, Pembroke Pines, Miramar, Boca Raton, and Miami.
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
              Highlights <em>Questions</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>4.9 ★ · 1,230+ Google Reviews</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Book your highlights<br /><em>in Plantation, FL</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book online 24/7 or call us at (754) 206-3501. Blend Hair Boutique, 10035 Cleary Blvd, Plantation, FL 33324.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book Highlights Online</a>
              <Link href="/balayage-plantation-fl" className="btn btn--outline">Explore Balayage</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

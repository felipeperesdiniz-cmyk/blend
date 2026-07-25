import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/blowout-plantation-fl`

export const metadata: Metadata = {
  title: 'Blowout in Plantation, FL | Blend Hair Boutique',
  description:
    'Professional blowout and styling services in Plantation, Florida. Smooth, voluminous, or beachy wave blowouts at Blend Hair Boutique. 4.9★ · 1,230+ reviews. Walk-in friendly. Book online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Blowout in Plantation, FL | Blend Hair Boutique',
    description: 'Professional blowout and styling in Plantation, FL at Blend Hair Boutique. Smooth, voluminous, or beachy wave blowouts. 4.9★. Book online.',
    url: CANONICAL,
  },
}

const faqs = [
  {
    q: 'How long does a blowout take at Blend Hair Boutique?',
    a: 'A standard blowout takes 45–75 minutes depending on your hair length, density, and desired style. If you have very thick or long hair, we\'ll give you a more accurate estimate when you book. We also offer express blowout options for shorter hair.',
  },
  {
    q: 'What blowout styles do you offer?',
    a: 'We offer a full range of blowout styles: sleek and straight, voluminous round-brush blowout, soft waves, Brazilian blowout style (smooth and silky), beachy textured waves, and occasion styling for events, date nights, or photoshoots. Just tell your stylist what look you\'re going for and we\'ll deliver it.',
  },
  {
    q: 'How long will my blowout last?',
    a: 'A professional blowout typically lasts 3–5 days depending on your hair type, how active you are, and the humidity levels in South Florida. To extend your blowout, avoid touching your hair excessively, use a silk pillowcase, and keep dry shampoo on hand to absorb oil at the roots without disturbing the style.',
  },
  {
    q: 'Is a blowout good for my hair?',
    a: 'A professional blowout using quality heat protectants and proper technique is safe for healthy hair. Our stylists use professional tools and heat-protection products to minimize thermal damage. We also adjust heat settings based on your hair\'s texture and condition. We do not recommend daily heat styling, but an occasional professional blowout is a great way to keep your hair looking polished.',
  },
  {
    q: 'Can I book a blowout for a special event or wedding?',
    a: 'Absolutely. We book event blowouts and occasion styling regularly — including weddings, quinceañeras, galas, photoshoots, and parties. For bridal events, we offer on-site styling packages. Contact us directly to discuss group bookings or bridal party arrangements.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Blowout in Plantation, FL',
      description: 'Professional blowout and styling services at Blend Hair Boutique in Plantation, Florida. Smooth, voluminous, wavy, and occasion blowout styles.',
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
        { '@type': 'ListItem', position: 3, name: 'Blowout in Plantation, FL', item: CANONICAL },
      ],
    },
  ],
}

export default function BlowoutPlantationPage() {
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
              <em>Blowout</em> in Plantation, FL
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Leave looking polished, radiant, and ready for anything. Blend Hair Boutique's professional blowout services in Plantation, FL deliver salon-quality results — whether you want silky smooth, full-volume, or beachy waves. The perfect finish for an ordinary day or a special occasion.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
                Book a Blowout
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
                  The Blend Blowout
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Your Hair.<br /><em>At Its Best.</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  A blowout at Blend Hair Boutique isn't just a quick dry — it's a full styling experience. We start with a nourishing shampoo and conditioning treatment, then use professional-grade blow dryers, round brushes, and heat protectants to build the foundation of your style from the roots up.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  Our stylists are trained in Brazilian blowout techniques, giving your hair a smoothness and shine that's characteristic of South American salon culture. Whether you're stepping into a meeting, attending a wedding, or just want to feel your best on a Tuesday — we've got you covered.
                </p>
              </div>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="/images/gallery/honey-blonde-blowout.webp"
                  alt="Honey blonde blowout styled at Blend Hair Boutique in Plantation, FL"
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
              Blowout Styles
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Choose Your <em>Look</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Sleek & Straight', body: 'Perfectly smooth, pin-straight results with maximum shine. Ideal for fine-to-medium hair that tends toward frizz, especially in South Florida humidity.' },
                { title: 'Voluminous Round-Brush', body: 'Big, bouncy, full-bodied blowout with lift at the roots and movement through the ends. The classic salon blowout look.' },
                { title: 'Soft Waves', body: 'A relaxed, romantic wave pattern styled during the blowout. Effortless and elegant, perfect for everyday wear or events.' },
                { title: 'Beachy Texture', body: 'Loose, undone texture with movement and volume. For a more casual, effortlessly cool look that complements Plantation\'s outdoor lifestyle.' },
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
              Blend Hair Boutique is located at 10035 Cleary Blvd in Plantation, FL 33324, serving Plantation, Davie, Weston, Fort Lauderdale, Sunrise, Cooper City, Pembroke Pines, Miramar, Boca Raton, and Miami.
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
              Blowout <em>Questions</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>4.9 ★ · 1,230+ Google Reviews</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Book your blowout<br /><em>in Plantation, FL</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book online 24/7 or call us at (754) 206-3501. Blend Hair Boutique, 10035 Cleary Blvd, Plantation, FL 33324.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book a Blowout Online</a>
              <Link href="/keratin-treatment-plantation" className="btn btn--outline">Keratin Treatments</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

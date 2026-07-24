import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/makeup-plantation-fl`

export const metadata: Metadata = {
  title: 'Makeup Artist in Plantation, FL | Blend Hair Boutique',
  description:
    'Professional makeup application in Plantation, Florida — bridal makeup, event makeup, and everyday glam at Blend Hair Boutique. 4.9★ · 1,230+ reviews. Book your makeup appointment online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Makeup Artist in Plantation, FL | Blend Hair Boutique',
    description: 'Professional makeup application — bridal, event, and everyday makeup in Plantation, FL at Blend Hair Boutique. 4.9★. Book online.',
    url: CANONICAL,
  },
}

const faqs = [
  {
    q: 'What makeup services does Blend Hair Boutique offer?',
    a: 'We offer a range of professional makeup services including full makeup application for events and special occasions, bridal makeup (including trial sessions), editorial and photoshoot makeup, and natural everyday glam. All services are performed using professional-grade cosmetics suited to various skin tones and types.',
  },
  {
    q: 'How long does a professional makeup application take?',
    a: 'A full makeup application typically takes 45–75 minutes depending on the complexity of the look. Bridal makeup appointments, which include extra time for consultation and precision, typically run 90–120 minutes. We recommend arriving with a clean, moisturized face for the best application.',
  },
  {
    q: 'Do you offer bridal makeup at Blend Hair Boutique?',
    a: 'Yes. Bridal makeup is one of our most-requested event services. We offer bridal trials ahead of your wedding day so you can preview and perfect your look, and we accommodate bridal party bookings for the day of the event. Contact us to discuss packages for weddings, quinceañeras, and other milestone celebrations.',
  },
  {
    q: 'What brands of makeup do you use?',
    a: 'We use a curated selection of professional cosmetics brands that perform beautifully on camera and in real life, in a wide range of skin tones. Our makeup artists select products based on your skin type, the event lighting, and the desired aesthetic — from fresh and natural to glamorous and bold.',
  },
  {
    q: 'Can I request a specific makeup style or look?',
    a: 'Absolutely. We encourage you to bring inspiration images — from social media, magazines, or Pinterest — to your appointment. Your makeup artist will review the reference images and give an honest assessment of what\'s achievable for your skin type and features. We pride ourselves on understanding and delivering the look you have in mind.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Makeup Application in Plantation, FL',
      description: 'Professional makeup application services at Blend Hair Boutique in Plantation, Florida — bridal makeup, event makeup, and everyday glam.',
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
        { '@type': 'ListItem', position: 3, name: 'Makeup Application in Plantation, FL', item: CANONICAL },
      ],
    },
  ],
}

export default function MakeupPlantationPage() {
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
              <em>Makeup</em> Artist in Plantation, FL
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Professional makeup application for every occasion — weddings, quinceañeras, galas, photoshoots, and everyday confidence. Our makeup artists at Blend Hair Boutique in Plantation, FL bring skill, artistry, and professional-grade products to deliver a look that photographs beautifully and lasts all day.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
                Book Makeup Appointment
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
                <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
                  The Art of Beauty
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Your Most Beautiful<br /><em>Self.</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  A great makeup application isn't about covering up — it's about enhancing what's already there. Our makeup artists at Blend Hair Boutique are trained to work with your natural features, skin tone, and the occasion, creating looks that feel like you — only elevated.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  We understand that South Florida's heat and humidity require long-wearing, humidity-resistant formulas. Our artists know which products perform in the Florida climate — so your makeup stays fresh from the ceremony to the last song of the night.
                </p>
              </div>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="/images/gallery/makeup-special-occasion.webp"
                  alt="Special occasion hair and makeup at Blend Hair Boutique in Plantation, FL"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Makeup Services
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Every Look, <em>Perfected</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Bridal Makeup', body: 'Full bridal makeup including trial session. Long-wear, humidity-resistant formulas for South Florida weddings. Bridal party packages available.' },
                { title: 'Event Makeup', body: 'Special occasion glamour for galas, quinceañeras, corporate events, holiday parties, and any night worth dressing up for.' },
                { title: 'Natural Everyday Glam', body: 'Fresh, polished, enhanced-but-you makeup for meetings, dates, content shoots, or whenever you want to look your absolute best without looking overdone.' },
                { title: 'Editorial & Photoshoot', body: 'Camera-ready makeup designed for photography lighting. Bold, precise, and built to translate on screen.' },
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
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>Areas We Serve</p>
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
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>FAQ</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Makeup <em>Questions</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>4.9 ★ · 1,230+ Google Reviews</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Book your makeup<br /><em>in Plantation, FL</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book online 24/7 or call us at (754) 206-3501. Blend Hair Boutique, 10035 Cleary Blvd, Plantation, FL 33324.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book Makeup Online</a>
              <Link href="/bridal-hair-south-florida" className="btn btn--outline">Bridal Hair Services</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/facials-plantation-fl`

export const metadata: Metadata = {
  title: 'Facials in Plantation, FL | Blend Hair Boutique',
  description:
    'Custom facials, hydrating treatments, and skin care services in Plantation, Florida at Blend Hair Boutique. Personalized to your skin type. 4.9★ · 1,230+ reviews. Book your facial appointment online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Facials in Plantation, FL | Blend Hair Boutique',
    description: 'Custom facials and hydrating skin treatments in Plantation, FL at Blend Hair Boutique. Personalized to your skin type. 4.9★. Book online.',
    url: CANONICAL,
  },
}

const faqs = [
  {
    q: 'What types of facials does Blend Hair Boutique offer?',
    a: 'We offer a range of facial treatments including the classic cleansing facial, deep-cleansing facial for oily and acne-prone skin, hydrating facial for dry or dehydrated skin, anti-aging facial targeting fine lines and loss of firmness, and brightening facial for uneven skin tone. All facials are customized to your skin\'s specific needs during the appointment.',
  },
  {
    q: 'How often should I get a facial?',
    a: 'As a general guideline, a facial every 4–6 weeks aligns with the skin\'s natural renewal cycle. This allows your esthetician to address emerging concerns, maintain your results, and progressively improve the condition of your skin. For specific concerns like acne or hyperpigmentation, your esthetician may recommend a more targeted schedule.',
  },
  {
    q: 'Will a facial cause breakouts?',
    a: 'Some clients experience minor purging after a deep-cleansing facial — this is normal and temporary, typically resolving within 5–7 days. It occurs because the treatment dislodges debris from the pores. This is especially common in first-time facial clients with congested skin. Let your esthetician know your skin history and concerns beforehand.',
  },
  {
    q: 'Is a facial safe for sensitive skin?',
    a: 'Yes — we offer gentle, calming facial protocols specifically formulated for sensitive skin. We use fragrance-free, hypoallergenic products and avoid aggressive exfoliation or extraction techniques for clients with reactive or sensitive skin. Always mention any skin conditions, allergies, or topical medications when booking.',
  },
  {
    q: 'What should I do after my facial to maintain results?',
    a: 'Avoid touching your face, applying heavy makeup, or heavy exercise for 24 hours after a facial. Use a gentle cleanser, keep your skin hydrated, and apply SPF 30 or higher daily. Your esthetician will provide a personalized post-care routine recommendation based on the specific treatment you received.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Facials in Plantation, FL',
      description: 'Custom facials and skin care treatments at Blend Hair Boutique in Plantation, Florida — cleansing, hydrating, brightening, and anti-aging facials personalized to each client.',
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
        { '@type': 'ListItem', position: 3, name: 'Facials in Plantation, FL', item: CANONICAL },
      ],
    },
  ],
}

export default function FacialsPlantationPage() {
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
              <em>Facials</em> in Plantation, FL
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Your skin is as unique as you are. At Blend Hair Boutique in Plantation, FL, our estheticians design each facial around your individual skin type, concerns, and goals — delivering real results in a luxurious, relaxing environment.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
                Book a Facial
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
                  Skin That Glows
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Custom Care.<br /><em>Visible Results.</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  Every facial at Blend Hair Boutique begins with a skin analysis. Your esthetician evaluates hydration levels, pore size, texture, tone, and any specific concerns — whether that's congestion, dryness, fine lines, or uneven pigmentation — and selects the appropriate protocol and products accordingly.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  South Florida's climate — hot, humid, and sun-intensive — places unique demands on skin. Our facials are designed with this environment in mind, helping to address sun damage, clogged pores from sweat and humidity, and dehydration from excessive air conditioning exposure.
                </p>
              </div>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="https://images.unsplash.com/photo-1596178067620-c9a7b6abe7c6?auto=format&fit=crop&w=800&q=80"
                  alt="Facial treatment at Blend Hair Boutique in Plantation, FL"
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
              Facial Menu
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Our Facial <em>Treatments</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Classic Cleansing Facial', body: 'A comprehensive cleanse, tone, exfoliate, and moisturize treatment suitable for all skin types. The perfect intro to regular facial care.' },
                { title: 'Deep-Cleansing Facial', body: 'Targets congestion, blackheads, and oily skin with deeper cleansing and extractions. Ideal for combination and acne-prone skin types.' },
                { title: 'Hydrating Facial', body: 'Intensive moisture replenishment using hyaluronic acid and nourishing mask formulas. Perfect for dry, dehydrated, or post-sun skin.' },
                { title: 'Brightening Facial', body: 'Targets uneven skin tone, hyperpigmentation, and sun damage with vitamin C and brightening enzyme treatments.' },
                { title: 'Anti-Aging Facial', body: 'Focuses on firmness, elasticity, and fine lines using peptides, collagen-stimulating actives, and targeted massage techniques.' },
                { title: 'Express Facial', body: 'A focused 30-minute facial for clients on the go. Perfect for a quick refresh, pre-event glow, or regular maintenance.' },
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
              Located at 10035 Cleary Blvd, Plantation, FL 33324. We serve clients from Plantation, Davie, Weston, Fort Lauderdale, Sunrise, Cooper City, Pembroke Pines, Miramar, Boca Raton, and Miami.
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
              Facial <em>Questions</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>4.9 ★ · 1,230+ Google Reviews</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Book your facial<br /><em>in Plantation, FL</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book online 24/7 or call us at (754) 206-3501. Blend Hair Boutique, 10035 Cleary Blvd, Plantation, FL 33324.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book a Facial Online</a>
              <Link href="/waxing-plantation-fl" className="btn btn--outline">Waxing Services</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

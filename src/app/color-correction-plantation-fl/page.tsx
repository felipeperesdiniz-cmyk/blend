import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/color-correction-plantation-fl`

export const metadata: Metadata = {
  title: 'Color Correction in Plantation, FL | Blend Hair Boutique',
  description:
    'Expert color correction in Plantation, Florida. Fix brassiness, uneven color, box dye damage, and over-processed hair at Blend Hair Boutique. Advanced colorists. 4.9★ · 1,230+ reviews. Book a consultation.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Color Correction in Plantation, FL | Blend Hair Boutique',
    description: 'Expert color correction in Plantation, FL: fix brassiness, box dye damage, uneven color. Advanced colorists at Blend Hair Boutique. 4.9★. Book a consultation.',
    url: CANONICAL,
  },
}

const faqs = [
  {
    q: 'What is color correction and when do I need it?',
    a: 'Color correction is a multi-step process to fix hair color that has gone wrong, whether from box dye, uneven application, excessive brassiness, over-lightening, or previous chemical damage. If your hair color is not the shade you wanted, has turned orange or green, or has uneven tones throughout, a color correction appointment is the right next step.',
  },
  {
    q: 'How many appointments does color correction take?',
    a: 'That depends entirely on the starting condition of your hair and how dramatic the correction needs to be. Some corrections can be achieved in a single extended session. Others, particularly those involving box dye removal, very dark to very light transformations, or heavily over-processed hair, may require two or more spaced appointments to protect hair integrity. We will give you an honest, realistic timeline during your consultation.',
  },
  {
    q: 'Can you fix orange or brassy hair at Blend Hair Boutique?',
    a: 'Yes. Brassiness is one of the most common color correction requests we receive. It typically occurs when hair isn\'t lifted to the correct level before toning, or when a toner fades over time. Our colorists use professional toners and color-neutralizing techniques to remove unwanted warmth and deliver a cool, balanced result. In some cases, we also use a gloss treatment to add shine and depth.',
  },
  {
    q: 'Can you remove box dye from my hair?',
    a: 'Box dye removal is one of the most complex color correction procedures because box dyes penetrate the hair\'s cortex unpredictably and can contain metallic salts that react badly with professional lighteners. Our colorists will assess your hair carefully before attempting any removal. In many cases, we use a color remover or careful lightening approach over multiple sessions to safely lift box dye without compromising hair health.',
  },
  {
    q: 'How much does color correction cost in Plantation, FL?',
    a: 'Color correction pricing varies significantly based on the complexity of the correction needed, the current state of your hair, and the number of sessions required. It is one of our higher-investment services. We strongly recommend booking a consultation before a color correction appointment so we can assess your hair in person, explain the process, and provide an accurate quote.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Color Correction in Plantation, FL',
      description: 'Advanced color correction services at Blend Hair Boutique in Plantation, Florida. Fixing brassiness, uneven color, box dye damage, and over-processed hair.',
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
        { '@type': 'ListItem', position: 3, name: 'Color Correction in Plantation, FL', item: CANONICAL },
      ],
    },
  ],
}

export default function ColorCorrectionPlantationPage() {
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
              Color <em>Correction</em> in Plantation, FL
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              When hair color goes wrong, whether from brassiness, uneven tones, box dye buildup, or over-lightening, Blend Hair Boutique's advanced colorists have the expertise to fix it. We approach every color correction with precision, transparency, and deep respect for your hair's integrity.
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
                  Our Approach
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Honest Results.<br /><em>Hair First.</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  Color correction is one of the most technically demanding services in the salon. At Blend Hair Boutique, we never rush it. Our colorists begin with an in-depth consultation that includes strand testing, a full color history review, and a frank conversation about what is realistically achievable in one session, and what will require a phased approach.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  Our priority is always the long-term health of your hair. We use bond-building technology, professional-grade toners, and carefully selected lighteners to achieve the best possible result while keeping your hair strong, shiny, and intact throughout the process.
                </p>
              </div>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="/images/gallery/ash-silver-blend.webp"
                  alt="Ash and silver color correction at Blend Hair Boutique in Plantation, FL"
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
              What We Fix
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Common <em>Color Problems</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Brassiness & Orange Tones', body: 'Unwanted warm tones that appear after lightening or toning fade. We neutralize brassiness and restore a cool, balanced result with professional toners and glosses.' },
                { title: 'Box Dye Removal', body: 'Box dyes contain unpredictable pigments and metallic salts. Our colorists safely lift and remove box dye over multiple sessions while protecting your hair structure.' },
                { title: 'Uneven Color', body: 'Patchy, blotchy, or inconsistent color from previous services. We even out the base and create seamless, blended color throughout.' },
                { title: 'Over-Lightening Repair', body: 'Hair that has been lightened too aggressively can become fragile and straw-like. We incorporate bond-building treatments alongside color work to restore integrity.' },
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
              Color Correction <em>Questions</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>4.9 ★ · 1,230+ Google Reviews</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Let's fix your color<br /><em>the right way.</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book a color correction consultation at Blend Hair Boutique, 10035 Cleary Blvd, Plantation, FL 33324, or call us at (754) 206-3501.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book a Consultation</a>
              <Link href="/hair-color-plantation" className="btn btn--outline">Hair Color Services</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

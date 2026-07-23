import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/luxury-hair-salon-plantation-fl`

export const metadata: Metadata = {
  title: 'Luxury Hair Salon in Plantation, FL | Blend Hair Boutique',
  description:
    'Blend Hair Boutique is a luxury hair salon in Plantation, Florida offering world-class balayage, color, keratin treatments, extensions, and bridal beauty. 4.9★ · 1,230+ reviews. Book online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Luxury Hair Salon in Plantation, FL | Blend Hair Boutique',
    description:
      'Blend Hair Boutique — luxury hair salon in Plantation, FL. Expert color, balayage, keratin, extensions, and bridal beauty in a premium environment. Book online 24/7.',
    url: CANONICAL,
  },
}

const faqs = [
  {
    q: 'What makes Blend Hair Boutique a luxury salon?',
    a: 'Blend Hair Boutique distinguishes itself through four pillars: expert technicians with international training, professional-grade products including the Kérastase line, a beautifully appointed boutique environment, and a consultation-first process that ensures every result is personalized. Every detail — from the products we use to the music we play — is curated for an elevated experience.',
  },
  {
    q: 'What professional hair products does Blend Hair Boutique use?',
    a: 'Blend is an authorized Kérastase salon and uses professional-grade color and treatment lines chosen for their results and hair-health benefits. We do not use box-color formulas or drugstore products on our clients. Our product selection is reviewed regularly to ensure we offer the most effective, safest options available.',
  },
  {
    q: 'Is Blend Hair Boutique a good fit for first-time luxury salon clients?',
    a: 'Absolutely. Many clients come to Blend after disappointing experiences elsewhere. Our team is known for attentive communication, realistic expectation-setting, and client education. If you are unsure which service is right for you, we recommend booking a consultation before committing to a full service.',
  },
  {
    q: 'How far in advance should I book at Blend Hair Boutique?',
    a: 'Our most sought-after stylists book 2–4 weeks in advance, particularly for color and balayage services. If you need a same-week appointment, we recommend calling us directly at (754) 206-3501 — we occasionally have cancellations and can often accommodate flexible clients.',
  },
  {
    q: 'Does Blend Hair Boutique offer a consultation before services?',
    a: 'Yes. All color, balayage, extension, and chemical treatment services include a consultation at the start of your appointment. For complex transformations — such as color correction or significant lightening — we strongly recommend scheduling a standalone consultation so your stylist can assess your hair thoroughly and plan the right approach.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Luxury Hair Salon in Plantation, FL | Blend Hair Boutique',
      description: 'Luxury hair salon in Plantation, Florida offering balayage, hair color, keratin treatments, hair extensions, bridal beauty, facials, waxing, and nail services.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#business` },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Luxury Hair Salon Plantation FL', item: CANONICAL },
        ],
      },
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
  ],
}

export default function LuxuryHairSalonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Plantation, Florida · Broward County
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '18ch' }}>
              <em>Luxury</em> Hair Salon<br />in Plantation, FL
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '52ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Blend Hair Boutique is Plantation's premier luxury hair salon — a boutique environment where world-class technique meets Brazilian warmth. From custom balayage to smoothing treatments and bridal beauty, every service is designed to exceed expectations.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
                Book Your Visit
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
                  What Sets Us Apart
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  A Different Kind of<br /><em>Salon Experience</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  Blend Hair Boutique was founded by Juliana Chen, with co-owner and salon manager Fernanda Macedo, on a shared vision: to bring the artistry and warmth of Brazilian salon culture to Plantation, Florida. Since 2012, Blend has served thousands of South Florida clients with a level of care and expertise that sets it apart from conventional salons.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  As an authorized Kérastase salon, we use only professional-grade products across all services. Our team of certified stylists and estheticians undergoes ongoing education to stay current with the most advanced techniques in color, smoothing, and hair care.
                </p>
              </div>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="/images/gallery/salon-wine-service.webp"
                  alt="Wine service at Blend Hair Boutique, a luxury salon in Plantation, FL"
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
              Luxury Services
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Everything You Need,<br /><em>Exceptionally Done</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Balayage & Color', body: 'Custom hand-painted color, highlights, ombre, and all-over color crafted for your unique hair.', href: '/balayage-plantation-fl' },
                { title: 'Keratin & Smoothing', body: 'Brazilian blowout and keratin treatments that eliminate frizz and deliver months of effortless smoothness.', href: '/keratin-treatment-plantation' },
                { title: 'Hair Extensions', body: 'Volume and length added seamlessly — weft, tape-in, and fusion techniques by certified specialists.', href: '/hair-extensions-plantation' },
                { title: 'Bridal Beauty', body: 'Full-service bridal hair and beauty for your most important day, with trial runs and day-of coordination.', href: '/bridal-hair-south-florida' },
                { title: 'Facials & Skin', body: 'Personalized facials and skin treatments by licensed estheticians for radiant, healthy skin.', href: '/facials-plantation-fl' },
                { title: 'Nails', body: 'Manicures, pedicures, gel, and nail art — precision and polish in every detail.', href: '/nails-plantation-fl' },
              ].map((s) => (
                <Link key={s.title} href={s.href} style={{ textDecoration: 'none', color: 'inherit', borderTop: '1px solid var(--line)', paddingTop: '1.5rem', display: 'block' }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--text-2)', fontWeight: 300 }}>{s.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 5rem)', alignItems: 'center' }}>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="/images/gallery/brunette-glam-waves.webp"
                  alt="Luxury blowout and styling at Blend Hair Boutique in Plantation, FL"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
                  Our Standards
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  The Blend<br /><em>Standard of Excellence</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  Every stylist at Blend is carefully selected for technical skill, professional character, and commitment to continued education. We believe luxury is not just about the environment — it is about the confidence that comes from being in skilled, caring hands.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  Our color services use zero-damage formulas wherever possible. Our smoothing treatments are calibrated to your hair type. Our consultations are mandatory, not optional — because getting it right the first time is a non-negotiable standard.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' }}>
              {[
                { stat: '1,230+', label: 'Five-Star Google Reviews' },
                { stat: '4.9★', label: 'Average Google Rating' },
                { stat: 'Est. 2012', label: 'Years Serving South Florida' },
              ].map((s) => (
                <div key={s.stat} style={{ borderTop: '1px solid var(--line)', paddingTop: '2rem' }}>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 300, color: 'var(--gold)', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>{s.stat}</p>
                  <p style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-2)', fontWeight: 400 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Serving South Florida
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1rem', textAlign: 'center' }}>
              Where to Find <em>Blend</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, textAlign: 'center', maxWidth: '56ch', margin: '0 auto 2.5rem' }}>
              Located at 10035 Cleary Blvd in Plantation, FL 33324, Blend Hair Boutique serves clients from across Broward County and beyond, including Davie, Weston, Fort Lauderdale, Sunrise, Cooper City, Pembroke Pines, Miramar, Boca Raton, and Miami.
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
              Luxury Salon <em>Questions</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>4.9 ★ · 1,230+ Google Reviews</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Ready to experience<br /><em>Plantation's most loved salon?</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book online 24/7 or call (754) 206-3501. Blend Hair Boutique is at 10035 Cleary Blvd, Plantation, FL 33324 — open Monday through Saturday.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book Online Now</a>
              <Link href="/services" className="btn btn--outline">View All Services</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

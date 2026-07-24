import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/brazilian-hair-salon-plantation-fl`

export const metadata: Metadata = {
  title: 'Brazilian Hair Salon in Plantation, FL | Blend Hair Boutique',
  description:
    'Blend Hair Boutique is a Brazilian-owned luxury hair salon in Plantation, Florida. Specializing in Brazilian blowouts, keratin treatments, balayage, and hair color. 4.9★ · 1,230+ reviews.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Brazilian Hair Salon in Plantation, FL | Blend Hair Boutique',
    description:
      'Brazilian-owned luxury hair salon in Plantation, FL. Expert Brazilian blowouts, keratin, balayage, and color by certified Brazilian beauty professionals. Book online.',
    url: CANONICAL,
  },
}

const faqs = [
  {
    q: 'What is a Brazilian hair salon and how is it different?',
    a: 'A Brazilian hair salon brings the traditions of Brazilian beauty culture to every service — a philosophy that prizes hair health, natural movement, and intensive conditioning alongside technical precision. Brazilian beauty professionals are trained with a particular emphasis on smoothing treatments, color vibrancy, and hair care rituals. At Blend, our Brazilian co-founders built this philosophy into every aspect of the salon experience.',
  },
  {
    q: 'What is a Brazilian Blowout and how long does it last?',
    a: 'A Brazilian Blowout is a professional smoothing treatment that bonds a keratin-infused formula to the hair shaft, dramatically reducing frizz and cutting blowout time by up to 70%. Results typically last 10–12 weeks and can be extended with proper aftercare. Unlike traditional keratin treatments, a Brazilian Blowout does not change your hair\'s natural wave pattern — it simply manages frizz and adds shine.',
  },
  {
    q: 'Is a Brazilian Blowout safe for color-treated or highlighted hair?',
    a: 'Yes — a Brazilian Blowout is safe for most color-treated hair, including highlighted and balayaged hair. In some cases, a smoothing treatment can actually enhance color vibrancy and extend color life by sealing the cuticle. Our stylists will assess your hair\'s condition and recommend the right formula for your specific color history.',
  },
  {
    q: 'What is the difference between a Brazilian Blowout and a keratin treatment?',
    a: 'Both are professional smoothing treatments, but they differ in formula and results. A Brazilian Blowout is formaldehyde-free, works on freshly colored hair, and allows you to wash your hair the same day. A traditional keratin treatment typically requires a 72-hour wait before washing. The right choice depends on your hair type, texture, and goals — our stylists will guide you during your consultation.',
  },
  {
    q: 'Do I need to speak Portuguese to visit Blend Hair Boutique?',
    a: 'Not at all. Blend Hair Boutique serves clients of all backgrounds and our team communicates fluently in English, Portuguese, and Spanish. The "Brazilian" in our name refers to our heritage, training philosophy, and approach — not a language requirement. All clients are welcomed warmly regardless of background.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Brazilian Hair Salon in Plantation, FL | Blend Hair Boutique',
      description: 'Brazilian-owned luxury hair salon in Plantation, Florida specializing in Brazilian blowouts, keratin treatments, balayage, and hair color.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#business` },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Brazilian Hair Salon Plantation FL', item: CANONICAL },
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

export default function BrazilianHairSalonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Plantation, Florida · Brazilian-Owned & Operated
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '18ch' }}>
              <em>Brazilian</em> Hair Salon<br />in Plantation, FL
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '52ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Blend Hair Boutique brings the artistry and warmth of Brazilian beauty culture to the heart of South Florida. Our Brazilian co-founders and their team of certified professionals deliver the full range of Brazilian hair techniques — from our signature blowout to customized color and smoothing treatments.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
                Book Your Appointment
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
                  Our Heritage
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Born in Brazil.<br /><em>Built for South Florida.</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  Blend Hair Boutique was founded in 2012 by Juliana Chen, alongside co-owner and salon manager Fernanda Macedo — Brazilian beauty professionals who relocated to Florida with a shared mission: to make the full Brazilian salon experience accessible to South Florida clients.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  Brazilian beauty culture is world-renowned for its emphasis on healthy, luminous hair, intensive conditioning rituals, and the seamless blend of technical skill and personal warmth. These values are embedded in every appointment at Blend — from the consultation through to the finishing blow-dry.
                </p>
              </div>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="/images/gallery/brunette-glam-waves.webp"
                  alt="Brazilian styling and glam waves at Blend Hair Boutique, Plantation FL"
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
              Brazilian Specialties
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Our Signature<br /><em>Brazilian Services</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Brazilian Blowout', body: 'Our signature smoothing treatment — frizz-free, glossy, and long-lasting. Safe for color-treated hair and ready to wash the same day.', href: '/blowout-plantation-fl' },
                { title: 'Keratin Treatment', body: 'Advanced keratin smoothing for dramatically smoother, more manageable hair. Results last 3–5 months with proper aftercare.', href: '/keratin-treatment-plantation' },
                { title: 'Balayage & Color', body: 'Brazilian colorists are known for their mastery of natural, dimensional color. Our hand-painted balayage reflects this tradition.', href: '/balayage-plantation-fl' },
                { title: 'Blow Dry & Styling', body: 'The Brazilian blowout technique delivers volume, smoothness, and shine that lasts beyond the salon — the gold standard in finishing.', href: '/blowout-plantation-fl' },
              ].map((s) => (
                <Link key={s.title} href={s.href} style={{ textDecoration: 'none', color: 'inherit', borderTop: '1px solid var(--line)', paddingTop: '1.5rem', display: 'block' }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-2)', fontWeight: 300 }}>{s.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Areas We Serve
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1rem', textAlign: 'center' }}>
              Serving <em>South Florida</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, textAlign: 'center', maxWidth: '56ch', margin: '0 auto 2.5rem' }}>
              Blend Hair Boutique is located at 10035 Cleary Blvd in Plantation, FL 33324. Clients travel from Davie, Weston, Fort Lauderdale, Sunrise, Cooper City, Pembroke Pines, Miramar, Boca Raton, and Miami to visit us.
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
              Brazilian Salon <em>Questions</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>4.9 ★ · 1,230+ Google Reviews</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Experience Brazilian beauty<br /><em>in Plantation, FL</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book online 24/7 at your convenience, or call us at (754) 206-3501. Blend Hair Boutique is at 10035 Cleary Blvd, Plantation, FL 33324.
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

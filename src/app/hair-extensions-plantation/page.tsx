import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/hair-extensions-plantation`

export const metadata: Metadata = {
  title: 'Hair Extensions in Plantation, FL',
  description:
    'Premium hair extensions in Plantation, Florida at Blend Hair Boutique. Tape-in, sew-in, and clip-in methods. Ethically sourced hair, seamless blending. Consultation required. Book online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Hair Extensions in Plantation, FL | Blend Hair Boutique',
    description: 'Premium hair extensions in Plantation, FL. Tape-in, sew-in, and clip-in. Ethically sourced, seamless blending. Book a consultation online.',
    url: CANONICAL,
  },
}

const faqs = [
  { q: 'What types of hair extensions does Blend Hair Boutique offer?', a: 'Blend Hair Boutique offers tape-in, sew-in (weft), and clip-in hair extensions. During your consultation, our extension specialists will recommend the most suitable method based on your hair type, lifestyle, and goals.' },
  { q: 'How long do hair extensions last?', a: 'Tape-in extensions typically require maintenance every 6–8 weeks as your natural hair grows. Sew-in extensions usually last 2–3 months. With proper care and maintenance appointments at Blend, your extensions can last much longer before needing replacement.' },
  { q: 'How much do hair extensions cost at Blend Hair Boutique?', a: 'Extension pricing varies based on the method, the amount of hair needed, and the length you\'re targeting. A consultation is required before booking an extensions appointment, during which we provide a complete, transparent quote.' },
  { q: 'Will hair extensions damage my natural hair?', a: 'When applied correctly by a trained specialist and maintained properly, hair extensions should not damage your natural hair. Our extension specialists at Blend Hair Boutique are trained in proper application and will guide you through the care needed to protect your natural hair during wear.' },
  { q: 'Do you use ethically sourced hair for extensions?', a: 'Yes. Blend Hair Boutique works with high-quality, ethically sourced hair for all extension services. We select premium hair that blends naturally with your own hair color and texture for a seamless, undetectable result.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Hair Extensions in Plantation, FL',
      description: 'Premium hair extension services at Blend Hair Boutique in Plantation, Florida. Tape-in, sew-in, and clip-in methods using ethically sourced hair. Consultation required.',
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: { '@type': 'City', name: 'Plantation, FL' },
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
        { '@type': 'ListItem', position: 3, name: 'Hair Extensions', item: CANONICAL },
      ],
    },
  ],
}

export default function HairExtensionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Plantation, Florida
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '16ch' }}>
              Hair <em>Extensions</em> in Plantation, FL
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Blend Hair Boutique offers premium hair extensions in Plantation, Florida: tape-in, sew-in, and clip-in methods using ethically sourced, high-quality hair. Our extension specialists deliver seamless, natural-looking length and volume with minimal damage to your existing hair.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">Book a Consultation</a>
              <a href={BUSINESS.phoneHref} className="btn btn--outline-light">Call (754) 206-3501</a>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>Extension Methods</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Choose Your <em>Method</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2rem' }}>
              {[
                { name: 'Tape-In Extensions', desc: 'The most popular method. Lightweight, flat, and virtually undetectable. Applied in 1–2 hours and maintained every 6–8 weeks. Best for fine to medium hair.', tag: 'Most Popular' },
                { name: 'Sew-In Extensions', desc: 'Hair wefts sewn into braided tracks for maximum hold and volume. Ideal for thick or coarse hair types. Results last 2–3 months with proper maintenance.', tag: 'Maximum Volume' },
                { name: 'Clip-In Extensions', desc: 'Non-permanent extensions applied and removed at home. Ideal for special occasions or clients who want flexibility. A consultation ensures perfect color matching.', tag: 'No Commitment' },
              ].map((m) => (
                <div key={m.name} style={{ padding: '1.75rem', border: '1px solid var(--line)', background: 'var(--bg-soft)' }}>
                  <p style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dk)', marginBottom: '0.75rem' }}>{m.tag}</p>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', fontWeight: 400, marginBottom: '0.75rem' }}>{m.name}</h3>
                  <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-2)', fontWeight: 300 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--beige" id="faq">
          <div className="container" style={{ maxWidth: '820px' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Extensions <em>FAQ</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Ready for <em>longer hair?</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '2.5rem' }}>A consultation is required before booking your extension appointment.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book Consultation</a>
              <Link href="/services/extensions" className="btn btn--outline">View Service Details</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

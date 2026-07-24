import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/keratin-treatment-plantation`

export const metadata: Metadata = {
  title: 'Keratin Treatment & Brazilian Blowout in Plantation, FL | Blend Hair Boutique',
  description:
    'Professional keratin treatments and Brazilian blowout in Plantation, Florida at Blend Hair Boutique. Eliminate frizz for 3–5 months. Ideal for Florida humidity. 4.9★ rated salon. Book online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Keratin Treatment & Brazilian Blowout in Plantation, FL | Blend Hair Boutique',
    description: 'Professional keratin treatments and Brazilian blowout in Plantation, FL. Eliminate frizz for 3–5 months. Ideal for Florida humidity. Book online.',
    url: CANONICAL,
  },
}

const faqs = [
  { q: 'How long does a Brazilian blowout last?', a: 'Brazilian blowout and keratin treatments at Blend Hair Boutique typically last 3–5 months, depending on your hair type, texture, and home care routine. Using sulfate-free shampoo and professional after-care products extends results significantly.' },
  { q: 'Can I wash my hair immediately after a keratin treatment?', a: 'Most keratin treatments require a waiting period of 48–72 hours before washing. During your appointment, our specialists will give you specific care instructions based on the formula used. We provide a complete aftercare guide for every client.' },
  { q: 'Is a Brazilian blowout safe for color-treated hair?', a: 'Yes — a Brazilian blowout is generally safe for color-treated hair and can often enhance color vibrancy by sealing the cuticle. Our specialists will assess your hair\'s condition and color history before selecting the appropriate formula to protect your existing color treatment.' },
  { q: 'What is the difference between a Brazilian blowout and keratin treatment?', a: 'Both eliminate frizz and smooth the hair cuticle, but they differ in formula and technique. Brazilian blowout formulas allow for washing immediately after in some versions and maintain some wave/curl pattern. Keratin treatments typically provide a straighter result and require a longer wait before washing. Our specialists recommend the right option based on your hair goals.' },
  { q: 'Is a keratin treatment suitable for all hair types in Florida\'s humidity?', a: 'Yes — keratin treatments are particularly effective in Florida\'s humid climate, which is why they\'re one of our most popular services at Blend Hair Boutique. They significantly reduce drying time, frizz, and humidity-induced puffiness for any hair type, from fine to coarse.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Keratin Treatment & Brazilian Blowout in Plantation, FL',
      description: 'Professional keratin smoothing treatments and Brazilian blowout services at Blend Hair Boutique in Plantation, Florida. Results last 3–5 months. Ideal for Florida humidity.',
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: [
        { '@type': 'City', name: 'Plantation, FL' },
        { '@type': 'AdministrativeArea', name: 'Broward County, FL' },
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
        { '@type': 'ListItem', position: 3, name: 'Keratin Treatment', item: CANONICAL },
      ],
    },
  ],
}

export default function KeratinTreatmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Plantation, Florida · Signature Service
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.2rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '18ch' }}>
              Keratin Treatment &amp; <em>Brazilian Blowout</em> in Plantation, FL
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Blend Hair Boutique is Plantation&apos;s trusted destination for Brazilian blowout and keratin smoothing treatments. Eliminate frizz, reduce styling time, and achieve brilliantly smooth hair that lasts 3–5 months — especially powerful in Florida&apos;s humid climate.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">Book Keratin Treatment</a>
              <a href={BUSINESS.phoneHref} className="btn btn--outline-light">Call (754) 206-3501</a>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 5rem)', alignItems: 'center' }}>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img src="/images/gallery/glossy-straight-lob.webp" alt="Keratin-smoothed glossy hair at Blend Hair Boutique in Plantation, FL" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>Why Keratin at Blend</p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Frizz-Free.<br /><em>For Months.</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  Brazilian blowout and keratin treatments are a signature service at Blend Hair Boutique — and for good reason. In South Florida&apos;s year-round humidity, frizz is a constant challenge. Our smoothing treatments infuse proteins deep into the hair shaft, sealing the cuticle to eliminate frizz and significantly reduce styling time.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  We calibrate every treatment to your specific hair type — from a gentle smoothing formula for fine or sensitive hair to a full Brazilian blowout for dramatically frizzy or coarse textures. The result is smooth, healthy-looking hair that requires less heat, less effort, and stays polished through Florida weather.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--beige" id="faq">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>FAQ</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Keratin Treatment <em>Questions</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Book your <em>smoothing treatment</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '2.5rem' }}>
              Blend Hair Boutique · 10035 Cleary Blvd, Plantation, FL 33324 · Open Mon–Sat
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book Online</a>
              <Link href="/services/smoothing" className="btn btn--outline">Learn More</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

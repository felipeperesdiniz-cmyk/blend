import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS, REVIEW_LINE, OG_IMAGE } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/haircuts-plantation-fl`

export const metadata: Metadata = {
  title: 'Haircuts in Plantation, FL',
  description:
    'Precision haircuts for women and men in Plantation, FL: lived-in layers, bobs, curtain bangs and blunt cuts. 4.9★ · 1,230+ reviews. Book online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    images: [OG_IMAGE],
    title: 'Haircuts in Plantation, FL | Blend Hair Boutique',
    description: 'Precision haircuts for women and men in Plantation, FL. Lived-in layers, bobs, custom styling by expert stylists at Blend Hair Boutique. 4.9★ rated. Book online.',
    url: CANONICAL,
  },
}

const faqs = [
  {
    q: 'How long does a haircut appointment take at Blend Hair Boutique?',
    a: 'A women\'s haircut with blowout typically takes 60–90 minutes depending on length and density. Men\'s cuts are usually 30–45 minutes. If you\'re combining a haircut with color services, we\'ll give you a full time estimate when you book.',
  },
  {
    q: 'Do you offer consultations before the haircut?',
    a: 'Yes. Every appointment at Blend Hair Boutique begins with a thorough consultation. Our stylists review your hair history, goals, lifestyle, and maintenance preferences before picking up any shears. We believe the consultation is as important as the cut itself.',
  },
  {
    q: 'What types of haircuts does Blend Hair Boutique specialize in?',
    a: 'Our stylists specialize in a wide range of cuts: precision bobs, lived-in layers, curtain bangs, blunt cuts, face-framing layers, wolf cuts, shags, and classic salon cuts for all hair textures: straight, wavy, curly, and coily. We tailor every cut to your face shape, hair texture, and lifestyle.',
  },
  {
    q: 'Can I book a haircut and color in the same appointment?',
    a: 'Absolutely. We frequently combine haircuts with balayage, highlights, color, or smoothing treatments in the same session. When booking, simply select both services and our team will schedule enough time for both to be done beautifully.',
  },
  {
    q: 'What is included in a haircut at Blend Hair Boutique?',
    a: 'Our haircut service includes consultation, shampoo and conditioning treatment, the cut itself, and a professional blowout and style. Your stylist will also walk you through home-care recommendations and styling techniques so you can recreate the look at home.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Haircuts in Plantation, FL',
      description: 'Precision haircuts for women and men at Blend Hair Boutique in Plantation, Florida. Lived-in layers, bobs, curtain bangs, and custom styling tailored to your face shape, hair texture, and lifestyle.',
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
        { '@type': 'ListItem', position: 3, name: 'Haircuts in Plantation, FL', item: CANONICAL },
      ],
    },
  ],
}

export default function HaircutsPlantationPage() {
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
              <em>Haircuts</em> in Plantation, FL
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Blend Hair Boutique is Plantation's destination for precision haircuts that honor your hair's natural texture and suit your lifestyle. Our stylists are trained in the most sought-after techniques: lived-in layers, bobs, curtain bangs, and modern cuts for all hair types, delivered with the warmth and artistry of a true Brazilian luxury salon.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
                Book a Haircut
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
                  The Blend Approach
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  The Right Cut.<br /><em>For You.</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  A great haircut at Blend Hair Boutique starts before the scissors ever touch your hair. Our stylists dedicate time to understanding your face shape, hair density, growth patterns, and daily routine. This consultation isn't a formality. It's how we ensure the cut we give you is one you can actually live in and love every day.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  Whether you're looking for a transformative change or a flawless maintenance cut, our team's precision and attention to detail ensure consistent, beautiful results every visit. We believe a truly excellent haircut should look just as good on day ten as it does on day one.
                </p>
              </div>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="/images/gallery/blonde-shag-bob.webp"
                  alt="Layered blonde bob haircut at Blend Hair Boutique in Plantation, FL"
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
              Our Specialties
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Cuts We <em>Excel At</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Lived-In Layers', body: 'Soft, effortless layers that move naturally and frame your face without looking over-styled. Perfect for straight, wavy, and curly hair alike.' },
                { title: 'Precision Bobs', body: 'From classic blunt bobs to stacked and textured variations, our stylists craft bobs that complement your face shape and hair texture beautifully.' },
                { title: 'Curtain Bangs', body: 'The ultimate face-framing fringe. Our stylists cut curtain bangs to fall in perfect symmetry with your natural part and facial structure.' },
                { title: 'Curly & Textured Cuts', body: 'We have deep expertise in cutting curly and textured hair, understanding how curl pattern affects length and ensuring the cut works with your natural movement.' },
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
              What to Expect
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Your Appointment, <em>Step by Step</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                { step: '01', title: 'Consultation', body: 'We review your hair goals, face shape, texture, and daily routine to design the ideal cut for you.' },
                { step: '02', title: 'Shampoo & Condition', body: 'Your hair is cleansed and conditioned with professional products chosen for your hair type.' },
                { step: '03', title: 'Precision Cut', body: 'Your stylist executes the cut with precision, section by section, ensuring balance and consistency throughout.' },
                { step: '04', title: 'Blowout & Style', body: 'We finish with a professional blowout and styling, showing you how to recreate the look at home.' },
              ].map((s) => (
                <div key={s.step} style={{ borderTop: '1px solid var(--line)', paddingTop: '1.5rem' }}>
                  <p style={{ fontSize: '0.88rem', letterSpacing: '0.2em', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '0.6rem' }}>{s.step}</p>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.6rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-2)', fontWeight: 300 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Areas We Serve
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1rem', textAlign: 'center' }}>
              Serving <em>South Florida</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, textAlign: 'center', maxWidth: '56ch', margin: '0 auto 2.5rem' }}>
              Located at 10035 Cleary Blvd in Plantation, FL 33324, Blend Hair Boutique serves clients from across Broward County and South Florida, including Plantation, Davie, Weston, Fort Lauderdale, Sunrise, Cooper City, Pembroke Pines, Miramar, Boca Raton, and Miami.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['Plantation, FL', 'Davie, FL', 'Weston, FL', 'Fort Lauderdale, FL', 'Sunrise, FL', 'Cooper City, FL', 'Pembroke Pines, FL', 'Miramar, FL', 'Boca Raton, FL'].map((city) => (
                <span key={city} style={{ fontSize: '0.75rem', padding: '0.4rem 1rem', border: '1px solid var(--line)', color: 'var(--text-2)', letterSpacing: '0.05em' }}>{city}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>FAQ</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Haircut <em>Questions</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>{REVIEW_LINE.en}</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Ready for your best<br /><em>haircut in Plantation?</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book online 24/7 or call us at (754) 206-3501. Blend Hair Boutique is located at 10035 Cleary Blvd, Plantation, FL 33324.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book a Haircut Online</a>
              <Link href="/services" className="btn btn--outline">View All Services</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

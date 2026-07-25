import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/bridal-hair-south-florida`

export const metadata: Metadata = {
  title: 'Bridal Hair Salon in South Florida | Blend Hair Boutique — Plantation, FL',
  description:
    'Luxury bridal hair and beauty packages in South Florida at Blend Hair Boutique, Plantation, FL. Bridal trials, day-of styling, bridal party packages. 4.9★ rated salon. Book your consultation.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Bridal Hair Salon in South Florida | Blend Hair Boutique — Plantation, FL',
    description: 'Luxury bridal hair and beauty in South Florida. Bridal trials, day-of styling, and bridal party packages at Blend Hair Boutique, Plantation, FL.',
    url: CANONICAL,
  },
}

const faqs = [
  { q: 'Does Blend Hair Boutique offer bridal hair consultations?', a: 'Yes — a bridal trial consultation is a key part of our bridal process. During the trial, we finalize your wedding day look, review hair and makeup options, and ensure you feel completely comfortable with the result before your big day. We strongly recommend booking the trial well in advance.' },
  { q: 'How far in advance should I book bridal hair services?', a: 'We recommend booking bridal consultations at least 3–6 months before your wedding date, especially for peak wedding season (October–May in South Florida). Popular dates fill quickly — the earlier you book, the better.' },
  { q: 'Does Blend Hair Boutique offer bridal party packages?', a: 'Yes — we offer coordinated group bridal packages for the entire wedding party, including hair, nails, and facial treatments. We can accommodate multiple clients on the wedding day with a pre-planned timeline to ensure everyone is ready on schedule.' },
  { q: 'Do you offer on-location bridal services?', a: 'On-location services are available for select dates depending on stylist availability and travel logistics. Please contact us directly at (754) 206-3501 or via WhatsApp at (954) 544-6792 to discuss on-location options for your wedding.' },
  { q: 'What does a bridal package include?', a: 'Bridal packages at Blend Hair Boutique can include hair styling (updo, waves, or blowout), nail services, and facial treatments. We create a personalized package based on your timeline, number of guests, and beauty goals. Each package starts with a bridal consultation to finalize all details.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Bridal Hair Salon in South Florida',
      description: 'Luxury bridal hair and beauty packages in South Florida at Blend Hair Boutique, Plantation, FL. Bridal trials, day-of hair styling, and group packages for wedding parties.',
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
        '@type': 'Question', name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Bridal Hair South Florida', item: CANONICAL },
      ],
    },
  ],
}

export default function BridalHairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              South Florida · Bridal Specialists
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '16ch' }}>
              <em>Bridal Hair</em> &amp; Beauty in South Florida
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Blend Hair Boutique is a luxury bridal beauty destination in Plantation, Florida, serving brides across Broward County and South Florida. We offer complete bridal packages — hair, nails, and skin — with bridal trials, day-of styling, and coordinated packages for wedding parties.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">Book Bridal Consultation</a>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--outline-light">WhatsApp Us</a>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 5rem)', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>The Blend Bridal Experience</p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Your most important day<br /><em>deserves perfection.</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  At Blend Hair Boutique, bridal services begin long before the wedding day. Our process starts with a dedicated bridal consultation where we discuss your vision, dress, venue, and overall aesthetic. A trial appointment follows — so you can see, feel, and approve your look in advance, leaving nothing to chance on the day itself.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  On your wedding day, our team creates an experience that is calm, efficient, and beautifully organized. We coordinate timelines, manage the entire bridal party, and ensure every bride leaves feeling exactly as she envisioned — not just well-styled, but radiant and confident.
                </p>
              </div>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img src="/images/gallery/bridal-updo.webp" alt="Bridal updo created at Blend Hair Boutique in Plantation, South Florida" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>What We Offer</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Complete <em>Bridal Services</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2rem' }}>
              {[
                { name: 'Bridal Trial', desc: 'A dedicated pre-wedding appointment to finalize your hair look, test accessories, and ensure you\'re 100% confident before the big day.' },
                { name: 'Wedding Day Styling', desc: 'Professional hair styling on your wedding day — updos, romantic waves, sleek blowouts, braids, and more — timed precisely to your schedule.' },
                { name: 'Bridal Party Packages', desc: 'Coordinated beauty services for bridesmaids, mothers-of-the-bride, and the full wedding party. We plan and manage the entire timeline.' },
                { name: 'Pre-Wedding Color & Care', desc: 'We recommend scheduling a balayage, color gloss, or keratin treatment 2–4 weeks before your wedding for polished, photograph-ready hair.' },
              ].map((s) => (
                <div key={s.name} style={{ padding: '1.75rem', border: '1px solid var(--line)', background: 'var(--white)' }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.6rem' }}>{s.name}</h3>
                  <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-2)', fontWeight: 300 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--beige" id="faq">
          <div className="container" style={{ maxWidth: '820px' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Bridal <em>FAQ</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>Book Early — Limited Availability</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Begin your<br /><em>bridal journey</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '2.5rem' }}>
              Blend Hair Boutique · 10035 Cleary Blvd, Plantation, FL 33324<br />
              For bridal inquiries: (754) 206-3501 · WhatsApp: (954) 544-6792
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book Bridal Consultation</a>
              <Link href="/services/styling" className="btn btn--outline">Bridal Service Details</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

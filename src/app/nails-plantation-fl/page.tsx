import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/nails-plantation-fl`

export const metadata: Metadata = {
  title: 'Nail Salon in Plantation, FL | Manicure & Pedicure | Blend Hair Boutique',
  description:
    'Professional manicure, pedicure, gel nails, and nail art in Plantation, Florida at Blend Hair Boutique. Luxury nail services in a full-service beauty boutique. 4.9★ · 1,230+ reviews. Book online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Nail Salon in Plantation, FL | Blend Hair Boutique',
    description: 'Manicure, pedicure, gel nails, and nail art in Plantation, FL. Luxury nail services at Blend Hair Boutique. 4.9★. Book online.',
    url: CANONICAL,
  },
}

const faqs = [
  {
    q: 'What nail services does Blend Hair Boutique offer in Plantation?',
    a: 'We offer a full range of nail services including classic manicures, classic pedicures, gel manicures, gel pedicures, French manicures, nail art, nail extensions, and spa pedicures with exfoliation and massage. All services are performed by professional nail technicians in a clean, luxury environment.',
  },
  {
    q: 'How long do gel nails last?',
    a: 'Gel manicures typically last 2–3 weeks with proper care. To extend your gel nails, avoid prolonged water exposure in the first 24 hours, wear gloves when cleaning, and apply cuticle oil daily. We also offer gel fill appointments to maintain your length without a full removal.',
  },
  {
    q: 'Is it safe to get a pedicure at Blend Hair Boutique?',
    a: 'Absolutely. We follow strict sanitation and sterilization protocols for all nail tools and equipment. Foot baths are thoroughly cleaned and disinfected between every client. Your safety and comfort are our top priority.',
  },
  {
    q: 'Can I book a manicure and pedicure together?',
    a: 'Yes — many of our clients book a mani-pedi combination. We can schedule both services in one appointment so you leave with completely polished nails from fingertip to toe. Just select both services when booking online.',
  },
  {
    q: 'Do you offer nail services for special events like weddings or quinceañeras?',
    a: 'Yes. We offer group nail appointments for bridal parties, quinceañeras, and other special events. Contact us directly to coordinate group bookings and ensure we have enough availability to accommodate your entire party.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Nail Services in Plantation, FL',
      description: 'Professional manicure, pedicure, gel nails, and nail art at Blend Hair Boutique in Plantation, Florida.',
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
        { '@type': 'ListItem', position: 3, name: 'Nail Services in Plantation, FL', item: CANONICAL },
      ],
    },
  ],
}

export default function NailsPlantationPage() {
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
              Nail Services in<br /><em>Plantation, FL</em>
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Manicures, pedicures, gel nails, and nail art — all within the luxurious setting of Blend Hair Boutique in Plantation, FL. Our nail technicians combine precision technique with the warm, attentive service our boutique is known for. Because beautiful nails are part of the full picture.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
                Book Nail Appointment
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
                  Full-Service Beauty
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Nails Done.<br /><em>Beautifully.</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  At Blend Hair Boutique, nail care isn't an afterthought — it's an essential part of our full-service beauty experience. Our nail technicians are skilled professionals who care deeply about quality, precision, and the longevity of every set they create.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  Whether you're coming in for a quick gel touch-up, a luxurious spa pedicure, or getting fully polished from head to toe before a special event, our nail services are designed to complement the full Blend experience. Clean, professional, and worth every visit.
                </p>
              </div>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="/images/gallery/nails-red-blend-wall.webp"
                  alt="Red gel manicure at Blend Hair Boutique nail services in Plantation, FL"
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
              Nail Menu
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Our Nail <em>Services</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Classic Manicure', body: 'Nail shaping, cuticle care, hand massage, and your choice of polish. Clean, classic, and always polished.' },
                { title: 'Gel Manicure', body: 'Long-lasting gel polish that stays chip-free for 2–3 weeks. Available in hundreds of shades with a glossy or matte finish.' },
                { title: 'Classic Pedicure', body: 'Foot soak, exfoliation, callus treatment, nail shaping, cuticle care, massage, and polish. Your feet will thank you.' },
                { title: 'Spa Pedicure', body: 'Our most luxurious pedicure experience — extended massage, premium exfoliation, hydrating mask, and hot towel wrap.' },
                { title: 'French Manicure', body: 'The timeless classic — clean pink or nude base with bright white tips. Available in regular or gel polish for longer wear.' },
                { title: 'Nail Art', body: 'From minimalist designs to intricate patterns — our nail technicians create custom nail art for any occasion or aesthetic.' },
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
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>FAQ</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Nail Services <em>Questions</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>4.9 ★ · 1,230+ Google Reviews</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Ready for beautiful nails<br /><em>in Plantation, FL?</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book online 24/7 or call us at (754) 206-3501. Blend Hair Boutique, 10035 Cleary Blvd, Plantation, FL 33324.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book Nail Appointment</a>
              <Link href="/services" className="btn btn--outline">View All Services</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS, REVIEW_LINE, OG_IMAGE } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/hair-salon-plantation-fl`

export const metadata: Metadata = {
  title: 'Hair Salon Plantation FL · Near Me',
  description:
    'Blend Hair Boutique is Plantation\'s most-loved luxury hair salon, rated 4.9★ across 1,230+ Google reviews. Balayage, haircuts, keratin treatments, nails, facials, waxing & more. 10035 Cleary Blvd. Book online 24/7.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    images: [OG_IMAGE],
    title: 'Hair Salon Plantation FL | Blend Hair Boutique',
    description: 'Plantation\'s most-loved luxury hair salon. 4.9★ · 1,230+ Google reviews. Balayage, cuts, keratin, nails, facials & more. Book online 24/7.',
    url: CANONICAL,
  },
}

const faqs = [
  {
    q: 'Where is Blend Hair Boutique located in Plantation, FL?',
    a: 'Blend Hair Boutique is located at 10035 Cleary Blvd, Plantation, FL 33324. We are conveniently situated in western Broward County, making us easily accessible from Plantation, Davie, Weston, Fort Lauderdale, Sunrise, and Cooper City.',
  },
  {
    q: 'What are the hours of Blend Hair Boutique?',
    a: 'Blend Hair Boutique is open Monday through Wednesday 9:00 AM to 6:00 PM, Thursday through Saturday 9:00 AM to 7:00 PM, and closed on Sunday. Hours may vary on holidays, so we recommend checking our booking system or calling (754) 206-3501 to confirm availability.',
  },
  {
    q: 'What services does Blend Hair Boutique offer?',
    a: 'Blend Hair Boutique is a full-service luxury beauty salon offering hair services (cuts, color, balayage, highlights, keratin treatments, Brazilian blowout, hair extensions), nail services (manicures, pedicures, gel nails), skin services (facials, waxing), makeup application, and micropigmentation (microblading, ombre brows, lip blushing).',
  },
  {
    q: 'How do I book an appointment at Blend Hair Boutique in Plantation?',
    a: 'You can book online 24/7 through our Fresha booking system, available on our website. You can also call us at (754) 206-3501 or message us via WhatsApp at (954) 544-6792. We recommend booking in advance for color services and special occasions, as our calendar fills quickly.',
  },
  {
    q: 'Is Blend Hair Boutique a Brazilian salon?',
    a: 'Yes. Blend Hair Boutique was founded with a Brazilian-inspired approach to beauty and hospitality. Our team includes specialists trained in Brazil, and we bring a distinctly Brazilian warmth, artistry, and dedication to craft to every service. Our multilingual team serves clients in English, Portuguese, and Spanish.',
  },
  {
    q: 'Does Blend Hair Boutique offer gift cards?',
    a: 'Yes. Blend Hair Boutique gift cards are available for purchase online through our website. They make a thoughtful gift for any occasion: birthdays, holidays, mother\'s day, bridal showers, and more. Gift cards can be used toward any service or product.',
  },
]

const services = [
  { name: 'Balayage', href: '/balayage-plantation-fl', desc: 'Custom hand-painted color, highlights, and ombré.' },
  { name: 'Hair Color', href: '/hair-color-plantation', desc: 'Full color, root touch-ups, toners, and gloss.' },
  { name: 'Highlights', href: '/highlights-plantation-fl', desc: 'Foil highlights, babylights, and money piece.' },
  { name: 'Haircuts', href: '/haircuts-plantation-fl', desc: 'Precision cuts, lived-in layers, and blowout styling.' },
  { name: 'Keratin Treatment', href: '/keratin-treatment-plantation', desc: 'Smoothing treatments for frizz-free, sleek results.' },
  { name: 'Hair Extensions', href: '/hair-extensions-plantation', desc: 'Tape-in, sew-in, and premium extension methods.' },
  { name: 'Blowout', href: '/blowout-plantation-fl', desc: 'Smooth, voluminous, or beachy wave blowout styles.' },
  { name: 'Color Correction', href: '/color-correction-plantation-fl', desc: 'Fixing brassiness, box dye, and uneven color.' },
  { name: 'Nails', href: '/nails-plantation-fl', desc: 'Manicures, pedicures, gel nails, and nail art.' },
  { name: 'Waxing', href: '/waxing-plantation-fl', desc: 'Eyebrow shaping and full or partial body waxing.' },
  { name: 'Facials', href: '/facials-plantation-fl', desc: 'Cleansing, hydrating, and anti-aging facials.' },
  { name: 'Makeup', href: '/makeup-plantation-fl', desc: 'Bridal, event, and everyday makeup application.' },
  { name: 'Micropigmentation', href: '/micropigmentation-plantation-fl', desc: 'Microblading, ombre brows, and lip blushing.' },
  { name: 'Bridal Hair', href: '/bridal-hair-south-florida', desc: 'Full bridal hair and beauty packages.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Hair Salon Plantation FL | Blend Hair Boutique',
      description: 'The primary local authority page for Blend Hair Boutique, a luxury hair salon in Plantation, Florida.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#business` },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Hair Salon Plantation FL', item: CANONICAL },
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

export default function HairSalonPlantationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-enter">
        <header className="page-hero page-hero--dark page-hero--fade-soft">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              10035 Cleary Blvd · Plantation, FL 33324
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '18ch' }}>
              The Best Hair Salon<br /><em>in Plantation, FL</em>
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, maxWidth: '50ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Blend Hair Boutique is a full-service luxury hair and beauty salon in Plantation, Florida. With a 4.9-star rating across 1,230+ Google reviews, we are Broward County's most trusted destination for balayage, haircuts, keratin treatments, nails, facials, and complete beauty experiences, delivered with Brazilian warmth and precision.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
                Book an Appointment
              </a>
              <a href={BUSINESS.phoneHref} className="btn btn--outline-light">
                Call (754) 206-3501
              </a>
            </div>
          </div>
        </header>

        {/* Trust bar */}
        <section style={{ background: 'var(--bg-soft)', borderBottom: '1px solid var(--line)', padding: '1.75rem 0' }}>
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
              {[
                '4.9 ★ Google Rating',
                '1,230+ Verified Reviews',
                'Brazilian Specialists',
                'Open Since 2018',
                'Plantation, FL 33324',
                'EN · PT · ES',
              ].map((item) => (
                <span key={item} style={{ fontSize: '0.88rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-2)', fontWeight: 500 }}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        {/* About section */}
        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 5rem)', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>
                  Plantation's Luxury Salon
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Where artistry<br /><em>meets warmth.</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  Since opening in Plantation, FL, Blend Hair Boutique has grown from a neighborhood boutique into one of Broward County's most beloved beauty destinations. Our team of multilingual stylists, colorists, nail technicians, and estheticians share one commitment: delivering premium results in an environment that feels genuinely welcoming.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1.5rem' }}>
                  We believe beauty is personal. That's why every appointment begins with a consultation, a real conversation about your goals, lifestyle, and history. We listen before we act. The result is a visit that feels tailored, not transactional, and results that feel unmistakably like you.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/about" className="btn btn--outline">Our Story</Link>
                  <Link href="/team" className="btn btn--ghost">Meet the Team</Link>
                </div>
              </div>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="/images/gallery/blonde-highlights-long.webp"
                  alt="Blonde highlights at Blend Hair Boutique, a hair salon in Plantation, FL"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '1100px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Full-Service Beauty
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1rem', textAlign: 'center' }}>
              Everything You Need,<br /><em>Under One Roof</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, textAlign: 'center', maxWidth: '52ch', margin: '0 auto 3rem' }}>
              From a precision haircut to a full balayage transformation, from a gel manicure to microbladed brows, Blend Hair Boutique is your one-stop luxury beauty destination in Plantation, FL.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="service-hub-card"
                >
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, marginBottom: '0.4rem', color: 'var(--text)' }}>{s.name}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.6, fontWeight: 300 }}>{s.desc}</p>
                  <span style={{ display: 'inline-block', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--gold-dk)', letterSpacing: '0.1em', fontWeight: 500 }}>Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Blend */}
        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Why Plantation Chooses Blend
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              The Blend <em>Difference</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                { title: '4.9 Stars · 1,230+ Reviews', body: 'Consistently rated as one of Broward County\'s top salons. Our reviews aren\'t bought. They\'re earned, one client at a time, since 2018.' },
                { title: 'Brazilian Expertise', body: 'Our team brings the precision, warmth, and hair culture of Brazil to Plantation, FL. Brazilian stylists are world-renowned for their mastery of color, texture, and smoothing techniques.' },
                { title: 'Multilingual Team', body: 'We serve our community in English, Portuguese, and Spanish, ensuring every client can communicate exactly what they want and feel completely understood.' },
                { title: 'Full-Service Under One Roof', body: 'Hair, nails, skin, brows, and makeup, all in one location. Whether you\'re coming for a quick trim or a complete transformation, we have you covered.' },
              ].map((s) => (
                <div key={s.title} style={{ borderTop: '1px solid var(--line)', paddingTop: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.6rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-2)', fontWeight: 300 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Area served */}
        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Serving All of South Florida
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1rem', textAlign: 'center' }}>
              Your Neighborhood Salon,<br /><em>For All of Broward County</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, textAlign: 'center', maxWidth: '60ch', margin: '0 auto 2.5rem' }}>
              Located at 10035 Cleary Blvd in Plantation, FL 33324, Blend Hair Boutique is centrally positioned in western Broward County. Our clients travel from across South Florida to visit us, because we deliver results worth the trip. We are Plantation's luxury hair salon serving Davie, Weston, Fort Lauderdale, Sunrise, Cooper City, Pembroke Pines, Miramar, Boca Raton, and Miami.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['Plantation, FL', 'Davie, FL', 'Weston, FL', 'Fort Lauderdale, FL', 'Sunrise, FL', 'Cooper City, FL', 'Pembroke Pines, FL', 'Miramar, FL', 'Hollywood, FL', 'Boca Raton, FL', 'Miami, FL'].map((city) => (
                <span key={city} style={{ fontSize: '0.75rem', padding: '0.4rem 1rem', border: '1px solid var(--line)', color: 'var(--text-2)', letterSpacing: '0.05em' }}>{city}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>FAQ</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Common <em>Questions</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="section section--dark">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>{REVIEW_LINE.en}</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem', color: 'var(--white)' }}>
              Plantation's luxury salon<br /><em>is ready for you.</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book online 24/7, call (754) 206-3501, or visit us at 10035 Cleary Blvd, Plantation, FL 33324.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">Book an Appointment</a>
              <Link href="/contact" className="btn btn--outline-light">Get Directions</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

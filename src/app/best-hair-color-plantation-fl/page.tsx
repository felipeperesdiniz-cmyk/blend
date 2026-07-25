import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/best-hair-color-plantation-fl`

export const metadata: Metadata = {
  title: 'Best Hair Color in Plantation, FL | Blend Hair Boutique',
  description:
    'Find the best hair color in Plantation, FL at Blend Hair Boutique. Balayage, highlights, all-over color, and color correction by expert colorists. 4.9★ · 1,230+ reviews. Book online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Best Hair Color in Plantation, FL | Blend Hair Boutique',
    description:
      'Plantation\'s top-rated hair color salon. Expert balayage, highlights, all-over color, and color correction. 4.9★ · 1,230+ Google reviews. Book at Blend Hair Boutique.',
    url: CANONICAL,
  },
}

const faqs = [
  {
    q: 'What hair color services does Blend Hair Boutique offer?',
    a: 'Blend offers a full spectrum of hair color services: balayage, highlights, all-over color, root touch-ups, color correction, toning and glossing, ombre, blonding and lightening, and specialty color techniques. Whether you want a subtle refresh or a dramatic transformation, our colorists have the training and products to achieve it safely.',
  },
  {
    q: 'How do I choose between balayage and highlights for my hair?',
    a: 'Balayage creates a softer, more natural look with hand-painted placement and a gradual grow-out. Highlights use foils for more precise, defined brightness. If you want low-maintenance, sun-kissed color — choose balayage. If you want visible, uniform brightness or a more structured look — foil highlights may be a better fit. Our colorists will help you decide during your consultation.',
  },
  {
    q: 'Can Blend fix a bad hair color from another salon?',
    a: 'Yes — color correction is one of our specialties. Color correction can address issues including brassiness, uneven color, over-processed hair, box-color build-up, and color that came out too light or too dark. Color correction is a multi-step process that requires a consultation before booking, as the number of sessions depends on your hair\'s current condition and your goal.',
  },
  {
    q: 'How long does hair color last at Blend Hair Boutique?',
    a: 'Longevity depends on the service. All-over color and root touch-ups typically last 4–6 weeks before noticeable regrowth. Balayage can last 12–16 weeks or more before needing a touch-up. Highlights fall somewhere in between. Using color-safe, sulfate-free shampoo and avoiding excessive heat will significantly extend any color service.',
  },
  {
    q: 'Does Blend use ammonia-free or low-ammonia hair color?',
    a: 'Blend works with professional-grade color lines that include low-ammonia and ammonia-free options. The specific formula your colorist selects will depend on your hair\'s condition, your color history, and the result you\'re aiming for. During your consultation, your stylist will discuss the formula and its implications for your hair\'s health.',
  },
  {
    q: 'How should I prepare for a hair color appointment at Blend?',
    a: 'Come in with your hair in its natural state — avoid heavy styling products on appointment day. Bring reference photos of color you love (and, if possible, colors you want to avoid). Wear a top or shirt you don\'t mind getting color on. Arrive on time, as color appointments have precise timing requirements. If you have concerns about your hair\'s condition, mention them when booking.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/best-hair-color-plantation-fl#service`,
      name: 'Best Hair Color in Plantation, FL',
      description: 'Expert hair color services at Blend Hair Boutique in Plantation, Florida. Balayage, highlights, all-over color, and color correction by certified colorists.',
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: [
        { '@type': 'City', name: 'Plantation, FL' },
        { '@type': 'AdministrativeArea', name: 'Broward County, FL' },
      ],
      url: CANONICAL,
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
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Best Hair Color Plantation FL', item: CANONICAL },
      ],
    },
  ],
}

export default function BestHairColorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              4.9★ · 1,230+ Google Reviews · Plantation, FL
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '18ch' }}>
              The Best Hair Color<br /><em>in Plantation, FL</em>
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '52ch', marginTop: '1.5rem', fontWeight: 300 }}>
              From custom balayage and foil highlights to full color correction and glossing treatments — Blend Hair Boutique's certified colorists deliver hair color that is healthy, vibrant, and designed to last in South Florida's climate.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
                Book Color Appointment
              </a>
              <a href={BUSINESS.phoneHref} className="btn btn--outline-light">
                Call (754) 206-3501
              </a>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Full Color Services
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Every Color Service,<br /><em>Done at the Highest Level</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Balayage', body: 'Hand-painted, freehand color that creates natural sun-kissed dimension. Grows out beautifully with minimal maintenance.', href: '/balayage-plantation-fl' },
                { title: 'Highlights', body: 'Foil highlights for precise, defined brightness and lift — customized to your desired level of contrast.', href: '/highlights-plantation-fl' },
                { title: 'All-Over Color', body: 'Single-process color for rich, uniform coverage. Ideal for root touch-ups, gray coverage, or a full refresh.', href: '/hair-color-plantation' },
                { title: 'Color Correction', body: 'Expert correction for unwanted brassiness, uneven color, or previous results that didn\'t land as expected.', href: '/color-correction-plantation-fl' },
                { title: 'Blonding', body: 'Specialized lightening for platinum, ash, pearl, and ultra-light blonde results — precision chemistry required.', href: '/blonding-specialist-plantation' },
                { title: 'Toning & Glossing', body: 'Refresh faded color, eliminate brassiness, and add glossy shine between color appointments.', href: '/hair-color-plantation' },
              ].map((s) => (
                <Link key={s.title} href={s.href} style={{ textDecoration: 'none', color: 'inherit', borderTop: '1px solid var(--line)', paddingTop: '1.5rem', display: 'block' }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-2)', fontWeight: 300 }}>{s.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 5rem)', alignItems: 'center' }}>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="/images/gallery/rich-brunette-waves.webp"
                  alt="Rich dimensional brunette color at Blend Hair Boutique in Plantation, FL"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>
                  Our Approach
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Color That Starts<br /><em>With Listening</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  Every color appointment at Blend begins with a consultation — not because we're required to, but because we believe the only way to get color right is to understand the person wearing it. We ask about your history, your lifestyle, your maintenance habits, and what results you've loved or hated in the past.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  Then we make a recommendation. We'll tell you what's achievable in one session and what needs time. We won't over-promise. And when we apply the color, we follow a process that prioritizes your hair's integrity alongside the result.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Serving South Florida
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, textAlign: 'center', maxWidth: '56ch', margin: '0 auto 2.5rem' }}>
              Located at 10035 Cleary Blvd, Plantation, FL 33324 — serving clients from Broward County and across South Florida.
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
              Hair Color <em>Questions</em>
            </h2>
            <ServiceFAQ faqs={faqs} />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dk)', fontWeight: 500, marginBottom: '1rem' }}>4.9 ★ · 1,230+ Google Reviews</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Ready for beautiful<br /><em>hair color in Plantation?</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book online 24/7 or call (754) 206-3501. Blend Hair Boutique is at 10035 Cleary Blvd, Plantation, FL 33324.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book Color Online</a>
              <Link href="/services" className="btn btn--outline">View All Services</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/reviews`

export const metadata: Metadata = {
  title: 'Reviews | Blend Hair Boutique — 4.9★ · 1,230+ Google Reviews in Plantation, FL',
  description:
    'Read what Plantation, FL clients say about Blend Hair Boutique. 4.9★ rated across 1,230+ Google reviews. Balayage, haircuts, keratin, nails, and more. See why we\'re Broward\'s most-loved salon.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Reviews | Blend Hair Boutique — 4.9★ · 1,230+ Google Reviews',
    description: 'See why Blend Hair Boutique in Plantation, FL has a 4.9★ rating from 1,230+ Google reviews. Read client testimonials and book your visit.',
    url: CANONICAL,
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Client Reviews — Blend Hair Boutique',
      description: 'Client reviews and testimonials for Blend Hair Boutique, luxury hair salon in Plantation, Florida.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#business` },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Reviews', item: CANONICAL },
        ],
      },
    },
    {
      '@type': 'AggregateRating',
      '@id': `${CANONICAL}#rating`,
      itemReviewed: { '@id': `${SITE_URL}/#business` },
      ratingValue: '4.9',
      reviewCount: '1230',
      bestRating: '5',
      worstRating: '1',
    },
  ],
}

// Verbatim 5★ client reviews sourced from Yelp, Fresha, and Google review aggregators
// (lightly trimmed for length; attributions match the original reviewers).
const testimonials = [
  {
    name: 'Christie R.',
    service: 'Hair Color with Roger',
    rating: 5,
    text: 'First time at this salon and it was a great experience! Roger was my stylist and he was so sweet and really listened to what I wanted. He knew exactly the look I was going for, and for the first time in a long time I truly love the color of my hair! The salon is peaceful and the cappuccino they served was a nice touch.',
  },
  {
    name: 'Geraldine U.',
    service: 'Balayage with Beatriz',
    rating: 5,
    text: 'Got my hair done by the amazing Beatriz, and I\'m SO glad I went for this balayage look! As a brunette, it definitely takes some time — but the end result was so worth it. My husband was speechless! I don\'t let anyone else touch my hair — Beatriz is truly the best. She\'s friendly, professional, and actually listens to what you want.',
  },
  {
    name: 'Tatiana F.',
    service: 'Color & Blowout with Nana',
    rating: 5,
    text: 'My hair professional is Nana Reis — she is amazing! From start to finish she is professional, attentive, and truly passionate about her work. She listened to what I want, gives me great hair advice, and executed the color and blowout flawlessly. The end result exceeded my expectations.',
  },
  {
    name: 'Michelle V.',
    service: 'Blowout & Style with Lea',
    rating: 5,
    text: 'When I say I\'m picky, I\'m super picky! Lea did an amazing job on my hair — volume bangs and beach waves, unbelievable job! The salon is beautiful, clean and all the girls are super nice. Definitely recommend this place and will be coming back.',
  },
  {
    name: 'Megan G.',
    service: 'Haircut & Blow Dry with Debora',
    rating: 5,
    text: 'It was my first time going to this salon and my experience couldn\'t have been better! From the moment I walked in, everything went so smoothly. Deborah did my cut and blow dry and I\'m very pleased with how it turned out! I will definitely be returning.',
  },
  {
    name: 'Erika P.',
    service: 'Nails & Waxing with Nilza',
    rating: 5,
    text: 'This place is great, always clean, they are all very professional and the atmosphere is super nice. Nilza is my favorite — she does the perfect Brazilian wax, and the nails she does are impeccable! Highly recommend.',
  },
  {
    name: 'Carolina S.',
    service: 'Hair Care with Ketty',
    rating: 5,
    text: 'I simply love being cared for by Ketty! Beyond being an extremely talented professional, she is attentive, careful, and makes you feel welcomed from beginning to end. I\'m going home feeling lighter, more confident, and empowered.',
  },
  {
    name: 'Liliana N.',
    service: 'Brows with Adriana · Haircut with Roger',
    rating: 5,
    text: 'Awesome first experience at Blend! Both Adriana, for eyebrows, and Roger, for a haircut, took excellent care of my daughter. They both consulted with her prior to the services and listened to what she wanted. The end result was beautiful brows and a perfect fresh new haircut. Exceptional service!',
  },
  {
    name: 'Heather B.',
    service: 'Haircut with Juliana',
    rating: 5,
    text: 'I was so scared to find someone new to cut my hair. They did a wonderful job accommodating me — I was given coffee and water, had my hair washed and brushed, and Juliana cut my hair. She was fast and did exactly what I asked for. I\'m very happy with my experience and results.',
  },
  {
    name: 'Domonique R.',
    service: 'Blonding with Beatriz',
    rating: 5,
    text: 'Beatriz consulted me to help pick a hair color that not only matched my inspiration picture, but she also took into consideration what color would be most flattering. With flawless execution she got me to the perfect blonde with minimal damage. She\'s amazing!',
  },
  {
    name: 'Katarina C.',
    service: 'Color Transformation with Roger',
    rating: 5,
    text: 'I needed desperately to go from natural dark brown to a light brown! Roger looked at my reference photo and it came out EXACTLY like it. I didn\'t think it would be possible to come out as light as it did, but they made it possible — an amazing experience in a short time! I\'m so in love with my new hair.',
  },
  {
    name: 'Cynthia M.',
    service: 'Haircut',
    rating: 5,
    text: 'Great haircuts! They use good products and the cappuccino is always made perfect.',
  },
]

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Client Reviews · Plantation, FL
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '18ch' }}>
              What Our <em>Clients</em> Say
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Blend Hair Boutique has earned a 4.9-star rating from over 1,230 Google reviews — not through advertising, but through consistent, exceptional work delivered one client at a time since 2012.
            </p>
          </div>
        </header>

        {/* Rating summary */}
        <section style={{ background: 'var(--bg-soft)', padding: '4rem 0' }}>
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 300, lineHeight: 1, color: 'var(--ink)', letterSpacing: '-0.03em' }}>4.9</p>
                <p style={{ color: 'var(--gold)', fontSize: '1.4rem', letterSpacing: '0.1em', marginTop: '0.25rem' }}>★★★★★</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', marginTop: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 500 }}>Google Rating</p>
              </div>
              <div style={{ width: '1px', height: '80px', background: 'var(--line)' }} />
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 300, lineHeight: 1, color: 'var(--ink)', letterSpacing: '-0.03em' }}>1,230+</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', marginTop: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 500 }}>Verified Reviews</p>
              </div>
              <div style={{ width: '1px', height: '80px', background: 'var(--line)' }} />
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 300, lineHeight: 1, color: 'var(--ink)', letterSpacing: '-0.03em' }}>8+</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', marginTop: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 500 }}>Years in Plantation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials grid */}
        <section className="section">
          <div className="container" style={{ maxWidth: '1100px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              Client Testimonials
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Real Stories.<br /><em>Real Results.</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  style={{
                    padding: '2rem',
                    border: '1px solid var(--line)',
                    background: 'var(--white)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <p style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontWeight: 400, color: 'var(--text)' }}>{t.name}</p>
                      <p style={{ fontSize: '0.88rem', color: 'var(--gold)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '0.2rem' }}>{t.service}</p>
                    </div>
                    <span style={{ color: 'var(--gold)', fontSize: '0.95rem', letterSpacing: '0.05em' }}>{'★'.repeat(t.rating)}</span>
                  </div>
                  <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-2)', fontWeight: 300, fontStyle: 'italic' }}>"{t.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google reviews link */}
        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>On Google</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Read All 1,230+<br /><em>Google Reviews</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Every one of our reviews is real, verified, and earned. See what Broward County clients say about Blend Hair Boutique on Google.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://www.google.com/maps/search/Blend+Hair+Boutique+Plantation+FL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Read Google Reviews
              </a>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                Book an Appointment
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Join 1,230+ Happy Clients
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Your turn to experience<br /><em>the Blend difference.</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Book online 24/7 or call (754) 206-3501. Blend Hair Boutique, 10035 Cleary Blvd, Plantation, FL 33324.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book an Appointment</a>
              <Link href="/hair-salon-plantation-fl" className="btn btn--outline">About Our Salon</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

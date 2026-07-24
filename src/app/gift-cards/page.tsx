import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/gift-cards`

export const metadata: Metadata = {
  title: 'Gift Cards | Blend Hair Boutique — Luxury Salon in Plantation, FL',
  description:
    'Give the gift of luxury beauty at Blend Hair Boutique in Plantation, FL. Salon gift cards redeemable for any service — balayage, color, keratin, nails, facials, and more. Buy online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Gift Cards | Blend Hair Boutique',
    description:
      'Give the gift of luxury beauty at Blend Hair Boutique in Plantation, FL. Redeemable for any service — balayage, color, keratin, nails, facials, and more.',
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
      name: 'Gift Cards — Blend Hair Boutique',
      description: 'Salon gift cards for Blend Hair Boutique, luxury hair salon in Plantation, Florida.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#business` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Gift Cards', item: CANONICAL },
      ],
    },
  ],
}

export default function GiftCardsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              The Perfect Gift · Plantation, Florida
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '16ch' }}>
              Gift the <em>Blend</em><br />Experience
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '50ch', marginTop: '1.5rem', fontWeight: 300 }}>
              A Blend gift card is the gift of feeling extraordinary. Redeemable for any service at our luxury hair boutique in Plantation, FL — from balayage and color to facials, nails, and bridal beauty.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS.giftCardUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
                Buy a Gift Card
              </a>
              <a href={BUSINESS.phoneHref} className="btn btn--outline-light">
                Call to Inquire
              </a>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 5rem)', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
                  Give More Than a Gift
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  An Experience<br /><em>They'll Remember</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1rem' }}>
                  A Blend gift card is not just a gift — it's an invitation to an experience. From the moment your recipient walks through our door in Plantation, they are welcomed into a space designed to feel as beautiful as it looks. Personalized service, professional expertise, and genuine warmth in every appointment.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300 }}>
                  Gift cards are available in any amount and can be purchased online through our Fresha booking system. They're ideal for birthdays, holidays, anniversaries, bridal gifts, or simply letting someone you love know they deserve a day of beauty.
                </p>
              </div>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="/images/gallery/salon-wine-service.webp"
                  alt="Complimentary wine service at Blend Hair Boutique in Plantation, FL"
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
              Redeemable For Any Service
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              What Can They<br /><em>Choose?</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Balayage & Color', body: 'Custom balayage, highlights, all-over color, and color correction — our most popular services.', href: '/balayage-plantation-fl' },
                { title: 'Keratin & Smoothing', body: 'Brazilian blowout and keratin treatments for months of frizz-free, effortlessly smooth hair.', href: '/keratin-treatment-plantation' },
                { title: 'Haircuts & Styling', body: 'Precision cuts and blowout styling by experienced stylists who listen first.', href: '/haircuts-plantation-fl' },
                { title: 'Hair Extensions', body: 'Volume and length added seamlessly by certified extension specialists.', href: '/hair-extensions-plantation' },
                { title: 'Facials & Skin', body: 'Personalized facials by licensed estheticians for radiant, healthy-looking skin.', href: '/facials-plantation-fl' },
                { title: 'Nails', body: 'Manicures, pedicures, gel polish, and nail art — polished and precise.', href: '/nails-plantation-fl' },
                { title: 'Waxing & Brows', body: 'Eyebrow design, full and partial waxing for smooth, defined results.', href: '/waxing-plantation-fl' },
                { title: 'Bridal Beauty', body: 'Bridal hair and makeup for the most important day — trial runs and day-of services available.', href: '/bridal-hair-south-florida' },
              ].map((s) => (
                <Link key={s.title} href={s.href} style={{ textDecoration: 'none', color: 'inherit', borderTop: '1px solid var(--line)', paddingTop: '1.5rem', display: 'block' }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--text-2)', fontWeight: 300 }}>{s.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
              How It Works
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Simple to Give,<br /><em>Wonderful to Receive</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
              {[
                { step: '01', title: 'Purchase Online', body: 'Buy a gift card in any amount through our Fresha booking system — available 24/7.' },
                { step: '02', title: 'Choose Your Amount', body: 'Gift cards are available in any denomination. Match the gift to the service they\'ve been dreaming about.' },
                { step: '03', title: 'They Book Online', body: 'Your recipient uses the gift card when booking their appointment through our Fresha system.' },
                { step: '04', title: 'They Experience Blend', body: 'They arrive, they\'re welcomed, and they leave feeling extraordinary. That\'s the Blend experience.' },
              ].map((s) => (
                <div key={s.step} style={{ borderTop: '1px solid var(--line)', paddingTop: '1.5rem' }}>
                  <p style={{ fontSize: '0.88rem', letterSpacing: '0.2em', color: 'var(--gold)', fontWeight: 500, marginBottom: '0.5rem' }}>{s.step}</p>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-2)', fontWeight: 300 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Trusted by Thousands of South Florida Clients
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Give the gift of<br /><em>Blend Hair Boutique</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Purchase online in seconds. Or call us at (754) 206-3501 to arrange a gift card in person at our Plantation salon — 10035 Cleary Blvd, Plantation, FL 33324.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.giftCardUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Buy Gift Card Online</a>
              <Link href="/services" className="btn btn--outline">Explore Services</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

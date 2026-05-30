import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import ServiceFAQ from '@/components/ServiceFAQ'

const SITE_URL = 'https://www.blendhairboutique.com'
const CANONICAL = `${SITE_URL}/faq`

export const metadata: Metadata = {
  title: 'FAQ | Blend Hair Boutique — Plantation, FL Hair Salon Questions Answered',
  description:
    'Answers to the most common questions about Blend Hair Boutique in Plantation, FL — balayage, keratin treatments, extensions, pricing, booking, and more. 4.9★ salon. Book online.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'FAQ | Blend Hair Boutique Plantation, FL',
    description: 'All your questions about Blend Hair Boutique answered — services, pricing, booking, hair care, and more. Plantation\'s 4.9★ luxury salon.',
    url: CANONICAL,
  },
}

const allFaqs = {
  booking: [
    {
      q: 'How do I book an appointment at Blend Hair Boutique?',
      a: 'You can book an appointment online 24/7 through our Fresha booking system, available via our website. You can also call us at (754) 206-3501 or message us on WhatsApp at (954) 544-6792. We recommend booking ahead for color services and special occasions, as our calendar fills up quickly.',
    },
    {
      q: 'What are Blend Hair Boutique\'s hours?',
      a: 'We are open Monday through Friday from 9:00 AM to 7:00 PM and Saturday from 9:00 AM to 7:00 PM. We are closed on Sundays. Holiday hours may vary — call us or check our booking system to confirm availability.',
    },
    {
      q: 'Do you accept walk-ins?',
      a: 'Walk-ins are welcome based on availability, but we strongly recommend booking in advance — especially for color services, keratin treatments, extensions, and bridal appointments. For blowouts and quick services, walk-in availability is more likely during weekday morning hours.',
    },
    {
      q: 'Do you have a cancellation policy?',
      a: 'We ask that you cancel or reschedule at least 24 hours in advance to avoid a cancellation fee. For extended services like balayage, color correction, or bridal packages, 48 hours notice is appreciated. Late cancellations or no-shows may be subject to a fee.',
    },
    {
      q: 'Do you offer gift cards?',
      a: 'Yes. Blend Hair Boutique gift cards are available for purchase online through our website. They make an ideal gift for birthdays, Mother\'s Day, holidays, and bridal showers, and can be used toward any service or product.',
    },
  ],
  hair: [
    {
      q: 'How long does a balayage appointment take?',
      a: 'Balayage at Blend Hair Boutique typically takes 2.5 to 4 hours, depending on your hair length, density, and the result you\'re aiming for. We provide a realistic time estimate when you book your appointment.',
    },
    {
      q: 'What is the difference between balayage and highlights?',
      a: 'Balayage is a freehand painting technique that creates soft, sun-kissed color with no harsh lines — it grows out naturally and requires less frequent touch-ups. Traditional highlights use foils for more defined, uniform brightness. Our colorists will recommend the best technique for your goals during your consultation.',
    },
    {
      q: 'How long does a keratin treatment last?',
      a: 'Keratin and Brazilian blowout treatments at Blend Hair Boutique typically last 3–5 months depending on your hair type, shampoo habits, and how often you expose your hair to water. Using a sulfate-free shampoo significantly extends results. South Florida\'s humidity makes keratin treatments a very popular choice among our Plantation clients.',
    },
    {
      q: 'Can I get a keratin treatment on color-treated hair?',
      a: 'Yes — keratin treatments are safe and effective on color-treated hair. In fact, the smoothing proteins in keratin treatments can add shine and improve the condition of color-treated hair. We typically recommend completing any color work before the keratin treatment for best results.',
    },
    {
      q: 'How often should I get a haircut?',
      a: 'As a general guideline, we recommend a trim every 6–8 weeks for short styles, every 8–12 weeks for medium styles, and every 10–14 weeks for longer lengths. If you\'re growing your hair out, a light dusting of the ends every 10–12 weeks prevents split ends from traveling up the shaft without sacrificing length.',
    },
    {
      q: 'Can you fix color that went wrong somewhere else?',
      a: 'Yes. Color correction is one of our specialties. Whether you\'re dealing with brassiness, an overly dark result, box dye damage, uneven patches, or over-lightened hair, our colorists will assess your situation honestly and create a plan to get your hair where it needs to be — safely and over the right number of sessions.',
    },
    {
      q: 'What hair extension methods do you offer?',
      a: 'We offer tape-in, sew-in (weft), and clip-in hair extensions. Tape-in extensions are our most popular method — they\'re lightweight, natural-looking, and require maintenance every 6–8 weeks. We use high-quality Remy human hair and will recommend the best method during your consultation based on your hair type, goals, and lifestyle.',
    },
    {
      q: 'How do I maintain my hair between salon visits?',
      a: 'Use products appropriate for your specific hair type and service. For color-treated hair: use sulfate-free shampoo and a color-protecting conditioner, apply a deep mask weekly, and minimize heat styling. For keratin-treated hair: use sulfate-free and sodium chloride-free products. For extensions: brush from ends to roots with a soft bristle brush, and avoid oil-based products at the roots. Your stylist will provide a personalized home-care routine after every appointment.',
    },
  ],
  services: [
    {
      q: 'What services does Blend Hair Boutique offer?',
      a: 'Blend Hair Boutique is a full-service beauty salon offering hair services (cuts, color, balayage, highlights, color correction, keratin treatment, Brazilian blowout, hair extensions, blowout styling), nail services (manicures, pedicures, gel nails, nail art), skin services (facials, waxing, eyebrow shaping), makeup application (bridal, event, everyday), and micropigmentation (microblading, ombre brows, lip blushing).',
    },
    {
      q: 'Do you offer bridal services?',
      a: 'Yes. Bridal services are one of our most requested offerings. We offer bridal hair styling, bridal makeup, trial sessions, and full packages for the wedding party. We accommodate groups for weddings, quinceañeras, and milestone events. Please contact us in advance to coordinate scheduling for your date.',
    },
    {
      q: 'Do you offer services in Portuguese or Spanish?',
      a: 'Yes. Our team is multilingual and serves clients in English, Portuguese, and Spanish. We are proud to offer a welcoming, comfortable experience for South Florida\'s diverse community — including many clients from the Brazilian and Latin American communities.',
    },
    {
      q: 'What brands do you use at Blend Hair Boutique?',
      a: 'We use professional-grade products including Kérastase, Wella Professionals, and other premium salon lines. We choose products based on their performance, hair integrity, and results — and we\'ll recommend the right take-home products for your specific hair type at the end of your appointment.',
    },
    {
      q: 'Where is Blend Hair Boutique located?',
      a: 'Blend Hair Boutique is located at 10035 Cleary Blvd, Plantation, FL 33324. We are conveniently positioned in western Broward County, easily accessible from Plantation, Davie, Weston, Fort Lauderdale, Sunrise, and Cooper City. Free parking is available.',
    },
  ],
}

const allFaqsFlat = [...allFaqs.booking, ...allFaqs.hair, ...allFaqs.services]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faqpage`,
      mainEntity: allFaqsFlat.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: CANONICAL },
      ],
    },
  ],
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-enter">
        <header className="page-hero page-hero--beige">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Blend Hair Boutique · Plantation, FL
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 300, color: 'var(--ink)', letterSpacing: '-0.025em', lineHeight: 1.0, maxWidth: '16ch' }}>
              Frequently Asked <em>Questions</em>
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'var(--text-2)', lineHeight: 1.75, maxWidth: '48ch', marginTop: '1.5rem', fontWeight: 300 }}>
              Everything you need to know about booking, services, hair care, and visiting Blend Hair Boutique in Plantation, Florida — answered by our team.
            </p>
          </div>
        </header>

        {/* Booking FAQs */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>Appointments</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Booking & <em>Hours</em>
            </h2>
            <ServiceFAQ faqs={allFaqs.booking} />
          </div>
        </section>

        {/* Hair FAQs */}
        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>Hair Services</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              Hair Questions <em>Answered</em>
            </h2>
            <ServiceFAQ faqs={allFaqs.hair} />
          </div>
        </section>

        {/* Services FAQs */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>The Salon</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '3rem', textAlign: 'center' }}>
              About Blend <em>Hair Boutique</em>
            </h2>
            <ServiceFAQ faqs={allFaqs.services} />
          </div>
        </section>

        {/* CTA */}
        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>Still Have Questions?</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              We're happy to <em>help.</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Call us at (754) 206-3501, message us on WhatsApp, or book an appointment and we'll answer your questions in person at 10035 Cleary Blvd, Plantation, FL 33324.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book an Appointment</a>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--outline">Message on WhatsApp</a>
            </div>
          </div>
        </section>

        {/* Quick links to service pages */}
        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>Explore Services</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '2.5rem', textAlign: 'center' }}>
              Learn more about each <em>service</em>
            </h2>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { label: 'Balayage', href: '/balayage-plantation-fl' },
                { label: 'Hair Color', href: '/hair-color-plantation' },
                { label: 'Highlights', href: '/highlights-plantation-fl' },
                { label: 'Haircuts', href: '/haircuts-plantation-fl' },
                { label: 'Keratin Treatment', href: '/keratin-treatment-plantation' },
                { label: 'Hair Extensions', href: '/hair-extensions-plantation' },
                { label: 'Blowout', href: '/blowout-plantation-fl' },
                { label: 'Nails', href: '/nails-plantation-fl' },
                { label: 'Waxing', href: '/waxing-plantation-fl' },
                { label: 'Facials', href: '/facials-plantation-fl' },
                { label: 'Makeup', href: '/makeup-plantation-fl' },
                { label: 'Micropigmentation', href: '/micropigmentation-plantation-fl' },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  style={{ fontSize: '0.85rem', padding: '0.5rem 1.25rem', border: '1px solid var(--line)', color: 'var(--text-2)', letterSpacing: '0.05em', transition: 'border-color 0.2s, color 0.2s' }}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

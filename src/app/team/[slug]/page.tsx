import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import { TEAM } from '@/data/team'

const SITE_URL = 'https://www.blendhairboutique.com'

const STYLIST_SERVICES: Record<string, { label: string; href: string }[]> = {
  fernanda: [
    { label: 'Balayage in Plantation', href: '/balayage-plantation-fl' },
    { label: 'Hair Color', href: '/hair-color-plantation' },
    { label: 'Color Correction', href: '/color-correction-plantation-fl' },
    { label: 'Highlights', href: '/highlights-plantation-fl' },
  ],
  juliana: [
    { label: 'Balayage in Plantation', href: '/balayage-plantation-fl' },
    { label: 'Haircuts & Styling', href: '/haircuts-plantation-fl' },
    { label: 'Bridal Hair', href: '/bridal-hair-south-florida' },
    { label: 'Hair Color', href: '/hair-color-plantation' },
  ],
  nana: [
    { label: 'Balayage in Plantation', href: '/balayage-plantation-fl' },
    { label: 'Hair Color', href: '/hair-color-plantation' },
    { label: 'Highlights', href: '/highlights-plantation-fl' },
    { label: 'Haircuts & Styling', href: '/haircuts-plantation-fl' },
  ],
  roger: [
    { label: 'Balayage in Plantation', href: '/balayage-plantation-fl' },
    { label: 'Hair Color', href: '/hair-color-plantation' },
    { label: 'Highlights', href: '/highlights-plantation-fl' },
    { label: 'Color Correction', href: '/color-correction-plantation-fl' },
  ],
  debora: [
    { label: 'Balayage in Plantation', href: '/balayage-plantation-fl' },
    { label: 'Haircuts & Styling', href: '/haircuts-plantation-fl' },
    { label: 'Hair Color', href: '/hair-color-plantation' },
  ],
  nilza: [
    { label: 'Keratin Treatment', href: '/keratin-treatment-plantation' },
    { label: 'Brazilian Blowout', href: '/blowout-plantation-fl' },
    { label: 'Haircuts & Styling', href: '/haircuts-plantation-fl' },
  ],
  ketty: [
    { label: 'Balayage in Plantation', href: '/balayage-plantation-fl' },
    { label: 'Hair Color', href: '/hair-color-plantation' },
    { label: 'Highlights', href: '/highlights-plantation-fl' },
    { label: 'Blonding Specialist', href: '/blonding-specialist-plantation' },
  ],
  lea: [
    { label: 'Haircuts & Styling', href: '/haircuts-plantation-fl' },
    { label: 'Brazilian Blowout', href: '/blowout-plantation-fl' },
    { label: 'Keratin Treatment', href: '/keratin-treatment-plantation' },
  ],
  tabby: [
    { label: 'Haircuts & Styling', href: '/haircuts-plantation-fl' },
    { label: 'Balayage in Plantation', href: '/balayage-plantation-fl' },
    { label: 'Hair Color', href: '/hair-color-plantation' },
  ],
  edith: [
    { label: 'Haircuts & Styling', href: '/haircuts-plantation-fl' },
    { label: 'Brazilian Blowout', href: '/blowout-plantation-fl' },
  ],
  beatriz: [
    { label: 'Balayage in Plantation', href: '/balayage-plantation-fl' },
    { label: 'Hair Extensions', href: '/hair-extensions-plantation' },
    { label: 'Hair Color', href: '/hair-color-plantation' },
  ],
  adriana: [
    { label: 'Waxing & Brow Shaping', href: '/waxing-plantation-fl' },
    { label: 'Micropigmentation', href: '/micropigmentation-plantation-fl' },
  ],
  fran: [
    { label: 'Facials in Plantation', href: '/facials-plantation-fl' },
    { label: 'Waxing Services', href: '/waxing-plantation-fl' },
  ],
}

const STYLIST_EXTENDED_BIO: Record<string, string> = {
  fernanda: 'As Co-Founder and Color Director of Blend Hair Boutique, Fernanda Macedo has spent over a decade building one of South Florida\'s most respected luxury salon brands. Trained in Brazil and with advanced education in color science, Fernanda brings a meticulous eye for dimension, tone, and hair health to every color service. She specializes in custom balayage, color correction, and complex lightening work — the services that require both technical mastery and genuine artistry. Fernanda\'s philosophy centers on understanding each client\'s hair history, lifestyle, and goals before recommending a single formula. Her clients trust her not just for beautiful results, but for honest guidance about what their hair can achieve.',
  juliana: 'Juliana Mammana Chen co-founded Blend Hair Boutique with a vision of a beauty space that is as intentional as it is beautiful. A creative director by instinct and a stylist by training, Juliana brings both aesthetic leadership and technical precision to her work. She specializes in haircuts and styling that complement each client\'s natural features, as well as bridal hair services that bring calm and beauty to the most important days of clients\' lives. Juliana\'s warm, consultative approach has made her one of Blend\'s most trusted stylists for first-time clients who want honest guidance about what will actually work for their hair.',
  nana: 'Nana Reis has established herself as one of Blend Hair Boutique\'s most sought-after color specialists, with over 1,500 completed appointments and 99+ five-star reviews — an achievement that reflects not just technical skill but a genuine connection with her clients. Nana specializes in balayage, dimensional color, and highlights, with particular expertise in creating sun-kissed results that look effortless on South Florida\'s most discerning clients. Fluent in English, Spanish, and Portuguese, Nana brings warmth and communication to every appointment — her clients return not just for her work, but for the experience of being in her hands.',
  roger: 'With over 2,500 completed appointments and a loyal base of 1,100+ clients, Roger is one of Blend Hair Boutique\'s most trusted professionals. His expertise spans the full range of color services — from precise balayage and foil highlights to complex all-over color and color correction — all delivered with the steady hand of a colorist who has seen and solved every hair challenge. Roger\'s approach is analytical and thorough: he will always tell you what your hair can realistically achieve before beginning, and he won\'t compromise on the steps needed to get there safely.',
  debora: 'Debora\'s nearly 1,000 completed appointments and loyal client base of 400+ reflect a consistent ability to deliver results that make clients feel genuinely beautiful. She specializes in color and styling, with a particular talent for creating looks that are polished and wearable in everyday life — not just in the salon. Debora is known for her attentiveness and thoroughness, and for the care she takes to ensure every client leaves understanding exactly how to maintain their look at home.',
  nilza: 'Nilza\'s perfect 5.0 rating across her appointments reflects something rare: total consistency. Her specialty in smoothing treatments — including keratin treatments and Brazilian blowouts — has made her a cornerstone of Blend\'s smoothing services. For South Florida clients battling year-round humidity, Nilza\'s expertise offers a genuine, lasting solution. Her warm, attentive manner and the evident care she takes with every step of a service have earned her a devoted client following who trust her completely.',
  ketty: 'Ketty Chaves has developed a reputation for balayage that looks luminous and modern — never overdone, always intentional. Her eye for natural, dimensional color allows her to create results that complement each client\'s skin tone and hair texture in a way that looks effortless. Ketty specializes in balayage and color, with expertise in the blonding techniques that require both chemistry knowledge and an artistic touch. Her client-first approach ensures that every session begins with a thorough consultation and ends with a result both client and colorist are proud of.',
  lea: "Lea brings a refined touch to every service she offers — from precision blowouts to polished everyday styling — with a consistency and dedication that clients describe as exceptional. Her expertise in the fundamentals of hair care — how to properly wash, dry, and style hair to maintain its health and appearance — makes her appointments not just a service, but an education. Lea's calm, focused approach makes every client feel cared for and confident.",
  tabby: "Tabby's creative eye and technical precision make her one of Blend's most versatile stylists. She brings artistry and vision to every appointment — whether that's an architectural haircut, a bold color transformation, or a precision blowout. Clients come to Tabby when they want something that feels genuinely creative — a look that reflects their personality rather than a generic template. She listens closely, executes with precision, and delivers results with genuine artistry.",
  edith: 'Edith combines technical precision with an intuitive understanding of what works on each individual client. A Cut & Style Specialist, she excels at creating haircuts that flatter the client\'s face shape and work with their natural hair texture — making her appointments as practical as they are beautiful. Edith\'s meticulous attention to detail means every cut is finished as precisely as it begins. Clients with complex hair patterns or face shape concerns particularly seek out her expertise.',
  beatriz: 'Beatriz brings artistry and precision to both color and extensions, helping clients achieve the length, volume, and dimension they\'ve always wanted. A certified extension specialist, she works with multiple extension methods — tape-in, weft, and fusion — and takes the same consultation-first approach to extensions as she does to color. Her understanding of both disciplines means she can help clients who want to add color and length simultaneously, coordinating both services for a seamless final result.',
  adriana: "Adriana is Blend's resident brow artist — a specialist in eyebrow design who understands that perfectly shaped brows can transform a face. Her expertise in eyebrow shaping, threading, and micropigmentation comes from both formal training and years of hands-on practice. She works with each client's natural brow structure and face shape to design a result that enhances their features rather than overriding them. The goal is always the client's best version of themselves — not a trend.",
  fran: 'A licensed esthetician and laser technician, Fran helps clients feel confident through personalized facials and laser services tailored to their specific skin concerns. She stays current with the latest developments in professional skincare and laser technology to ensure every client receives evidence-based, effective treatment. Fran\'s approach begins with a thorough skin analysis — understanding your skin type, history, and concerns before recommending a treatment plan. Her clients trust her for results and for her honest assessment of what each client\'s skin actually needs.',
}

export function generateStaticParams() {
  return TEAM.map((m) => ({ slug: m.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const member = TEAM.find((m) => m.id === slug)
  if (!member) return {}
  const canonical = `${SITE_URL}/team/${slug}`
  return {
    title: `${member.name} | ${member.specialty} at Blend Hair Boutique`,
    description: `Meet ${member.name}, ${member.specialty} at Blend Hair Boutique in Plantation, FL. ${member.bio} Book your appointment online.`,
    alternates: { canonical },
    openGraph: {
      title: `${member.name} | Blend Hair Boutique`,
      description: `${member.specialty} at Blend Hair Boutique in Plantation, Florida. ${member.bio}`,
      url: canonical,
    },
  }
}

export default async function StylistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = TEAM.find((m) => m.id === slug)
  if (!member) notFound()

  const canonical = `${SITE_URL}/team/${slug}`
  const services = STYLIST_SERVICES[member.id] || []
  const extendedBio = STYLIST_EXTENDED_BIO[member.id] || member.bio

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/team/${member.id}#person`,
        name: member.name,
        jobTitle: member.specialty,
        worksFor: { '@id': `${SITE_URL}/#business` },
        image: member.image,
        knowsLanguage: member.languages.split(', '),
        url: canonical,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Our Team', item: `${SITE_URL}/team` },
          { '@type': 'ListItem', position: 3, name: member.name, item: canonical },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-enter">
        <header className="page-hero page-hero--dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.25rem' }}>
              <Link href="/team" style={{ fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 400, textDecoration: 'none' }}>
                Our Team
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem' }}>›</span>
              <span style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>
                {member.specialty}
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5.5vw, 5rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', lineHeight: 1.0, marginBottom: '1rem' }}>
              {member.name}
            </h1>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: '0.5rem', fontWeight: 300 }}>
              {member.specialty}
            </p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', fontFamily: 'var(--sans)', marginBottom: '2rem' }}>
              Languages: {member.languages}
            </p>
            <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--cta-gold">
              Book with {member.name.split(' ')[0]}
            </a>
          </div>
        </header>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 5rem)', alignItems: 'start' }}>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)', position: 'sticky', top: '6rem' }}>
                <img
                  src={member.image}
                  alt={`${member.name} — ${member.specialty} at Blend Hair Boutique in Plantation, FL`}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
                  About {member.name.split(' ')[0]}
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                  {member.specialty} at<br /><em>Blend Hair Boutique</em>
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-2)', fontWeight: 300, marginBottom: '2rem' }}>
                  {extendedBio}
                </p>

                {services.length > 0 && (
                  <>
                    <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
                      Services
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          style={{
                            textDecoration: 'none',
                            color: 'var(--text-1)',
                            fontSize: '0.95rem',
                            fontFamily: 'var(--serif)',
                            fontWeight: 400,
                            padding: '0.75rem 0',
                            borderBottom: '1px solid var(--line)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          {s.label}
                          <span style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>→</span>
                        </Link>
                      ))}
                    </div>
                  </>
                )}

                <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ display: 'inline-block' }}>
                  Book with {member.name.split(' ')[0]}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--beige">
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1rem' }}>
              Blend Hair Boutique · Plantation, FL
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Meet the full<br /><em>Blend team</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
              Blend Hair Boutique is home to 13 certified specialists across color, styling, extensions, skin, and nails — all at 10035 Cleary Blvd, Plantation, FL 33324.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/team" className="btn btn--primary">Meet Our Team</Link>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline">Book Online</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

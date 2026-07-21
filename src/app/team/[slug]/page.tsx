import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BUSINESS } from '@/data/constants'
import { TEAM } from '@/data/team'

const SITE_URL = 'https://www.blendhairboutique.com'

const STYLIST_SERVICES: Record<string, { label: string; href: string }[]> = {
  juliana: [
    { label: 'Hair Color', href: '/hair-color-plantation' },
    { label: 'Balayage in Plantation', href: '/balayage-plantation-fl' },
    { label: 'Haircuts & Styling', href: '/haircuts-plantation-fl' },
    { label: 'Bridal Hair', href: '/bridal-hair-south-florida' },
  ],
  fernanda: [
    { label: 'Hair Color', href: '/hair-color-plantation' },
    { label: 'Balayage in Plantation', href: '/balayage-plantation-fl' },
    { label: 'Haircuts & Styling', href: '/haircuts-plantation-fl' },
    { label: 'Bridal Hair', href: '/bridal-hair-south-florida' },
  ],
  debora: [
    { label: 'Hair Color', href: '/hair-color-plantation' },
    { label: 'Haircuts & Styling', href: '/haircuts-plantation-fl' },
    { label: 'Highlights', href: '/highlights-plantation-fl' },
    { label: 'Balayage in Plantation', href: '/balayage-plantation-fl' },
  ],
  lea: [
    { label: 'Blonding Specialist', href: '/blonding-specialist-plantation' },
    { label: 'Balayage in Plantation', href: '/balayage-plantation-fl' },
    { label: 'Haircuts & Styling', href: '/haircuts-plantation-fl' },
    { label: 'Hair Extensions', href: '/hair-extensions-plantation' },
  ],
  beatriz: [
    { label: 'Hair Color', href: '/hair-color-plantation' },
    { label: 'Haircuts & Styling', href: '/haircuts-plantation-fl' },
    { label: 'Balayage in Plantation', href: '/balayage-plantation-fl' },
    { label: 'Highlights', href: '/highlights-plantation-fl' },
  ],
  nana: [
    { label: 'Hair Color', href: '/hair-color-plantation' },
    { label: 'Keratin Treatment', href: '/keratin-treatment-plantation' },
    { label: 'Brazilian Blowout', href: '/blowout-plantation-fl' },
    { label: 'Bridal Hair', href: '/bridal-hair-south-florida' },
  ],
  roger: [
    { label: 'Hair Color', href: '/hair-color-plantation' },
    { label: 'Haircuts & Styling', href: '/haircuts-plantation-fl' },
    { label: 'Keratin Treatment', href: '/keratin-treatment-plantation' },
    { label: 'Hair Extensions', href: '/hair-extensions-plantation' },
  ],
  ketty: [
    { label: 'Color Correction', href: '/color-correction-plantation-fl' },
    { label: 'Highlights', href: '/highlights-plantation-fl' },
    { label: 'Hair Extensions', href: '/hair-extensions-plantation' },
    { label: 'Blonding Specialist', href: '/blonding-specialist-plantation' },
  ],
  jeniffer: [
    { label: 'Hair Color', href: '/hair-color-plantation' },
    { label: 'Haircuts & Styling', href: '/haircuts-plantation-fl' },
    { label: 'Brazilian Blowout', href: '/blowout-plantation-fl' },
    { label: 'Makeup Services', href: '/makeup-plantation-fl' },
  ],
  tabby: [
    { label: 'Hair Color', href: '/hair-color-plantation' },
    { label: 'Haircuts & Styling', href: '/haircuts-plantation-fl' },
    { label: 'Balayage in Plantation', href: '/balayage-plantation-fl' },
  ],
  nina: [
    { label: 'Hair Color', href: '/hair-color-plantation' },
    { label: 'Haircuts & Styling', href: '/haircuts-plantation-fl' },
    { label: 'Highlights', href: '/highlights-plantation-fl' },
  ],
  nilza: [
    { label: 'Waxing Services', href: '/waxing-plantation-fl' },
    { label: 'Nail Services', href: '/nails-plantation-fl' },
  ],
  edith: [
    { label: 'Nail Services', href: '/nails-plantation-fl' },
  ],
  adriana: [
    { label: 'Waxing & Brow Shaping', href: '/waxing-plantation-fl' },
    { label: 'Facials in Plantation', href: '/facials-plantation-fl' },
    { label: 'Micropigmentation', href: '/micropigmentation-plantation-fl' },
  ],
  fran: [
    { label: 'Facials in Plantation', href: '/facials-plantation-fl' },
    { label: 'Waxing Services', href: '/waxing-plantation-fl' },
  ],
  marcelle: [
    { label: 'Hair Color', href: '/hair-color-plantation' },
    { label: 'Keratin Treatment', href: '/keratin-treatment-plantation' },
  ],
  'vanessa-hanna': [
    { label: 'Blonding Specialist', href: '/blonding-specialist-plantation' },
    { label: 'Balayage in Plantation', href: '/balayage-plantation-fl' },
    { label: 'Hair Extensions', href: '/hair-extensions-plantation' },
  ],
}

const STYLIST_EXTENDED_BIO: Record<string, string> = {
  juliana: 'Originally from Brazil, Juliana Chen founded Blend Hair Boutique with a simple vision: to create a salon where exceptional service, talented professionals, and genuine hospitality come together. Since then, she has focused on building not just a successful business, but a place where clients feel welcomed, valued, and confident.\n\nAs Founder & General Manager, Juliana leads the business behind the scenes, overseeing operations, marketing, strategic growth, and the overall client experience. Her commitment to continuous improvement and attention to every detail help ensure that Blend continues to evolve while maintaining the high standards and warm atmosphere that define the salon.',
  fernanda: 'Fernanda Macedo is the heart of the day-to-day experience at Blend Hair Boutique. You’ll often find her welcoming clients by name, making sure they feel comfortable from the moment they arrive, and overseeing every detail to ensure each visit is exceptional.\n\nHer positive energy, genuine warmth, and attention to detail create an atmosphere where both clients and team members feel valued and at home. As Salon Manager, Fernanda works closely with the team to maintain the high standards of service and hospitality that define the Blend experience.',
  debora: 'With over 20 years of experience in the beauty industry, Debora has been part of Blend Hair Boutique since day one. Her expertise, professionalism, and calm approach have made her one of the salon’s most trusted and respected stylists.\n\nSpecializing in hair color and precision haircuts, Debora combines technical excellence with a personalized approach, helping each client find a look that complements their lifestyle and individual style. Her experience, attention to detail, and genuine care ensure every guest feels confident and well taken care of.',
  lea: 'Originally from Brazil, Léa Araujo has been part of the Blend Hair Boutique team for over six years, bringing extensive experience and a passion for creating personalized, confidence-boosting transformations.\n\nKnown for her expertise in hair color—especially blondes—Léa also specializes in precision haircuts, including curly hair, one of her standout skills. As one of the salon’s pioneers in hair extensions, she combines advanced techniques with an artistic eye to create seamless, natural-looking results tailored to each client’s style and lifestyle.',
  beatriz: 'Originally from Colombia, Beatriz “Bia” Balderrama has been part of the Blend Hair Boutique team since 2020. With years of experience behind the chair, she specializes in hair color and precision haircuts, creating beautiful, personalized looks that enhance each client’s natural beauty.\n\nKnown for her meticulous attention to detail and gentle approach, Bia has built an incredibly loyal clientele who appreciate both her technical expertise and the genuine care she brings to every appointment. Her warm personality and dedication to achieving exceptional results make every visit a comfortable and enjoyable experience.',
  nana: 'Originally from Brazil, Nana brings a fresh perspective, technical precision, and a passion for helping clients look and feel their best. She specializes in hair color, styling, smoothing treatments, and elegant updos, always taking a thoughtful and detail-oriented approach to every service.\n\nKnown for her meticulous work and dedication to continuous learning, Nana is committed to delivering beautiful, personalized results while ensuring every client enjoys a comfortable and welcoming experience at Blend Hair Boutique.',
  roger: 'Originally from Brazil, Roger Santos joined Blend Hair Boutique in 2022, bringing extensive experience across a wide range of services. He specializes in hair color, precision haircuts, smoothing treatments, hair extensions, and men’s grooming, offering personalized solutions for every client’s style and needs.\n\nKnown for his friendly personality and efficient technique, Roger has a talent for delivering exceptional results without keeping clients in the salon longer than necessary. His ability to combine speed, precision, and attention to detail makes him a favorite among clients who value both outstanding results and a seamless salon experience.',
  ketty: 'Originally from Brazil, Ketty has been part of the Blend Hair Boutique team since 2022. She specializes in color correction, highlights, hair extensions, and is the salon’s specialist in perm services, creating customized looks that enhance each client’s style and hair goals.\n\nWith a strong focus on precision and continuous professional development, Ketty takes a thoughtful, technical approach to every appointment. Whether restoring hair color, creating dimensional blondes, or adding texture and movement with a modern perm, she is dedicated to delivering healthy, beautiful, and personalized results.',
  jeniffer: 'Originally from Brazil, Jeniffer is one of the newest members of the Blend Hair Boutique team, bringing talent, creativity, and a passion for helping clients look and feel their best. She specializes in hair color, precision haircuts, smoothing treatments, and professional makeup, offering complete beauty services for both everyday confidence and special occasions.\n\nKnown for her warm personality and ability to make clients feel comfortable, Jeniffer has become especially known for her beautiful blowouts that keep guests coming back time and time again. Whether creating a polished everyday look or preparing someone for a special event, she is dedicated to delivering results that leave every client feeling confident and radiant.',
  tabby: 'A Florida native, Tabby brings creativity, fresh ideas, and a welcoming personality to the Blend Hair Boutique team. She specializes in hair color, precision haircuts, styling, and men’s grooming, creating customized looks that reflect each client’s personality and lifestyle.\n\nKnown for her friendly nature and engaging conversations, Tabby builds genuine connections with her clients from the moment they sit in her chair. She personally performs every step of each appointment, allowing for a more one-on-one experience and ensuring every detail reflects her care, creativity, and attention to detail.',
  nina: 'Originally from Brazil and raised in South Florida, Nina has been working as a hairstylist for over 20 years. She specializes in hair color, women’s and men’s haircuts, combining extensive experience with a genuine passion for helping every client look and feel their best.\n\nKnown for her warm personality and engaging conversations, Nina creates an enjoyable, personalized experience from start to finish. She personally performs every step of each appointment, allowing her to build strong connections with her clients while delivering beautiful, customized results with care and precision.',
  nilza: 'Originally from Brazil and living in the United States for over 20 years, Nilza has been part of Blend Hair Boutique since the very beginning. With decades of experience in the beauty industry, she specializes in waxing and nail services, combining exceptional skill with remarkable efficiency.\n\nKnown by countless clients throughout South Florida, Nilza has built her reputation working in salons across the Miami area before joining Blend. Her speed, precision, and warm personality have made her a familiar face and a trusted favorite for clients who appreciate outstanding service delivered with professionalism and genuine care.',
  edith: 'Originally from Colombia, Edith has been part of the Blend Hair Boutique team for nearly two years. Combining experience with a fresh, detail-oriented approach, she is dedicated to creating beautiful, long-lasting nail services tailored to each client’s style.\n\nKnown for her warm personality and genuine care, Edith has built a loyal clientele who appreciate both her professionalism and the welcoming experience she provides. Her precision, creativity, and commitment to quality ensure every client leaves with beautiful nails and a smile.',
  adriana: 'Originally from Brazil, Adriana is dedicated to enhancing each client’s natural beauty through personalized eyebrow and facial services. With a meticulous eye for detail and a passion for delivering exceptional results, she helps clients look and feel their best with treatments tailored to their individual features.\n\nKnown for both her outstanding work and warm, welcoming personality, Adriana has built a remarkably loyal clientele who continue to return for her expertise and genuine care. Her commitment to excellence, combined with her ability to make every guest feel comfortable and confident, has made her one of Blend Hair Boutique’s most trusted beauty specialists.',
  fran: 'Originally from Brazil, Fran is passionate about skin health and dedicated to helping every client achieve healthier, more radiant skin. She is constantly expanding her knowledge through advanced training and specialized education, ensuring her techniques and treatments reflect the latest developments in skincare.\n\nKnown for her professionalism and expertise, Fran takes a personalized approach to every facial treatment, carefully evaluating each client’s unique skin needs and recommending the most appropriate solutions. Her commitment to continuous learning and exceptional care has made her a trusted resource for clients seeking healthy, beautiful skin.',
  vitoria: 'Vitória plays an essential role in creating the warm, welcoming atmosphere that defines the Blend Hair Boutique experience. Always ready with a smile, she’s known for making clients feel at home—whether by preparing our signature cappuccino, offering a cup of tea, a glass of wine, or one of the little treats that make every visit feel special.\n\nBehind the scenes, Vitória helps keep the salon running smoothly by ensuring everything is organized, comfortable, and ready for both clients and the team. Her kindness, positive energy, and willingness to help have made her one of the most familiar and beloved faces at Blend.',
  marcelle: 'Originally from Brazil, Marcelle worked as a hairstylist before moving to the United States, bringing valuable experience and technical knowledge to the Blend Hair Boutique team. As Roger’s assistant, she is highly skilled and plays an essential role in delivering seamless, high-quality services throughout every appointment.\n\nKnown for her efficiency, positive energy, and attention to detail, Marcelle works side by side with Roger to create a smooth and enjoyable salon experience. Together, they combine experience, teamwork, and exceptional service, allowing clients to enjoy outstanding results with both comfort and efficiency.',
  maggie: 'With over five years at Blend Hair Boutique, Maggie is often the first friendly face—and voice—our clients meet. She knows many of our guests by name and takes pride in making every new client feel genuinely welcomed from the very first interaction.\n\nWhether answering phone calls, responding to text messages and WhatsApp inquiries, or coordinating appointments, Maggie is always ready to help with warmth, professionalism, and a positive attitude. She goes above and beyond to accommodate clients whenever possible, finding solutions and ensuring every guest feels valued, cared for, and excited about their visit to Blend.',
  'vanessa-hanna': 'Working alongside Léa, Vanessa and Hanna are an essential part of the experience that keeps her chairs consistently full and her clients feeling welcomed from beginning to end. Their teamwork, impeccable timing, and attention to detail help every appointment flow seamlessly while maintaining the high standards Blend Hair Boutique is known for.\n\nTogether, they create a personalized, attentive experience that allows clients to relax and enjoy their visit. Always working in perfect sync, Vanessa and Hanna combine efficiency, professionalism, and genuine care, ensuring every guest feels comfortable, valued, and exceptionally well looked after.',
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
  const bioParagraphs = extendedBio.split('\n\n')
  // "Vanessa & Hanna" is a pair — a first-name split would drop Hanna
  const shortName = member.name.includes('&') ? member.name : member.name.split(' ')[0]

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
              Book with {shortName}
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
                  About {shortName}
                </p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                  {member.specialty} at<br /><em>Blend Hair Boutique</em>
                </h2>
                <div style={{ marginBottom: '2rem' }}>
                  {bioParagraphs.map((para, i) => (
                    <p key={i} style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-2)', fontWeight: 300, marginBottom: i === bioParagraphs.length - 1 ? 0 : '1.25rem' }}>
                      {para}
                    </p>
                  ))}
                </div>

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
                  Book with {shortName}
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
              Blend Hair Boutique is home to a full team of specialists across color, styling, extensions, skin, and nails — all at 10035 Cleary Blvd, Plantation, FL 33324.
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

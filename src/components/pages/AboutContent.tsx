'use client'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import CTASection from '@/components/sections/CTASection'
import { BUSINESS } from '@/data/constants'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

const icons = ['✦', '◇', '○']

export default function AboutContent() {
  const { lang } = useLang()
  const t = T[lang].pages.about

  return (
    <div className="page-enter">
      <div className="about-hero">
        <div className="about-hero__content">
          <motion.p
            style={{ fontSize: '1.05rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1.25rem' }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          >
            {t.eyebrow}
          </motion.p>
          <motion.h1
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.6rem, 5.2vw, 5.4rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.028em', lineHeight: 1.02, maxWidth: '17ch', marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {t.h1a}<em style={{ fontStyle: 'italic' }}>{t.h1b}</em>
          </motion.h1>
          <motion.p
            style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, maxWidth: '46ch', fontWeight: 300 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t.sub}
          </motion.p>
        </div>
        <div className="about-hero__img">
          <img
            src="/images/gallery/stylist-blend-wall.webp"
            alt="A Blend Hair Boutique stylist at the salon in Plantation, Florida"
            loading="eager"
          />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 'clamp(4rem, 7vw, 7rem)', alignItems: 'center' }}>
            <AnimatedSection>
              <SectionHeader eyebrow={t.storyEyebrow} h2={<>{t.storyH2a}<em>{t.storyH2b}</em></>} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginTop: '1.75rem' }}>
                {t.storyBody.map((p, i) =>
                  i === t.storyBody.length - 1 ? (
                    <p key={i} style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)', lineHeight: 1.7, color: 'var(--text)', fontWeight: 300, fontStyle: 'italic', borderTop: '1px solid var(--line)', paddingTop: '1.4rem', marginTop: '0.75rem', letterSpacing: '-0.01em', maxWidth: '46ch' }}>{p}</p>
                  ) : (
                    <p key={i} style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)', fontWeight: 300, maxWidth: '50ch' }}>{p}</p>
                  )
                )}
              </div>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ marginTop: '2.5rem' }}>
                {t.storyBtn}
              </a>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--bg-soft)' }}>
                <img
                  src="/images/gallery/bronde-waves-smile.webp"
                  alt="Finished balayage and styling at Blend Hair Boutique in Plantation, FL"
                  loading="lazy" decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container">
          <SectionHeader eyebrow={t.valuesEyebrow} h2={<>{t.valuesH2a}<em>{t.valuesH2b}</em></>} center />
          <div className="about-values">
            {t.values.map((v, i) => (
              <div
                key={v.title}
                className="about-value fade-in-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="about-value__icon">{icons[i]}</div>
                <h3 className="about-value__title">{v.title}</h3>
                <p className="about-value__body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px', textAlign: 'center' }}>
          <AnimatedSection>
            <SectionHeader eyebrow={t.communityEyebrow} h2={<>{t.communityH2a}<em>{t.communityH2b}</em></>} body={t.communityBody} center />
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">{t.communityBook}</a>
              <a href={BUSINESS.phoneHref} className="btn btn--outline">{t.communityCall}</a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection eyebrow={t.ctaEyebrow} heading={t.ctaH2} sub={t.ctaSub} />
    </div>
  )
}

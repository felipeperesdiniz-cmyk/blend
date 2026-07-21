'use client'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import Link from 'next/link'
import { TEAM } from '@/data/team'
import { BUSINESS } from '@/data/constants'
import CTASection from '@/components/sections/CTASection'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

export default function TeamContent() {
  const { lang } = useLang()
  const t = T[lang].pages.team
  const teamData = T[lang].teamData

  return (
    <div className="page-enter">
      <header className="page-hero page-hero--dark">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.6rem' }}>
            <motion.span
              style={{ display: 'block', height: '1px', width: '28px', background: 'var(--gold)', transformOrigin: 'left center' }}
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.p
              style={{ fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, margin: 0 }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.55 }}
            >
              {t.eyebrow}
            </motion.p>
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-0.025em', margin: 0, lineHeight: 1 }}>
            <div style={{ overflow: 'hidden', lineHeight: 1.05 }}>
              <motion.span style={{ display: 'block', lineHeight: 1.05 }} initial={{ y: '108%' }} animate={{ y: '0%' }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}>
                {t.h1a}
              </motion.span>
            </div>
            <div style={{ overflow: 'hidden', lineHeight: 1.05, marginBottom: '0.15em' }}>
              <motion.span style={{ display: 'block', lineHeight: 1.05, fontStyle: 'italic' }} initial={{ y: '108%' }} animate={{ y: '0%' }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}>
                {t.h1b}
              </motion.span>
            </div>
          </h1>
          <motion.p
            style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(255,255,255,0.52)', lineHeight: 1.78, maxWidth: '44ch', marginTop: '1.75rem', fontWeight: 300 }}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.72 }}
          >
            {t.sub}
          </motion.p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '3rem' }}>
            {TEAM.map((member, i) => {
              const td = teamData[i]
              return (
                <motion.article
                  key={member.id}
                  id={member.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                >
                  <Link href={`/team/${member.id}`} style={{ display: 'block', overflow: 'hidden', aspectRatio: '3/4', background: 'var(--bg-soft)', marginBottom: '1.75rem', textDecoration: 'none' }}>
                    <img
                      src={member.image}
                      alt={`${member.name} — ${td.specialty}`}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', transition: 'transform 0.7s var(--ease)' }}
                      onMouseEnter={(e) => { (e.target as HTMLImageElement).style.transform = 'scale(1.04)' }}
                      onMouseLeave={(e) => { (e.target as HTMLImageElement).style.transform = 'scale(1)' }}
                    />
                  </Link>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <Link href={`/team/${member.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 400, color: 'var(--ink)' }}>{member.name}</h2>
                      </Link>
                    </div>
                    <p style={{ fontSize: '0.82rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--caramel)', fontWeight: 500, marginBottom: '0.75rem' }}>{td.specialty}</p>
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-2)', marginBottom: '0.5rem', fontWeight: 300, textDecoration: 'none' }}
                      >
                        <Instagram size={15} />
                        @{member.instagram.replace(/\/+$/, '').split('/').pop()}
                      </a>
                    )}
                    <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--text-2)', fontWeight: 300, marginBottom: '1.5rem' }}>{td.bio}</p>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <Link href={`/team/${member.id}`} className="btn btn--ghost" style={{ fontSize: '0.82rem' }}>
                        View Profile
                      </Link>
                      <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline" style={{ fontSize: '0.82rem' }}>
                        {t.bookBtn}
                      </a>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQ { q: string; a: string }

export default function ServiceFAQ({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            style={{
              width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '1.25rem 0', background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--serif)', fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', fontWeight: 400,
              textAlign: 'left', color: 'var(--text-1)', gap: '1rem',
            }}
          >
            <span>{faq.q}</span>
            <span style={{
              fontSize: '1.4rem', color: 'var(--gold-dk)', flexShrink: 0, lineHeight: 1,
              display: 'inline-block',
              transform: open === i ? 'rotate(45deg)' : 'none',
              transition: 'transform 0.25s ease',
            }}>
              +
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <p style={{
                  fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-2)',
                  fontWeight: 300, paddingBottom: '1.25rem',
                }}>
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

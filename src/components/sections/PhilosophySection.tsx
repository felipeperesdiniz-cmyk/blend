'use client'
import { motion } from 'framer-motion'

export default function PhilosophySection() {
  return (
    <section className="philosophy" aria-label="Our Philosophy">
      <div className="philosophy__inner">

        <motion.div
          className="philosophy__line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
        />

        <motion.p
          className="philosophy__eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          The Blend Philosophy
        </motion.p>

        <motion.blockquote
          className="philosophy__quote"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          Beauty is a ritual.
          <br />
          Artistry is our craft.
          <br />
          <em>Warmth is our nature.</em>
        </motion.blockquote>

        <motion.p
          className="philosophy__meta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          Blend Hair Boutique · Plantation, Florida · Est. 2012
        </motion.p>

        <motion.div
          className="philosophy__line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          aria-hidden
        />

      </div>
    </section>
  )
}

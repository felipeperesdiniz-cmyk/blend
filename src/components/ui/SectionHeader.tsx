'use client'
import { motion } from 'framer-motion'

interface Props {
  eyebrow?: string
  h2: React.ReactNode
  body?: string
  center?: boolean
  light?: boolean
  className?: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
}

export default function SectionHeader({ eyebrow, h2, body, center, light, className = '' }: Props) {
  const cls = [
    'section-header',
    center ? 'section-header--center' : '',
    light  ? 'section-header--light'  : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <motion.div
      className={cls}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.01 }}
    >
      {eyebrow && (
        <motion.p className="section-header__eyebrow" custom={0} variants={fadeUp}>
          {eyebrow}
        </motion.p>
      )}
      <motion.h2 className="section-header__h2" custom={1} variants={fadeUp}>
        {h2}
      </motion.h2>
      {body && (
        <motion.p className="section-header__body" custom={2} variants={fadeUp}>
          {body}
        </motion.p>
      )}
    </motion.div>
  )
}

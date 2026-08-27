'use client'
import { LangProvider } from '@/context/LangContext'
import { ReactLenis } from 'lenis/react'
import { MotionConfig } from 'framer-motion'
import 'lenis/dist/lenis.css'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  // Smooth scrolling is motion, so it is switched off for anyone asking for
  // less of it. Read after mount and kept live, since the OS setting can be
  // toggled while the page is open.
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return (
    <ReactLenis
      root
      options={{
        // lerp rather than duration: it keeps the glide short enough that the
        // nav state and the philosophy reveal still track the pointer closely.
        lerp: 0.11,
        smoothWheel: !reduced,
        // Native touch scrolling on phones. syncTouch is the documented source
        // of instability on older iOS and buys little on a site this length.
        syncTouch: false,
        anchors: true,
        // The mobile menu and any overflow panes keep their own scrolling.
        allowNestedScroll: true,
      }}
    >
      {/* reducedMotion="user" makes every framer-motion component honour the OS
          setting. Nine components animate on entrance and none of them checked
          it, so the reveals still ran for people who had asked them not to. */}
      <MotionConfig reducedMotion="user">
        <LangProvider>{children}</LangProvider>
      </MotionConfig>
    </ReactLenis>
  )
}

'use client'
import { useEffect, useRef } from 'react'
import { BUSINESS } from '@/data/constants'
import { useLang } from '@/context/LangContext'
import { T } from '@/data/translations'

export default function HeroSection() {
  const { lang } = useLang()
  const t = T[lang].hero
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Flags the document once the film has scrolled away, which is what turns the
  // nav solid and brings the mobile action bar back. The default (attribute
  // absent) is the overlaid state, so the first paint is already correct and
  // there is no flash of solid chrome over the video.
  useEffect(() => {
    const root = document.documentElement

    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const nav = document.querySelector('.nav')
      const navH = nav ? nav.getBoundingClientRect().height : 80
      const past = el.getBoundingClientRect().bottom <= navH
      root.toggleAttribute('data-past-hero', past)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      // Leaving the homepage must not strand other pages in the scrolled state.
      root.removeAttribute('data-past-hero')
    }
  }, [])

  // The mark's entry is CSS-driven on purpose — it is the only content in this
  // hero, so it must never depend on JS having run. This effect only governs
  // playback.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.removeAttribute('autoplay')
      v.pause()
      return
    }

    // Autoplay is best-effort: a browser may reject the promise until the user
    // interacts. The poster stays up in that case, so nothing looks broken.
    v.play().catch(() => {})
  }, [])

  return (
    <section className="hero hero--film" aria-label="Hero" ref={sectionRef}>
      <div className="hero__video">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.webp"
          aria-hidden="true"
          tabIndex={-1}
        >
          {/* Sources are trimmed to 0.667s–26.367s of the master. The master
              fades up from black and fades back to black, so looping it raw
              dipped through ~0.8s of black at every wrap. The trim starts and
              ends on full-brightness frames (luma 132 vs 136), so the wrap is
              an ordinary cut — which matches an edit that cuts every ~2s.
              The dip-to-black at 21.8s is the editor's scene transition and is
              deliberately kept.

              `object-fit: cover` in a portrait viewport shows only the middle
              ~500px of the 1920-wide frame, so phones were downloading four
              times the pixels they can display. These sources are the same
              footage pre-cropped to what is actually visible — smaller file,
              identical framing, no loss of detail.

              `media` on <source> is resolved once at load, not on resize, so
              the order matters: narrowest first. */}
          <source src="/hero-loop-mobile.webm" type="video/webm" media="(max-width: 600px)" />
          <source src="/hero-loop-mobile.mp4"  type="video/mp4"  media="(max-width: 600px)" />
          <source src="/hero-loop.webm" type="video/webm" />
          <source src="/hero-loop.mp4"  type="video/mp4" />
        </video>
      </div>

      {/* Centre-weighted scrim — just enough to hold the mark on the brightest
          frames without reading as a dark overlay. */}
      <div className="hero__scrim" aria-hidden />

      <h1 className="hero__mark">
        <img
          src="/blend-mark-white.png"
          alt=""
          width={1200}
          height={765}
          fetchPriority="high"
          decoding="sync"
        />
        <span className="sr-only">
          {`${BUSINESS.name} — ${t.h1.join(' ')} ${t.sub}`}
        </span>
      </h1>

      <div className="hero__cue" aria-hidden>
        <span className="hero__cue-label">{t.eyebrow}</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}

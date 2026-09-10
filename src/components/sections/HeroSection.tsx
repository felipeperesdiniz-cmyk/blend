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
          {/* Two segments of the master, cut on the editor's own scene
              boundaries and concatenated: 2.6–9.4s and 12.5–20.23s, giving a
              14.5s loop in place of the previous 25.7s one.

              Three things came out of the middle. The shot at 9.4–12.5s is a
              near-white macro (mean luma 199 rising to 225 against 95–162 for
              everything else) and it was the reason the overlaid nav bottomed
              out at 3.4:1 — no scrim bound to the nav could rescue text over a
              frame that bright. The 0.83–2.6s shot is the stylist in front of
              the painted Blend wall, so the white wordmark overlay landed on
              top of the same wordmark painted behind it. The tail past 20.23s
              was a second near-identical round-brush shot and a clinical
              close-up of brow work.

              The wrap still reads as an ordinary cut rather than a jump: last
              frame luma 134.4, first frame 132.4. That matters because the
              master fades up from and back to black, so looping it raw dipped
              through ~0.8s of black at every wrap.

              `object-fit: cover` in a portrait viewport shows only the middle
              ~500px of the full-width frame, so phones were downloading four
              times the pixels they can display. These sources are the same
              footage pre-cropped to what is actually visible — smaller file,
              identical framing, no loss of detail.

              `media` on <source> is resolved once at load, not on resize, so
              the order matters: narrowest first.

              Three tiers, not two. The previous pair switched at 600px, which
              meant every viewport from 601px up — the whole tablet range, and
              a phone held in landscape — pulled the full 1600-wide desktop
              file. An iPad in portrait was downloading 3.5MB to paint a strip
              about 430px across. `hero-loop-md` closes that gap.

              The portrait tier is gated on orientation as well as width so a
              phone in landscape correctly gets landscape footage rather than
              the centre-cropped portrait cut.

              All three tiers are the newer salon edit, conformed back onto the
              1080p master. The film was supplied as a 1280x720 re-export,
              which would have capped the desktop tier below the 1600x900 it
              already had. Frame-matching every shot against the master showed
              the whole edit present there at 1920x1080, so the cut is rebuilt
              from it: same twelve shots, same order, real pixels.

              Both tiers run the same shot sequence and the same 19.4s. One
              shot of the supplied edit is not in either: the stylist in front
              of the painted Blend wall. The overlaid white lockup lands
              directly above the identical wordmark painted behind her, so the
              frame carries two Blend marks stacked, the lower one half hidden
              by the model. The previous film had this same shot cut for the
              same reason. It is a framing collision, not a crop problem —
              reframing does not help, and on phones `object-fit: cover`
              additionally clips the painted mark to "Blen…".

              The portrait tier reframes per shot rather than centre-cropping
              throughout: the two-women shot is centred on x=500 instead of
              656, which is the difference between her face being in frame and
              being cut by the edge. Everything else takes the centre.

              Both cuts drop two short stretches the supplied edit contains: a
              four-frame white flash sitting exactly on a shot boundary, and
              the bright tail of the shot before it. In the mark region those
              frames reached luma 246, which put the white lockup at 4.8:1 —
              "hair boutique" all but vanished. Removing 0.5s in total brings
              the worst frame to 220, or 5.6:1, and neither cut is visible at
              speed. This is the same reason the previous film had its
              near-white macro removed rather than scrimmed harder: past a
              certain frame brightness no overlay rescues white type without
              darkening the whole hero.

              webm is AV1 on the landscape tiers — same VMAF as VP9 for about
              a third fewer bytes. The portrait tier stays VP9 because AV1
              hardware decode is still uneven on phones, and this loop plays
              continuously; software decode there costs battery. The codecs
              string is load-bearing: a browser without AV1 claims
              `video/webm` wholesale and would commit to a file it cannot
              decode, so it must be told precisely what is inside before it
              falls through to the mp4. */}
          <source src="/hero-loop-mobile.webm" type="video/webm" media="(max-width: 700px) and (orientation: portrait)" />
          <source src="/hero-loop-mobile.mp4"  type="video/mp4"  media="(max-width: 700px) and (orientation: portrait)" />
          <source src="/hero-loop-md.webm" type='video/webm; codecs="av01.0.04M.08"' media="(max-width: 1200px)" />
          <source src="/hero-loop-md.mp4"  type="video/mp4"  media="(max-width: 1200px)" />
          <source src="/hero-loop.webm" type='video/webm; codecs="av01.0.08M.08"' />
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
          {`${BUSINESS.name}. ${t.h1.join(' ')} ${t.sub}`}
        </span>
      </h1>

      <div className="hero__cue" aria-hidden>
        <span className="hero__cue-label">{t.eyebrow}</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}

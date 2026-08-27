import type { CSSProperties } from 'react'

interface Props {
  src?: string
  alt: string
  name: string
  className?: string
  style?: CSSProperties
}

/**
 * A team photo, or — when we do not have one yet — a monogram tile.
 *
 * The alternative was a stock portrait standing in for a real stylist, which
 * is how Léa ended up represented by a photograph of a man. An initial is
 * honest, and it reads as deliberate rather than broken.
 */
export default function TeamPortrait({ src, alt, name, className, style }: Props) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={className}
        style={style}
      />
    )
  }

  return (
    <div
      className={className}
      role="img"
      aria-label={alt}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--parchment)',
        color: 'var(--gold-dk)',
        fontFamily: 'var(--serif)',
        fontSize: 'clamp(3rem, 9vw, 5rem)',
        fontWeight: 300,
        letterSpacing: '0.02em',
        userSelect: 'none',
        ...style,
      }}
    >
      {name.trim().charAt(0).toUpperCase()}
    </div>
  )
}

import type { CSSProperties } from 'react'
import { IMAGE_WIDTHS } from '@/data/imageWidths'

interface Props {
  src: string
  alt: string
  /** Rendered width of the image at each breakpoint, for the browser to pick from. */
  sizes: string
  className?: string
  style?: CSSProperties
  eager?: boolean
}

/**
 * An <img> that offers the browser the widths we actually have on disk.
 *
 * Without this every device downloaded the desktop file: a 1280px gallery photo
 * painted into a 163px tile on a phone, about four times the pixels it can show.
 */
export default function Photo({ src, alt, sizes, className, style, eager }: Props) {
  const widths = IMAGE_WIDTHS[src]
  const base = src.replace(/\.webp$/, '')
  const largest = widths?.[widths.length - 1]

  const srcSet = widths
    ?.map((w) => (w === largest ? `${src} ${w}w` : `${base}-${w}.webp ${w}w`))
    .join(', ')

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding={eager ? 'sync' : 'async'}
      className={className}
      style={style}
    />
  )
}

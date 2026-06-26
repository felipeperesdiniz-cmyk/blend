import type { ReactNode, CSSProperties } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  style?: CSSProperties
}

export default function AnimatedSection({ children, className, delay = 0, style }: Props) {
  return (
    <div
      className={`fade-in-up${className ? ` ${className}` : ''}`}
      style={{ animationDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  )
}

interface Props {
  eyebrow?: string
  h2: React.ReactNode
  body?: string
  center?: boolean
  light?: boolean
  className?: string
}

// Reveal is CSS-driven (.fade-in-up runs on mount, animation-fill-mode: both),
// so the heading is never left invisible if JS is slow to hydrate or disabled.
export default function SectionHeader({ eyebrow, h2, body, center, light, className = '' }: Props) {
  const cls = [
    'section-header',
    center ? 'section-header--center' : '',
    light  ? 'section-header--light'  : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={cls}>
      {eyebrow && (
        <p className="section-header__eyebrow fade-in-up">{eyebrow}</p>
      )}
      <h2 className="section-header__h2 fade-in-up" style={{ animationDelay: '0.08s' }}>
        {h2}
      </h2>
      {body && (
        <p className="section-header__body fade-in-up" style={{ animationDelay: '0.16s' }}>
          {body}
        </p>
      )}
    </div>
  )
}

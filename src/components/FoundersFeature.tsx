export default function FoundersFeature() {
  return (
    <div className="founders">
      <div className="founders__label"><span>Ownership</span></div>
      <article className="founders-feature fade-in-up" id="juliana">
        <span id="fernanda" aria-hidden style={{ position: 'absolute' }} />
        <div className="founders-feature__img">
          <img
            src="/founders.webp"
            alt="Juliana and Fernanda, owners of Blend Hair Boutique in Plantation, Florida"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="founders-feature__body">
          <h3 className="founders-feature__name">Juliana &amp; Fernanda</h3>
          <p className="founders-feature__role">Owners</p>
          <p className="founders-feature__bio">
            Originally from Brazil, Juliana and Fernanda founded Blend Hair Boutique
            with a shared vision of bringing together exceptional beauty services and
            the warmth of Brazilian hospitality. Their goal was to create a salon where
            every client feels genuinely welcomed, cared for, and confident from the
            moment they arrive.
          </p>
          <p className="founders-feature__bio">
            Together, they have built a team of talented professionals who share the same
            passion for excellence, personalized service, and attention to every detail.
            Their commitment to creating a warm, welcoming atmosphere and delivering an
            exceptional client experience continues to shape everything Blend Hair
            Boutique stands for today.
          </p>
        </div>
      </article>
    </div>
  )
}

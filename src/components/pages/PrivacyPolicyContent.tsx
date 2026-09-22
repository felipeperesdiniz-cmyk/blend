import { BUSINESS } from '@/data/constants'

// English only, deliberately: legal copy carries liability risk if a
// translation drifts from the governing text, so this page — like the blog —
// has no /pt or /es counterpart. LocaleLink elsewhere falls back to this
// English URL automatically for locales with no translated route.

const SECTIONS = [
  {
    num: '01',
    title: 'Information We Collect',
    body: (
      <>
        <p>
          We collect personal information that you voluntarily provide to us when booking an
          appointment, contacting us, or subscribing to our updates. This may include:
        </p>
        <ul>
          <li>Name, email address, and phone number.</li>
          <li>Appointment history and preferences.</li>
          <li>Payment information (processed securely through our third-party provider).</li>
        </ul>
      </>
    ),
  },
  {
    num: '02',
    title: 'Appointment Booking and Marketing via Fresha',
    body: (
      <p>
        We use Fresha (<a href="https://www.fresha.com" target="_blank" rel="noopener noreferrer">Fresha.com</a>)
        as our third-party booking and salon management platform. When you book an appointment,
        create a client profile, or opt in to receive updates through our website, your personal
        information is collected and processed securely by Fresha on our behalf.
      </p>
    ),
  },
  {
    num: '03',
    title: 'How Your Data Is Used',
    body: (
      <p>
        This information is used strictly to manage your appointments, send booking confirmations
        and reminders via SMS or email, and deliver marketing communications, promotions, and
        special offers from our salon. All marketing communications are sent exclusively through
        the Fresha platform.
      </p>
    ),
  },
  {
    num: '04',
    title: 'Opting Out of Marketing',
    body: (
      <p>
        You can opt out of receiving marketing emails or text messages at any time by clicking the
        &ldquo;unsubscribe&rdquo; link included at the bottom of any Fresha email, or by adjusting
        your profile preferences directly within the Fresha platform.
      </p>
    ),
  },
  {
    num: '05',
    title: 'Payment Security',
    body: (
      <p>
        If you provide payment card details for bookings, your payment information is encrypted
        and securely processed by Fresha&rsquo;s integrated payment gateways. Our salon does not
        store your credit card details on our local systems.
      </p>
    ),
  },
  {
    num: '06',
    title: 'Florida Information Protection Act (FIPA) Compliance',
    body: (
      <p>
        In compliance with Florida law, we implement and maintain reasonable commercial security
        measures to protect your personal information against unauthorized access, disclosure, or
        destruction.
      </p>
    ),
  },
  {
    num: '07',
    title: 'Third-Party Links',
    body: (
      <p>
        Our website may contain links to external sites, including Fresha. We do not control and
        are not responsible for the privacy practices of third-party websites. For more
        information, please review the{' '}
        <a href="https://www.fresha.com/privacy" target="_blank" rel="noopener noreferrer">
          Fresha Privacy Policy
        </a>.
      </p>
    ),
  },
]

export default function PrivacyPolicyContent() {
  return (
    <div className="page-enter">
      <header className="page-hero page-hero--dark">
        <div className="container hero-layer">
          <p className="eyebrow eyebrow--on-dark">Legal</p>
          <h1
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              fontWeight: 300,
              color: 'var(--white)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.65)',
              marginTop: '1.25rem',
              fontWeight: 300,
              letterSpacing: '0.02em',
            }}
          >
            Effective Date: September 15, 2026
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container container--prose legal-page">
          <p className="legal-intro">
            At {BUSINESS.name}, we are committed to protecting the privacy of our clients and
            website visitors in {BUSINESS.city}. This Privacy Policy explains how we collect,
            use, and safeguard your information when you visit our website and use our services.
          </p>

          {SECTIONS.map((s) => (
            <div className="legal-section" key={s.num}>
              <p className="legal-num">{s.num}</p>
              <h2 className="legal-h2">{s.title}</h2>
              <div className="legal-body">{s.body}</div>
            </div>
          ))}

          <div className="legal-section">
            <p className="legal-num">08</p>
            <h2 className="legal-h2">Contact Us</h2>
            <div className="legal-body">
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact
                us at:
              </p>
              <p className="legal-contact">
                {BUSINESS.name}
                <br />
                Address: {BUSINESS.address}
                <br />
                Email: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                <br />
                Phone: <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

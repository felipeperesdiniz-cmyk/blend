'use client'
import { Instagram } from 'lucide-react'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import FoundersFeature from '@/components/FoundersFeature'
import { TEAM } from '@/data/team'
import { BUSINESS } from '@/data/constants'

const OWNER_IDS = ['juliana', 'fernanda']

const staff = TEAM.filter((m) => !OWNER_IDS.includes(m.id))

export default function TeamSection() {
  return (
    <section className="section section--ivory2" id="team">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: 'clamp(2.5rem, 4vw, 4.5rem)' }}>
          <SectionHeader
            eyebrow="The Artists"
            h2={<>Meet Your <em>Beauty Team</em></>}
          />
          <Link href="/team" className="btn btn--outline" style={{ flexShrink: 0 }}>
            Our Team
          </Link>
        </div>

        <FoundersFeature />

        <div className="team__label"><span>The Team</span></div>
        <div className="team-grid">
          {staff.map((member, i) => (
            <article
              key={member.id}
              className="team-card fade-in-up"
              style={{ animationDelay: `${(i % 4) * 0.06}s` }}
            >
              <div className="team-card__img-wrap">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.specialty} at Blend Hair Boutique`}
                  loading="lazy" decoding="async"
                />
              </div>
              <div className="team-card__body">
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__specialty">{member.specialty}</p>
                {member.instagram ? (
                  <a
                    className="team-card__langs"
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={15} />
                    @{member.instagram.replace(/\/+$/, '').split('/').pop()}
                  </a>
                ) : (
                  <span className="team-card__langs" aria-hidden="true" />
                )}
                <a
                  href={BUSINESS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-card__book"
                >
                  Book an Appointment
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import ServicesSection from '@/components/sections/ServicesSection'
import PhilosophySection from '@/components/sections/PhilosophySection'
import GallerySection from '@/components/sections/GallerySection'
import TeamSection from '@/components/sections/TeamSection'
import ProductSection from '@/components/sections/ProductSection'
import ReviewsSection from '@/components/sections/ReviewsSection'
import ContactSection from '@/components/sections/ContactSection'
import CTASection from '@/components/sections/CTASection'
import { OG_IMAGE } from '@/data/constants'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Blend Hair Boutique | Luxury Hair Salon in Plantation, FL',
  description:
    'A luxury hair salon in Plantation, Florida for balayage, Brazilian blowout, keratin, haircuts, nails and bridal beauty. 4.9★ · 1,230+ reviews. Book online.',
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    images: [OG_IMAGE],
    title: 'Blend Hair Boutique | Luxury Hair Salon in Plantation, FL',
    description:
      'Luxury hair color, balayage, Brazilian blowout, keratin, nails, and bridal beauty in Plantation, Florida. Book your appointment online today.',
    url: `${SITE_URL}/`,
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <PhilosophySection />
      <GallerySection />
      <TeamSection />
      <ProductSection />
      <ReviewsSection />
      <ContactSection />
      <CTASection />
    </>
  )
}

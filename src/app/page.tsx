import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import ServicesSection from '@/components/sections/ServicesSection'
import PhilosophySection from '@/components/sections/PhilosophySection'
import GallerySection from '@/components/sections/GallerySection'
import FirstVisitSection from '@/components/sections/FirstVisitSection'
import TeamSection from '@/components/sections/TeamSection'
import ProductSection from '@/components/sections/ProductSection'
import ReviewsSection from '@/components/sections/ReviewsSection'
import ContactSection from '@/components/sections/ContactSection'
import CTASection from '@/components/sections/CTASection'

const SITE_URL = 'https://www.blendhairboutique.com'

export const metadata: Metadata = {
  title: 'Blend Hair Boutique | Luxury Hair Salon in Plantation, FL',
  description:
    'Blend Hair Boutique is a luxury hair salon in Plantation, Florida. Specializing in balayage, Brazilian blowout, keratin treatments, haircuts, nails, facials, and bridal beauty. Book online 24/7.',
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: 'Blend Hair Boutique | Luxury Hair Salon in Plantation, FL',
    description:
      'Luxury hair color, balayage, Brazilian blowout, keratin, nails, and bridal beauty in Plantation, Florida. Book your appointment online today.',
    url: `${SITE_URL}/`,
  },
}

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <PhilosophySection />
      <GallerySection />
      <FirstVisitSection />
      <TeamSection />
      <ProductSection />
      <ReviewsSection />
      <ContactSection />
      <CTASection />
    </main>
  )
}

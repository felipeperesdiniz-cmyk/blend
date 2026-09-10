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

/**
 * The homepage section stack, shared by /, /pt and /es.
 *
 * Every section reads its copy from the language context, and that context now
 * derives from the URL, so this same tree renders in Portuguese under /pt and
 * Spanish under /es — server-side, in the initial HTML. Kept as one component
 * so the three routes cannot drift out of order.
 */
export default function HomeContent() {
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

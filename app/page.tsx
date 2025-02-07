import HeroSection from "@/components/hero-section"
import FeaturedProviders from "@/components/featured-providers"
import StatsSection from "@/components/stats-section"

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <FeaturedProviders />
      <StatsSection />
    </main>
  )
}


import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { TrustBanner } from '@/components/TrustBanner'
import { ProblemSolution } from '@/components/ProblemSolution'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { Testimonials } from '@/components/Testimonials'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustBanner />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
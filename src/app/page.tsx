import { Hero } from './components/Hero'
import { EnhancedCarousel } from './components/Carousel'
import { Values } from './components/Values'
import { TrustedClients } from './components/TrustedClients'
import { OperationsBanner } from './components/BannerOperations';
import { OurTeam } from './components/OurTeam';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <EnhancedCarousel />
      <Values />
      <OurTeam />
      <TrustedClients />
    </main>
  )
}
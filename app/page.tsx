import { MessageCircle } from 'lucide-react'
import { AboutSection } from '@/components/about-section'
import { BrowSection } from '@/components/brow-section'
import { FacialSection } from '@/components/facial-section'
import { Hero } from '@/components/hero'
import { LashSection } from '@/components/lash-section'
import { LocationSection } from '@/components/location-section'
import { PoliciesSection } from '@/components/policies-section'
import { SiteFooter } from '@/components/footer'
import { NavBar } from '@/components/nav-bar'
import { StudioSection } from '@/components/studio-section'
import { STUDIO } from '@/lib/studioDataConstants'
import { CatalogGallery } from '@/components/catalog-section'

export default function Page() {
  return (
    <>
      <NavBar />
      <main className="overflow-x-hidden">
        <Hero />
        <AboutSection />
        <LashSection />
        <BrowSection />
        <FacialSection />
        <CatalogGallery />
        <StudioSection />
        <PoliciesSection />
        <LocationSection />
      </main>
      <SiteFooter />

      <a
        href={STUDIO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105 md:right-8 md:bottom-8"
      >
        <MessageCircle className="size-6" />
        <span className="sr-only">Agendar pelo WhatsApp</span>
      </a>
    </>
  );
}

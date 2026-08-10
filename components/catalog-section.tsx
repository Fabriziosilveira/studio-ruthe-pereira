'use client'

import Image from 'next/image'
import { CATALOG_PAGES } from '@/lib/studioDataConstants'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { SectionHeading } from './section-heading'

export function CatalogGallery() {
  return (
    <section className="py-20 bg-secondary/60">
      <div className="container mx-auto px-5 md:px-10">
        <SectionHeading
          eyebrow="Nosso trabalho"
          title="Detalhes que fazem a diferença"
          description="Conheça alguns dos procedimentos realizados no studio e veja de perto o cuidado em cada detalhe."
        />

        <div className="relative mt-12 px-1">
          <Carousel
            opts={{
              align: 'start',
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {CATALOG_PAGES.map((page) => (
                <CarouselItem
                  key={page.src}
                  className="basis-[75vw] pl-4 sm:basis-[45vw] lg:basis-[26vw]"
                >
                  <figure className="h-[520px] overflow-hidden rounded-2xl border border-border bg-card">
                    <Image
                      src={page.src || '/placeholder.svg'}
                      alt={page.alt}
                      width={595}
                      height={843}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-0 hidden md:flex" />
            <CarouselNext className="right-0 hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}


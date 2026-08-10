'use client'

import Image from 'next/image'
import { CATALOG_PAGES } from '@/lib/studioDataConstants'
import { Reveal } from '@/components/reveal'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CatalogGallery() {
  return (
    <section className="py-20 bg-secondary/60">
      <div className="container mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Catálogo
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Todos os detalhes de cada procedimento
              </h2>
            </Reveal>
          </div>
        </div>

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


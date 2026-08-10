import { ArrowDownRight, List, MapPin } from 'lucide-react'
import { IMAGES, STUDIO } from '@/lib/studioDataConstants'
import { StudioImage } from '@/components/crop-image'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <Reveal className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-primary">
              Cílios · Sobrancelhas · Estética facial
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 font-serif text-5xl leading-[0.98] font-light tracking-display text-balance text-foreground sm:text-6xl lg:text-7xl">
              A beleza que já é sua,
              <span className="block italic text-primary">apenas realçada.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
              Studio de beleza em Jundiaí especializado em alongamento de cílios, lash lifting,
              design de sobrancelhas e estética facial. Cada atendimento é pensado para entregar
              leveza, autoestima e um momento de bem-estar.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`${STUDIO.whatsapp}?text=${encodeURIComponent(
                'Olá! Gostaria de agendar um horário. Poderia, por favor, me informar os horários disponíveis?'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-secondary-foreground"
            >
              Agendar meu horário
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#cilios"
              className="inline-flex items-center gap-3 rounded-full border border-primary/30 px-8 py-4 text-xs uppercase tracking-[0.22em] text-primary transition-colors hover:border-primary hover:bg-secondary"
            >
              <List className='size-4'/>
              Ver catálogo
            </a>
          </Reveal>

          <Reveal delay={320} className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center">
            <dl className="flex items-center gap-8">
              <div>
                <dt className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
                  Experiência
                </dt>
                <dd className="mt-2 font-serif text-3xl font-light text-foreground">7 anos</dd>
              </div>
              <span className="h-10 w-px bg-border" aria-hidden="true" />
              <div>
                <dt className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
                  Procedimentos
                </dt>
                <dd className="mt-2 font-serif text-3xl font-light text-foreground">10</dd>
              </div>
            </dl>
            <a
              href={STUDIO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary sm:ml-auto"
            >
              <MapPin className="size-4 text-gold" />
              Pq. Res. Eloy Chaves, Jundiaí
            </a>
          </Reveal>
        </div>

        <Reveal delay={140} className="relative">
          <div className="relative mx-auto w-full max-w-md">
            <span
              className="absolute -inset-4 rounded-t-[999px] rounded-b-3xl border border-gold/40"
              aria-hidden="true"
            />
            <StudioImage
              src={IMAGES.hero}
              alt="Ambiente interno do studio"
              priority
              className="aspect-[4/5] rounded-t-[999px] rounded-b-xl"
            />
            <div className="absolute -bottom-6 -left-2 rounded-full border border-border bg-card px-6 py-3 shadow-sm sm:-left-8">
              <p className="font-serif text-base tracking-display text-foreground">
                Ruthe Pereira
              </p>
              <p className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
                Lash & Brow Designer
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

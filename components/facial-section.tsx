import { Clock, Sparkles } from 'lucide-react'
import { CONTRAINDICATIONS, FACIAL_SERVICES } from '@/lib/studioDataConstants'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { StudioImage } from './crop-image'

export function FacialSection() {
  return (
    <section id="pele" className="py-20 md:py-32">
      <div className="w-full min-w-0 mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading
          eyebrow="Pele"
          title="Epilação na linha e dermaplaning"
          description="Procedimentos que trabalham textura, luminosidade e definição do contorno do rosto — sempre finalizados com alta frequência e protetor solar."
        />

        <div className="w-full min-w-0 mt-14 grid gap-6 lg:grid-cols-2">
          {FACIAL_SERVICES.map((service, index) => (
            <Reveal
              key={service.name}
              delay={index * 90}
              className="group h-full flex min-w-0 max-w-full flex-col overflow-hidden rounded-t-[3.5rem] rounded-b-2xl border border-border bg-card p-5 sm:p-8 md:p-10"
            >
              <div className="min-w-0">
                <h3 className="min-w-0 max-w-full break-words font-serif text-3xl leading-tight font-light tracking-display text-foreground md:text-4xl">
                  {service.name}
                </h3>
                <p className="mt-4 font-serif text-3xl font-light leading-none text-primary">
                  <span className="align-super text-sm">R$</span> {service.price}
                </p>
              </div>

              <p className="mt-6 mb-5 text-sm leading-relaxed text-pretty text-muted-foreground">
                {service.description}
              </p>

              <StudioImage
                src={service.src}
                alt={service.alt}
                className="aspect-[4/5] rounded-t-[3rem] rounded-b-xl border-2 border-border border-primary/30"
              />

              <p className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <Clock className="size-4 text-gold" />
                {service.duration}
              </p>

              <div className="mt-8 border-t border-border/70 pt-6">
                <p className="inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.28em] text-primary">
                  <Sparkles className="size-3.5 text-gold" />
                  Benefícios
                </p>
                <ul className="mt-5 grid gap-3">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <span className="h-px w-4 shrink-0 bg-gold" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={120}
          className="mt-10 rounded-t-[3rem] rounded-b-2xl border border-border bg-secondary/50 p-8 md:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:gap-14">
            <div>
              <h3 className="font-serif text-2xl leading-tight font-light tracking-display text-balance text-foreground">
                Contraindicações gerais
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Em qualquer um dos casos abaixo, o procedimento só é realizado mediante avaliação
                profissional.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {CONTRAINDICATIONS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border/70 bg-card px-5 py-4 text-sm leading-relaxed text-muted-foreground"
                >
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { AlertTriangle, Clock } from 'lucide-react'
import { BROW_SERVICES, MICROPIGMENTATION, STUDIO } from '@/lib/studioDataConstants'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function BrowSection() {
  return (
    <section id="sobrancelhas" className="w-full min-w-0 border-y border-border bg-secondary/40 py-20 md:py-32">
      <div className="mx-auto  w-full min-w-0 max-w-7xl px-5 md:px-10">
        <SectionHeading
          eyebrow="Moldura do olhar"
          title="Sobrancelhas com simetria e naturalidade"
          description="Mapeamento facial, simetrização e desenho minucioso respeitando o formato natural do seu rosto. Somente depois dessa etapa os pelos são retirados, evitando as temidas falhas."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BROW_SERVICES.map((service, index) => (
            <Reveal
              key={service.name}
              delay={index * 70}
              className="flex flex-col justify-between rounded-t-[3rem] rounded-b-2xl border border-border bg-card p-7 transition-colors hover:border-gold/60"
            >
              <div>
                <span className="text-[0.6rem] uppercase tracking-[0.28em] text-gold">
                  {service.highlight}
                </span>
                <h3 className="mt-4 font-serif text-2xl leading-tight font-light tracking-display text-foreground">
                  {service.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-pretty text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <p className="mt-8 border-t border-border/70 pt-6 font-serif text-3xl font-light text-primary">
                <span className="align-super text-sm">R$</span> {service.price}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={120}
          className="mt-14 grid gap-10 rounded-t-[4rem] rounded-b-3xl border border-gold/40 bg-card p-8 md:p-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
        >
          <div className="min-w-0">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-primary/80">
              Técnica avançada
            </span>
            <h3 className="mt-5 min-w-0 break-words font-serif text-4xl text-[clamp(2rem,8vw,3rem)] font-light leading-[1.1] tracking-display text-balance text-foreground md:mt-5 md:text-5xl">
              {MICROPIGMENTATION.name}
            </h3>
            <span className="rule-gold mt-6 block h-px w-24" aria-hidden="true" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
              {MICROPIGMENTATION.description}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4 text-gold" />
              Tempo médio de procedimento: {MICROPIGMENTATION.duration}
            </p>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-secondary/60 p-5">
              <AlertTriangle className="mt-0.5 size-4 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                <strong className="font-medium text-foreground">Atenção:</strong>{' '}
                {MICROPIGMENTATION.warning}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5 rounded-t-[3rem] rounded-b-2xl bg-secondary/60 p-8">
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
                Parcelado
              </p>
              <p className="mt-2 font-serif text-4xl font-light text-foreground">
                {MICROPIGMENTATION.installments}
              </p>
            </div>
            <span className="h-px w-full bg-border" aria-hidden="true" />
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
                À vista
              </p>
              <p className="mt-2 font-serif text-4xl font-light text-primary">
                {MICROPIGMENTATION.cash}
              </p>
            </div>
            <span className="h-px w-full bg-border" aria-hidden="true" />
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
                Retoque, se necessário
              </p>
              <p className="mt-2 font-serif text-2xl font-light text-foreground">
                {MICROPIGMENTATION.touchUp}
              </p>
            </div>
            <a
              href={STUDIO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-primary px-8 py-4 text-center text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-secondary-foreground"
            >
              Quero avaliar meu caso
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

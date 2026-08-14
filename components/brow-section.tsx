import { AlertTriangle, Clock } from 'lucide-react'
import { BROW_SERVICES, MICROPIGMENTATION, STUDIO } from '@/lib/studioDataConstants'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { StudioImage } from './crop-image'

export function BrowSection() {
  return (
    <section id="sobrancelhas" className="w-full min-w-0 border-y border-border bg-secondary/40 py-20 md:py-32">
      <div className="mx-auto w-full min-w-0 max-w-7xl px-5 md:px-10">
        <SectionHeading
          eyebrow="Moldura do olhar"
          title="Sobrancelhas com simetria e naturalidade"
          description="Mapeamento facial, simetrização e desenho minucioso respeitando o formato natural do seu rosto. Somente depois dessa etapa os pelos são retirados, evitando as temidas falhas."
        />

        <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BROW_SERVICES.map((service, index) => (
            <Reveal
              key={service.name}
              delay={index * 70}
              className="group h-full flex flex-col justify-between rounded-t-[3rem] rounded-b-2xl border border-border bg-card p-7 transition-colors hover:border-gold/60"
            >
              <div className="mt-auto">
                <span className="text-[0.6rem] uppercase tracking-[0.28em] text-gold">
                  {service.highlight}
                </span>
                <h3 className="mt-4 font-serif text-2xl leading-tight font-light tracking-display text-foreground">
                  {service.name}
                </h3>
                <p className="mt-4 h-[155px] text-sm leading-relaxed text-pretty text-muted-foreground">
                  {service.description}
                </p>
                <StudioImage
                  src={service.src}
                  alt={service.alt}
                  className="aspect-[4/5] rounded-t-[3rem] rounded-b-xl border-2 border-border border-primary/30"
                />
              </div>
              <p className="mt-8 border-t border-border/70 pt-6 font-serif text-3xl font-light text-primary">
                <span className="align-super text-sm">R$</span> {service.price}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={120}
          className="mt-14 grid min-w-0 items-start gap-10 rounded-t-[4rem] rounded-b-3xl border border-gold/40 bg-card p-6 sm:p-8 md:p-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16"
        >
          <div className="min-w-0">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-primary/80">
              Técnica avançada
            </span>
            <h3 className="mt-5 min-w-0 break-words font-serif text-[clamp(2rem,8vw,3rem)] font-light leading-[1.1] tracking-display text-balance text-foreground md:text-5xl">
              {MICROPIGMENTATION.name}
            </h3>
            <span className="rule-gold mt-6 block h-px w-24" aria-hidden="true" />
            <p className="mt-6 mb-5 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
              {MICROPIGMENTATION.description}
            </p>

            <StudioImage
              src="/micropigmentation/micropigmentacao.png"
              alt=""
              className="w-full mb-5 aspect-square rounded-t-[3rem] rounded-b-xl border-2 border-border border-primary/30"
            />
          </div>
          <div className="min-w-0 lg:pt-16">
            {/* Valores */}
            <div className="rounded-t-[3rem] rounded-b-2xl bg-secondary/60 p-6 sm:p-8">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
                  Parcelado
                </p>

                <p className="mt-2 break-words font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
                  {MICROPIGMENTATION.installments}
                </p>
              </div>

              <span className="my-5 block h-px w-full bg-border" aria-hidden="true" />

              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
                  À vista
                </p>

                <p className="mt-2 break-words font-serif text-3xl font-light leading-tight text-primary sm:text-4xl">
                  {MICROPIGMENTATION.cash}
                </p>
              </div>

              <span className="my-5 block h-px w-full bg-border" aria-hidden="true" />

              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
                  Retoque, se necessário
                </p>

                <p className="mt-2 break-words font-serif text-2xl font-light text-foreground">
                  {MICROPIGMENTATION.touchUp}
                </p>
              </div>

              <a
                href={`${STUDIO.whatsapp}?text=${encodeURIComponent(
                  'Olá! Tudo bem? Gostaria de avaliar o meu caso. Posso enviar uma foto para avaliação?'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full rounded-full bg-primary px-6 py-4 text-center text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-secondary-foreground"
              >
                Quero avaliar meu caso
              </a>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4 shrink-0 text-gold" />
              Tempo médio de procedimento: {MICROPIGMENTATION.duration}
            </p>

            <div className="mt-6 flex min-w-0 items-start gap-3 rounded-2xl border border-border bg-secondary/60 p-4 sm:p-5">
              <AlertTriangle className="mt-0.5 size-4 shrink-0 text-primary" />

              <p className="min-w-0 text-sm leading-relaxed text-pretty text-muted-foreground">
                <strong className="font-medium text-foreground">
                  Atenção:
                </strong>{' '}
                {MICROPIGMENTATION.warning}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

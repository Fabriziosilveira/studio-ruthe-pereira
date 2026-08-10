'use client'

import { useMemo, useState } from 'react'
import { Check } from 'lucide-react'
import { LASH_SERVICES, MAINTENANCE, STUDIO } from '@/lib/studioDataConstants'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const FILTERS = ['Todos', 'Clássico', 'Volume', 'Natural'] as const

export function LashSection() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('Todos')

  const services = useMemo(
    () => (filter === 'Todos' ? LASH_SERVICES : LASH_SERVICES.filter((s) => s.tag === filter)),
    [filter],
  )

  return (
    <section id="cilios" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading
          eyebrow="Olhar"
          title="Alongamento de cílios e lash lifting"
          description="Do fio a fio mais natural ao volume mais glamouroso. A técnica ideal é definida junto com você, considerando seus fios naturais e o efeito desejado."
        />

        <Reveal delay={100} className="mt-12 flex flex-wrap justify-center gap-2">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={cn(
                'rounded-full border px-6 py-2.5 text-[0.65rem] uppercase tracking-[0.22em] transition-colors',
                filter === item
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:border-primary/40 hover:text-primary',
              )}
            >
              {item}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.name}
              delay={index * 60}
              className="group flex flex-col justify-between rounded-t-[3rem] rounded-b-2xl border border-border bg-card p-8 transition-colors hover:border-gold/60"
            >
              <div>
                <span className="text-[0.6rem] uppercase tracking-[0.28em] text-gold">
                  {service.tag}
                </span>
                <h3 className="mt-4 font-serif text-3xl leading-tight font-light tracking-display text-foreground">
                  {service.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-pretty text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <div className="mt-8 flex items-end justify-between border-t border-border/70 pt-6">
                <span className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
                  Aplicação
                </span>
                <span className="font-serif text-3xl font-light text-primary">
                  <span className="align-super text-sm">R$</span> {service.price}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div id="manutencoes" className="mt-24 scroll-mt-24">
          <Reveal className="grid gap-10 rounded-t-[4rem] rounded-b-3xl border border-border bg-secondary/50 p-8 md:p-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <span className="text-[0.65rem] uppercase tracking-[0.4em] text-primary/80">
                Manutenções
              </span>
              <h3 className="mt-5 font-serif text-4xl leading-tight font-light tracking-display text-balance text-foreground">
                Cílios crescem — e a manutenção mantém tudo alinhado.
              </h3>
              <span className="rule-gold mt-6 block h-px w-24" aria-hidden="true" />
              <p className="mt-6 text-sm leading-relaxed text-pretty text-muted-foreground">
                Nossos cílios, assim como o cabelo, crescem. Por isso é importante fazer as
                manutenções em dia, para que esses fios crescidos não gerem incômodo e fiquem
                sempre alinhados.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                  Fique atenta às datas de retoque: somos rigorosos com os dias da manutenção.
                </li>
                <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                  O ideal para a manutenção é ter no mínimo 50% dos fios. Menos que isso será
                  cobrado como nova aplicação.
                </li>
              </ul>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {MAINTENANCE.map((item) => (
                <div
                  key={item.group}
                  className="flex flex-col rounded-t-[2.5rem] rounded-b-2xl border border-gold/40 bg-card p-7"
                >
                  <h4 className="font-serif text-xl leading-snug font-medium text-balance text-foreground">
                    {item.group}
                  </h4>
                  <div className="mt-6">
                    <p className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
                      Primeira aplicação
                    </p>
                    <p className="mt-2 text-sm text-foreground">{item.first}</p>
                  </div>
                  <div className="mt-6 border-t border-border/70 pt-5">
                    <p className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
                      Retoque
                    </p>
                    <dl className="mt-3 space-y-2">
                      {item.retouch.map((r) => (
                        <div key={r.label} className="flex items-baseline justify-between gap-3">
                          <dt className="text-sm text-muted-foreground">{r.label}</dt>
                          <dd className="font-serif text-lg text-primary">{r.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              ))}
              <a
                href={`${STUDIO.whatsapp}?text=${encodeURIComponent(
                  'Olá! Gostaria de agendar minha manutenção. Quais horários estão disponíveis?'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-primary px-8 py-4 text-center text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-secondary-foreground sm:col-span-2"
              >
                Agendar minha manutenção
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

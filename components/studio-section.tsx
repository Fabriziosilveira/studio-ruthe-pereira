import Image from 'next/image'
import { Armchair, Coffee, Volume2, Wind } from 'lucide-react'
import { IMAGES } from '@/lib/studioDataConstants'
import { Reveal } from '@/components/reveal'
import { StudioImage } from '@/components/crop-image'

const FEATURES = [
  { icon: Volume2, title: 'Silencioso', text: 'Um ambiente tranquilo, pensado nos mínimos detalhes.' },
  { icon: Wind, title: 'Climatizado', text: 'Conforto térmico durante todo o procedimento.' },
  { icon: Armchair, title: 'Confortável', text: 'Maca e espaço cuidadosamente organizados.' },
  { icon: Coffee, title: 'Acolhedor', text: 'Uma pausa de bem-estar do início ao fim.' },
]

export function StudioSection() {
  return (
    <section id="studio" className="border-y border-border bg-accent py-20 text-accent-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal className="grid grid-cols-2 gap-4">
            {/* IMAGEM PRINCIPAL */}
            <StudioImage
              src={IMAGES.studio1}
              alt="Ambiente interno do studio"
              priority
              className="aspect-[4/5] rounded-t-[3rem] rounded-b-xl"
            />

            <StudioImage
              src={IMAGES.studio2}
              alt="Recepção do studio"
              className="aspect-[4/5] rounded-t-[3rem] rounded-b-xl"
            />

            <StudioImage
              src={IMAGES.studio3}
              alt="Detalhes da área de espera"
              className="aspect-[4/5] rounded-t-[3rem] rounded-b-xl"
            />

            <StudioImage
              src={IMAGES.studio4}
              alt="Ambiente interno do studio"
              className="aspect-[4/5] rounded-t-[3rem] rounded-b-xl"
            />
          </Reveal>

          <div>
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-accent-foreground/70">
              Esse é o nosso studio
            </span>
            <Reveal>
              <h2 className="mt-5 font-serif text-4xl leading-[1.05] font-light tracking-display text-balance md:text-6xl">
                Um ambiente pensado para acolher.
              </h2>
            </Reveal>
            <span className="rule-gold mt-6 block h-px w-24" aria-hidden="true" />
            <Reveal delay={100}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-accent-foreground/80">
                Um espaço aconchegante e silencioso, pensado nos mínimos detalhes para que cada
                atendimento seja uma experiência leve e especial. Aqui, cada detalhe foi planejado
                para que você se sinta acolhida, relaxada e em total confiança enquanto realça ainda
                mais a sua beleza.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {FEATURES.map((feature, index) => (
                <Reveal
                  key={feature.title}
                  delay={index * 70}
                  className="border-t border-accent-foreground/20 pt-5"
                >
                  <feature.icon className="size-5 text-gold" aria-hidden="true" />
                  <h3 className="mt-4 font-serif text-xl font-light tracking-display">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-accent-foreground/70">
                    {feature.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

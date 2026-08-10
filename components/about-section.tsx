import { CATALOG_LIST, IMAGES } from '@/lib/studioDataConstants'
import { StudioImage } from '@/components/crop-image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function AboutSection() {
  return (
    <section id="sobre" className="border-y border-border bg-secondary/40 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Prazer, Ruthe Pereira"
              title="Beleza vai muito além da aparência."
            />
            <Reveal delay={120} className="mt-8 space-y-6 text-base leading-relaxed text-pretty">
              <p className="text-muted-foreground">
                Tenho 25 anos e <strong className="font-medium text-foreground">atuo na área
                da beleza há 7 anos</strong>. Nasci e cresci em Goiânia e, recentemente, me mudei
                para Jundiaí, onde realizei o sonho de abrir meu próprio studio de beleza.
              </p>
              <p className="text-muted-foreground">
                Meu compromisso é realçar a beleza natural de cada mulher que passa por mim,
                proporcionando também leveza, autoestima, autocuidado e momentos de bem-estar
                através de cada atendimento.
              </p>
            </Reveal>
            <Reveal
              delay={200}
              className="mt-10 border-l-2 border-gold pl-6 font-serif text-2xl leading-snug font-light text-balance text-foreground italic"
            >
              <p>
                &ldquo;Cada detalhe foi planejado para que você se sinta acolhida, relaxada e em
                total confiança.&rdquo;
              </p>
            </Reveal>

            <Reveal delay={260} className="mt-10">
              <StudioImage
                src={IMAGES.about}
                alt="Ambiente interno do studio"
                priority
                className="aspect-[4/5] rounded-t-[3rem] rounded-b-xl"
              />
            </Reveal>
          </div>

          <div>
            <Reveal className="flex items-baseline justify-between border-b border-border pb-4">
              <h3 className="font-serif text-2xl font-light tracking-display text-foreground">
                Catálogo de serviços
              </h3>
              <span className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
                {CATALOG_LIST.length} procedimentos
              </span>
            </Reveal>
            <ul className="mt-2">
              {CATALOG_LIST.map((item, index) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={index * 45}
                  className="group flex items-center gap-5 border-b border-border/60 py-5"
                >
                  <span
                    className="h-px w-6 shrink-0 bg-gold transition-all group-hover:w-10"
                    aria-hidden="true"
                  />
                  <span className="text-base text-foreground transition-colors group-hover:text-primary">
                    {item}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

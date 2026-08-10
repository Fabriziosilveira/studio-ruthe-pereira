import { CalendarClock, Timer } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function PoliciesSection() {
  return (
    <section id="regras" className="border-y border-border bg-secondary/40 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading
          eyebrow="Regras do studio"
          title="Combinados que garantem a qualidade do atendimento"
          description="Para respeitar o horário de todas as clientes e manter a excelência em cada procedimento, seguimos algumas orientações simples."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-t-[3rem] rounded-b-2xl border border-border bg-card p-8 md:p-10">
            <Timer className="size-5 text-gold" aria-hidden="true" />
            <h3 className="mt-6 font-serif text-3xl font-light tracking-display text-foreground">
              Atendimentos
            </h3>
            <span className="rule-gold mt-5 block h-px w-20" aria-hidden="true" />
            <p className="mt-6 text-sm leading-relaxed text-pretty text-muted-foreground">
              Para manter a qualidade do atendimento e respeitar o horário de todas as clientes,
              temos uma tolerância máxima de{' '}
              <strong className="font-medium text-foreground">10 minutos de atraso</strong>.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-pretty text-muted-foreground">
              Após esse período, o atendimento poderá precisar ser reagendado ou ajustado conforme o
              tempo disponível da agenda.
            </p>
          </Reveal>

          <Reveal
            delay={90}
            className="rounded-t-[3rem] rounded-b-2xl border border-gold/40 bg-card p-8 md:p-10"
          >
            <CalendarClock className="size-5 text-gold" aria-hidden="true" />
            <h3 className="mt-6 font-serif text-3xl font-light tracking-display text-foreground">
              Agendamentos
            </h3>
            <span className="rule-gold mt-5 block h-px w-20" aria-hidden="true" />
            <p className="mt-6 text-sm leading-relaxed text-pretty text-muted-foreground">
              Para procedimentos como cílios, brow lamination, lash lifting e micropigmentação, o
              agendamento é confirmado mediante o pagamento de uma taxa de{' '}
              <strong className="font-medium text-foreground">20% sobre o valor total</strong>. Esse
              valor é abatido no dia da realização do serviço.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
                Em caso de cancelamento sem aviso prévio, a taxa é considerada multa referente ao
                horário reservado e não comparecido.
              </li>
              <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
                Com aviso de antecedência, o agendamento pode ser remarcado e a taxa continua sendo
                abatida no novo atendimento.
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

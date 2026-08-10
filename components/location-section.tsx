import { Banknote, CreditCard, MapPin, MapPinned, Smartphone, Wallet } from 'lucide-react'
import { STUDIO } from '@/lib/studioDataConstants'
import { Reveal } from '@/components/reveal'

const PAYMENT_ICONS = [
  { icon: CreditCard, label: 'Crédito' },
  { icon: Wallet, label: 'Débito' },
  { icon: Smartphone, label: 'Pix' },
  { icon: Banknote, label: 'Espécie' },
]

export function LocationSection() {
  return (
    <section id="localizacao" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-primary/80">
              Localização
            </span>
            <Reveal>
              <h2 className="mt-5 font-serif text-4xl leading-[1.05] font-light tracking-display text-balance text-foreground md:text-6xl">
                Venha nos visitar em Jundiaí.
              </h2>
            </Reveal>
            <span className="rule-gold mt-6 block h-px w-24" aria-hidden="true" />

            <Reveal delay={90} className="mt-8 flex items-start gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
              <address className="text-base leading-relaxed text-muted-foreground not-italic">
                {STUDIO.address}
                <br />
                {STUDIO.district} — {STUDIO.city}
                <br />
                CEP {STUDIO.zip}
              </address>
            </Reveal>

            <Reveal delay={150} className="mt-10 flex flex-wrap gap-4">
              <a
                href={STUDIO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-secondary-foreground"
              >
                <MapPinned className='size-4'/>
                Abrir no Google Maps
              </a>
              <a
                href={STUDIO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary/30 px-8 py-4 text-[0.65rem] uppercase tracking-[0.22em] text-primary transition-colors hover:border-primary hover:bg-secondary"
              >
                Falar no WhatsApp
              </a>
            </Reveal>

            <Reveal delay={210} className="mt-14 border-t border-border pt-10">
              <h3 className="font-serif text-2xl font-light tracking-display text-foreground">
                Formas de pagamento
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Crédito, débito, Pix e espécie.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {PAYMENT_ICONS.map((payment) => (
                  <li
                    key={payment.label}
                    className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-6 text-center"
                  >
                    <payment.icon className="size-6 text-primary" aria-hidden="true" />
                    <span className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                      {payment.label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <span
              className="absolute -inset-3 rounded-t-[3.5rem] rounded-b-3xl border border-gold/40"
              aria-hidden="true"
            />
            <div className="relative h-[420px] overflow-hidden rounded-t-[3.5rem] rounded-b-3xl border border-border bg-secondary lg:h-full lg:min-h-[560px]">
              <iframe
                title="Mapa da localização do Studio Ruthe Pereira"
                src="https://www.google.com/maps?q=Avenida%20Benedicto%20Castilho%20de%20Andrade%2C%20279%20-%20Pq.%20Res.%20Eloy%20Chaves%2C%20Jundia%C3%AD%20-%20SP%2C%2013212-070&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

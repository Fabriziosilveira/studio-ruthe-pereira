import { AtSign, MessageCircle } from 'lucide-react'
import { STUDIO } from '@/lib/studioDataConstants'
import { Reveal } from '@/components/reveal'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
        <Reveal className="flex flex-col items-center text-center">
          <span className="flex size-16 items-center justify-center rounded-full border border-gold/60 font-serif text-lg tracking-[0.14em] text-primary">
            RP
          </span>
          <h2 className="mt-8 max-w-2xl font-serif text-4xl leading-[1.05] font-light tracking-display text-balance text-foreground md:text-5xl">
            Pronta para realçar a sua beleza?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
            Garanta seu horário e viva uma experiência de autocuidado do início ao fim.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={STUDIO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-secondary-foreground"
            >
              <MessageCircle className="size-4" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="https://www.instagram.com/studioruthepereira?igsh=eHg0bWdlcW9zc3Z0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-primary/30 px-8 py-4 text-[0.65rem] uppercase tracking-[0.22em] text-primary transition-colors hover:border-primary"
            >
              <AtSign className="size-4" />
              Instagram
            </a>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-border pt-8 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            {STUDIO.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {STUDIO.address} — {STUDIO.district}, {STUDIO.city}
          </p>
        </div>
      </div>
    </footer>
  )
}

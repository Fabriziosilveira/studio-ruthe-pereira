'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { STUDIO } from '@/lib/studioDataConstants'
import { cn } from '@/lib/utils'

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#cilios', label: 'Cílios' },
  { href: '#sobrancelhas', label: 'Sobrancelhas' },
  { href: '#pele', label: 'Pele' },
  { href: '#studio', label: 'Studio' },
  { href: '#localizacao', label: 'Localização' },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-10">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="Studio Ruthe Pereira — início"
        >
          <span className="flex size-10 items-center justify-center rounded-full border border-gold/60 font-serif text-sm font-medium tracking-[0.12em] text-primary">
            RP
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-serif text-lg font-medium tracking-display text-foreground">
              Studio Ruthe Pereira
            </span>
            <span className="mt-1 text-[0.6rem] uppercase tracking-[0.32em] text-muted-foreground">
              Jundiaí — SP
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={STUDIO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-6 py-3 text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-secondary-foreground sm:inline-flex"
          >
            Agendar
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-5 py-4" aria-label="Navegação mobile">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 font-serif text-2xl text-foreground last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={STUDIO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 rounded-full bg-primary px-6 py-4 text-center text-xs uppercase tracking-[0.22em] text-primary-foreground"
            >
              Agendar horário
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

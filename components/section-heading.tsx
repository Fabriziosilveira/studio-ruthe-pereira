import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      <span className="text-[0.65rem] uppercase tracking-[0.4em] text-primary/80">{eyebrow}</span>
      <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] font-light tracking-display text-balance text-foreground md:text-6xl">
        {title}
      </h2>
      <span
        className={cn('rule-gold mt-6 h-px w-24', align === 'center' ? 'mx-auto' : '')}
        aria-hidden="true"
      />
      {description && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  )
}

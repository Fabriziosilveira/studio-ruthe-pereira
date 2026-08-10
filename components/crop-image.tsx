import Image from 'next/image'
import { cn } from '@/lib/utils'

type StudioImageProps = {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function StudioImage({
  src,
  alt,
  className,
  priority = false,
}: StudioImageProps) {
  if (!src) return null

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden',
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        style={{
          objectPosition: 'center 15%',
        }}
      />
    </div>
  )
}
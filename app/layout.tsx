import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost, Inter } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Studio Ruthe Pereira | Cílios, Sobrancelhas e Estética em Jundiaí',
  description:
    'Studio de beleza em Jundiaí especializado em alongamento de cílios, lash lifting, design de sobrancelhas, brow lamination, micropigmentação nanofios, dermaplaning e epilação facial na linha.',
  keywords: [
    'alongamento de cílios Jundiaí',
    'lash lifting Jundiaí',
    'design de sobrancelhas',
    'brow lamination',
    'micropigmentação nanofios',
    'dermaplaning',
    'Studio Ruthe Pereira',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Studio Ruthe Pereira | Beleza e autoestima em Jundiaí',
    description:
      'Alongamento de cílios, lash lifting, sobrancelhas e estética facial em um ambiente acolhedor no Pq. Res. Eloy Chaves, Jundiaí SP.',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f5f1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={cn("light", "bg-background", cormorant.variable, jost.variable, "font-sans", inter.variable)}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-dm-serif' })

export const metadata: Metadata = {
  title: 'Rafael Lima — Desenvolvedor Full Stack Freelancer',
  description: 'Portfolio de Rafael Lima, desenvolvedor Full Stack freelancer especializado em criar produtos digitais completos, rápidos e memoráveis.',
  keywords: ['desenvolvedor full stack', 'freelancer', 'React', 'Next.js', 'TypeScript', 'desenvolvimento web'],
  authors: [{ name: 'Rafael Lima' }],
  openGraph: { title: 'Rafael Lima — Desenvolvedor Full Stack', description: 'Ideias transformadas em produtos que movem negócios.', type: 'website', locale: 'pt_BR' },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#111312', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${dmSans.variable} ${dmSerif.variable}`}><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

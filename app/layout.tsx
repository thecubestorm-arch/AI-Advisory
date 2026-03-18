import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'AI Advisory — KI-Beratung für KMUs',
  description:
    'Finde in 3 Minuten heraus, wie viel Potenzial dein Unternehmen durch AI noch ungenutzt lässt.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-sans bg-page text-white antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

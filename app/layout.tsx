import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "JC's Backyard | Learn How Food Grows | Kansas City",
  description: "Inspiring others to grow their own food and engage in their community by sharing food and knowledge. Join us in Kansas City to learn sustainable gardening practices.",
  keywords: ['community garden', 'gardening', 'sustainable food', 'Kansas City', 'grow your own food', 'composting', 'organic gardening'],
  authors: [{ name: "JC's Backyard" }],
  openGraph: {
    title: "JC's Backyard | Learn How Food Grows",
    description: "Inspiring others to grow their own food and engage in their community by sharing food and knowledge.",
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "JC's Backyard | Learn How Food Grows",
    description: "Inspiring others to grow their own food and engage in their community by sharing food and knowledge.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans antialiased bg-neutralLight text-neutral">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


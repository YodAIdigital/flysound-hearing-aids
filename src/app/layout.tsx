import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flysound Hearing Aids | Crystal Clear Sound, Discreet Design',
  description: 'Discover Flysound hearing aids — virtually invisible, all-day comfort, and crystal-clear sound. Try risk-free for 30 days. Rated 4.9★ by 50,000+ users.',
  keywords: 'hearing aids, hearing aids online, affordable hearing aids, discreet hearing aids, hearing loss solution',
  openGraph: {
    title: 'Flysound Hearing Aids | Crystal Clear Sound, Discreet Design',
    description: 'Discover Flysound hearing aids — virtually invisible, all-day comfort, and crystal-clear sound. Try risk-free for 30 days.',
    type: 'website',
    url: 'https://www.fly.clawpod.net',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
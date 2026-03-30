import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flysound Hearing Aids | Crystal Clear Sound, Discreet Design',
  description: 'Discover Flysound hearing aids — virtually invisible, all-day comfort, and crystal-clear sound. Try risk-free for 30 days.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
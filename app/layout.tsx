import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fly.clawpod.net'),
  title: {
    default: 'FlySound Hearing Aids | Hear Every Moment That Matters',
    template: '%s | FlySound Hearing Aids'
  },
  description: 'FlySound hearing aids use advanced digital technology to restore natural, crystal-clear sound. Discreet, comfortable, and affordable. Try risk-free for 60 days.',
  keywords: ['hearing aids', 'digital hearing aids', 'best hearing aids', 'affordable hearing aids', 'hearing loss solutions', 'invisible hearing aids'],
  openGraph: {
    type: 'website',
    siteName: 'FlySound Hearing Aids',
    locale: 'en_GB'
  },
  twitter: {
    card: 'summary_large_image'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-700 text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

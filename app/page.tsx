import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Features from '@/components/sections/Features';
import HowItWorksSnippet from '@/components/sections/HowItWorksSnippet';
import ProductsSnippet from '@/components/sections/ProductsSnippet';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'FlySound Hearing Aids | Hear Every Moment That Matters',
  description: 'FlySound hearing aids restore natural, crystal-clear sound with advanced digital technology. Discreet, comfortable, affordable. Free hearing assessment & 60-day trial.',
  alternates: { canonical: 'https://www.fly.clawpod.net' },
  openGraph: {
    title: 'FlySound Hearing Aids | Hear Every Moment That Matters',
    description: 'Restore your hearing with FlySound\'s award-winning digital hearing aids. Discreet, comfortable, and affordable.',
    url: 'https://www.fly.clawpod.net'
  }
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.fly.clawpod.net/#organization',
        name: 'FlySound Hearing Aids',
        url: 'https://www.fly.clawpod.net',
        description: 'Premium digital hearing aids that restore natural sound clarity',
        contactPoint: { '@type': 'ContactPoint', telephone: '0800-123-4567', contactType: 'customer service' }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.fly.clawpod.net/#website',
        url: 'https://www.fly.clawpod.net',
        name: 'FlySound Hearing Aids',
        publisher: { '@id': 'https://www.fly.clawpod.net/#organization' }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorksSnippet />
        <ProductsSnippet />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

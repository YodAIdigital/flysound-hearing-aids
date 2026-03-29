import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'How It Works | FlySound Hearing Aids',
  description: 'Getting better hearing with FlySound is simple. Book a free assessment, get fitted, and enjoy crystal-clear sound within days. Discover our simple 4-step process.',
  alternates: { canonical: 'https://www.fly.clawpod.net/how-it-works' }
};

const steps = [
  { step: '01', title: 'Free Hearing Assessment', description: 'Book your complimentary hearing assessment at one of our clinics or request an at-home visit. Our qualified audiologists use state-of-the-art equipment to map your unique hearing profile in under 30 minutes.' },
  { step: '02', title: 'Personalised Recommendation', description: 'Based on your hearing assessment, lifestyle, and budget, we recommend the perfect FlySound model for you. We explain every option clearly — no jargon, no pressure.' },
  { step: '03', title: 'Expert Fitting & Programming', description: 'Your hearing aids are precisely programmed to match your hearing profile. Our audiologist fits them comfortably and fine-tunes them on the spot. Most patients notice a difference immediately.' },
  { step: '04', title: '60-Day Risk-Free Trial', description: 'Take your new FlySound hearing aids home and live your life. If you are not completely satisfied within 60 days, return them for a full refund — no questions asked.' }
];

export default function HowItWorksPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Get FlySound Hearing Aids',
    description: 'A simple 4-step process to better hearing',
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.description
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main-content">
        <section className="bg-brand-dark text-white py-24">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Getting Better Hearing Has Never Been Easier</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">Four simple steps from assessment to crystal-clear sound — all supported by our expert audiologists.</p>
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="space-y-16">
              {steps.map((s, i) => (
                <div key={i} className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-brand-primary flex items-center justify-center">
                      <span className="text-3xl font-heading font-bold text-white">{s.step}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-4">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-4">{s.title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-padding bg-brand-light">
          <div className="container-max">
            <h2 className="text-3xl font-heading font-bold text-brand-dark text-center mb-12">Aftercare That Never Stops</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Annual Check-ups', desc: 'Free annual hearing reviews and device recalibrations for the lifetime of your device.' },
                { title: '3-Year Warranty', desc: 'All FlySound devices come with a comprehensive 3-year warranty covering parts and labour.' },
                { title: 'Priority Support', desc: 'Dedicated phone and email support, plus same-day clinic appointments when you need them.' }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-heading font-bold text-brand-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}

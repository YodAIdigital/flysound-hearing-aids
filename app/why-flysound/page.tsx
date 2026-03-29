import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Why Choose FlySound | FlySound Hearing Aids',
  description: 'Discover why thousands choose FlySound over other hearing aid brands. Award-winning technology, expert audiologists, 60-day trial, and lifetime aftercare support.',
  alternates: { canonical: 'https://www.fly.clawpod.net/why-flysound' }
};

const reasons = [
  { title: 'Award-Winning Technology', desc: 'Our hearing aids use the same digital signal processing technology as devices costing three times the price — we just make it accessible to everyone.' },
  { title: 'Qualified Audiologists', desc: 'Every assessment is conducted by a fully qualified, HCPC-registered audiologist. No sales pressure, no commissions — just honest, expert advice.' },
  { title: '60-Day Risk-Free Trial', desc: 'We are so confident you will love your FlySound hearing aids that we offer a full 60-day money-back guarantee. No hoops to jump through.' },
  { title: 'Lifetime Aftercare', desc: 'Our relationship does not end at the sale. Annual check-ups, free recalibrations, and priority support are included for as long as you wear FlySound.' },
  { title: 'Transparent Pricing', desc: 'No hidden fees, no confusing bundles. Every price includes fitting, programming, a full warranty, and 12 months of aftercare appointments.' },
  { title: 'Community & Support', desc: 'Join thousands of FlySound wearers in our community. Access tips, guides, and peer support from people who understand your journey.' }
];

export default function WhyFlyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-brand-dark text-white py-24">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Why Thousands Choose FlySound</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">We are not just another hearing aid company. We are on a mission to make exceptional hearing care available to everyone.</p>
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((r, i) => (
                <div key={i} className="bg-brand-light rounded-xl p-8">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center mb-4">
                    <span className="text-white font-bold font-heading">{i + 1}</span>
                  </div>
                  <h2 className="text-xl font-heading font-bold text-brand-dark mb-3">{r.title}</h2>
                  <p className="text-gray-600">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-padding bg-brand-primary text-white">
          <div className="container-max">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { num: '15,000+', label: 'Happy Customers' },
                { num: '98%', label: 'Satisfaction Rate' },
                { num: '4.9/5', label: 'Average Review' },
                { num: '60 Days', label: 'Risk-Free Trial' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-heading font-bold text-brand-accent mb-2">{stat.num}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

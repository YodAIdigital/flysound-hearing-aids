import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Hearing Aid Products | FlySound Hearing Aids',
  description: 'Explore the FlySound range: FlySound Air (BTE), FlySound Pro (ITE), and FlySound Nano (IIC). Advanced digital hearing aids for every lifestyle and budget.',
  alternates: { canonical: 'https://www.fly.clawpod.net/products' }
};

const products = [
  {
    name: 'FlySound Air',
    type: 'Behind-the-Ear (BTE)',
    tagline: 'Powerful. Reliable. All-Day Comfort.',
    price: 'From £699',
    description: 'The FlySound Air is our most powerful hearing aid, designed for moderate to severe hearing loss. With its discreet behind-the-ear design and up to 20 hours of battery life, you can wear it confidently from morning to night.',
    features: ['20-hour battery life', 'Bluetooth streaming', 'Automatic environment adjustment', 'IP68 water resistance', 'Tinnitus relief programme', '4 directional microphones'],
    badge: 'Most Popular'
  },
  {
    name: 'FlySound Pro',
    type: 'In-the-Ear (ITE)',
    tagline: 'Custom-Fitted. Naturally Discreet.',
    price: 'From £999',
    description: 'The FlySound Pro sits snugly inside your ear, custom-moulded to your exact ear canal shape. Its advanced noise cancellation technology makes conversations effortless even in busy environments.',
    features: ['Custom ear mould', 'Advanced noise cancellation', 'Wind noise reduction', 'Rechargeable option available', 'Mobile app control', '2-year warranty included'],
    badge: 'Best for Active Lifestyles'
  },
  {
    name: 'FlySound Nano',
    type: 'Invisible-in-Canal (IIC)',
    tagline: 'So Small, Nobody Knows It\'s There.',
    price: 'From £1,299',
    description: 'The FlySound Nano is virtually invisible when worn. Sitting deep in the ear canal, it delivers natural sound quality while remaining completely hidden. Perfect for those who want the benefits of hearing aids without anyone knowing.',
    features: ['Invisible when worn', 'Natural sound quality', 'Ultra-comfortable fit', 'No wind noise', 'Discreet daily removal', 'Suitable for mild to moderate loss'],
    badge: 'Most Discreet'
  }
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-brand-dark text-white py-24">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Find Your Perfect FlySound</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">Three expertly engineered hearing aids — each designed for different lifestyles, budgets, and levels of hearing loss.</p>
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid lg:grid-cols-3 gap-8">
              {products.map((product, i) => (
                <div key={i} className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full">{product.badge}</div>
                  )}
                  <div className="bg-brand-light p-8">
                    <span className="text-sm text-brand-primary font-semibold uppercase tracking-wide">{product.type}</span>
                    <h2 className="text-2xl font-heading font-bold text-brand-dark mt-1">{product.name}</h2>
                    <p className="text-brand-secondary font-medium mt-1">{product.tagline}</p>
                    <p className="text-2xl font-bold text-brand-dark mt-4">{product.price}</p>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <ul className="space-y-2 mb-8 flex-1">
                      {product.features.map((f, fi) => (
                        <li key={fi} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="w-5 h-5 rounded-full bg-brand-secondary flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a href="/contact" className="block text-center bg-brand-primary text-white py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors">Book Free Trial</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-padding bg-brand-light">
          <div className="container-max text-center">
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">Not Sure Which to Choose?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">Our audiologists will recommend the perfect model based on your hearing profile, lifestyle, and budget — at no cost or obligation.</p>
            <a href="/contact" className="inline-block bg-brand-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-dark transition-colors">Book Your Free Assessment</a>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}

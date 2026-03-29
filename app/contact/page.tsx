import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | FlySound Hearing Aids',
  description: 'Get in touch with FlySound. Book a free hearing assessment, ask a question, or find your nearest clinic. Call 0800 123 4567 or send us a message.',
  alternates: { canonical: 'https://www.fly.clawpod.net/contact' }
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'FlySound Hearing Aids',
    url: 'https://www.fly.clawpod.net',
    telephone: '0800-123-4567',
    email: 'hello@flysound.co.uk',
    address: { '@type': 'PostalAddress', addressCountry: 'GB' }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main-content">
        <section className="bg-brand-dark text-white py-24">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">We Are Here to Help You Hear Better</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">Book a free hearing assessment, ask a question, or find your nearest clinic. Our team is ready to help.</p>
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-8">Get in Touch</h2>
                <ContactForm />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-8">Contact Details</h2>
                <div className="space-y-6">
                  {[
                    { label: 'Freephone', value: '0800 123 4567', href: 'tel:08001234567' },
                    { label: 'Email', value: 'hello@flysound.co.uk', href: 'mailto:hello@flysound.co.uk' },
                    { label: 'Hours', value: 'Monday–Friday 9am–6pm, Saturday 9am–1pm', href: null }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-24 flex-shrink-0 text-sm font-semibold text-brand-primary uppercase tracking-wide pt-1">{item.label}</div>
                      <div>{item.href ? <a href={item.href} className="text-gray-700 hover:text-brand-primary transition-colors">{item.value}</a> : <span className="text-gray-700">{item.value}</span>}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 bg-brand-light rounded-xl p-6">
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-3">Free Home Visits Available</h3>
                  <p className="text-gray-600">Cannot make it to a clinic? Our audiologists can come to you. Home visits are available at no extra charge across most of the UK.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

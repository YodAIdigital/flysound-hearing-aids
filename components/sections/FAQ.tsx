const faqs = [
  { q: 'How do I know if I need a hearing aid?', a: 'Common signs include asking people to repeat themselves, struggling to follow conversations in noisy places, or turning the TV up louder than others prefer. A free hearing assessment will give you a definitive answer.' },
  { q: 'Will a hearing aid restore my hearing to normal?', a: 'Modern digital hearing aids dramatically improve hearing clarity, but they do not restore natural hearing. Most users, however, report feeling like their hearing is back to normal within a few weeks of wearing their device.' },
  { q: 'How long does a hearing aid last?', a: 'With proper care, FlySound hearing aids typically last 5–7 years. We provide a 3-year warranty and free annual servicing to keep your device in peak condition.' },
  { q: 'Are hearing aids covered by the NHS?', a: 'Basic hearing aids are available through the NHS. FlySound devices are private hearing aids offering more advanced technology, greater discretion, and more comprehensive aftercare than NHS options.' },
  { q: 'Can I try before I buy?', a: 'Absolutely. Every FlySound device comes with a 60-day risk-free trial. If you are not completely satisfied, return your hearing aids for a full refund — no questions asked.' }
];

export default function FAQ() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  return (
    <section className="section-padding bg-brand-light">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about hearing aids and the FlySound experience.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-heading font-bold text-brand-dark mb-3">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

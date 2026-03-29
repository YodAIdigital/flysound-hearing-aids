const testimonials = [
  { name: 'Margaret T., 72', location: 'Bristol', quote: 'I had been struggling with hearing loss for years and was nervous about trying hearing aids. FlySound made the whole process so easy. The difference is incredible — I can hear my grandchildren clearly again.' },
  { name: 'David R., 58', location: 'Manchester', quote: 'As someone who works in a busy office, I needed something discreet and powerful. The FlySound Pro is exactly that. Nobody even knows I am wearing them, and I follow every conversation without effort.' },
  { name: 'Patricia L., 65', location: 'Edinburgh', quote: 'The audiologist was brilliant — no pressure, just genuine expert advice. I tried three different models before finding the perfect fit. The 60-day trial gave me complete peace of mind.' }
];

export default function Testimonials() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: testimonials.map((t, i) => ({
      '@type': 'Review',
      position: i + 1,
      reviewBody: t.quote,
      author: { '@type': 'Person', name: t.name }
    }))
  };

  return (
    <section className="section-padding bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">Real People. Real Results.</h2>
          <p className="text-lg text-gray-600">Over 15,000 customers have reclaimed the sounds that matter most.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-brand-light rounded-xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, si) => (
                  <svg key={si} className="w-5 h-5 text-brand-accent fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <blockquote className="text-gray-700 italic mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
              <div>
                <p className="font-semibold text-brand-dark">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

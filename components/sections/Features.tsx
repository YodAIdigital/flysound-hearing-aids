const features = [
  { title: 'Crystal-Clear Sound', desc: 'Advanced digital signal processing separates speech from background noise so conversations feel effortless, whether you are in a quiet room or a busy restaurant.' },
  { title: 'Invisible Design', desc: 'Our discreet range includes options so small they sit completely inside your ear canal — completely invisible to others, completely comfortable for you.' },
  { title: 'All-Day Comfort', desc: 'Lightweight, ergonomically designed devices that you will forget you are wearing. Custom fittings ensure a snug, secure fit for every ear shape.' },
  { title: 'Smart Connectivity', desc: 'Stream music, calls, and TV audio directly to your hearing aids via Bluetooth. Control settings discreetly from your smartphone.' },
  { title: 'Long Battery Life', desc: 'Up to 20 hours on a single charge or battery change. Our rechargeable models are fully powered from a 4-hour overnight charge.' },
  { title: 'Lifetime Support', desc: 'Annual check-ups, free recalibrations, 3-year warranty, and a dedicated support team — included with every FlySound device, forever.' }
];

export default function Features() {
  return (
    <section className="section-padding bg-brand-light">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">Technology Designed Around Your Life</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Every FlySound hearing aid is engineered to deliver the clearest possible sound with the least possible fuss.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-brand-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

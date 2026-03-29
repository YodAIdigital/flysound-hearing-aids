import Link from 'next/link';

const steps = [
  { num: '1', title: 'Free Assessment', desc: 'Book a complimentary hearing assessment with one of our qualified audiologists.' },
  { num: '2', title: 'Expert Recommendation', desc: 'We recommend the perfect device for your hearing profile, lifestyle, and budget.' },
  { num: '3', title: 'Precise Fitting', desc: 'Your hearing aids are programmed and fitted. Most patients notice a difference immediately.' },
  { num: '4', title: '60-Day Trial', desc: 'Take them home risk-free. Love them or return them for a full refund.' }
];

export default function HowItWorksSnippet() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">Better hearing in four simple steps. The whole process takes less than a week.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold text-white">{s.num}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute translate-x-32 -translate-y-10 w-16 h-0.5 bg-brand-primary/30" />
              )}
              <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/how-it-works" className="inline-block border-2 border-brand-primary text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-brand-primary hover:text-white transition-colors">
            Learn More About the Process
          </Link>
        </div>
      </div>
    </section>
  );
}

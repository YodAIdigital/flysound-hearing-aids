import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-brand-primary text-white py-20">
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
          Ready to Hear the World Again?
        </h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
          Book your free, no-obligation hearing assessment today. Our qualified audiologists will help you find the perfect solution — with no pressure and no hidden costs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-brand-accent hover:bg-yellow-500 text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors">
            Book Free Assessment
          </Link>
          <a href="tel:08001234567" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors">
            Call 0800 123 4567
          </a>
        </div>
        <p className="mt-6 text-blue-200 text-sm">60-day money-back guarantee &bull; No obligation &bull; HCPC registered audiologists</p>
      </div>
    </section>
  );
}

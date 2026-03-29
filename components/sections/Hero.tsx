import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand-dark via-brand-primary to-brand-secondary text-white py-24 md:py-32">
      <div className="container-max">
        <div className="max-w-3xl">
          <span className="inline-block bg-brand-accent text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            60-Day Risk-Free Trial
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
            Hear Every Moment<br />That Matters
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
            FlySound hearing aids use advanced digital technology to restore natural, crystal-clear sound — so you never miss a conversation, a laugh, or a memory again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-brand-accent hover:bg-yellow-500 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors text-center">
              Book Free Assessment
            </Link>
            <Link href="/products" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors text-center">
              Explore Products
            </Link>
          </div>
          <p className="mt-6 text-blue-200 text-sm">No obligation &bull; Free home visits available &bull; HCPC registered audiologists</p>
        </div>
      </div>
    </section>
  );
}

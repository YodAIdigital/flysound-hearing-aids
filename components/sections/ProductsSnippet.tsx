import Link from 'next/link';

const products = [
  { name: 'FlySound Air', type: 'Behind-the-Ear', price: 'From £699', tagline: 'Powerful all-day performance', badge: 'Most Popular' },
  { name: 'FlySound Pro', type: 'In-the-Ear', price: 'From £999', tagline: 'Custom-fitted & naturally discreet', badge: '' },
  { name: 'FlySound Nano', type: 'Invisible-in-Canal', price: 'From £1,299', tagline: 'Completely invisible when worn', badge: 'Most Discreet' }
];

export default function ProductsSnippet() {
  return (
    <section className="section-padding bg-brand-light">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">Our Hearing Aid Range</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">Three expertly engineered options to suit every lifestyle and level of hearing loss.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              {p.badge && (
                <div className="absolute top-4 right-4 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full">{p.badge}</div>
              )}
              <div className="h-48 bg-gradient-to-br from-brand-primary to-brand-secondary" />
              <div className="p-6">
                <span className="text-xs text-brand-primary font-semibold uppercase tracking-wide">{p.type}</span>
                <h3 className="text-xl font-heading font-bold text-brand-dark mt-1">{p.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{p.tagline}</p>
                <p className="text-2xl font-bold text-brand-dark mt-3">{p.price}</p>
                <Link href="/products" className="mt-4 block text-center bg-brand-primary text-white py-2.5 rounded-lg font-semibold hover:bg-brand-dark transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/products" className="inline-block border-2 border-brand-primary text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-brand-primary hover:text-white transition-colors">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

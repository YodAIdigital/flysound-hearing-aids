const stats = [
  { value: '15,000+', label: 'Happy Customers' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '4.9 / 5', label: 'Average Review Score' },
  { value: '60 Days', label: 'Risk-Free Trial' }
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-12" aria-label="Trust indicators">
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-heading font-bold text-brand-primary">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

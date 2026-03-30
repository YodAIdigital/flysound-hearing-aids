'use client'

const features = [
  {
    icon: '🔊',
    title: 'Crystal Clear Sound',
    description: 'Advanced digital processing separates speech from background noise, so you hear conversations clearly even in crowded restaurants.',
  },
  {
    icon: '👁️',
    title: 'Virtually Invisible',
    description: 'Sleek, discreet design sits comfortably inside your ear. Most people won\'t even notice you\'re wearing them.',
  },
  {
    icon: '🔋',
    title: 'All-Day Battery',
    description: '18+ hours of battery life on a single charge. No more fumbling with tiny button batteries.',
  },
  {
    icon: '👆',
    title: 'One-Touch Control',
    description: 'Simple, intuitive controls. Adjust volume or switch modes with a single tap.',
  },
  {
    icon: '🧠',
    title: 'Smart Adaptation',
    description: 'Automatically adjusts to your environment — whether you\'re in a quiet room or a bustling café.',
  },
  {
    icon: '☁️',
    title: 'Comfort Fit',
    description: 'Ergonomic design with soft silicone tips in multiple sizes for all-day wear without irritation.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why 50,000+ People Choose Flysound
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
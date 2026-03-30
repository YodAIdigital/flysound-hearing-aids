'use client'

const plans = [
  {
    name: 'Flysound Core',
    price: '$599',
    period: '/pair',
    features: [
      'Crystal clear sound',
      '12hr battery life',
      '3 sound modes',
      'Standard fit',
    ],
    highlight: false,
  },
  {
    name: 'Flysound Pro',
    price: '$899',
    period: '/pair',
    features: [
      'Advanced noise cancellation',
      '18hr battery life',
      '5 sound modes',
      'Bluetooth streaming',
      'Custom fit',
    ],
    highlight: true,
  },
  {
    name: 'Flysound Elite',
    price: '$1,299',
    period: '/pair',
    features: [
      'Premium sound processing',
      '24hr battery life',
      '7 sound modes',
      'Bluetooth + app control',
      'Telehealth support',
      'Premium fit case',
    ],
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium Hearing, Fair Price
          </h2>
          <p className="text-gray-600">All models include: 30-day trial • 2-year warranty • Free shipping • Lifetime support</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlight
                  ? 'bg-primary-600 text-white ring-4 ring-primary-300 scale-105'
                  : 'bg-gray-50'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.highlight ? 'text-primary-100' : 'text-gray-500'}>{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2">
                    <svg className={`w-5 h-5 ${plan.highlight ? 'text-primary-200' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={plan.highlight ? 'text-primary-100' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`block text-center py-3 px-6 rounded-full font-semibold ${
                  plan.highlight
                    ? 'bg-white text-primary-600 hover:bg-primary-50'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                } transition-colors`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
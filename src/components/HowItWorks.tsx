'use client'

const steps = [
  {
    number: '1',
    title: 'Take Our Hearing Quiz',
    description: 'Answer a few questions about your hearing experience. Takes 3 minutes.',
  },
  {
    number: '2',
    title: 'Get Your Personalized Recommendation',
    description: 'We\'ll match you with the right Flysound model for your needs and budget.',
  },
  {
    number: '3',
    title: 'Try Risk-Free for 30 Days',
    description: 'Wear them everywhere. If you\'re not thrilled, return them for a full refund.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple as 1-2-3
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
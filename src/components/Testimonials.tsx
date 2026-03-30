'use client'

const testimonials = [
  {
    quote: 'I forgot I was wearing them. My wife had to remind me to take them out at bedtime!',
    author: 'Robert M.',
    age: '68',
    location: 'Denver, CO',
  },
  {
    quote: 'For the first time in years, I heard my granddaughter\'s whisper. That alone was worth every penny.',
    author: 'Patricia L.',
    age: '72',
    location: 'Austin, TX',
  },
  {
    quote: 'I tried hearing aids that cost $5,000. Flysound works just as well for a fraction of the price.',
    author: 'James K.',
    age: '65',
    location: 'Seattle, WA',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real People, Real Results
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">{testimonial.author}, {testimonial.age}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
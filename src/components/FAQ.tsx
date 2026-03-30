'use client'

const faqs = [
  {
    question: 'Will hearing aids work for my type of hearing loss?',
    answer: 'Flysound hearing aids are designed for mild to moderate hearing loss, which covers 80% of cases. Take our 3-minute quiz to see if they\'re right for you.',
  },
  {
    question: 'How discreet are they really?',
    answer: 'Flysound devices are smaller than a dime and come in skin-tone colors. Most users report that even close family members don\'t notice them.',
  },
  {
    question: 'What if they don\'t work for me?',
    answer: 'We offer a 30-day, no-questions-asked return policy. If you\'re not completely satisfied, return them for a full refund.',
  },
  {
    question: 'Do I need a prescription or hearing test?',
    answer: 'No prescription required. Our online hearing quiz helps determine if Flysound is right for you, and our audiologists are available for telehealth consultations.',
  },
  {
    question: 'How long does the battery last?',
    answer: 'Depending on the model, 12-24 hours on a single charge. All models use convenient magnetic charging cases — just drop them in at night.',
  },
  {
    question: 'What\'s included?',
    answer: 'Every order includes your hearing aids, charging case, multiple ear tip sizes, cleaning kit, and access to our lifetime support team.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
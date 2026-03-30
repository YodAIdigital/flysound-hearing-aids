'use client'

export function FinalCTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Start Hearing What You've Been Missing
        </h2>
        <p className="text-xl text-primary-100 mb-8">
          Join 50,000+ people who've rediscovered the joy of clear hearing. Try Flysound risk-free for 30 days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 rounded-full transition-all shadow-lg">
            Take the Free Hearing Quiz
          </a>
          <a href="tel:1-800-FLY-SOUND" className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-semibold py-4 px-8 rounded-full transition-all">
            Call Us: 1-800-FLY-SOUND
          </a>
        </div>
      </div>
    </section>
  )
}
'use client'

export function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hear Every Moment, <span className="text-primary-600">Live Every Moment</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Flysound hearing aids deliver crystal-clear sound, all-day comfort, and discreet design — so you never miss the conversations that matter most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cta" className="btn-primary text-center">Start Your Free Trial</a>
              <a href="#how-it-works" className="btn-secondary text-center">Learn More</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <svg className="w-16 h-16 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
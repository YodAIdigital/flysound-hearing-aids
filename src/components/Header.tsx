'use client'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">Flysound</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-primary-600 transition-colors">FAQ</a>
          </nav>
          <a href="#cta" className="btn-primary text-sm py-2 px-6">Start Free Trial</a>
        </div>
      </div>
    </header>
  )
}
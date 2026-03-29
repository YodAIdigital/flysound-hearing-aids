import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-max py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-heading font-bold">FlySound</span>
            </div>
            <p className="text-blue-200 max-w-sm">Premium digital hearing aids that restore natural sound clarity. Making exceptional hearing care accessible to everyone.</p>
            <p className="mt-4 text-brand-accent font-semibold">0800 123 4567</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Pages</h3>
            <ul className="space-y-2">
              {[['/', 'Home'], ['/how-it-works', 'How It Works'], ['/products', 'Products'], ['/why-flysound', 'Why FlySound'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-blue-200 hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {[['#', 'Privacy Policy'], ['#', 'Terms of Service'], ['#', 'Cookie Policy']].map(([href, label], i) => (
                <li key={i}><Link href={href} className="text-blue-200 hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm text-blue-200">Registered in England & Wales</p>
              <p className="text-sm text-blue-200">HCPC Registered Audiologists</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} FlySound Hearing Aids. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

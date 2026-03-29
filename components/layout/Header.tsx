import Link from 'next/link';
import MobileMenu from './MobileMenu';

const navLinks = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/products', label: 'Products' },
  { href: '/why-flysound', label: 'Why FlySound' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2" aria-label="FlySound Home">
            <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-heading font-bold text-brand-dark">FlySound</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-gray-700 hover:text-brand-primary font-medium transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:08001234567" className="text-brand-primary font-semibold hover:text-brand-dark transition-colors">0800 123 4567</a>
            <Link href="/contact" className="bg-brand-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-brand-dark transition-colors">
              Free Assessment
            </Link>
          </div>
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}

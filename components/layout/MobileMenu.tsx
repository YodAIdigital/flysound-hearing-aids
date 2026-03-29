'use client';
import { useState } from 'react';
import Link from 'next/link';

interface NavLink { href: string; label: string; }

export default function MobileMenu({ navLinks }: { navLinks: NavLink[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} className="p-2 text-gray-700 hover:text-brand-primary" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        )}
      </button>
      {open && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-50">
          <nav className="container-max py-6 flex flex-col gap-4" aria-label="Mobile navigation">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-lg text-gray-700 hover:text-brand-primary font-medium py-2 border-b border-gray-100" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 bg-brand-primary text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors" onClick={() => setOpen(false)}>
              Book Free Assessment
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

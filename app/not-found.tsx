import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-brand-light">
        <div className="text-center px-4">
          <h1 className="text-6xl font-heading font-bold text-brand-primary mb-4">404</h1>
          <h2 className="text-2xl font-heading text-brand-dark mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
          <Link href="/" className="bg-brand-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors">
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

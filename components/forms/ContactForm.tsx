'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-brand-secondary/10 border border-brand-secondary rounded-xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-secondary flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">Message Sent!</h3>
        <p className="text-gray-600">Thank you for getting in touch. We will contact you within one business day to arrange your free hearing assessment.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
          <input id="firstName" name="firstName" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
          <input id="lastName" name="lastName" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
        <input id="email" name="email" type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input id="phone" name="phone" type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent" />
      </div>
      <div>
        <label htmlFor="enquiry" className="block text-sm font-medium text-gray-700 mb-1">How can we help? <span className="text-red-500">*</span></label>
        <select id="enquiry" name="enquiry" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent">
          <option value="">Please select...</option>
          <option value="assessment">Book a free hearing assessment</option>
          <option value="products">Ask about products</option>
          <option value="pricing">Pricing enquiry</option>
          <option value="support">Aftercare support</option>
          <option value="other">Other enquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea id="message" name="message" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none" />
      </div>
      <button type="submit" disabled={loading} className="w-full bg-brand-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-brand-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

import React from 'react';
import CustomerRequestForm from './CustomerRequestForm';
import CookRegistrationForm from './CookRegistrationForm';

export default function CustomerInquiryPage({ onClose }) {
  return (
    <div className="min-h-screen bg-[#FAF9F5] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">Cook Service Inquiry</p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-serif text-slate-900 font-bold">Submit your cook request</h1>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-300 bg-orange-500 px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-orange-600"
          >
            Back to Home
          </button>
        </div>
          <CustomerRequestForm />
        </div>
    </div>
  );
}

import React from 'react'
import CookRegistrationForm from './CookRegistrationForm'

export default function CookRegistrationPage({ onClose }) {
  return (
    <div className="min-h-screen bg-[#FAF9F5] py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">Cook Registration</p>
            <h1 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 font-bold">Apply to Join as a Cook</h1>
            <p className="mt-2 text-sm text-slate-600">Fill in your details and upload documents. We'll review and contact you.</p>
          </div>
          <div>
            <button
              onClick={onClose}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Back
            </button>
          </div>
        </div>

        <CookRegistrationForm />
      </div>
    </div>
  )
}

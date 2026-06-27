import React, { useState } from 'react';
import { toast } from "react-toastify";

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function CustomerRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    serviceRequirement: '',
    additionalNotes: '',
  });
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

const handleSubmit = async (event) => {
event.preventDefault();
const nameRegex = /^[A-Za-z ]{3,50}$/;
const phoneRegex = /^[6-9]\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!nameRegex.test(formData.name.trim())) {
  return toast.error("Please enter a valid name (3-50 letters).");
}

if (
  !phoneRegex.test(formData.contact.trim()) &&
  !emailRegex.test(formData.contact.trim())
) {
  return toast.error("Please enter a valid phone number or email address.");
}

if (formData.location.trim().length < 3) {
  return toast.error("Please enter a valid location.");
}

if (formData.serviceRequirement.trim().length < 5) {
  return toast.error("Please describe the service requirement.");
}

if (
  formData.additionalNotes &&
  formData.additionalNotes.trim().length > 500
) {
  return toast.error("Additional notes cannot exceed 500 characters.");
}

setStatus({
  loading: true,
  success: null,
  message: "",
});
    setStatus({ loading: true, success: null, message: '' });

    try {
      const response = await fetch(`${apiUrl}/api/requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Unable to submit your request. Please try again.');
      }
      toast.success("Request submitted successfully! We will contact you soon.");
      setStatus({
        loading: false,
        success: true,
        message: '',
      });
      setFormData({
        name: '',
        contact: '',
        location: '',
        serviceRequirement: '',
        additionalNotes: '',
      });
    } catch (error) {
      toast.error(error.message || "Unable to submit your request. Please try again.");

      setStatus({
        loading: false,
        success: false,
        message: "",
      });
    }
  };

  return (
    <section className="bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.14),_transparent_28%),_radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.1),_transparent_28%),_white] rounded-[2rem] shadow-[0_30px_80px_rgba(15,23,42,0.08)] border border-slate-200 mt-10 p-4 sm:p-6 lg:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-5 lg:pr-8">
            <div className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-700 shadow-sm shadow-amber-200/60">
              Request a Cook
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 font-bold leading-tight">
                Book cook services for your home or event
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl leading-7">
                Share your requirements and we will connect you with the best verified cook in your area.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
                <p className="text-sm text-slate-500">Fast response</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">Within 24 hours</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
                <p className="text-sm text-slate-500">Trusted cooks</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">Verified & reviewed</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white border border-slate-200 p-5 shadow-xl sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Full Name</span>
                  <input
                    type="text"
                    value={formData.name}
                    maxLength={50}
                    onChange={(e) => updateField("name", e.target.value.replace(/^\s+/, ""))}
                    required
                    placeholder="Your name"
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Contact Info</span>
                  <input
                    type="text"
                    value={formData.contact}
                    maxLength={100}
                    onChange={(e) => updateField("contact", e.target.value.replace(/^\s+/, ""))}
                    required
                    placeholder="Email or phone"
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Location</span>
                  <input
                    type="text"
                    value={formData.location}
                    maxLength={100}
                    onChange={(e) => updateField("location", e.target.value.replace(/^\s+/, ""))}
                    required
                    placeholder="City, street, or neighbourhood"
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Service Requirement</span>
                  <input
                    type="text"
                    value={formData.serviceRequirement}
                    maxLength={100}
                    onChange={(e) => updateField("serviceRequirement", e.target.value.replace(/^\s+/, ""))}
                    required
                    placeholder="Daily cook, event catering, tiffin service"
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Additional Notes</span>
                <textarea
                  rows="5"
                  value={formData.additionalNotes}
                  maxLength={500}
                  onChange={(e) => updateField("additionalNotes", e.target.value.replace(/^\s+/, ""))}
                  placeholder="Any dietary needs, preferred cuisine, timing, or budget"
                  className="mt-2 w-full rounded-[1.75rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                />
              </label>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-amber-700 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {status.loading ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

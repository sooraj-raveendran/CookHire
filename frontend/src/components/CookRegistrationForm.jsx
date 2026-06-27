import React, { useState } from 'react';
import { toast } from "react-toastify";

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function CookRegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    experience: '',
    cuisineSpecialization: '',
    workType: '',
    preferredLocation: '',
    notes: '',
    honeypot: '',
  });
  const [files, setFiles] = useState({ profilePhoto: null, document: null });
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleFile = (e) => {
  const { name, files } = e.target;

  if (!files.length) return;

  const file = files[0];

  if (name === "profilePhoto") {
    if (!file.type.startsWith("image/")) {
      toast.error("Profile photo must be an image.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Profile photo should be less than 2 MB.");
      return;
    }
  }

  if (name === "document") {
    const allowed = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/jpg",
    ];

    if (!allowed.includes(file.type)) {
      toast.error("Document must be PDF, JPG or PNG.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Document should be less than 5 MB.");
      return;
    }
  }

  setFiles((prev) => ({
    ...prev,
    [name]: file,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  const phoneRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const name = form.name.trim();
  const contact = form.contact.trim();
  const location = form.preferredLocation.trim();

  if (name.length < 3 || name.length > 50) {
    return toast.error("Name must be between 3 and 50 characters.");
  }

  if (!nameRegex.test(name)) {
    return toast.error("Name should contain only letters and spaces.");
  }

  if (!phoneRegex.test(contact) && !emailRegex.test(contact)) {
    return toast.error("Enter a valid phone number or email.");
  }

  if (form.experience !== "") {
    const exp = Number(form.experience);

    if (isNaN(exp) || exp < 0 || exp > 60) {
      return toast.error("Experience should be between 0 and 60 years.");
    }
  }

  if (location && location.length < 3) {
    return toast.error("Preferred location is too short.");
  }

  if (form.notes.length > 500) {
    return toast.error("Notes cannot exceed 500 characters.");
  }

  if (!files.profilePhoto) {
    return toast.error("Please upload your profile photo.");
  }

  if (!files.document) {
    return toast.error("Please upload your ID document.");
  }

  setStatus({
    loading: true,
    success: null,
    message: "",
  });


    try {
      const payload = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        payload.append(
          key,
          typeof value === "string" ? value.trim() : value
        );
      });
      if (files.profilePhoto) payload.append('profilePhoto', files.profilePhoto);
      if (files.document) payload.append('document', files.document);

      const res = await fetch(`${apiUrl}/api/cooks`, { method: 'POST', body: payload });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Submission failed');
      toast.success("Registration submitted successfully!");
      setStatus({ loading: false, success: true, message: '' });
      setForm({ name: '', contact: '', experience: '', cuisineSpecialization: '', workType: '', preferredLocation: '', notes: '', honeypot: '' });
      setFiles({ profilePhoto: null, document: null });
    } catch (err) {
      toast.error(err.message || "Submission failed!");
      setStatus({ loading: false, success: false, message: "" });
    }
  };

  return (
    <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10 mt-8">
      <h2 className="text-2xl font-serif font-bold">Cook Registration</h2>
      <p className="text-sm text-slate-600 mt-2">Apply to join our network of verified cooks.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium">Full name</span>
            <input
              value={form.name}
              maxLength={50}
              placeholder='Enter your name'
              onChange={(e) => update("name", e.target.value.replace(/^\s+/, ""))}
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Contact (phone or email)</span>
          <input
            value={form.contact}
            maxLength={100}
            placeholder='Enter your contact info'
            onChange={(e) => update("contact", e.target.value.replace(/^\s+/, ""))}
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium">Experience (years)</span>
            <input value={form.experience}
             onChange={(e) => update('experience', e.target.value)} 
             type="number" min="0" 
             placeholder='Enter years of experience'
             className="mt-1 w-full rounded-md border px-3 py-2" 
             />
          
          </label>

          <label className="block">
            <span className="text-sm font-medium">Cuisine specialization</span>
            <input
              value={form.cuisineSpecialization}
              maxLength={100}
              placeholder='Enter your specialization'
              onChange={(e) =>
                update("cuisineSpecialization", e.target.value.replace(/^\s+/, ""))
              }
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium">Preferred work type</span>
            <select value={form.workType} onChange={(e) => update('workType', e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2">
              <option value="">Select</option>
              <option>Full time</option>
              <option>Part time</option>
              <option>Per event</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium">Preferred location</span>
            <input
              value={form.preferredLocation}
              maxLength={100}
              placeholder='Enter your preferred location'
              onChange={(e) =>
                update("preferredLocation", e.target.value.replace(/^\s+/, ""))
              }
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-medium">Notes</span>
          <textarea
            value={form.notes}
            maxLength={500}
            placeholder='Any additional information'
            onChange={(e) => update("notes", e.target.value.replace(/^\s+/, ""))}
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </label>

        {/* honeypot for spam */}
        <input type="text" name="honeypot" value={form.honeypot} onChange={(e) => update('honeypot', e.target.value)} style={{ display: 'none' }} />

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium">Profile photo (jpg/png)</span>
            <input name="profilePhoto" type="file" accept="image/*" onChange={handleFile} className="mt-1 w-full border" />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Document (ID/proof) (pdf/jpg/png)</span>
            <input name="document" type="file" accept="image/*,.pdf" onChange={handleFile} className="mt-1 w-full border" />
          </label>
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className="w-full bg-amber-600 text-white py-2 rounded-full disabled:opacity-50"
        >
        {status.loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </section>
  );
}


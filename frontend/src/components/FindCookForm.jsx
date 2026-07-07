import React, { useState } from 'react';

export default function FindCookForm({ onClose, onSuccess }) {

  const API_URL = import.meta.env.VITE_API_URL;
  
  const [formData, setFormData] = useState({
    fullName: '',
    location: '',
    mobileNumber: '',
    email: '',
    foodPreference: '',
    mealsRequired: '',
    genderPreference: '',
    familySize: '',
    additionalRequirements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(`${API_URL}/api/requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      onSuccess();
    } else {
      alert(data.message || "Something went wrong");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Server error");
  }
};

  return (
    <>
    <div className="relative w-full max-w-3xl h-[90vh] bg-[#f4f5f4] rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col">
        {/* Close Button */}
        <div className="relative bg-[#1B5C52] rounded-t-2xl text-white px-8 pt-8 pb-6 flex-shrink-0 sm:rounded-t-3xl">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-6 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-xl hover:bg-white/10"
          >
            &times;
          </button>

          <h2 className="text-2xl font-semibold">
            Find My Perfect Cook
          </h2>

          <p className="text-sm text-[#b3cbbd]">
            Tell us what you need we'll match you within 2 hours
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-[#FAFAF7] overflow-y-auto p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-6">
            
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-zinc-500 mb-1">Full Name *</label>
              <input
                type="text"
                name="fullName"
                placeholder='Vineeth Babu'
                value={formData.fullName}
                onChange={handleChange}
                required
                className="bg-transparent px-2 border rounded-2xl border-zinc-300 py-3 text-[15px] font-medium text-zinc-800 outline-none focus:border-[#0e3020] transition-colors"
              />
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-zinc-500 mb-1">Location *</label>
              <div className="relative">
                <select
                  name="location"
                  placeholder='Select Location'
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent px-2 border rounded-2xl border-zinc-300 py-3 text-[15px] font-medium text-zinc-800 outline-none focus:border-[#0e3020] appearance-none cursor-pointer pr-5 transition-colors"
                >
                  <option value="">Select Location</option>
                  <option value="Adyar">Adyar</option>
                  <option value="Anna Nagar">Anna Nagar</option>
                  <option value="Besant Nagar">Besant Nagar</option>
                  <option value="Chromepet">Chromepet</option>
                  <option value="Guindy">Guindy</option>
                  <option value="Kilpauk">Kilpauk</option>
                  <option value="Mylapore">Mylapore</option>
                  <option value="Nungambakkam">Nungambakkam</option>
                  <option value="OMR">OMR</option>
                  <option value="Perambur">Perambur</option>
                  <option value="Porur">Porur</option>
                  <option value="Sholingallur">Sholingallur</option>
                  <option value="T.Nagar">T.Nagar</option>
                  <option value="Tambaram">Tambaram</option>
                  <option value="Velachery">Velachery</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 text-zinc-500 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-zinc-500 mb-1">Mobile Number *</label>
              <input
                type="tel"
                name="mobileNumber"
                placeholder='+91 89XXXXXXXX'
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                className="bg-transparent px-2 border rounded-2xl border-zinc-300 py-3 text-[15px] font-medium text-zinc-800 outline-none focus:border-[#0e3020] transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-zinc-500 mb-1">Email Address (Optional)</label>
              <input
                type="email"
                name="email"
                placeholder='vineeth@gmail.com'
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent px-2 border rounded-2xl border-zinc-300 py-3 text-[15px] font-medium text-zinc-800 outline-none focus:border-[#0e3020] transition-colors"
              />
            </div>

            {/* Food Preference */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-zinc-500 mb-1">Food Preference *</label>
              <div className="relative">
                <select
                  name="foodPreference"
                  value={formData.foodPreference}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent px-2 border rounded-2xl border-zinc-300 py-3 text-[15px] font-medium text-zinc-800 outline-none focus:border-[#0e3020] appearance-none cursor-pointer pr-5 transition-colors"
                >
                  <option value="">Select</option>
                  <option value="Non-veg">Non-veg</option>
                  <option value="Veg">Veg</option>
                  <option value="Both">Both</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 text-zinc-500 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Meals Required */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-zinc-500 mb-1">Meals Required *</label>
              <div className="relative">
                <select
                  name="mealsRequired"
                  value={formData.mealsRequired}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent px-2 border rounded-2xl border-zinc-300 py-3 text-[15px] font-medium text-zinc-800 outline-none focus:border-[#0e3020] appearance-none cursor-pointer pr-5 transition-colors"
                >
                  <option value="">Select</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="All Meals">All Meals</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 text-zinc-500 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Preferred Gender */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-zinc-500 mb-1">Preferred Gender *</label>
              <div className="relative">
                <select
                  name="genderPreference"
                  value={formData.genderPreference}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent px-2 border rounded-2xl border-zinc-300 py-3 text-[15px] font-medium text-zinc-800 outline-none focus:border-[#0e3020] appearance-none cursor-pointer pr-5 transition-colors"
                ><option value="">Select</option>
                  <option value="No Preference">No Preference</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 text-zinc-500 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Family Size */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-zinc-500 mb-1">Family Size *</label>
              <div className="relative">
                <select
                  name="familySize"
                  value={formData.familySize}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent px-2 border rounded-2xl border-zinc-300 py-3 text-[15px] font-medium text-zinc-800 outline-none focus:border-[#0e3020] appearance-none cursor-pointer pr-5 transition-colors"
                ><option value="">Select</option>
                  <option value="1-2">1-2</option>
                  <option value="3-5">3-5</option>
                  <option value="6+">6+</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 text-zinc-500 text-xs">
                  ▼
                </div>
              </div>
            </div>

          </div>

          {/* Additional Requirements Textarea */}
          <div className="flex flex-col mt-2 sm:col-span-2">
            <label className="text-xs font-medium text-zinc-500 mb-2">Additional Requirements</label>
            <textarea
              name="additionalRequirements"
              value={formData.additionalRequirements}
              onChange={handleChange}
              placeholder="Please share your cooking requirements in detail to help us find the most suitable cook. You can mention your preferred cuisine, meal timings, family size, dietary preferences, kitchen cleaning expectations, language preference, gender preference, experience required, or any other special requests such as baby food, diabetic meals, elderly care meals, low-oil cooking, festival cooking, or immediate joining."
              className="bg-transparent p-2 border rounded-2xl border-zinc-300 py-2 text-xs leading-relaxed text-zinc-600 outline-none focus:border-[#0e3020] resize-none h-28 placeholder-zinc-400 transition-colors"
            />
          </div>

          {/* Action Button */}
          {/* Action Button */}
<div className="mt-6 flex justify-center sm:justify-end">
  <button
    type="submit"
    className="
      w-[90%] sm:w-auto
      bg-[#FF9D1B] sm:bg-[#1B5C52]
      hover:bg-[#E68A00] sm:hover:bg-[#173b2a]
      text-white
      py-3 px-7
      font-semibold text-sm
      rounded-lg
      shadow-sm
      transition-colors duration-200
    "
  >
    Find a Cook
  </button>
</div>
        </form>

      </div>
    </>
  );
}
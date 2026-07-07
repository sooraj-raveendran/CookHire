import { useState, useEffect } from "react";
import { User } from "lucide-react";

export default function PersonalStep({ formData, setFormData }) {
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (formData.photo) {
      setPreview(URL.createObjectURL(formData.photo));
    }
  }, [formData.photo]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData({
      ...formData,
      photo: file,
    });

    setPreview(URL.createObjectURL(file));
  };

  return (
    <div>

      {/* Upload Photo */}

      <div className="flex flex-col items-center mb-8">

        <label className="cursor-pointer">

          <div className="w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center overflow-hidden shadow-sm hover:border-orange-400 transition">

            {preview ? (
              <img
                src={preview}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <User
                size={42}
                className="text-gray-400"
              />
            )}

          </div>

          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImage}
          />

        </label>

        <p className="font-medium text-sm mt-3">
          Upload Photo
        </p>

        <p className="text-xs text-gray-400">
          Clear face photo required
        </p>

      </div>

      {/* Form */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Full Name */}

        <div>

          <label className="text-sm font-medium">
            Full Name *
          </label>

          <input
            type="text"
            name="fullName"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-2 w-full border rounded-lg px-4 py-3 outline-none focus:border-orange-500"
          />

        </div>

        {/* Mobile */}

        <div>

          <label className="text-sm font-medium">
            Mobile Number *
          </label>

          <input
            type="tel"
            name="mobile"
            placeholder="+91 9876543210"
            value={formData.mobile}
            onChange={handleChange}
            className="mt-2 w-full border rounded-lg px-4 py-3 outline-none focus:border-orange-500"
          />

        </div>

        {/* Gender */}

        <div>

          <label className="text-sm font-medium">
            Gender *
          </label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-2 w-full border rounded-lg px-4 py-3 outline-none focus:border-orange-500"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

        </div>

        {/* DOB */}

        <div>

          <label className="text-sm font-medium">
            Date of Birth *
          </label>

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="mt-2 w-full border rounded-lg px-4 py-3 outline-none focus:border-orange-500"
          />

        </div>

      </div>

    </div>
  );
}
import React from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const languages = [
  "Tamil",
  "English",
  "Hindi",
  "Malayalam",
  "Telugu",
  "Kannada",
];

export default function AvailabilityStep({
  formData,
  setFormData,
  previous,
  handleSubmit,
}) {
  const toggleDay = (day) => {
    const selected = formData.availableDays || [];

    setFormData({
      ...formData,
      availableDays: selected.includes(day)
        ? selected.filter((d) => d !== day)
        : [...selected, day],
    });
  };

  const toggleLanguage = (lang) => {
    const selected = formData.languages || [];

    setFormData({
      ...formData,
      languages: selected.includes(lang)
        ? selected.filter((l) => l !== lang)
        : [...selected, lang],
    });
  };

  return (
    <div className="w-full">

      {/* Available Days */}

      <div className="mb-5">

        <label className="block text-[12px] font-medium text-gray-700 mb-2">
          Available Days <span className="text-red-500">*</span>
        </label>

        <div className="flex flex-wrap gap-2">

          {days.map((day) => (
            <label
              key={day}
              className="flex items-center gap-1 border border-gray-300 rounded-md px-2 py-1 text-[11px] cursor-pointer hover:border-orange-400"
            >
              <input
                type="checkbox"
                checked={formData.availableDays?.includes(day)}
                onChange={() => toggleDay(day)}
                className="w-3 h-3 accent-orange-500"
              />
              {day}
            </label>
          ))}

        </div>

      </div>

      {/* Languages */}

      <div className="mb-6">

        <label className="block text-[12px] font-medium text-gray-700 mb-2">
          Languages Spoken
        </label>

        <div className="flex flex-wrap gap-2">

          {languages.map((lang) => (
            <label
              key={lang}
              className="flex items-center gap-1 border border-gray-300 rounded-md px-2 py-1 text-[11px] cursor-pointer hover:border-orange-400"
            >
              <input
                type="checkbox"
                checked={formData.languages?.includes(lang)}
                onChange={() => toggleLanguage(lang)}
                className="w-3 h-3 accent-orange-500"
              />
              {lang}
            </label>
          ))}

        </div>

      </div>

      {/* Agreements */}

      <div className="space-y-3 text-[11px] text-gray-700">

        <label className="flex items-start gap-2 cursor-pointer">

          <input
            type="checkbox"
            checked={formData.agreeVerification}
            onChange={(e) =>
              setFormData({
                ...formData,
                agreeVerification: e.target.checked,
              })
            }
            className="mt-0.5 accent-orange-500"
          />

          <span>
            I agree to undergo background verification by CookHire. I
            consent to my Aadhaar and identity documents being verified.
          </span>

        </label>

        <label className="flex items-start gap-2 cursor-pointer">

          <input
            type="checkbox"
            checked={formData.agreeTerms}
            onChange={(e) =>
              setFormData({
                ...formData,
                agreeTerms: e.target.checked,
              })
            }
            className="mt-0.5 accent-orange-500"
          />

          <span>
            I agree to the{" "}
            <span className="text-orange-500 font-medium cursor-pointer">
              CookHire Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-orange-500 font-medium cursor-pointer">
              Privacy Policy.
            </span>
          </span>

        </label>

        <label className="flex items-start gap-2 cursor-pointer">

          <input
            type="checkbox"
            checked={formData.agreeAccuracy}
            onChange={(e) =>
              setFormData({
                ...formData,
                agreeAccuracy: e.target.checked,
              })
            }
            className="mt-0.5 accent-orange-500"
          />

          <span>
            I certify that all information provided is accurate. False
            information will result in account termination.
          </span>

        </label>

      </div>

      {/* Notice */}

      <div className="mt-6 rounded-lg border border-orange-200 bg-orange-50 p-3 text-[11px] text-gray-600 leading-5">
        After submitting, our Chennai team will review your profile within
        <span className="font-semibold"> 24–48 hours.</span> Approved cooks
        get listed within
        <span className="font-semibold"> 3 working days.</span>
      </div>

    </div>
  );
}
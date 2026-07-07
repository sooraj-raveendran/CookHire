import React from "react";

const cuisineOptions = [
  "South Indian",
  "North Indian",
  "Chettinad",
  "Continental",
  "Chinese",
  "Healthy Meals",
  "Jain",
  "Mughlai",
  "Bengali",
  "Other",
];

const foodOptions = [
  "Vegetarian",
  "Non-Vegetarian",
  "Both",
];

const workTypeOptions = [
  "Home Cooking",
  "Event Cooking",
  "Wedding Catering",
];

export default function SkillsStep({ formData, setFormData }) {
  const toggleCuisine = (item) => {
    const list = formData.cuisines || [];

    setFormData({
      ...formData,
      cuisines: list.includes(item)
        ? list.filter((i) => i !== item)
        : [...list, item],
    });
  };

  const toggleWorkType = (item) => {
    const list = formData.workTypes || [];

    setFormData({
      ...formData,
      workTypes: list.includes(item)
        ? list.filter((i) => i !== item)
        : [...list, item],
    });
  };

  return (
    <div className="space-y-6">
      {/* Cuisines */}
      <div>
        <label className="text-sm font-medium text-gray-700">
          Select all cuisines you can cook well
        </label>

        <div className="flex flex-wrap gap-2 mt-3">
          {cuisineOptions.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer text-sm hover:border-orange-500"
            >
              <input
                type="checkbox"
                checked={formData.cuisines.includes(item)}
                onChange={() => toggleCuisine(item)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <label className="text-sm font-medium text-gray-700">
          Years of Experience *
        </label>

        <input
          type="number"
          min="0"
          value={formData.experience}
          onChange={(e) =>
            setFormData({
              ...formData,
              experience: e.target.value,
            })
          }
          className="w-full mt-2 border rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
          placeholder="e.g. 5"
        />
      </div>

      {/* Food Preference */}
      <div>
        <label className="text-sm font-medium text-gray-700">
          Food Preference
        </label>

        <div className="flex flex-wrap gap-2 mt-3">
          {foodOptions.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer text-sm hover:border-orange-500"
            >
              <input
                type="radio"
                name="foodPreference"
                value={item}
                checked={formData.foodPreference === item}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    foodPreference: e.target.value,
                  })
                }
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Work Types */}
      <div>
        <label className="text-sm font-medium text-gray-700">
          Work Types
        </label>

        <div className="flex flex-wrap gap-2 mt-3">
          {workTypeOptions.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer text-sm hover:border-orange-500"
            >
              <input
                type="checkbox"
                checked={formData.workTypes.includes(item)}
                onChange={() => toggleWorkType(item)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
import { MapPin } from "lucide-react";

export default function AddressStep({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData({
          ...formData,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        alert("Current location captured successfully.");
      },
      () => {
        alert("Unable to fetch your location.");
      }
    );
  };

  const cities = [
    "Adyar",
    "Anna Nagar",
    "Besant Nagar",
    "Chromepet",
    "Guindy",
    "Kilpauk",
    "Medavakkam",
    "Mylapore",
    "Nungambakkam",
    "OMR",
    "Perambur",
    "Porur",
    "Shollinganallur",
    "T. Nagar",
    "Tambaram",
    "Velachery",
  ];

  const districts = [
    "Chennai",
    "Kanchipuram",
    "Chengalpattu",
    "Tiruvallur",
  ];

  return (
    <div className="space-y-5">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* House No */}

        <div>
          <label className="block text-sm font-medium mb-2">
            House No. *
          </label>

          <input
            type="text"
            name="houseNo"
            placeholder="2/220"
            value={formData.houseNo || ""}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3 focus:border-orange-500 outline-none"
          />
        </div>

        {/* Street */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Street *
          </label>

          <input
            type="text"
            name="street"
            placeholder="Street Name"
            value={formData.street || ""}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3 focus:border-orange-500 outline-none"
          />
        </div>

        {/* City */}

        <div>
          <label className="block text-sm font-medium mb-2">
            City *
          </label>

          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3 focus:border-orange-500 outline-none"
          >
            <option value="">Select City</option>

            {cities.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* District */}

        <div>
          <label className="block text-sm font-medium mb-2">
            District *
          </label>

          <select
            name="district"
            value={formData.district || ""}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3 focus:border-orange-500 outline-none"
          >
            <option value="">Select District</option>

            {districts.map((district) => (
              <option key={district}>{district}</option>
            ))}
          </select>
        </div>

        {/* Pincode */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Pincode *
          </label>

          <input
            type="text"
            name="pincode"
            maxLength={6}
            placeholder="600001"
            value={formData.pincode}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3 focus:border-orange-500 outline-none"
          />
        </div>

        {/* GPS */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Current Location
          </label>

          <button
            type="button"
            onClick={handleCurrentLocation}
            className="w-full rounded-lg bg-orange-100 text-orange-600 py-3 font-medium hover:bg-orange-200 transition flex items-center justify-center gap-2"
          >
            <MapPin size={18} />
            Use Current GPS Location
          </button>
        </div>

      </div>

    </div>
  );
}
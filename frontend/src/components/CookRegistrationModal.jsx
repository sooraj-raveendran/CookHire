import { useState } from "react";
import { X, User, MapPin, BadgeCheck,Briefcase, Clock,} from "lucide-react";

import PersonalStep from "./steps/PersonalStep"
import AddressStep from "./steps/AddressStep";
import IdentityStep from "./steps/IdentityStep";
import SkillsStep from "./steps/SkillsStep";
import AvailabilityStep from "./steps/AvailabilityStep";
const API_URL = import.meta.env.VITE_API_URL;

const steps = [
  "Personal",
  "Address",
  "Identity",
  "Skills",
  "Availability",
];

export default function CookRegistrationModal({ onClose, onSuccess, }) {
  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
  // Step 1
  photo: null,
  fullName: "",
  mobile: "",
  gender: "",
  dob: "",

  // Step 2
  houseNo: "",
  street: "",
  city: "",
  district: "",
  pincode: "",
  latitude: "",
  longitude: "",

  // Step 3
  aadhaar: null,
  pan: null,
  policeCertificate: null,
  certificate: null,
  drivingLicense: null,
// step 4
  experience: "",
  cuisines: [],
  foodPreference: "",
  workTypes: [],

// step 5
  availableDays: [],
  availableFrom: "",
  availableTo: "",
  languages: [],
  salary: "",
  preferredArea: "",
  emergencyContact: "",
  agreeVerification: false,
  agreeTerms: false,
  agreeAccuracy: false,

  
});

  const next = () => {
  if (!validateStep()) return;

  if (step < 5) {
    setStep(step + 1);
  }
};

  const previous = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalStep
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 2:
        return (
          <AddressStep
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 3:
        return (
          <IdentityStep
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 4:
        return (
          <SkillsStep
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 5:
        return (
          <AvailabilityStep
            formData={formData}
            setFormData={setFormData}
          />
        );

      default:
        return null;
    }
  };

  const validateStep = () => {
  switch (step) {
    case 1:
      if (!formData.photo) {
        alert("Please upload a profile photo.");
        return false;
      }
      if (!formData.fullName.trim()) {
        alert("Please enter your full name.");
        return false;
      }
      if (!formData.mobile.trim()) {
        alert("Please enter your mobile number.");
        return false;
      }
      if (!/^\d{10}$/.test(formData.mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
      }
      if (!formData.gender) {
        alert("Please select your gender.");
        return false;
      }
      if (!formData.dob) {
        alert("Please select your date of birth.");
        return false;
      }
      return true;

    case 2:
      if (!(formData.houseNo || "").trim()) {
        alert("Please enter your house number.");
        return false;
      }
      if (!(formData.street ||"").trim()) {
        alert("Please enter your street.");
        return false;
      }
      if (!(formData.city || "").trim()) {
        alert("Please enter your city.");
        return false;
      }
      if (!(formData.district || "").trim()) {
        alert("Please enter your district.");
        return false;
      }
      if (!(formData.pincode || "").trim()) {
        alert("Please enter your pincode.");
        return false;
      }
      return true;

    case 3:
      if (!formData.aadhaar) {
        alert("Please upload Aadhaar.");
        return false;
      }
      if (!formData.policeCertificate) {
        alert("Please upload Police Verification Certificate.");
        return false;
      }
      if (!formData.certificate) {
        alert("Please upload your certificate.");
        return false;
      }
      return true;

    case 4:
      if (!formData.experience.trim()) {
        alert("Please enter your experience.");
        return false;
      }
      if (formData.cuisines.length === 0) {
        alert("Please select at least one cuisine.");
        return false;
      }
      if (!formData.foodPreference) {
        alert("Please select a food preference.");
        return false;
      }
      if (formData.workTypes.length === 0) {
        alert("Please select at least one work type.");
        return false;
      }
      return true;

    case 5:
      if (formData.availableDays.length === 0) {
        alert("Please select available days.");
        return false;
      }
      if (formData.languages.length === 0) {
        alert("Please select at least one language.");
        return false;
      }
      if (!formData.agreeVerification || !formData.agreeTerms || !formData.agreeAccuracy) {
        alert("Please accept all declarations.");
        return false;
      }
      return true;

    default:
      return true;
  }
};


  const handleSubmit = async () => {
    if (!validateStep()) return;
  try {
    setLoading(true);

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value === null || value === undefined) return;

      if (Array.isArray(value)) {
        data.append(key, JSON.stringify(value));
      } else {
        data.append(key, value);
      }
    });
    
for (const [key, value] of data.entries()) {
  console.log(
    key,
    value instanceof File ? value.name : value
  );
}
    const response = await fetch(
      `${API_URL}/api/cooks`,
      {
        method: "POST",
        body: data,
      }
    );

    
    const result = await response.json();
    console.log(result);

      if (!response.ok) {
        throw new Error(result.message);
      }
    onSuccess();
  } catch (error) {
    console.error(error);
    alert(error.message);

  } finally {
    setLoading(false);
  }
};

  return (
    <>
<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
<div className="bg-white rounded-2xl w-full max-w-3xl h-[95vh] sm:h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}

        <div className="bg-orange-500 text-white px-6 py-4 relative">

          <button
            onClick={onClose}
            className="absolute right-4 top-4"
          >
            <X size={18}/>
          </button>

          <h2 className="text-xl sm:text-2xl font-bold">
            Join as a Cook
          </h2>

          <p className="text-xs sm:text-sm">
            Register to start earning from home cooking
          </p>

        </div>

        {/* Progress */}

        <div className="flex justify-between px-2 sm:px-8 py-4 border-b overflow-x-auto border-b-gray-300 shadow-sm">

          {steps.map((item, index) => (

            <div
              key={index}
              className="flex flex-col items-center min-w-[70px] sm:flex-1"
            >

              <div
                className={`w-7 h-7 sm:w-9 sm:h-9 text-xs sm:text-sm rounded-full flex items-center justify-center border-2
                ${
                  step === index + 1
                    ? "bg-orange-500 text-white border-orange-500"
                    : step > index + 1
                    ? "bg-green-500 border-green-500 text-white"
                    : "border-gray-400"
                }`}
              >
                {index + 1}
              </div>

              <p className="text-[10px] sm:text-xs mt-1">
                {item}
              </p>

            </div>
          ))}

        </div>

        {/* Body */}

  {/* Scrollable Body */}
<div className="flex-1 overflow-y-auto p-4 sm:p-6">
  {renderStep()}
</div>

{/* Fixed Footer */}
<div className=" bg-white px-4 sm:px-6 py-4 flex justify-end gap-3 shrink-0">

  {step > 1 && (
    <button
      onClick={previous}
      className="px-6 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50"
    >
      Back
    </button>
  )}

  {step !== 5 ? (
    <button
      onClick={next}
      className="bg-[#F28C28] text-white px-8 py-2 rounded-lg hover:bg-[#e27f1f]"
    >
      Next
    </button>
  ) : (
    <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-[#F28C28] text-white px-8 py-2 rounded-lg hover:bg-[#e27f1f] disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Application ✓"}
      </button>
  )}

</div>

    </div>
    </div>

      
      </>

  );
}
import mongoose from "mongoose";

const cookSchema = new mongoose.Schema(
  {
    // Step 1 - Personal Information
    photo: {
      type: String,
      default: "",
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      trim: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other", ""],
      default: "",
    },

    dob: {
      type: Date,
    },

    // Step 2 - Address
    houseNo: {
      type: String,
      trim: true,
    },

    street: {
      type: String,
      trim: true,
    },

    city: {
      type: String,
      trim: true,
    },

    district: {
      type: String,
      trim: true,
    },

    pincode: {
      type: String,
      trim: true,
    },

    latitude: {
      type: String,
      default: "",
    },

    longitude: {
      type: String,
      default: "",
    },

    // Step 3 - Documents
    aadhaar: {
      type: String,
      default: "",
    },

    pan: {
      type: String,
      default: "",
    },

    policeCertificate: {
      type: String,
      default: "",
    },

    certificate: {
      type: String,
      default: "",
    },

    drivingLicense: {
      type: String,
      default: "",
    },

    // Step 4 - Skills
    experience: {
      type: String,
      default: "",
    },

    cuisines: [
      {
        type: String,
      },
    ],

    foodPreference: {
      type: String,
      default: "",
    },

    workTypes: [
      {
        type: String,
      },
    ],

    // Step 5 - Availability
    availableDays: [
      {
        type: String,
      },
    ],

    availableFrom: {
      type: String,
      default: "",
    },

    availableTo: {
      type: String,
      default: "",
    },

    languages: [
      {
        type: String,
      },
    ],

    salary: {
      type: String,
      default: "",
    },

    preferredArea: {
      type: String,
      default: "",
    },

    emergencyContact: {
      type: String,
      default: "",
    },

    agreeVerification: {
      type: Boolean,
      default: false,
    },

    agreeTerms: {
      type: Boolean,
      default: false,
    },

    agreeAccuracy: {
      type: Boolean,
      default: false,
    },

    // Status Tracking
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },

    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Cook", cookSchema);
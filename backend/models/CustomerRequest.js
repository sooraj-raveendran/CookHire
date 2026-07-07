import mongoose from "mongoose";

const findCookSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
    },

    mobileNumber: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      default: "",
    },

    foodPreference: {
      type: String,
      required: true,
    },

    mealsRequired: {
      type: String,
      required: true,
    },

    genderPreference: {
      type: String,
      required: true,
    },

    familySize: {
      type: String,
      required: true,
    },

    additionalRequirements: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("FindCook", findCookSchema);
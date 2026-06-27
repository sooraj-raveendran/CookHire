import mongoose from "mongoose";

const cookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    contact: {
      type: String,
      required: true,
    },

    experience: {
      type: Number,
      default: 0,
    },

    cuisineSpecialization: {
      type: String,
      default: "",
    },

    workType: {
      type: String,
      default: "",
    },

    preferredLocation: {
      type: String,
      default: "",
    },

    notes: {
      type: String,
      default: "",
    },

    profilePhoto: {
      type: String,
      default: "",
    },

    document: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Cook = mongoose.model("Cook", cookSchema);

export default Cook;
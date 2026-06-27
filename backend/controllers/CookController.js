import Cook from "../models/Cook.js";
import { sendCookRegistrationEmail } from "../services/mailService.js";

export const registerCook = async (req, res) => {
  try {
    // Honeypot spam protection
    if (req.body.honeypot) {
      return res.status(400).json({
        success: false,
        message: "Spam detected.",
      });
    }

    const {
      name,
      contact,
      experience,
      cuisineSpecialization,
      workType,
      preferredLocation,
      notes,
    } = req.body;

    // Validation
    if (!name || !contact) {
      return res.status(400).json({
        success: false,
        message: "Name and contact are required.",
      });
    }

    // Uploaded files
    const profilePhoto = req.files?.profilePhoto
      ? req.files.profilePhoto[0].filename
      : "";

    const document = req.files?.document
      ? req.files.document[0].filename
      : "";

    // Save to MongoDB
    const cook = await Cook.create({
      name,
      contact,
      experience,
      cuisineSpecialization,
      workType,
      preferredLocation,
      notes,
      profilePhoto,
      document,
    });

    // Send email to admin
    // await sendCookRegistrationEmail(cook);

    return res.status(201).json({
      success: true,
      message: "Cook registration submitted successfully.",
      data: cook,
    });

  } catch (error) {
    console.error("Cook Registration Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
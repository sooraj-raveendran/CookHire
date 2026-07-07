import Cook from "../models/Cook.js";

const registerCook = async (req, res) => {
  try {
    // Convert JSON strings back to arrays
    const cuisines = JSON.parse(req.body.cuisines || "[]");
    const workTypes = JSON.parse(req.body.workTypes || "[]");
    const availableDays = JSON.parse(req.body.availableDays || "[]");
    const languages = JSON.parse(req.body.languages || "[]");

    const cook = await Cook.create({
      // Step 1
      photo: req.files.photo?.[0]?.filename || "",
      fullName: req.body.fullName,
      mobile: req.body.mobile,
      gender: req.body.gender,
      dob: req.body.dob,

      // Step 2
      houseNo: req.body.houseNo,
      street: req.body.street,
      city: req.body.city,
      district: req.body.district,
      pincode: req.body.pincode,
      latitude: req.body.latitude,
      longitude: req.body.longitude,

      // Step 3
      aadhaar: req.files.aadhaar?.[0]?.filename || "",
      pan: req.files.pan?.[0]?.filename || "",
      policeCertificate: req.files.policeCertificate?.[0]?.filename || "",
      certificate: req.files.certificate?.[0]?.filename || "",
      drivingLicense: req.files.drivingLicense?.[0]?.filename || "",

      // Step 4
      experience: req.body.experience,
      cuisines,
      foodPreference: req.body.foodPreference,
      workTypes,

      // Step 5
      availableDays,
      availableFrom: req.body.availableFrom,
      availableTo: req.body.availableTo,
      languages,
      salary: req.body.salary,
      preferredArea: req.body.preferredArea,
      emergencyContact: req.body.emergencyContact,

      agreeVerification: req.body.agreeVerification === "true",
      agreeTerms: req.body.agreeTerms === "true",
      agreeAccuracy: req.body.agreeAccuracy === "true",
    });

    res.status(201).json({
      success: true,
      message: "Cook registered successfully",
      cook,
    });
  } catch (error) {
    console.error("Cook Registration Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default registerCook;
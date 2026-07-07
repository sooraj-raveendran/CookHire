import express from "express";
import upload from "../middleware/upload.js";
import registerCook from "../controllers/CookController.js";

const router = express.Router();

router.post(
  "/",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "aadhaar", maxCount: 1 },
    { name: "pan", maxCount: 1 },
    { name: "policeCertificate", maxCount: 1 },
    { name: "certificate", maxCount: 1 },
    { name: "drivingLicense", maxCount: 1 },
  ]),
  registerCook
);

export default router;
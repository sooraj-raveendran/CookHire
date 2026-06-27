import express from "express";
import upload from "../middleware/upload.js";
import { registerCook } from "../controllers/CookController.js";

const router = express.Router();

router.post(
  "/",
  upload.fields([
    {
      name: "profilePhoto",
      maxCount: 1,
    },
    {
      name: "document",
      maxCount: 1,
    },
  ]),
  registerCook
);

export default router;
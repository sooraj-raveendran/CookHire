import express from "express";
import { submitFindCook } from "../controllers/CustomerRequestController.js";

const router = express.Router();

router.post("/", submitFindCook);

export default router;
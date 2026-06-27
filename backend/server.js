import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import customerRequestRoutes from "./routes/CustomerRequestRoutes.js";
import cookRoutes from "./routes/CookRoutes.js";
import helmet from "helmet";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";




dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const startServer = async () => {
  try {
    await connectDB();

    const app = express();

    // Security
    app.use(
      helmet({
        crossOriginResourcePolicy: false,
      })
    );

    // Compression
    app.use(compression());

    // CORS
    app.use(cors());

    // Body Parsers
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Static uploads
    app.use("/uploads", express.static(path.join(__dirname, "uploads")));

    // Routes
    app.use("/api/requests", customerRequestRoutes);
    app.use("/api/cooks", cookRoutes);

    // Health Check
    app.get("/", (req, res) => {
      res.json({
        success: true,
        message: "API Running Successfully",
      });
    });

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error("Server failed to start:", err);
  }
};

startServer();
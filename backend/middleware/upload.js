import multer from "multer";
import path from "path";
import fs from "fs";

const profileDir = path.join("uploads", "profiles");
const documentDir = path.join("uploads", "documents");

// Create directories if they don't exist
fs.mkdirSync(profileDir, { recursive: true });
fs.mkdirSync(documentDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "photo") {
      cb(null, profileDir);
    } else {
      cb(null, documentDir);
    }
  },

  filename: (req, file, cb) => {
    const unique =
      Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, unique + path.extname(file.originalname));
  },
});

export default multer({ storage });
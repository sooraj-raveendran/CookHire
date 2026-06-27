import multer from "multer";
import path from "path";
import fs from "fs";

const profilePath = "./uploads/profiles";
const documentPath = "./uploads/documents";

// Create folders if they don't exist
if (!fs.existsSync(profilePath)) {
  fs.mkdirSync(profilePath, { recursive: true });
}

if (!fs.existsSync(documentPath)) {
  fs.mkdirSync(documentPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (file.fieldname === "profilePhoto") {
      cb(null, profilePath);
    } else if (file.fieldname === "document") {
      cb(null, documentPath);
    } else {
      cb(new Error("Invalid field name"), null);
    }
  },

  filename(req, file, cb) {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, uniqueName + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (file.fieldname === "profilePhoto") {
    if (file.mimetype.startsWith("image/")) {
      return cb(null, true);
    }

    return cb(new Error("Profile photo must be an image"), false);
  }

  if (file.fieldname === "document") {
    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (allowedTypes.includes(file.mimetype)) {
      return cb(null, true);
    }

    return cb(new Error("Invalid document type"), false);
  }

  return cb(new Error("Unexpected field"), false);
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
  },
});

export default upload;
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    if (file.fieldname === "photo") {
      cb(null, "uploads/profiles");
    } else {
      cb(null, "uploads/documents");
    }

  },

  filename: (req, file, cb) => {

    const unique =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9);

    cb(
      null,
      unique + path.extname(file.originalname)
    );
  },
});

export default multer({ storage });
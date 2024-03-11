// uploadMiddleware.ts
import { Request, Express } from "express";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (_req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

const uploadMiddleware = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "title", maxCount: 1 },
  { name: "description", maxCount: 1 },
]);

export default uploadMiddleware;

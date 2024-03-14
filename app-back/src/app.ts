import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cityRoutes from "./routes/cityRoutes";
import provinceRoutes from "./routes/provinceRoutes";
import accommodationTypeRoutes from "./routes/accommodationTypeRoutes";
import accommodationRoutes from "./routes/accommodationRoutes";

const app = express();
const port = 3001;
const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// app.use(express.static("public"));
// app.use("/images", express.static("images"));

app.use(cors());
app.use(bodyParser.json());

// app.post("/image", upload.single("file"), function (req, res) {
//   res.json({});
// });

app.use("/api/province", provinceRoutes);
app.use("/api/city", cityRoutes);
app.use("/api/accommodationtype", accommodationTypeRoutes);
app.use("/api/accommodation", accommodationRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

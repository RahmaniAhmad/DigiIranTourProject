"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const cityRoutes_1 = __importDefault(require("./routes/cityRoutes"));
const provinceRoutes_1 = __importDefault(require("./routes/provinceRoutes"));
const accommodationTypeRoutes_1 = __importDefault(require("./routes/accommodationTypeRoutes"));
const accommodationRoutes_1 = __importDefault(require("./routes/accommodationRoutes"));
const app = (0, express_1.default)();
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
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// app.post("/image", upload.single("file"), function (req, res) {
//   res.json({});
// });
app.use("/api/province", provinceRoutes_1.default);
app.use("/api/city", cityRoutes_1.default);
app.use("/api/accommodationtype", accommodationTypeRoutes_1.default);
app.use("/api/accommodation", accommodationRoutes_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map
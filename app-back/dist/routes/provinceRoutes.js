"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/provinceRoutes.ts
const express_1 = __importDefault(require("express"));
const provinceController_1 = __importDefault(require("../controllers/provinceController"));
const router = express_1.default.Router();
router.get("/", provinceController_1.default.getProvinces);
router.get("/:id", provinceController_1.default.getProvinceById);
router.post("/", provinceController_1.default.createProvince);
router.put("/:id", provinceController_1.default.updateProvince);
router.delete("/:id", provinceController_1.default.deleteProvince);
exports.default = router;
//# sourceMappingURL=provinceRoutes.js.map
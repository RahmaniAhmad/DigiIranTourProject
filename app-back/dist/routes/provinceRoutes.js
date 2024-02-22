"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/provinceRoutes.ts
const express_1 = __importDefault(require("express"));
const provinceController_1 = __importDefault(require("../controllers/provinceController"));
const router = express_1.default.Router();
router.get("/", provinceController_1.default.getAll);
router.get("/:id", provinceController_1.default.getById);
router.post("/", provinceController_1.default.create);
router.put("/:id", provinceController_1.default.update);
router.delete("/:id", provinceController_1.default.delete);
exports.default = router;
//# sourceMappingURL=provinceRoutes.js.map
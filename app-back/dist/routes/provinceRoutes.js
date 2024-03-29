"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const provinceController_1 = require("../controllers/provinceController");
const provinceRepository_1 = require("../repositories/provinceRepository");
const router = express_1.default.Router();
const provinceRepository = new provinceRepository_1.ProvinceRepository();
const controller = new provinceController_1.ProvinceController(provinceRepository);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
exports.default = router;
//# sourceMappingURL=provinceRoutes.js.map
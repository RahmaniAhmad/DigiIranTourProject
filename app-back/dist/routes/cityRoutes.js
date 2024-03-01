"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cityController_1 = require("../controllers/cityController");
const cityRepository_1 = require("../repositories/cityRepository");
const router = express_1.default.Router();
const cityRepository = new cityRepository_1.CityRepository();
const controller = new cityController_1.CityController(cityRepository);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
exports.default = router;
//# sourceMappingURL=cityRoutes.js.map
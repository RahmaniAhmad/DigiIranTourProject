"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const accommodationTypeController_1 = require("../controllers/accommodationTypeController");
const accommodationTypeRepository_1 = require("../repositories/accommodationTypeRepository");
const router = express_1.default.Router();
const repository = new accommodationTypeRepository_1.AccommodationTypeRepository();
const controller = new accommodationTypeController_1.AccommodationTypeController(repository);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
exports.default = router;
//# sourceMappingURL=accommodationTypeRoutes.js.map
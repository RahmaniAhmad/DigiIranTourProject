"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const accommodationController_1 = require("../controllers/accommodationController");
const accommodationRepository_1 = require("../repositories/accommodationRepository");
const router = express_1.default.Router();
const repository = new accommodationRepository_1.AccommodationRepository();
const controller = new accommodationController_1.AccommodationController(repository);
router.get("/", controller.getAll);
router.get("/type/:type", controller.getByType);
router.get("/id/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
exports.default = router;
//# sourceMappingURL=accommodationRoutes.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const accommodationTypeController_1 = __importDefault(require("../controllers/accommodationTypeController"));
const router = express_1.default.Router();
router.get("/", accommodationTypeController_1.default.getAll);
router.get("/:id", accommodationTypeController_1.default.getById);
router.post("/", accommodationTypeController_1.default.create);
router.put("/:id", accommodationTypeController_1.default.update);
router.delete("/:id", accommodationTypeController_1.default.delete);
exports.default = router;
//# sourceMappingURL=accommodationTypeRoutes.js.map
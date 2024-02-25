import express, { Router } from "express";
import { AccommodationTypeController } from "../controllers/accommodationTypeController";

const router: Router = express.Router();
const controller = new AccommodationTypeController();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;

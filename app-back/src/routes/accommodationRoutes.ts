import express, { Router } from "express";
import { AccommodationController } from "../controllers/accommodationController";
import { AccommodationRepository } from "../repositories/accommodationRepository";

const router: Router = express.Router();
const repository = new AccommodationRepository();
const controller = new AccommodationController(repository);

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
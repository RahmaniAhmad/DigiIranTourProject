import express, { Router } from "express";
import { AccommodationTypeController } from "../controllers/accommodationTypeController";
import { AccommodationTypeRepository } from "../repositories/accommodationTypeRepository";

const router: Router = express.Router();
const repository = new AccommodationTypeRepository();
const controller = new AccommodationTypeController(repository);

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;

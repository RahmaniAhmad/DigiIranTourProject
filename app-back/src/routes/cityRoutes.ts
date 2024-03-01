import express, { Router } from "express";
import { CityController } from "../controllers/cityController";
import { CityRepository } from "../repositories/cityRepository";

const router: Router = express.Router();
const cityRepository = new CityRepository();
const controller = new CityController(cityRepository);

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;

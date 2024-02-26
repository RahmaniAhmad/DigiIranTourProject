import express, { Router } from "express";
import { ProvinceController } from "../controllers/provinceController";
import { ProvinceRepository } from "../repositories/provinceRepository";

const router: Router = express.Router();
const provinceRepository = new ProvinceRepository();
const controller = new ProvinceController(provinceRepository);

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;

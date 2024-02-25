import express, { Router } from "express";
import { ProvinceController } from "../controllers/provinceController";

const router: Router = express.Router();
const controller = new ProvinceController();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;

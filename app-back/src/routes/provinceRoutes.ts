// routes/provinceRoutes.ts
import express, { Router } from "express";
import provinceController from "../controllers/provinceController";

const router: Router = express.Router();

router.get("/", provinceController.getAll);
router.get("/:id", provinceController.getById);
router.post("/", provinceController.create);
router.put("/:id", provinceController.update);
router.delete("/:id", provinceController.delete);

export default router;

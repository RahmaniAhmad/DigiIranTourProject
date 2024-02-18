// routes/provinceRoutes.ts
import express, { Router } from "express";
import provinceController from "../controllers/provinceController";

const router: Router = express.Router();

router.get("/", provinceController.getProvinces);
router.get("/:id", provinceController.getProvinceById);
router.post("/", provinceController.createProvince);
router.put("/:id", provinceController.updateProvince);
router.delete("/:id", provinceController.deleteProvince);

export default router;

import express, { Router } from "express";
import controller from "../controllers/accommodationTypeController";

const router: Router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;

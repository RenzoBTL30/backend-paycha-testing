import { Router } from "express";
import * as lugar from "../controllers/lugar.controller.js";
import passport from "passport";
const router = Router();

router.get("/listar", lugar.getLugares);
router.get("/listarweb", lugar.getLugaresWeb);
router.post("/crear", lugar.createLugar);
router.put("/update/:id", lugar.updateLugar);
router.put("/delete/:id", lugar.deleteLugar);

export default router;
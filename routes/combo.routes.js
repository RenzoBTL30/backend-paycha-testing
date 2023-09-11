import { Router } from "express";
import * as combo from "../controllers/combo.controller.js";
import passport from "passport";
const router = Router();

router.post("/crear", combo.createCombo);
router.get("/listar", combo.listarCombo);
router.put("/actualizar/:id", combo.editarCombo);
router.put("/delete/:id", combo.deleteCombo);

router.post("/crear/prodcombo", combo.asignarComboProducto);
//router.put("/actualizar/prodcombo/:id", combo.editarComboProducto);
router.get("/listar/prodcombo/:id", combo.listarComboProducto);

export default router;
import { Router } from "express";
import * as categoria from "../controllers/categoria.controller.js";
import passport from "passport";
const router = Router();

router.post("/crear", categoria.createCategoria);
router.get("/listar", categoria.listarCategoria);
router.put("/actualizar/:id", categoria.editarCategoria);
router.delete("/delete/:id", categoria.deleteCategoria);


export default router;
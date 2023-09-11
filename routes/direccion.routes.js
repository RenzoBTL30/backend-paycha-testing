import { Router } from "express";
import * as direccion from "../controllers/direccion.controller.js";
import passport from "passport";
const router = Router();

router.post("/crear", direccion.createDireccion);
router.get("/buscarPorUsuario/:id", direccion.findByUsuario);
//router.put("/actualizar/:id", categoria.editarCategoria);


export default router;
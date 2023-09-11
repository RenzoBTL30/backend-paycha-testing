import { Router } from "express";
import * as acompanamiento from "../controllers/acompanamiento.controller.js";
import passport from "passport";
const router = Router();

router.post("/crear", acompanamiento.createAcomp);
router.get("/listar", acompanamiento.listarAcomp);
router.put("/actualizar/:id", acompanamiento.editarAcomp);
router.put("/delete/:id", acompanamiento.deleteAcomp);

router.post("/crear/prodacomp", acompanamiento.asignarAcompProducto);
//router.put("/actualizar/prodacomp/:id", acompanamiento.editarAcompProducto);
router.get("/listar/prodacomp/:id", acompanamiento.listarAcompProducto);
router.get("/listar/acompsprod/:id", acompanamiento.listarProductoAcomps);



export default router;
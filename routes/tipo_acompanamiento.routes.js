import { Router } from "express";
import * as tipoAcompanamiento from "../controllers/tipo_acompanamiento.controller.js";
import passport from "passport";
const router = Router();

router.post("/crear", tipoAcompanamiento.createTipoAcomp);
router.get("/listar", tipoAcompanamiento.listarTipoAcomp);
router.put("/actualizar/:id", tipoAcompanamiento.editarTipoAcomp);
router.delete("/delete/:id", tipoAcompanamiento.deleteTipoAcomp);


export default router;
import { Router } from "express";
import * as rol from "../controllers/rol.controller.js";
const router = Router();

router.post("/asignar/:id", rol.asignarRolUsuario);
router.post("/crear", rol.crearRol);
router.put("/updaterolusuario/:id",rol.updateRolUsuario);
router.put("/update/:id",rol.updateRol);
router.get("/listar", rol.listarRol);
router.get("/listartrabajador", rol.listarRolTrabajador);


export default router;
import { Router } from "express";
import * as usuario from "../controllers/usuario.controller.js";
const router = Router();

router.post("/crear", usuario.createUsuario);
router.put("/actualizar/:id", usuario.updateUsuario);
router.put("/actualizar/contra/:id", usuario.updateUsuarioContra);
router.put("/delete/:id", usuario.deleteUsuario);
router.get("/listartrabajador", usuario.listarUsuariosEmpresa);
router.get("/listarcliente", usuario.listarUsuariosCliente);




export default router;
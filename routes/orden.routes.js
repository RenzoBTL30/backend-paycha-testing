import { Router } from "express";
import * as orden from "../controllers/orden.controller.js";
import passport from "passport";
const router = Router();

router.post("/crear", orden.createOrden);
router.get("/buscar/porestado/:estado", orden.findByStatus);
router.get("/buscar/porclientedeliveryestado/:id/:estado", orden.findByClienteAndStatusDelivery);
router.get("/buscar/porclienterecojoestado/:id/:estado", orden.findByClienteAndStatusRecojo);
//router.get("/listar", orden.listarCategoria);
router.get("/buscar/porestadotodelivery/:estado", orden.findByStatusToDelivery);
router.get("/buscar/porestadococina1/:estado", orden.findByStatusCocina1);
router.get("/buscar/porestadococina2/:estado", orden.findByStatusCocina2);
router.get("/buscar/porestadobebidas/:estado", orden.findByStatusBebidas);
router.get("/buscar/porestadopromos/:estado", orden.findByStatusPromos);

router.put("/inserttiempo/:id", orden.insertTiempoEntrega);
router.put("/update/estado/:id", orden.actualizarEstadoOrden);
router.put("/cancelarorden/:id", orden.cancelarOrden);

//router.put("/update/estadococina/:id", orden.actualizarEstadoOrden);


export default router;
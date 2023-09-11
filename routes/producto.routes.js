import { Router } from "express";
import * as producto from "../controllers/producto.controller.js";
//import passport from "passport";
import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage()
});

const router = Router();

router.post("/crear", upload.array('image',1), producto.createProducto);

router.get("/buscar/productos/:id", producto.findByCategoria);
router.get("/listar", producto.listarProducto);
router.put("/update/:id", upload.array('image',1), producto.editarProductoConImagen);
router.put("/updatesinimagen/:id", producto.editarProductoSinImagen);
router.put("/updateestadodis/:id/:estadodis", producto.updateEstadoDisponible);
router.put("/delete/:id", producto.deleteProducto);



export default router;
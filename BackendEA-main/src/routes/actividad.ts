/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import { ticketsOfUser, getActividad, getActividades, updateActividad, deleteActividad, postActividad } from "../controllers/actividad";
import { getUsersPaginado } from "../services/user";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get("/all", getActividades);
router.get("/:idActividad", getActividad);
router.post("/",postActividad);
router.put("/:idActividad",updateActividad);
router.delete("/:idActividad",deleteActividad);
router.get("/:idUser/tickets", ticketsOfUser);


export {router};
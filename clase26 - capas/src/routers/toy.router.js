import {Router}from "express"
import toyController from '../controllers/toy.controller.js'
const router = Router()
/*
router.get("/",toyController.getToy)
router.post("/",toyController.createToy)
router.get("/:referencia")
export default router;
*/
class ToyRouter{
    constructor(){
        this.InicioToy=Router();
        this.InicioToy.get('/',toyController.getToy)
        this.InicioToy.post('/',toyController.getToy)
        this.InicioToy.get('/:referencia',toyController.getToy)
    }
    getRouter(){
        return this.InicioToy
    }
}

export default new ToyRouter()
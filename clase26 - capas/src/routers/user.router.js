import {Router}from "express"
import userController from '../controllers/user.controller.js'

const router = Router()
/*
router.get("/",userController.getUser)
router.post("/",userController.createUser)

export default router;*/

class UserRouter{
    constructor(){
        this.InicioUser = Router();
        this.InicioUser.get("/",userController.getUser)
        this.InicioUser.post("/",userController.createUser)
        //this.getRouter =this.getRouter.bind(this)
    }
    getRouter(){
        return this.InicioUser
    }
}

export default new UserRouter();
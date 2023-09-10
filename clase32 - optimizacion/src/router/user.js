import { Router } from "express";
import customError from "../customError.js";
import Error from "../enum.js";
import { generateUserError } from "../info.js";

const users =[]
const router= Router()

router.get('/',(req,res)=>{
    res.send({status:'success',payload:users})
})

router.post('/',(req,res)=>{
    const {first_name, last_name,email}=req.body
    if(!first_name || !last_name || !email){
        customError.createError({
            name:'Error al crear el error',
            cause: generateUserError({first_name}),
            message:"Fallo el intento de crear el usuario",
            code: Error.INVALID_TYPES_ERROR
        })
    }
    const user= {
        first_name,
        last_name,
        email
    }
    if(users.length==0){
        user.id=1
    }else{
        user.id=users[users.length-1].id + 1
    }
    users.push(user)
    res.send({status:'success',payload:users})
})

export default router
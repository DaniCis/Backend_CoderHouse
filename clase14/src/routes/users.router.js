import { Router } from "express";
import {userModel} from '../models/user.model.js'

const router = Router();

router.get('/',async(req,res)=>{
    try{
        let users = await userModel.find()
        res.send({result:"success",payload: users})

    }catch(e){
        console.log('No se pudo obtener los datos en MongoDb. ' + e)
    }
})

router.post('/',async(req,res)=>{
    let {first_name,last_name,email } = req.body
    if(!first_name || !last_name || !email) return res.send({status:'error',error:'Valores incompletos'})
    let result = await userModel.create({
        first_name,last_name,email
    })
    res.send({status:"success",payload: result})
})

export default router;
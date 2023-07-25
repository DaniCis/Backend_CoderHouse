import { Router } from "express";
import { uploader } from "../utils";

const router = Router()

const users =[]

router.get('/',(req,res)=>{
    res.send({users})
})

/*
router.post('/',(req,res)=>{
    const userbody = req.body;
    users.push(userbody)
    res.send({status:"ok"})
})*/

router.post('/',uploader.single('file'),function(req,res){
    console.log(req.file)
    if(!req.file){
        return res.status(400).send({status:"Error",error:"No se guardo la imagen"})
    }
    let user = req.body
    user.profile = req.file.path
    users.push(user)
    res.status(200).send({status:"ok",message:"Usuario creado"})
})


export default router;
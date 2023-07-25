import { Router } from "express";

const router = Router()

const pets =[]

router.get('/',(req,res)=>{
    res.send({pets})
})

router.post('/',(req,res)=>{
    const petbody = req.body;
    pets.push(petbody)
    res.send({status:"ok"})
})

export default router;
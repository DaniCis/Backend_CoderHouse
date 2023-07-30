import { Router } from "express";
import userModel from "../models/Users.model.js";
import { createHash, isValidPassword } from "../utils.js";

const router=Router();

router.post('/register',async(req,res)=>{
    /*const { first_name,last_name,email, age, password}=req.body;
    const exist =await userModel.findOne({email});
    if(exist) return res.status(400).send({status:"error",error:"Users already exists"})
    const user={
        first_name,
        last_name,
        email,
        age,
        password
    }*/

    const { first_name, last_name, email, age, password} = req.body;
    if(!first_name || !last_name || !email || !age) return  res.status(400).send({status:"error",error:"Error User" });
    const user = {
        first_name,
        last_name,
        email,
        age,
        password:createHash(password)
    }
    let result = await userModel.create(user)
    res.send({status:"success",message:"User registered"})
})

router.post('/login',async(req,res)=>{
    /*const {email,password}=req.body
    const user = await userModel.findOne({email,password});

    if(!user) return res.status(400).send({status:"error",error:"Incorrect credentials"})

    req.session.user={
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
        age: user.age
    }
    res.send({status:"success",payload:req.session.user, message:"Nuestro primer logueo"})
*/

    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).send({ status: "error", error: "Error User" });

    const user = await userModel.findOne(
      { email: email },
      { email: 1, first_name: 1, last_name: 1, password: 1 }
    )

    if (!user)
      return res.status(400).send({ status: "error", error: "Error User" });
    if (!isValidPassword(user, password))
      return res.status(403).send({ status: "error", error: "Error Credential" });
    req.session.user = user;
    res.send({ status: "success", payload: user });
})

router.post('/resetPassword',async(req,res)=>{
    const {email,password} = req.body;
    if(!email||!password) return res.status(400).send({status:"error",error:"Incomplete Values"});
    const user = await userModel.findOne({email});
    if(!user) return res.status(404).send({status:"error",error:"Not user found"});
    const newHashedPassword = createHash(password);
    await userModel.updateOne({_id:user._id},{$set:{password:newHashedPassword}});

    res.send({status:"success",message:"Contraseña restaurada"});
})

router.post('/register',passport.authenticate('register',{failureRedirect:'/failregister'}),async(req,res)=>{
    res.send({status:"success",message:"User Register"})
})

router.get('/failregister',async(req,res)=>{
    res.send({error:"failed"})
})

export default router;
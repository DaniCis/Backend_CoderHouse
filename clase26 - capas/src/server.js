import express from 'express'
import userRouter from  './routers/user.router.js'
import toyRouter from  './routers/toy.router.js'  
import mongoose from 'mongoose'

const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority')

app.use('/api/user',userRouter.getRouter())
app.use('/api/toy',toyRouter.getRouter())

app.listen(8080,()=>{console.log("Server up")})
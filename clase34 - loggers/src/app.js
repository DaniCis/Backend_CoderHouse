import express from 'express'
import { addLogger } from './utils/logger.js'

const app= express()
const PORT= 8080

app.use(addLogger)

app.get('/',(req,res)=>{
    req.logger.warning("Alerta")
    res.send({message:'Estamos porbando Logger con winston'})
})

app.listen(PORT,()=> console.log('Server up'))
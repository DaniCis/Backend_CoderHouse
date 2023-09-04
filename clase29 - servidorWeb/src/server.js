import express from 'express'
import mongoose from 'mongoose'
import CONFIG from './config/config.js'
import appRouter from './routers/app.router.js'

const app = express();

app.use( express.json())
app.use( express.urlencoded({extended: true}))

app.use ('/api' ,appRouter)
mongoose.connect(CONFIG.MONGO_URI)
  .then(()=>{
    const server = app.listen(CONFIG.PORT,
    ()=> console.log("Connect db"))
  })
  .catch((error)=>{
    console.log("Error connect")
    throw error
  })
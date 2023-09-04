import express from 'express'
import mongoose from 'mongoose'
import CONFIG from './config/config.js'
import appRouter from './routers/app.router.js'
import cors from 'cors';

const app = express();

app.use( express.json())
app.use( express.urlencoded({extended: true}))
app.use(cors({origin:'http://127.0.0.1:5500',methods:['GET','POST','PUT']}))

app.use ('/api' ,appRouter)
mongoose.connect(CONFIG.MONGO_URI)
.then(()=>{
  console.log("Connect DB")
  const server = app.listen(CONFIG.PORT,()=>{
    console.log("Server up")
  })
  server.on('error',(error)=> {
    console.log(" No connect ")
    throw error
  });
})
.catch((error)=>{
    console.log(" No server UP")
    throw error
})
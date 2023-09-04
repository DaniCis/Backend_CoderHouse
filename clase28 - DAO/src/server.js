import express from "express"
import CONFIG from "./config/config.js";
import appRouter from "./router/app.router.js"

const{PORT} = CONFIG
const app= express();
app.use(express.json());

app.use('/api',appRouter)

app.listen(PORT,()=>{
    console.log(`server up in ${PORT}`)
})
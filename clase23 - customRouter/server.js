import express from "express";
import userRouter from "./router/users/users.router.js";
import sessionRouter from "./router/sessions/sessions.router.js";

const server= express();

const usersRouter =new userRouter();
server.use(express.json())
server.use('/users',usersRouter.getRouter());
server.use('/sessions',sessionRouter.getRouter());
const serverless = server.listen(8080,()=>{
    console.log("server Up")
})
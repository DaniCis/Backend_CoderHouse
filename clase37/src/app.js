import express  from "express";
import __dirname from "./utils.js";

import viewRouter from './routes/views.router.js'
import coursesRouter from './routes/courses.router.js'
import usersRouter from './routes/users.router.js'
import handlebars from 'express-handlebars'
import sessionsRouter from './routes/sessions.router.js'
import initializePassport from './config/passport.config.js';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import mongoose from "mongoose";
import config from "./config/config.js";

const app =express();
const PORT=8080;

mongoose.set('strictQuery',false)
const connection= mongoose.connect(config.mongo.URL);

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')

initializePassport();
app.use(passport.initialize());
app.use(cookieParser());

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',viewRouter)
app.use('/api/courses',coursesRouter)
app.use('/api/users',usersRouter)
app.use('/api/sessions',sessionsRouter);


const server =app.listen(config.mongo.PORT,()=>console.log("Server Arriba"))
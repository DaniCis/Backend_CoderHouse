import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewRouter from "./routes/views.router.js";
import sessionRouter from "./routes/sessions.router.js";

const app = express();

const connection = mongoose.connect(
  "mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'))

app.use(session({
  store: MongoStore.create({
    mongoUrl:"mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority",
    mongoOptions:{ useNewUrlParser:true, useUnifiedTopology:true},
    ttl:3600
  }),
  secret:"12345abcd",
  resave:false,
  saveUninitialized:false
}))

app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')

app.use('/',viewRouter)
app.use('/api/sessions',sessionRouter)

const server = app.listen(8080,()=>console.log("server up"))
import express  from "express";
import handlebars from 'express-handlebars';
import __dirname from "./utils.js";
import { authToken, generateToken } from "./utils.js";

const app = express();

const PORT= process.env.PORT || 8080;
app.listen(PORT,()=>console.log("Server arriba"))

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

const users =[]

app.post('api/login',(req,res)=>{
    const {email,password} = req.body
    const user = users.find(user => user.email === email && user.password === password)
    if(user)
        return res.status(400).send({status:'error',error:'usuario no encontrado'})
    /*const user={
        name,email,password
    }
    users.push(user)*/
    const acceso = generateToken(user)
    res.send({status:"success",acceso})
})

app.get('/current',authToken,(req,res)=>{
    res.send({status:'success',payload:req.user})
})
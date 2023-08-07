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

const users =[
    {
        email: 'andrea.lopez1904@gmail.com',
        password: '1234'
   }
]

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/register',(req,res)=>{
    res.render('register');
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/api/register',(req,res)=>{
    const {name,email,password} = req.body;
    const exists = users.find(user=>user.email===email);
    if(exists) return res.status(400).send({status:"error",error:"User already exists"});
    const user = {
        name,
        email,
        password
    }
    users.push(user);
    const access_token = generateToken(user);
    res.send({status:"success",access_token});

})

app.post('/api/login',(req,res)=>{
    const {email,password} = req.body;
    //console.log(email+"  "+password)
    const user = users.find(user=>user.email===email && user.password === password);
    //console.log(user);
    if(!user) return res.status(400).send({status:"error",error:"Invalid credentials"});
    const access_token = generateToken(user);
    res.send({status:"success",access_token});
})

app.get('/api/current',authToken,(req,res)=>{
    res.send({status:"success",payload:req.user})
})
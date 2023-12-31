import express from "express"

const app = express();
const server = app.listen(8080,()=>console.log("Server arriba"))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

let users= [];

app.get('/api/user',(req,res)=>{
    res.send({users})
})

app.post('/api/user',(req,res)=>{
    let user=req.body;
    if(!user.first_name || !user.last_name){
        return res.status(400).send({status:"Error",error:"Información incompleta"})
    }
    users.push(user);
    res.status(200).send({status:"Success",message:"Usuario creado"})
})

app.put('/api/user/:name',(req,res) =>{
    let user =req.body;
    let name=req.params.name
    //name=name.slice(1);
    users = users.filter(user => user.first_name);
    console.log(user.first_name)
    
    if(user.first_name == name){
        return res.status(400).send({status:"error",error:"Información no coincide con lo que esta guardado"})
    }
    users.push(user)
    res.send({status:"success",message:"Usuario actualizado"})
})

app.delete('/api/user/:name',(req,res)=>{
    let name = req.params.name;
    let cantidadCaracteres =users.length;
    users =users.filter(user => user.first_name!=name)
    if(users.length ===cantidadCaracteres){
        return res.status(400).send({status:"error",error:"Usuario no encontrado"})
    }
    res.send({status:"success",message:"Usuario eliminado con exito"})
})
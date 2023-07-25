import express from "express"

const app = express();
//app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/rutaQuery',(req,res)=>{
    let consultas = req.query
    let {nombre, apellido} = req.query
    res.send(consultas)
})

/*app.get('/saludo',(req,res)=>{
    res.send('Hola estamos probando express')
})

app.get('/bienvenido',(req,res)=>{
    res.send(`<h1 style="color:blue;">Aqui tenemos una bienvenida </h1>`)
})

app.get('/usuario',(req,res)=>{
    res.send({
        nombre: "Daniela",
        apellido:"Cisneros"
    })
})

app.get('/parametros/:nombre/:apellido',(req,res)=>{
    console.log(req.params.apellido) //cliente
    res.send(`Bienvenido ${req.params.nombre}`)
})*/

app.listen(8080, ()=> console.log('Server arriba'))
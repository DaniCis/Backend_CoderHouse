import express from "express"

const app = express();
const usuarios = [
    {id:'1', nombre: 'Fernando', genero:'M'},
    {id:'2', nombre: 'Ricarod', genero:'M'},
    {id:'3', nombre: 'Daniela', genero:'F'},
]

app.get('/',(req,res)=>{
    let genero = req.query.genero
    if(!genero || (genero !== "M" & genero!=='F')) return res.send(usuarios)
    let usuariosFiltrados = usuarios.filter( user => user.genero = genero)
    res.send(usuariosFiltrados)
})

app.listen(8080, ()=> console.log('Server arriba'))
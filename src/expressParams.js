import express from "express"

const app = express();
const usuarios = [
    {id:'1', nombre: 'Fernando', genero:'M'},
    {id:'2', nombre: 'Ricarod', genero:'M'},
    {id:'3', nombre: 'Daniela', genero:'F'},
]
app.get('/',(req,res)=>{
    res.send(usuarios)
})

app.get('/:idUsuario',(req,res)=>{
    let idUsuarioCapturado = req.params.idUsuario
    let usuarioFiltrado = usuarios.find(user => user.id === idUsuarioCapturado) 
    if(!usuarioFiltrado) return res.send({error:'Usuario no encontrado'})
    res.send({usuarioFiltrado})
})


app.listen(8080, ()=> console.log('Server arriba'))
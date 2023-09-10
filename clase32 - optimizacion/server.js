import express from "express"
import compression from 'express-compression'

const PORT = 8080
const app = express()

const suma =(cadena, tiempo)=>{
    let result =''
    while(tiempo >1){
        if(tiempo & 1) result+=cadena
        tiempo>>=1, cadena += cadena
    }
    return result+cadena
}

app.get('/primeraPeticion',(req,res)=>{
    res.send(suma('Hola chicos estamos probando el string ridiculamente grande','1e5'))
})

app.get('/peticionGzip',compression(),(req,res)=>{
    res.send(suma('Hola chicos estamos probando el string ridiculamente grande','1e5'))
})

app.get('/peticionBrotli',compression({brotli:{enabled:true,zlib:{}}}),(req,res)=>{
    res.send(suma('Hola chicos estamos probando el string ridiculamente grande','1e5'))
})

app.listen(PORT,()=>console.log('server up'))
import fs from 'fs'

const fecha = new Date().toLocaleDateString()
const hora = new Date().toLocaleTimeString()
fs.writeFile('./fechaHora.txt', `Fecha: ${fecha} Hora: ${hora} actual`, (error)=>{
    if(error) return console.log(error)
    fs.readFile('./fechaHora.txt','utf-8', (error,resultado)=>{
        if(error) return console.log(error)
        console.log(resultado)
    })
})

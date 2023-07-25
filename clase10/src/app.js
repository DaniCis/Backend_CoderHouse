import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewRouter from "./routes/views.router.js"
import { Server } from "socket.io";

const app =express();
const httpServer = app.listen(8080,()=>console.log("Server arriba"))

const io = new Server(httpServer)

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views')
app.set('view engine','handlebars');
app.use(express.static(__dirname+'/public'))
app.use('/',viewRouter)

const messages=[];
io.on('connection',socket=>{
    console.log("Tenemos un cliente conectado");

    socket.on('message', data=>{
        messages.push(data)
        io.emit('messageLogs',messages)
        console.log(data)
    })

    socket.on('authenticated',data=>{
        socket.broadcast.emit('newUserConnected',data);
    })
})

/*
socketServer.on //escuhar y recibir
socketServer.emit //puedo hablar y enviar informacion

const logs =[]
socketServer.on('connection', socket=>{
    console.log('Nuevo Cliente')

    socket.on("message", data=>{
        console.log(data)
    })
    socket.emit('evento_para_socket',"mensaje para que lo reciba el socket")
}

socketServer.on('connection', socket=>{
    console.log('inicio la comunicacion')

    socket.on("message", data=>{
        logs.push({socketid:socket.id, message:data})
        socketServer.emit("log",{logs})
    })
})*/


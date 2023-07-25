import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewRouter from "./routes/views.router.js"

const app =express();

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views')
app.set('view engine','handlebars');
app.use(express.static(__dirname+'/public'))
app.use('/',viewRouter)

app.listen(8080, ()=> console.log('server up'))

/*app.get('/',(req,res)=>{
    let usuario={
        name:"Daniela"
    }
    res.render('index',usuario)
})*/
import nodemailer from "nodemailer";
import express from "express";
import twilio from 'twilio'
import __dirname from "./utils/utils.js";


const app = express();

const transport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "danicis99@gmail.com",
    pass: "dtepwzvljbvyhunv",
  },
});

const TWILIO_ACCOUNT_SID= "AC585f38b7526b8f32515d6eaa43da9705"
const TWILIO_AUTH_TOKEN='afb45ec2e37c8ff2c6ef32f5f11f07c1'
const TWILIO_NUMBERS= '+16184278149'

const client = twilio(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN)

app.get("/mail", async (req, res) => {
  try {
    const mailParams = {
      from: "danicis99@gmail.com",
      to: "danicis99@gmail.com, andrea.lopez1904@gmail.com",
      subject: "Test Mail Modificado con un adjunto",
      html: `<div> <h1>Esto es una prueba
       te invito a participar enviado otros mail</h1>
        </div>`,
    attachments:[{
        filename:'perrito.jpeg',    
        path: process.cwd()+'/public/perrito.jpeg',
        cid:'perrito'
    }]
    
    };
    const  result = await transport.sendMail(mailParams)
    res.send('Mail enviado')
  } catch(error){
    console.log(error)
  }
});

app.use('/sms',async(req,res)=>{
    let message = await client.messages.create({
        body: 'Este es un mensaje de prueba',
        from:TWILIO_NUMBERS,
        to:'+573165202508'
    })
    res.send({ status: "success",result: "mensaje enviado"})
})

app.use('/smstest',async(req,res)=>{
    const {nombre = "andrea" , producto ="nada"}= req.query;
    let mensaje=''
    if(producto==="nada"){
        mensaje= " deberias comprarnos algo "
    }else{
        mensaje= `Gracias ${nombre} tu solicitud de producto ${producto} ha sido aprobada`
    }
    let result = await  client.messages.create({
        body: mensaje,
        from:TWILIO_NUMBERS,
        to:'+573165202508'
    })
     res.send({
        success:true,
        payload : result
     })  
})


app.listen(8080,()=>{
    console.log('Server Up')
})
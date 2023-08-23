import express from 'express';
import { fork } from 'child_process';

const PORT = process.env.PORT || 8080;

const app = express();
let counter = 0;

app.get('/', (req, res) => {
  ++counter;
  res.send(`Visitas => ${counter}`);
});

app.get('/suma', (req, res) => {
  const child = fork('./operacionCompleja.js');
  child.send('start');
  child.on('message', (result) => {
    res.send(`Resultado :${result}`);
  })
});

app.listen(PORT,()=>console.log("server arriba"));
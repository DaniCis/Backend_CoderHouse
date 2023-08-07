import express from 'express';
import ruteo from './routers/ruteo.router.js'

const app = express();
app.use(express.json());
app.listen(8080,()=>console.log("Server arriba"));

app.use('/api/ruteo',ruteo)
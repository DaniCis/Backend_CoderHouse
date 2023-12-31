import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import swaggerJsdoc from 'swagger-jsdoc'
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import swaggerUiExpress from 'swagger-ui-express'

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(`mongodb+srv://CoderUser:123@codercluster.w5adegs.mongodb.net/?retryWrites=true&w=majority`)

const swaggerOptions={
    definition:{
        openapi: '3.0.0',
        info:{
            title:' Documentacion de las APIs',
            description: ' Informacion de pets y de usuarios',
            version: '1.0.0',
            contact:{
                name: "Adelid Lopez",
                url:'linkedin.com/in/adelid-andrea-lópez-411868105/'
            }
        }
    },
    //apis: [`${process.cwd()}/src/docs/*.yaml`],
    //apis:[`${__dirname}/docs/**/*.yaml`]
    //apis:[`./docs/**/*.yaml`]
    apis:[`./docs/*.yaml`]
}

const spec = swaggerJsdoc(swaggerOptions)
app.use('/apidocs',swaggerUiExpress.serve,swaggerUiExpress.setup(spec))

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

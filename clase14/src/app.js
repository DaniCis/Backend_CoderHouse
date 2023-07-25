import express from "express";
import userRouter from './routes/users.router.js'
import mongoose from "mongoose";

const app = express()
const server = app.listen(8080, ()=> console.log('Server up'))

const config = {
  mongoDB: {
    URL: "mongodb+srv://danicis2:Danicis2@cluster0.qgrka8e.mongodb.net/?retryWrites=true&w=majority",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,  
    },
  },
};
export const connectMongoDB = async () => {
  try {
    await mongoose.connect(config.mongoDB.URL, config.mongoDB.options);
    console.log("Connected to Mongo Atlas");
  } catch (error) {
    console.log("Error en la conexión con Mongo Atlas", error);
  }
};

connectMongoDB()

app.use(express.json())

app.use('/api/users',userRouter);

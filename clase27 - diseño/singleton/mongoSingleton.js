import mongoose from "mongoose";

export default class mongoSingleton {
  static #instance;

  constructor() {
    mongoose.connect(
      "mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    
      );
      //console.log("conectado")
  }
  //esto se coloca despues de ejecutar 
  static getInstance() {
    if (this.#instance) {
      console.log("Conexion ya existe");
      return this.#instance;
    }
    this.#instance = new mongoSingleton();
    console.log("Conectado");
    return this.#instance;
  }
}
//const con1 = new mongoSingleton();
//const con2 =new mongoSingleton();

const con1 =  mongoSingleton.getInstance();
const con2 = mongoSingleton.getInstance();

console.log(con1 === con2)
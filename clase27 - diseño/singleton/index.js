import mongoSingleton from "./mongoSingleton.js";

const mongoPrimerIntancia =  mongoSingleton.getInstance();

const otraMongoIntancia = mongoSingleton.getInstance();
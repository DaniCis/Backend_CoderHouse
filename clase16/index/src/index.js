import userModel from "./models/user.model.js";
import mongoose from "mongoose";

const enviroment = async () => {
    mongoose.set('strictQuery',false)
    mongoose.connect('mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority')
    let response =await userModel.find().explain('executionStats');

    let  response1 = await userModel.find({first_name:"Celia"}).explain('executionStats');
    console.log (response)
    console.log (response1)
}

enviroment ();

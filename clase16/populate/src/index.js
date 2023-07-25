import mongoose from "mongoose";
import studentModel from "./models/student.model.js";
import courseModel from "./models/courses.model.js";
import { cursorTo } from "readline";


const enviroment =async() =>{

    mongoose.set('strictQuery',false)
    await mongoose.connect('mongodb+srv://andrealopez1904:Prueba123@pruebacoder.hcbwzjf.mongodb.net/?retryWrites=true&w=majority')

    
    await studentModel.create({
        first_name:"Laura",
        last_name: "Acuña",
        email:"correo@corre.com",
        gender:"Female",
    })
    
    await courseModel.create({
        title: "Backend",
        description: "Logica de apps",
        difficulty: 5,
        topic: ["Middleware", "DB", "Motores", "Seguridad"],
    })

    let student = await studentModel.findOne({ _id: "64ade62922edd44ba856b21b" })
    student.courses.push({ course: "64ade7f9d381b7f186688231" })
    let result = await studentModel.updateOne({ _id: "64ade62922edd44ba856b21b" }, student)

    let studentVeronica = await studentModel.findOne({ _id: "64ade62922edd44ba856b21b" }).populate("courses.course")
    //presentar el objeto completo y no solo el id
    console.log(JSON.stringify(studentVeronica, null, "\t"))
};

enviroment();

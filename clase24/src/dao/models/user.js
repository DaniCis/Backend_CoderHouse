import mongoose, { mongo } from "mongoose";

const userCollection='users'

const userSchema= new mongoose.Schema({
    first_name:{
        type:String,
        required: true
    },
    last_name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    dni:Number,
    birthDate:Date,
    gender:{
            type:String,
            enum:["M","F"]
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['student','teacher'],
        default:'student'
    },
    courses:{
        type:[
            {
                type:mongoose.SchemaTypes.ObjectId,
                ref:'Courses'
            }
        ],
        default:[]
    }
})

export const userModel=mongoose.model(userCollection,userSchema)
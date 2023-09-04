import mongoose from "mongoose";

const usersCollection = "users"

const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    rol:{
        type:String
    },
    orders:{
        type: Schema.Types.ObjectId,
        ref: 'orders'
    }
})
const usersModel = new mongoose.model(usersCollection,usersSchema)
export default usersModel
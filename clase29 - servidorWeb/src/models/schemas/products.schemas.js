import mongoose from "mongoose";

const productsCollection = "products"

const productsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
    }
})
const productsModel = new mongoose.model(productsCollection,productsSchema)
export default productsModel
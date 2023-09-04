import mongoose from "mongoose";

const businessCollection = "business"

const businessSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    products:[{
        type: Schema.Types.ObjectId,
        ref:'products'
    }],
})
const businessModel = new mongoose.model(businessCollection,businessSchema)
export default businessModel
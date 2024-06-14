import mongoose from "mongoose";

const userShema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:32,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    }
})
const User=mongoose.model("user",userShema)
export {User}
import { User } from "../model/user.js";
import jwt from "jsonwebtoken"

export function getUserByEmail(req){
    return User.findOne({
        email:req.body.email,
    }).populate("name","email")
}


export function generateToken(id){
    return jwt.sign({id},process.env.SECRET_KEY).populate("data");
}

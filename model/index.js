import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

try {
    mongoose.connect(`${process.env.LOCAL_MONGO_URL}`)
    console.log("moongoose Connected")
} catch (error) {
    console.log(error)
}

export default mongoose
   
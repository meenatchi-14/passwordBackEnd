import { mongoose } from "mongoose";

export function dbConnect() {
    const params={
        useNewUrlParams:true,
        useUnifedTopology:true
    }
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("database connection")
    } catch (error) {
        console.log(`datsbase connected error ${error}`)
        
    }
}
import  express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnect } from "./db.js";
import { userRouter } from "./Router/router.js";
//intialize configuration
dotenv.config();
const PORT=process.env.PORT;

//initalize server
const App=express();

//middleware
App.use(express.json())
App.use(cors())
//database connection
dbConnect();

//initializing routes
App.use("/app/user",userRouter)



//listening port

App.listen(PORT,()=>console.log(`server listening port ${PORT}`))



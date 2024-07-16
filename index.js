import express from 'express'
import dotenv from 'dotenv'
import AppRouter from './Router/index.js'
import cors from 'cors'
import bodyParser from 'body-parser';
dotenv.config()
const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',AppRouter)
//

//listening port
app.listen(PORT,()=>console.log(`app is listening to port ${PORT}`))
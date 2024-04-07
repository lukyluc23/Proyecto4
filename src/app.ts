import express, { Application } from "express"
import cors from "cors";
import { corsOptions } from "./config/cors";
import dotenv from "dotenv"


//---------------------------------------------------
dotenv.config()

const app:Application = express()


//Middlewares --> funciones de utilidad
app.use(express.json())
app.use(cors(corsOptions))

export default app
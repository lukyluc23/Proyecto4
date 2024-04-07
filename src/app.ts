import express, { Application } from "express"
import cors from "cors";
import { corsOptions } from "./config/cors";
import dotenv from "dotenv"
import apiRoutes from "./routes/api.routes"


//---------------------------------------------------
dotenv.config()

const app:Application = express()


//Middlewares --> funciones de utilidad
app.use(express.json())
app.use(cors(corsOptions))

// Api routes
app.use("/api", apiRoutes)

export default app
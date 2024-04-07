import { error } from "console";
import app from "./app";
import { dataSource } from "./database/data-source";

const PORT = process.env.PORT 


dataSource.initialize().then (() => {
    app.listen(PORT, ( ) => console.log(`🚀 Server running on port ${PORT}`))
    console.log (`Data source initialized `)
}).catch( (error)=> {
    console.error(error)
    process.exit(1)
})
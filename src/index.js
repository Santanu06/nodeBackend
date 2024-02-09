import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js"

const port = process.env.PORT || 8080

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log(`ERR:`,error);
        throw error
    })
    app.listen(process.env.PORT , ()=>{
        console.log(`Server is running at port: ${port} `);
    })
    
})
.catch((error)=>{
    console.log(`Failed to connect MongoDB!!!`);
})
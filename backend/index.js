import express, { json } from "express"
import cors from "cors"
import "./config/Config.js"
import { route } from "./routers/Router.js"
import { config } from "dotenv"
const app=express()
config()
app.use(json())
app.use(cors())
app.use("/products3",route)
app.listen(3001,()=>{
    console.log("app listened 3001");   
})
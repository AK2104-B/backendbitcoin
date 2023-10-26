import express from "express";
import { config } from "dotenv";
import Dbconnect from "./Data/Dbconnect.js";
import { route } from "./Routes/UserRoutes.js";
import cookieParser from "cookie-parser";
import cors from 'cors';


config({
    path: "./Data/config.env"
})

const app= express();
app.use(cors())
app.use(express.json());
app.use(cookieParser())

app.listen(5000,()=>{
    console.log("connecting to server");
})

Dbconnect();


app.use(route)
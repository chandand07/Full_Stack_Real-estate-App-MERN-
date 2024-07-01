import express from "express"
import postRoute from "./routes/postroutes.js"
import cookieParser from "cookie-parser";
import authroute from "./routes/authroutes.js"
import cors from "cors"
import 'dotenv/config';

const app = express();

app.use(cors({origin: process.env.CLIENT_URL , credentials: true}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/posts" , postRoute)
app.use("/api/auth" , authroute)

app.listen(8800 , () => {
    console.log("server is running")
})
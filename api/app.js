import express from "express"
import postRoute from "./routes/postroutes.js"
import authroute from "./routes/authroutes.js"

const app = express();

app.use(express.json())

app.use("/api/posts" , postRoute)
app.use("/api/auth" , authroute)

app.listen(8800 , () => {
    console.log("server is running")
})
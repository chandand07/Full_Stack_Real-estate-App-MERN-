import express from "express";
const router = express.Router()


router.get("/" , (req, res) => {
    console.log('server is running');  
    res.send("Hello from server")
})
router.get("/test" , (req, res) => {
    console.log('server is running');  
    res.send("Hello from server")
})

export default router
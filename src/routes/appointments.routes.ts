import express from "express"


const router = express.Router()

router.get("/user", (req, res)=>{
    res.send("get appointment user")
})

router.post("/create", (req, res)=>{
    res.send("create appointment")
})
router.put("/update", (req, res)=>{
    res.send("update appointment")
})
router.delete("/delete", (req, res)=>{
    res.send("delete appointment ")
})

router.get("/byWorker", (req, res)=>{
    res.send("get appointment by worker")
})

router.get("/detail", (req, res)=>{
    res.send("GET APPOINTMENT DETAIL BY USER")
    
})
router.get("/validation", (req, res)=>{
    res.send("GET APPOINTMENT VALIDATION")
})







export default router
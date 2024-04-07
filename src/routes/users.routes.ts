import express from "express"


const router = express.Router()

//user rotes

router.get("/profile", (req, res)=>{
    res.send("get profile")
})

router.put("/profile", (req, res)=>{
    res.send("put profile")
})

router.post('/register', (req, res)=>{
    res.send("register user")
})

router.post('/login', (req, res)=>{
    res.send("login user")
})

router.put('/update', (req, res)=>{
    res.send("update user")
})

router.get('/allUsers', (req, res)=>{
    res.send("All users")
})
router.get('/allWorkers', (req, res)=>{
    res.send("All Workers")
})

router.post('/worker', (req, res)=>{
    res.send("Create Worker")
})

router.delete('/deleteU', (req, res)=>{
    res.send("Delete User")
})




export default router
const express = require("express");
const router = express.Router()

router.post("/login" ,(req, res)=>{

    
    res.json({result:"login" })
})

router.post("/register", (req, res)=>{
    
    // console.log(req.body.username)
    const{username, password} = req.body 

    res.json({result: "register", username, password})

})

module.exports = router;
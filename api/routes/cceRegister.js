/*Users can able to register here */
const router=require("express").Router();
const User = require("../models/cce/cceRegister.js");
const bcrypt = require('bcrypt');
const bodyParser = require("body-parser");

router.get("/", (req, res)=>{
    console.log("open");   
    res.send("hello"); 
})

router.post("/",async(req,res)=>{
    try{
        const salt=await bcrypt.genSalt(10);
        console.log("hello");
        const hashedPass=await bcrypt.hash(req.body.password,salt);
        req.body.password = hashedPass;
        const newUser=new User(req.body);
        const user=await newUser.save();
        res.status(200);
        console.log(user);
        res.send(user);
        
    }catch(err){
        res.status(500);
        res.send("err");
    }});

module.exports=router
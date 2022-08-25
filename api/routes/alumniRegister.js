const router=require("express").Router();
const User = require("../models/alumniUser.js");
const bcrypt = require('bcrypt');
const bodyParser = require("body-parser");


router.get("/", (req, res)=>{
    console.log("open");   
    res.send("helo"); 
})

router.post("/",async(req,res)=>{
    try{
        const salt=await bcrypt.genSalt(10);
        console.log("hello");
        const hashedPass=await bcrypt.hash(req.body.password,salt);
        req.body.password = hashedPass;
       // console.log("hello");
        const newUser=new User(req.body);
       // console.log(req.body);
       // console.log(newUser);
        const user=await newUser.save();
       // console.log("hello");
        res.status(200);
        console.log(user);
        res.send(user);
        
    }catch(err){
        res.status(500);
        res.send("err");
    }});

module.exports=router
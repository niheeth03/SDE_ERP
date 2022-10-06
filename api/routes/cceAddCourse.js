const router=require("express").Router();
const User = require("../models/addCourse.js");
const bodyParser = require("body-parser");




router.get("/", (req, res)=>{
    console.log("open");   
    res.send("hello"); 
})

router.post("/",async(req,res)=>{
    try{
        console.log("hello");
        console.log(req.body);
        const newUser=new User(req.body);
        const user=await newUser.save();
        res.status(200);
        console.log(user);
        res.send(user);
        
    }catch(err){
        res.status(500);
        res.send("err");
        console.log(err);
    }});

module.exports=router
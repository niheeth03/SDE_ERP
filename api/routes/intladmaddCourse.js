/* Admin can add course  */
const router=require("express").Router();
const User = require("../models/intladm/intl_admCourses.js");
const bodyParser = require("body-parser");

router.get("/", (req, res)=>{
    console.log("open");   
    res.send("helo"); 
})

router.post("/",async(req,res)=>{
    try{
        console.log(req.body);
        console.log("hello from intl_adms add courses\n");        
        const newUser=new User(req.body);
        console.log(newUser);
        const user=await newUser.save().catch((err)=>console.log(err));
        console.log("hello after saving the course");
        res.status(200);
        console.log(user);
        res.send(user);
    }catch(err){
        res.status(500);
        res.send("err");
    }});

module.exports=router
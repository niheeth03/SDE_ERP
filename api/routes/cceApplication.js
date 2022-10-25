/* Backend for user application */
const router=require("express").Router();
const User = require("../models/cce/cceApplication.js");
const User2= require("../models/cce/cceRegister.js");
const bodyParser = require("body-parser");

router.get("/", (req, res)=>{
    console.log("open");   
    res.send("helo"); 
})


router.post("/",async(req,res)=>{
    try{
        console.log(req.body.email);
        const user2=await User2.find({email:req.body.email});
        const application={
            name: user2[0].name,
            email: user2[0].email,
            degree:user2[0].degree,
            department:user2[0].department,
            courseId: req.body.courseId,
            courseName: req.body.courseName,
            status: "pending"
        };
        const newUser=new User(application);
        const user=await newUser.save().catch((err)=>console.log(err));
        res.status(200);
        res.send(user);
    }catch(err){
        res.status(500);
        res.send("err");
    }});

module.exports=router



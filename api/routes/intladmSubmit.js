// Internal Admission Application Submission 

const router=require("express").Router();
const User = require("../models/intladm/intl_admApplication.js");
const User2= require("../models/intladm/intl_admUser.js");
const bodyParser = require("body-parser");

router.get("/", (req, res)=>{
    console.log("open");   
    res.send("helo"); 
})

router.post("/",async(req,res)=>{
    try{
        
        console.log("Try block of intladm submission\n"); 
        console.log(req.body.email);
        const user2=await User2.find({email:req.body.email});
        console.log("user2\n"+user2);
        console.log("user2[0]\n"+user2[0]);
        const application={
            firstName: user2[0].firstName,
            middleName: user2[0].middleName,
            lastName: user2[0].lastName,
            email: user2[0].email,
            gender: user2[0].gender,
            degree: user2[0].degree,
            branch: user2[0].branch,
            country: user2[0].country,
            courseId: req.body.courseId,
            courseName: req.body.courseName,
            status: "pending"
        };
        const newUser=new User(application);
        console.log(newUser);
        const user=await newUser.save().catch((err)=>console.log(err));
        console.log("hello after saving the application\n");
        res.status(200);
        console.log(user);
        res.send(user);
    }catch(err){
        res.status(500);
        res.send("err");
    }});

module.exports=router



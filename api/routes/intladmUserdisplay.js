/*Fetch all the applications */

const router=require("express").Router();
const User = require("../models/intladm/intl_admCourses.js");
const bodyParser = require("body-parser");

router.post("/",async(req,res)=>{
   // const email = req.body.email;
   // console.log(req);
    console.log("Inside courses fetch\n");
    try{
    console.log("Inside courses fetch try block\n");
  //  console.log("email "+email);
    let curItem = await User.find({});
    console.log("hello "+curItem);
  //  console.log(curItem[0].email);
    res.send(curItem);
    }catch(err){
        res.status(500);
        res.send("err");
    }
});

module.exports=router;

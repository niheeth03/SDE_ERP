const User=require("../models/intladm/intl_admApplication.js");
const router=require("express").Router();
const bodyParser = require("body-parser");


router.post("/",async(req,res)=>{
   // const email = req.body.email;
    console.log(req);
    console.log("Admin display\n");
    try{
    console.log("Admin display try block\n");
    let curItem = await User.find({status: "pending"});
    console.log("hello "+curItem);
    console.log(curItem[0]);
    res.send(curItem);
    }catch(err){
        res.status(500);
        res.send("err");
    }
});

module.exports=router;
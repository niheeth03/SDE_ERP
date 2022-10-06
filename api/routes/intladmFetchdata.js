const User=require("../models/intladm/intl_admUser.js");
const router=require("express").Router();
const bodyParser = require("body-parser");


router.post("/",async(req,res)=>{
    const email = req.body.email;
    console.log("email"+email);
    try{
    console.log("email "+email);
    curItem = await User.find({email: email});
    console.log(curItem);
    console.log(curItem[0].email);
    }catch(err){
        res.status(500);
        res.send("err");
    }
});

module.exports=router;
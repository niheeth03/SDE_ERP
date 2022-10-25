/* User can able to see application status */

const User=require("../models/cce/cceApplication.js");
const router=require("express").Router();
const bodyParser = require("body-parser");


router.post("/",async(req,res)=>{
    const email = req.body.user;
    try{
    let curItem = await User.find({email: email});
    res.send(curItem);
    }catch(err){
        res.status(500);
        res.send("err");
    }
});

module.exports=router;
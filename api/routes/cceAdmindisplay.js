/* Admin able to see all the pending applications */


const User=require("../models/cce/cceApplication.js");
const router=require("express").Router();
const bodyParser = require("body-parser");


router.post("/",async(req,res)=>{
    console.log(req);
    try{
    console.log("Admin display try block\n");
    let curItem = await User.find({status: "pending"});
    res.send(curItem);
    }catch(err){
        res.status(500);
        res.send("err");
    }
});

module.exports=router;
/* Admin will able to see all the courses*/
const User=require("../models/intladm/intl_admApplication.js");
const router=require("express").Router();
const bodyParser = require("body-parser");


router.post("/",async(req,res)=>{
   // const email = req.body.email;
   
    console.log(req);
    console.log("Admin display\n");
    try{
    const status=req.status ;
    console.log("Admin display try block\n");
    curItem = await User.find({status:status });
    console.log("hello "+curItem);
    console.log(curItem[0]);
    res.send(curItem);
    }catch(err){
        res.status(500);
        res.send("err");
    }
});

module.exports=router;
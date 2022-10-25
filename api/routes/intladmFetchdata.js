/* to fetch details of the applicatn */
const User=require("../models/intladm/intl_admApplication.js");
const router=require("express").Router();
const bodyParser = require("body-parser");


router.post("/",async(req,res)=>{
    const email = req.body.email;
    console.log(req);
    console.log("email"+email);
    try{
    console.log("email "+email);
    let curItem = await User.find({email: email});
    console.log("hello "+curItem);
    console.log(curItem[0].email);
    res.send(curItem);
    }catch(err){
        res.status(500);
        res.send("err");
    }
});

module.exports=router;
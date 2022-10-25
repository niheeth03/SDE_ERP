/* Admin can change the status of application */
const router=require("express").Router();
const User = require("../models/intladm/intl_admApplication.js");
const bodyParser = require("body-parser");


router.post("/",async(req,res)=>{
    const email = req.body.email;
    const courseId=req.body.courseId;
    const status=req.body.status;
    const action =req.body.action;
    console.log(req);
    console.log("email"+email);
    try{
    console.log("In adm action\n");
    console.log("email "+email);
    let curItem = await User.updateMany({email: email,courseId: courseId,status: "pending"},{$set:{status: status}});
    console.log("hello "+curItem);
    console.log(curItem[0].email);
    res.send(curItem);
    }catch(err){
        res.status(500);
        res.send("err");
    }
});

module.exports=router;
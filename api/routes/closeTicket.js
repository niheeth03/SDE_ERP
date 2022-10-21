const router=require("express").Router();
const User = require("../models/ticketing_system/tickets.js");
const bodyParser = require("body-parser");


router.post("/",async(req,res)=>{
    const email = req.body.email;
    const nature_of_request=req.body.nature_of_request;
    const complaint_type=req.body.complaint_type;
    const request_details=req.body.request_details;
    const status=req.body.status;
    const action =req.body.action;
    console.log(req);
    console.log("email"+email);
    try{
    console.log("In adm action\n");
    console.log("email "+email);
    let curItem = await User.updateMany({email: email,nature_of_request: nature_of_request,status: "pending",complaint_type:complaint_type,request_details:request_details },{$set:{status: status}});
    console.log("hello "+curItem);
    console.log(curItem[0].email);
    res.send(curItem);
    }catch(err){
        res.status(500);
        res.send("err");
    }
});

module.exports=router;
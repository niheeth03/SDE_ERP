/*Admin can able to see no. of participants registered in a course */

const router=require("express").Router();
const User = require("../models/cce/addCourse.js");
const bodyParser = require("body-parser");


router.post("/",async(req,res)=>{
    const email = req.body.email;
    const courseId=req.body.courseId;
    console.log(req);
    console.log("email"+email);
    try{
    console.log("In adm action\n");
    console.log("email "+email);
    let item=User.find({courseId:courseId})
    let participants=parseInt(User.participants,10);
    let curItem = await User.updateMany({courseId: courseId},{$set:{participants:(participants+1).toString() }});
    console.log("hello "+curItem);
    console.log(curItem[0].email);
    res.send(curItem);
    }catch(err){
        res.status(500);
        res.send("err");
    }
});

module.exports=router;
/* Admin will able to see all the courses*/

const router=require("express").Router();
const User = require("../models/cce/addCourse.js");
const bodyParser = require("body-parser");

router.post("/",async(req,res)=>{
    try{
    let curItem = await User.find({});
    res.send(curItem);
    }catch(err){
        res.status(500);
        res.send("err");
    }
});

module.exports=router;

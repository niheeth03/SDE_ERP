/*backend to fetch details of user */

const User=require("../models/alumni/alumniUser.js");
const router=require("express").Router();

router.get("/",async(req,res)=>{
    try{
    curItem = await User.find();
    res.send(curItem);
    }catch(err){
        res.status(500);
        res.send("err");
    }
});

module.exports = router;
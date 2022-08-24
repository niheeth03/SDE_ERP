const express=require('express');
const router=require("express").Router();
// const User = require("./../models/User.js");
// const bcrypt = require('bcrypt');

router.get("/", (req, res)=>{
    console.log("open");
    
})

router.post("/",async(req,res)=>{
    try{

        // const salt=await bcrypt.genSalt(10);
        // const hashedPass=await bcrypt.hash(req.body.password,salt)
        console.log(req.body);
        // const newUser=new User(req.body);
        // console.log(newUser.name);
        // const user=await newUser.save();
        console.log("errorrrrrr");
        res.send(req.body);
        // res.status(200).json(user);
    }catch(err){
        console.log(err);
        res.send("error");
        // res.status(500).json(err);
    }});

module.exports=router
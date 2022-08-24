// const express=require('express');
const router=require("express").Router();
const User = require("../models/alumniUser.js");
const bcrypt = require('bcrypt');

router.get("/", (req, res)=>{
    console.log("open");    
})

router.post("/",async(req,res)=>{
    try{
        const salt=await bcrypt.genSalt(10);
        const hashedPass=await bcrypt.hash(req.body.password,salt);
        
        console.log(req.body);
        req.body.password = hashedPass;
        const newUser=new User(req.body);
        const user=await newUser.save();
        res.status(200);
        res.send(user);
    }catch(err){
        res.status(500);
        res.send(err);
    }});

module.exports=router
const User = require("../models/alumniUser.js");
const router=require("express").Router();
const bcrypt = require('bcrypt');


const cookieParser=require("cookie-parser");
const session=require("express-session");
const cors=require("cors");


router.use(cors({
    origin:["https://localhost:3000/login"],
    methos:["GET","POST"],
    credentials: true,
}))
router.use(cookieParser());
router.use(
    session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60*60*24,
        },
    })
);

router.get("/",(req,res)=>{
    if(req.session.user){
        res.send({loggedIn: true,user: req.session.user})
    }
    else{
        res.send({loggedIn: false});
    }
});

router.post("/",async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

   /* const curData=await User.find({email: email});
    if(curData.length > 0){
        bcrypt.compare(password,curData[0].password,(err,response)=>{
            if(response){
                req.session.user= result;
                console.log(req.session.user);
                res.send("Correct combination");
            }
            else{
                res.send("Please check your Username/Password");
            }
        })


    }
    else res.send("Please check your Username/Password");*/
   // res.send(curData);
   User.find({email:email},(err,result)=>{
    if(result.length>0){
        bcrypt.compare(password,result[0].password,(err,response)=>{
            if(response){
                req.session.user= result;
                console.log(result.message);
                res.send(result);
            }
            else{
                console.log("error");
                res.send({msg:"Please check your Username/Password"});
            }
        })
    }
    else{
        console.log("error");
        res.send({msg:"Please check your Username/Password"});
    }
   });
});

module.exports=router
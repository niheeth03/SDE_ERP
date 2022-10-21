const User=require("../models/ticketing_system/ticketAdmin.js");
const router=require("express").Router();
const bcrypt = require('bcrypt');



const cookieParser=require("cookie-parser");
const session=require("express-session");
const cors=require("cors");



router.use(cors({
    origin:["https://localhost:3000/ticketing_system/*"],
    methods:["GET","POST"],
    credentials: true,
}))
router.use(cookieParser());
router.use(
    session({
        key: "intl_admUserId",
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
        const response={loggedIn: true,user: req.session.user}
      //  const myResponse=JSON.stringify(response)
      ///console logs
        console.log("Calling from internationalLogin GET API")
        for(let x in response){if(x=="loggedIn")console.log(true);console.log(response[x]);}
      //  console.log("GET"+myResponse.user);
        /////
        res.send(response);
    }
    else{
        res.send({loggedIn: false});
    }
});

router.post("/",async (req,res)=>{
    const email=req.body.email;
    console.log(email);
    const password=req.body.password;
    User.find({email:email},(err,result)=>{
    if(result.length>0){
        bcrypt.compare(password,result[0].password,(err,response)=>{
            if(response){
                req.session.user = result[0].email;

                ////////consoles
                console.log(req.session.user);
                console.log("hello" + result[0].email);
                console.log(result);
                ///////////

                res.send(result);
            }
            else{
                console.log("error hello");
                res.send({msg:"Please check your Username/Password"});
            }
        })
    }
    else{
        console.log(result);
        console.log("error hell");
        res.send({msg:"Please check your Username/Password"});
    }
   });
});

module.exports=router
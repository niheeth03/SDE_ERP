/* Admin can send groupemails*/
const path = require('path');
const express = require('express');
const router=require("express").Router();
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors')
app.use(cors())
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath)); 
 
router.post('/',(req,res)=>{
    var transporter = nodemailer.createTransport({
        service:'outlook' ,
        secureConnection: false, 
        auth: {
            user: 'niheeth@outlook.com',
            pass: '@laxminilayam'
        }
    });
 
    var mailOptions = {
        from: 'niheeth@outlook.com',// sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        text:req.body.description,
        html: `
        <div style="padding:10px;border-style: ridge">
            <p>Message: ${req.body.description}</p>
        
        `
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
            console.log("email not sent");
            console.log(error);
            res.json({status: false, respMesg: 'Email Sent UnSuccessfully'})
        } 
        else
        {
            console.log("email sent");
            res.json({status: true, respMesg: 'Email Sent Successfully'})
        }

    });
});

module.exports=router
 
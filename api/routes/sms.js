/* Admin can able to send sms */
const express = require('express');
const router=require("express").Router();
const accountSid = "ACec292264ed5a0dfa0163ea00302d4c73";
const authToken ="9667088b57b64d5afe75517032e73784";
const client = require('twilio')(accountSid, authToken);

router.post('/',(req,res)=>{
    client.messages
    .create({
        body: req.body.subject,
        from: '+918317657616',
        to: req.body.to
    })
    .then(message => console.log(message.sid));
})

module.exports=router;


const express =require("express")
const app = express();
const bodyParser = require("body-parser");
const dotenv=require("dotenv");
const mongoose =require("mongoose");
const cookieParser=require("cookie-parser");
const session=require("express-session");
const cors=require("cors");
const alumniregisterRoute =require("./routes/alumniRegister.js");
const alumniloginRoute=require("./routes/alumniLogin.js");
const alumadminloginRoute = require("./routes/alumadminLogin.js");
const emailRoute=require("./routes/groupEmail.js");
const smsRoute=require("./routes/sms.js");
const intladmLogin=require("./routes/intladmLogin.js");
const intladmRegister=require("./routes/intladmRegister.js");
const intladmFetchdata=require("./routes/intladmFetchdata.js");



mongoose
    .connect("mongodb+srv://niheeth23:laxminilayam@mastercluster.9eqlou1.mongodb.net/SDE_ERP?retryWrites=true&w=majority", (err, db) => {
        if(err) throw err;
        var dB = db.useDb("SDE_ERP");
        dB.collection("alumniusers").findOne({}, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
        // console.log(dB.intl_admcourses.find());
    })
    .then(console.log("connected to mongoDB"))
    .catch((err)=>console.log(err))

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/alumni_portal/alumni/register", alumniregisterRoute);
app.use("/alumni_portal/alumni/login", alumniloginRoute);
app.use("/alumni_portal/admin/login", alumadminloginRoute);
app.use("/groupEmail", emailRoute);
app.use("/sms",smsRoute);
app.use("/international_admissions/register",intladmRegister);
app.use("/international_admissions/login",intladmLogin);
app.use("/international_admissions/fetchdata",intladmFetchdata);



app.listen(3080,()=>{
    console.log("Backend is running");
});

{
/*Workflow of api :My understanding
1)All the lines except app.* will be executed exception app.listen()
2)When a request is sent to the server the app.* lines will be executed in the same order
as soon as it finds a match in path the execution terminates unless specifed a explicit next()
statement.
*/
}
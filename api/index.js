const express =require("express")
const app = express();
const bodyParser = require("body-parser");
const dotenv=require("dotenv");
const mongoose =require("mongoose");
const cookieParser=require("cookie-parser");
const session=require("express-session");
const cors=require("cors");
const registerRoute =require("./routes/alumniRegister.js");
const loginRoute=require("./routes/alumniLogin.js")
const emailRoute=require("./routes/groupEmail.js");
const smsRoute=require("./routes/sms.js");


mongoose
    .connect("mongodb+srv://niheeth23:laxminilayam@mastercluster.9eqlou1.mongodb.net/alumni?retryWrites=true&w=majority")
    .then(console.log("connected to mongoDB"))
    .catch((err)=>console.log(err))

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/groupEmail", emailRoute);
app.use("/sms",smsRoute);


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
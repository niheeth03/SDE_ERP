const mongoose = require("mongoose")
mongoose
    .connect("mongodb+srv://niheeth23:laxminilayam@mastercluster.9eqlou1.mongodb.net/intl_adm?retryWrites=true&w=majority")
    .then(console.log("connected to mongoDB"))
    .catch((err)=>console.log(err))
mongoose.connection.useDb("intl_adm");

const UserSchema= mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
    middlename:{
        type: String,
        required:false
    },
    lastname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    mobilenumber:{
        type: String,
        required:true,
        unique:true
    },
    gender:{
        type: String,
        required:true
    },
    rollnumber:{
        type: String,
        required:true,
        unique:true
    },   
    degree:{
        type: String,
        required:true
    },
    branch:{
        type: String,
        required:true
    },
    occupation:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    date: {
        type: String,
        required : true
    }
    
},{timestamps:true})


const UserModel = mongoose.model("User",UserSchema);
module.exports = UserModel;
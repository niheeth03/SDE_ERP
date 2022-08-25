const mongoose = require("mongoose");
const { db } = require("./intladmUser");


const UserSchema= mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    rollnumber:{
        type: String,
        required:true,
        unique:true
    },
    batch:{
        type: String,
        required:true
    },
    gender:{
        type: String,
        required:true
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
    }
    
},{timestamps:true})

const UserModel = mongoose.model("User",UserSchema);
module.exports = UserModel;
/* User Schema */

const mongoose = require("mongoose")

const UserSchema= mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    middleName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
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
    password:{
        type: String,
        required:true
    },
    country:{
        type:String,
        required: true
    },
    mobileNumber:{
        type:String,
        required: true
    }
   
    
},{timestamps:true})

const UserModel = mongoose.model("intl_admusers",UserSchema);
module.exports = UserModel;
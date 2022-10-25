/* User can register in CCE portal */

const mongoose = require("mongoose");

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

    gender:{
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

const UserModel = mongoose.model("cceRegister",UserSchema);
module.exports = UserModel;
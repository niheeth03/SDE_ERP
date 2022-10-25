/* admin of Alumni portal Schema */

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
    staffnumber:{
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

const UserModel = mongoose.model("alumniadmin",UserSchema);
module.exports = UserModel;
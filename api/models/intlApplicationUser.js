const mongoose= require('mongoose');

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

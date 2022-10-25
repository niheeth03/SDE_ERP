/* Admin can add course in CCE. This schema is for noting all the details of the course.*/
const mongoose = require("mongoose");

const UserSchema= mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    id:{
        type: String,
        required:true,
        unique:true
    },
    commence:{
        type: String,
        required:true,
    },
    completion:{
        type: String,
        required:true
    },
    department:{
        type: String,
        required:true
    },
    participants:{
        type:String,
        required:true
    }
    
},{timestamps:true})

const UserModel = mongoose.model("addCourses",UserSchema);
module.exports = UserModel;
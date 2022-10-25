/* International Students Application Schema */

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
    country:{
        type:String,
        required: true
    },
    courseId:{
        type: String,
        required: true
    },
   courseName:{
    type: String,
    required: true,
   },
   status:{
    type: String,
    required: true,
   }
    
},{timestamps:true})

const UserModel = mongoose.model("intl_admapplication",UserSchema);
module.exports = UserModel;
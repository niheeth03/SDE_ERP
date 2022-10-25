/* Schema which contains application details */

const mongoose = require("mongoose")

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
    degree:{
        type: String,
        required:true,
    },
    department:{
        type: String,
        required:true,
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

const UserModel = mongoose.model("cceApplication",UserSchema);
module.exports = UserModel;
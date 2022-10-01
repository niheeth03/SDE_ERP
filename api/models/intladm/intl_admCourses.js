const mongoose = require("mongoose")

const UserSchema= mongoose.Schema({
    degree:{
        type: String,
        required:true
    },
    department:{
        type: String,
        required:true
    },
},{timestamps:true})

const UserModel1 = mongoose.model("intl_admcourses",UserSchema);
module.exports = UserModel1;
/* Adding Courses Schema */

const mongoose = require("mongoose")

const UserSchema= mongoose.Schema({
    courseId: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required : true
    },

    degree:{
        type: String,
        required:true
    },
    department:{
        type: String,
        required:true
    },
    deadline:{
        type:String,
        required: true
    }
},{timestamps:true})

const UserModel1 = mongoose.model("intl_admcourses",UserSchema);
module.exports = UserModel1;


/// Changes to be done 
/// Add date field and the application should vanish after the deadline

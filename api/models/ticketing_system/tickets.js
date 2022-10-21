const mongoose = require("mongoose")

const UserSchema= mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required : true
    },
    subject: {
        type: String,
        required : true
    },
    nature_of_request:{
        type: String,
        required:true
    },
    complaint_type:{
        type:String,
        required: true
    },
    request_details:{
        type:String,
        required: true
    }
    ,
    status:{
    type: String,
    required: true,
   }
},{timestamps:true})

const UserModel1 = mongoose.model("tickets",UserSchema);
module.exports = UserModel1;



const mongoose = require("mongoose")

const UserSchema=mongoose.Schema({
    email:{
        type: String,
        required : false
    }
});


const UserModel = mongoose.model("intl_admapplications",UserSchema);
module.exports = UserModel;


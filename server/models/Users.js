const mongoose = require("mongoose")

const UsersSchema = mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    name : String,
    email : String,
    password : String,
    status : String,
},{ timestamps: true })


module.exports = mongoose.model("Users", UsersSchema)
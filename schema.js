const mongoose = require("mongoose")

const user = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:true
    }
})

const userSchema = mongoose.model("rekha",user);
module.exports = userSchema;
const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String
        },
        role:{
            type:Boolean,
            default:false
        }
    },{
        timestamps:true,  // el creatAT,updateAT 
        versionKey:false
    }
)

module.export = mongoose.model("users", UserScheme)
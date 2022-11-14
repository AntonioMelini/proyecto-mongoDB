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
            type:String,
            select:false  //no se muestra
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

module.exports = mongoose.model("users", UserScheme)
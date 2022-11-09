const mongoose = require("mongoose");

const StorageSchema = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:Number
        }
    },{
        timestamps:true,  // el creatAT,updateAT 
        versionKey:false
    }
)

module.export = mongoose.model("storages", StorageSchema)
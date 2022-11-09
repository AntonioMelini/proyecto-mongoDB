const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        album:{
            type:Number
        },
        cover:{
            type:String,
            validate:{
                validator: (req)=>{
                    return true;
                },
                message:"ERROR_URL"
            }
        },
        artist:{
            name:{
                type:String
            },
            nickname:{
                type:String
            },
            nationality:{
                type:String
            }
        },
        duration:{
            start:{
                type:Number
            },
            end:{
                type:Number
            }
        },
        mediId:{
            type: mongoose.Types.ObjectId //fdebe conformar una especie de caracteres segun mongoose
        }
    },{
        timestamps:true,  // el creatAT,updateAT
        versionKey:false
    }
)

module.export = mongoose.model("tracks", TrackSchema)
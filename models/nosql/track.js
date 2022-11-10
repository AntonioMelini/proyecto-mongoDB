const mongoose = require("mongoose");
const mongooseDelete= require("mongoose-delete");

const TrackSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        album:{
            type:String
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
        mediaId:{
            type: mongoose.Types.ObjectId //fdebe conformar una especie de caracteres segun mongoose
        }
    },{
        timestamps:true,  // el creatAT,updateAT
        versionKey:false
    }
)
TrackSchema.plugin(mongooseDelete,{overrideMethods:"all"})//sobreescribir los metodos que ya vienen nativos de mongoose de soft delete
module.exports = mongoose.model("tracks", TrackSchema)
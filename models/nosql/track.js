const mongoose = require("mongoose");
const mongooseDelete= require("mongoose-delete");

const TrackScheme = new mongoose.Schema(
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


// TrackScheme.statics.findAllData = ()=>{
//     const joinData = this.aggregate([//aca estas en tracks
//         {
//             $lookup:{
//                 from: "storages", //te relacionas con storages
//                 localField:"mediaId",//en tracks vas a utilizar mediaId
//                 foreignField: "_id",//mediaId va a tomar el valor de _id
//                 as:"audio",
//             }
//         },
//         {
//             $unwind:"$audio"
//         }
//     ])
//     return joinData;
// }

TrackScheme.plugin(mongooseDelete,{overrideMethods:"all"})//sobreescribir los metodos que ya vienen nativos de mongoose de soft delete
module.exports = mongoose.model("tracks", TrackScheme)
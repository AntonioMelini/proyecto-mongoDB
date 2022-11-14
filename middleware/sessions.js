const { usersModel } = require("../models")
const { handleHttpError } = require("../utils/handleError")
const { verifyToken } = require("../utils/handleJwt")



const authMiddleware= async (req,res,next)=>{
    try {
   
        if(!req.headers.authorization){ //del header se pregunta si hay autorizacion(un token)
            handleHttpError(res,"NEED_SESSION",401)
            return
        }
        const token= req.headers.authorization.split(" ").pop();
        const dataToken = await verifyToken(token); //verificamos que sea creado por nosotros el token
        //console.log(dataToken);
        if(!dataToken._id){ //verificamos que haya _id como lo establecimos en el handleJt
            handleHttpError(res,"ERROR_ID_TOKEN",401)
            return
        }

        const user= await usersModel.findById(dataToken._id)

        req.user=user
        next()

    } catch (error) {
        handleHttpError(res,"NOT_SESSION",401)
    }
}

module.exports= authMiddleware;
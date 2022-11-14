const { handleHttpError } = require("../utils/handleError")

const checkRol=async (req,res,next)=>{
    try {
        const user = req.user
        if(!user.role){
            handleHttpError(res,"DONT_HAVE_PERMISSION",403)
            return
        }
        next();
    } catch (error) {
        handleHttpError(res,"NOT_PERMISION",403)
    }
}
module.exports= checkRol;
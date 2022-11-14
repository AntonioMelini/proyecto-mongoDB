const JWT = require("jsonwebtoken");
const JWT_SECRET= process.env.JWT_SECRET

const tokenSign=async(user)=>{ // necesita el objeto del usuario
    const sign= await JWT.sign({
        _id: user._id,
        role: user.role
    },
    JWT_SECRET,
    {
        expiresIn:"2h"
    })
    return sign;
}


const verifyToken=async(tokenJWT)=>{// necesita el tokensign para ver si esta verificado
    try {
        return await JWT.verify(tokenJWT,JWT_SECRET)
    } catch (error) {
        return null
    }
}


module.exports={
    tokenSign,
    verifyToken
}
const {matchedData}=require("express-validator");
const { encrypt,compare}=require("../utils/handlePassword");
const {usersModel}= require("../models/index");
const {tokenSign}=require("../utils/handleJwt");
const {handleHttpError}=require("../utils/handleError")


const registerController=async(req,res,next)=>{
    try {
        req=matchedData(req);
    const password= await encrypt(req.password);
    console.log({password});

    const body={...req,password}
    console.log({body});

    
    const dataUser=await usersModel.create(body)


    console.log({dataUser});
    dataUser.set("password",undefined,{strict:false})//que no se muestre la contraseña
    
    const data={
        token:await tokenSign(dataUser),
        user:dataUser,
    }
    console.log({data});
    
    res.send(data)
    } catch (error) {
        handleHttpError(res,"REGISTER_ERROR")
    }
    
    
}

const loginController=async(req,res,next)=>{
    try {
        req=matchedData(req);
        const user= await usersModel.findOne({email:req.email}).select("password role name id email")//este .select se debe a que en el modulo le dijimos que predeterminadamente no muestre su password
        //console.log(user.password);
        if(!user){
            handleHttpError(res,"USER_NOT_EXIST",404)
            return
        }
        const check= await compare(req.password,user.password)
        if(!check){
            handleHttpError(res,"PASSWORD_INVALID",401)
            return
        }

        //si se encuentra el usuario y la contraseña es la correcta, se envia un JWT
        user.set("password",undefined,{strict:false}) //para que no muestre la password 
        const data={
            token:await tokenSign(user),
            user
        }
        res.send({data})

    } catch (error) {
        handleHttpError(res,"ERROR_LOGIN_USER")
    }
}

module.exports={
    registerController,
    loginController
}
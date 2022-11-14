const {validatorLogin,validatorRegister}=require("../validators/auth");
const {Router}=require("express");
const {registerController,loginController}=require("../controllers/auth")
const authRouter=Router();





authRouter.post("/register",validatorRegister,registerController)


authRouter.post("/login",validatorLogin,loginController)

module.exports= authRouter
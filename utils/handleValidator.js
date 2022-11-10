const { validationResult} =require("express-validator");

const validatorResults = (req,res,next)=>{
    
    try {
      validationResult(req).throw()// validatorResult(req) valida lo que el usuario envia mediante los request y si hay error el throw( crashea la app)
        return next()    //si no existe un error hacemos next, sigue con la ejecucion del codigo
    } catch (error) {
      res.status(403); 
      res.send({errors: error.array() });// envia un array de errores
    }
    
}
module.exports = validatorResults 
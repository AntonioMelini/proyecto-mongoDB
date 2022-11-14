const {check}=require("express-validator");
const validatorResults=require("../utils/handleValidator");

const validatorCreateItem =[
    check("filename")
        .exists()
        .notEmpty(),
    check("url")
        .exists()
        .notEmpty()
        .isURL(),
        (req,res,next)=>{
            return validatorResults(req,res,next)
        }
]

const validatorDeleteItem =[
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req,res,next)=>{
        return validatorResults(req,res,next)
    }
]

module.exports={
    validatorDeleteItem,
    validatorCreateItem
}
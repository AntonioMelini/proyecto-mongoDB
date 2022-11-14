const { check } = require("express-validator");
const validatorResults =require("../utils/handleValidator")

const validatorRegister=[
check("name")
    .exists()
    .notEmpty(),
check("age")
    .exists()
    .notEmpty()
    .isNumeric(),
check("email")
    .exists()
    .notEmpty()
    .isEmail(),
check("password")
    .exists()
    .notEmpty()
    .isLength({min: 6,max:20}),

    (req,res,next)=>{
        return validatorResults(req,res,next)
    }
];

const validatorLogin=[
    
    check("email")
        .exists()
        .notEmpty()
        .isEmail(),
    check("password")
        .exists()
        .notEmpty()
        .isLength({min: 6,max:20}),
        (req,res,next)=>{
            return validatorResults(req,res,next)
        }
    ];



module.exports={validatorRegister,
    validatorLogin}

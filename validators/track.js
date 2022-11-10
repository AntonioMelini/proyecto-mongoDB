const {check}=require("express-validator");
const validatorResults=require("../utils/handleValidator");

const validatorCreateItem = [
    check("name")
        .exists()
        .notEmpty()
        .isLength({min:5,max:20}),
    check("album")
        .exists()
        .notEmpty()
        .isLength({min:5,max:20}),
    check("cover")
        .exists()
        .notEmpty()
        .isLength({min:5,max:20}),
    check("artist")
        .exists()
        .notEmpty(),
    check("artist.name")
        .exists()
        .notEmpty()
        .isLength({min:5,max:20}),
    check("artist.nickname")
        .exists()
        .notEmpty()
        .isLength({min:5,max:20}),
    check("artist.nationality")
        .exists()
        .notEmpty()
        .isLength({min:5,max:20}),
    check("duration")
        .exists()
        .notEmpty(),
    check("duration.start")
        .exists()
        .notEmpty(),
    check("duration.end")
        .exists()
        .notEmpty(),
    check("mediaId")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req,res,next)=>{
        return validatorResults(req,res,next)
    }
];

const validatorDeleteItem=[
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
        (req,res,next)=>{
            return validatorResults(req,res,next)
        }
];

const validatorGetItem=[
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
        (req,res,next)=>{
            return validatorResults(req,res,next)
        }
];

module.exports= {validatorCreateItem,
                validatorDeleteItem,
                validatorGetItem                    
}


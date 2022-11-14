
const {Router}=require("express")
const {getItems,getItem, createItem, updateItem, deleteItem}=require("../controllers/tracks");
const checkRol = require("../middleware/role");
const authMiddleware = require("../middleware/sessions");
const { validatorCreateItem, validatorDeleteItem,validatorGetItem }=require("../validators/track")


const trackRouter=Router();

trackRouter.get("/:id",validatorGetItem,getItem)
trackRouter.get("/",authMiddleware,getItems)
trackRouter.put("/:id",validatorGetItem,authMiddleware,validatorCreateItem,updateItem)
trackRouter.delete("/:id",validatorDeleteItem,authMiddleware,deleteItem)
trackRouter.post("/create",validatorCreateItem,authMiddleware,checkRol,createItem)






module.exports=trackRouter
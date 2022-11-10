
const {Router}=require("express")
const {getItems,getItem, createItem, updateItem, deleteItem}=require("../controllers/tracks")
const { validatorCreateItem, validatorDeleteItem,validatorGetItem }=require("../validators/track")


const trackRouter=Router();

trackRouter.get("/:id",validatorGetItem,getItem)
trackRouter.get("/",getItems)
trackRouter.put("/:id",validatorGetItem,validatorCreateItem,updateItem)
trackRouter.delete("/:id",validatorDeleteItem,deleteItem)
trackRouter.post("/create",validatorCreateItem,createItem)






module.exports=trackRouter
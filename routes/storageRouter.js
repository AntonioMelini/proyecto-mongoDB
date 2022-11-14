const {Router}=require("express")
const uploadMiddleWare=require("../utils/handleStorage");
const {createItem, getItems,updateItem,getItem}=require("../controllers/storage");
const { deleteItem } = require("../controllers/storage");
const { validatorDeleteItem, validatorCreateItem } = require("../validators/storage");


const storageRouter=Router();

storageRouter.get("/:id",validatorDeleteItem,getItem)
storageRouter.get("/",getItems)
storageRouter.post("/",uploadMiddleWare.single("my-photo"),createItem)
storageRouter.put("/:id",uploadMiddleWare.single("my-photo"),updateItem)
storageRouter.delete("/:id",validatorDeleteItem,deleteItem)


module.exports=storageRouter
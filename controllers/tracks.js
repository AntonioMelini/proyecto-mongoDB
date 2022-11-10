const  { tracksModel}=require("../models/index");
const {handleHttpError} = require("../utils/handleError");
const {matchedData} =require("express-validator");


const getItems = async (req,res)=>{
try {
    const data= await tracksModel.find({})
    data.length ?     res.send({data}) : handleHttpError(res,"ERROR_GET_ITEMS",404)

} catch (error) {
    handleHttpError(res,"ERROR_GET_ITEMS")
}
}


 
const getItem =async (req,res)=>{
    try {
        req=matchedData(req);
        const {id}=req
      
            const data= await tracksModel.findById(id)
            //console.log(data);
            data ? res.status(200).json(data) : handleHttpError(res,"NOT_FOUND_ID",404)
        
         
    } catch (error) {
        handleHttpError(res,"ERROR_GET_ITEM",404)
    }
}



const createItem =async (req,res)=>{
    try {
        //  const {body}=req      si alguien envia mas datos se generaria un error
        const body= matchedData(req);
        
            console.log(body);
            const created= await tracksModel.create(body)
            res.send(created)
           
}   catch (error) {
    handleHttpError(res,"ERROR_CREATE_ITEM",403)
    }
}



const updateItem =async (req,res)=>{
    try {
        const {id,...body}=matchedData(req)
       
            const data= await tracksModel.findOneAndUpdate(id,body)
            res.status(200).json(data)
    } catch (error) {
        handleHttpError(res,"ERROR_UPDATE_ITEM",400)
    }
}


const deleteItem =async (req,res)=>{
    try {
        req=matchedData(req)
        const {id}=req;
        const data= await tracksModel.delete({_id:id}) //este .delete() es una funcion del mongoose-delete
        data.matchedCount ? res.status(200).json({msg:" was deleted", data}) : handleHttpError(res,"ID_ERROR",404)
        
       
        //res.status(200).json({msg:"se elimino correctamente",data:data})
    } catch (error) {
        handleHttpError(res,"ERROR_DELETE_ITEM",400)
    }
}








module.exports={
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem

}
const  {storageModel}=require("../models/index");
const {handleHttpError}=require("../utils/handleError")
const PUBLIC_URL = process.env.PUBLIC_URL;
const {matchedData} =require("express-validator");
const PATH_MEDIA= `${__dirname}/../storage`;
const fs = require("fs")

const getItems = async(req,res)=>{
    try {
        const data= await storageModel.find();
        data.length ? res.status(200).send(data) : handleHttpError(res,"EMPTY_FILE",400)
    } catch (error) {
        handleHttpError(res,"ERROR_GET_ITEMS")
    }
}
const getItem = async(req,res)=>{
    try {
        req=matchedData(req)
        const {id}=req

        const data= await storageModel.findById(id)
        data ? res.status(200).send(data) : handleHttpError(res,"CANNOT_FIND_ID",404)
    } catch (error) {
        handleHttpError(res,"ERROR_GET_ITEM",404)
    }
}

const createItem=async(req,res)=>{
    try {
        const  {file}=req
        console.log(file);
        const fileData= {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }

        const data= await storageModel.create(fileData)
        res.status(201).json({msg:"was created",data})
    } catch (error) {
        handleHttpError(res,"ERROR_DELETE_ITEM",400)
    }
}

const deleteItem=async(req,res)=>{
    try {



        req=matchedData(req)
        const {id}=req
        const dataFile= await storageModel.findById(id)
        if(dataFile){

          
            const {filename}= dataFile;
            const filePath= `${PATH_MEDIA}/${filename}`

            fs.unlinkSync(filePath);    
                const data={
                    filePath,
                    deleted:1
                }
            const eliminatedFile= await storageModel.delete({_id:id})
            res.status(200).json({msg:"SE BORRO PERFECTAMENTE",data:{mongodb:dataFile,storage:eliminatedFile}})
        }else{
            handleHttpError(res,"ERROR_ID")
        }
        
    } catch (error) {
        handleHttpError(res,"ERROR_DELETE_ITEM",400)
    }
}

const updateItem= async(req,res)=>{
    try {
        const {id,...body}=matchedData(req)
        const data= await storageModel.findByIdAndUpdate(id,body)
        console.log(data);
        res.send(data)
    } catch (error) {
        handleHttpError(res,"ERROR_UPDATE_ITEM")
    }
}

module.exports={
    createItem,
    deleteItem,
    getItems,
    getItem,
    updateItem
}
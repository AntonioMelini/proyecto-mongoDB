//mongodb+srv://antonio:Casaanto1@cluster0.jeyfg0g.mongodb.net/dbapi?retryWrites=true&w=majority
require("dotenv").config();
const express=require("express");
const cors=require("cors");
const dbConnect = require("./config/mongo");
const router = require("./routes/index");
const { dbConnectMysql } = require("./config/mysql");
const ENGINE_DB=process.env.ENGINE_DB

const app = express();

app.use(cors());
app.use(express.json()); //que acepte el metodo post
app.use(router);
app.use(express.static("storage"))//que acepte los archivos que tenemos en storages para mostarlo en la web

app.listen(process.env.PORT || 3000,()=>{
    console.log("aplicacion escuchando en el puerto `http://localhost:3000/`");
})

ENGINE_DB==="mysql" ? dbConnectMysql() : dbConnect()

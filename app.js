//mongodb+srv://antonio:Casaanto1@cluster0.jeyfg0g.mongodb.net/dbapi?retryWrites=true&w=majority
require("dotenv").config();
const expres=require("express");
const cors=require("cors");
const dbConnect = require("./config/mongo");

const app = expres();

app.use(cors());

app.listen(process.env.PORT || 3000,()=>{
    console.log("aplicacion escuchando en el puerto `http://localhost:3000/`");
})


dbConnect();
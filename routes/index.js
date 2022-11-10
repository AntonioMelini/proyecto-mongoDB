const {Router} =require("express");
const router=Router();
const fs=require("fs");

const PATH_ROUTE=__dirname;  //indica el path completo de la carpeta actual
const removeExt = (filename)=>{
    return filename.slice(0,-9)  //le sacas el Router.js
}

fs.readdirSync(PATH_ROUTE).filter((file)=>{ //te lee todos los nombres de los archivos en la carpeta actual
    const name= removeExt(file);

    if(name!==""){
        router.use(`/${name}`,require(`./${file}`))//le indicas que vas a usar como ruta el nombre del archivo sin Route.js y requeris su archivo de router
    }
}
)


module.exports= router
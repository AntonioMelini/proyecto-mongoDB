const bcryptjs =require("bcryptjs");







const encrypt = async(passwordPlain)=>{//contraseña sin encriptar
    const hash= await bcryptjs.hash(passwordPlain,10);
    return hash;
}

const compare =async (passwordPlain,hashPassword)=>{//necesita la contraseña sin encriptar y la encriptada que se guarda en el user
    return await bcryptjs.compare(passwordPlain, hashPassword)
}

module.exports={
    encrypt,
    compare
}
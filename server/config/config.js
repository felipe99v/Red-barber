//Es un objeto global 'process'
//========================
//PUERTO
//========================
process.env.PORT = process.env.PORT || 3000

//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//CONECTAR LAS BASES DE DATOS
// SI UNA PERSONA SE CONECTA CON EL MODO DE DESARROLLO SE 
// ENVIARA LA RUTA DEL LOCAL DE MONGO O SI NO TRABAJARA 
// EN LA NUBE DEL MONGO ATLAS
//MONGO_URL => hemos creado una variable del entorno en heroku para ocultar la ruta de la nube de mongo
let urlDB;

  if(process.env.NODE_ENV == 'dev'){
      urlDB = 'mongodb://localhost:27017/cafe'
  }else{
    urlDB =process.env.MONGO_URL
  }

process.env.URLDB = urlDB


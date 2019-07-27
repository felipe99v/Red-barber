require('./server/config/config')
const morgan = require('morgan')
const mongoose = require('mongoose');
const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

app.set('port', process.env.PORT || 3000);
// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//IMPORTA LA CARPETA ROUTE
app.use(require('./server/route/user'))


//SE CONNECTA LAS BASES DE DATOS DE MONGO
  mongoose.connect( process.env.URLDB , 
                    {useNewUrlParser:true,useCreateIndex:true}
                    ,(err,res)=>{
    if(err)throw err;

    console.log("BD ONLINE")
  });

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

//ESTA FUNCION LLAMA AL SERVIDOR EL PUERTO CORRESPONDIENTE
app.listen(process.env.PORT,()=>{
    console.log("Escuchando el puerto: ",process.env.PORT)
})
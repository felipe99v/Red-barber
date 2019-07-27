//PAQUETES IMPORTADOS EN NODE
const express = require('express')
const Usuario = require('../models/user')
const bcrypt = require('bcrypt')
const _ = require('underscore')

//EL APP SE DECLARA EL METODO DEL EXPRESS
const app = express()

//POST MUESTRA DATOS O LISTAR DATOS
app.get('/user', async (req, res) =>{

    //sIGNAR UNA NUEVA VARIABLE QUE PUEDA REALIZAR UN FILTRO OPCIONAL ES DECIR
    //desde el usuario quiere buscar un nombre or sino muestre los n de datos

    //postman
    //en el postman debe agregar el siguiente ejemplo
    //user?desde=n
    // si el usuario quiere filtrar mas de dos parametros 
    //son el siguiente ejemplo
    //user?desde=n&limite=n.
    let desde = req.query.desde || 0;
    desde = Number(desde)


    let limite = req.query.limite || 5
    limite = Number(limite)

    //Mongoose mostrar todos los datos get()
    //find({}) su funcion es mostrar todos los datos almacenados en mongodb}
    //exec(err,param) su funcion es ejecutelo 
    //skip(n) su funcion que salte n registros
    //limit(n) su funcion es mostrar n de registros
    await Usuario.find({ estados: true }, 'nombre apellido email edad telefono role estados img ')
        .skip(desde)
        .limit(limite)
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }

            //count() contar el numero de registros almacenados
            Usuario.count({ estados: true }, (err, conteo) => {
                res.json({
                    ok: true,
                    usuarios,
                    cuantos: conteo
                })

            })




        })


})

//POST UTILIZAN SOLO REGISTROS
app.post('/user', async (req, res) =>{



    let body = req.body

    // //ESTE OBJETO MOSTARA LOS DATOS QUE SON REQUISITOS PARA COMPLETAR LOS DATOS
    let usuario = new Usuario({
        nombre: body.nombre,
        apellido: body.apellido,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        repitaPassword: bcrypt.hashSync(body.repitaPassword, 10),
        telefono: body.telefono,
        edad: body.edad,
        role: body.role
    })

    // //CUANDO LA CONECCION DEL MONGO NO SE CONECTA ARROJARA UN MENSAJE DE ERROR EN LA CONSOLA
    await usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        })
    })
})

//PUT UTILIZAN DE ACTUALIZAR LOS REGISTROS
app.put('/user/:id', async (req, res)=> {
    let id = req.params.id
    let body = req.body
        // let body = _.pick(req.body, ['nombre', 'apellido', 'email', 'password', 'repitaPassword', 'img', 'edad', 'telefono', 'estados']);

    await Usuario.findByIdAndUpdate(id, body, (err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        })

    })




    // //{new: true} es un objeto, el metodo esta la documentacion de mongoose
    // // la funcion del new es mostrar el dato antes de modificar el dato

    // //runValidators esta la documentacion de mongoose
    // //la funcion es validar los datos que usted han asignado en la carpeta models/modelos
    // Usuario.findByIdAndUpdate(id, body,{new:true, runValidators: true}, (err, usuarioDB)=>{







})

  //DELETE
  app.delete('/user/:id', function (req, res) {

    let id = req.params.id;
    let cambiaEstados ={
      estados: false
    }
    //findByIdUpdate 
    // la funcion es una accion que pueda borrar un dato es lo mismo la funcion del update
    // Usuario.findByIdAndRemove(id,(err,usuarioBorrado)=>{
      Usuario.findByIdAndUpdate(id,cambiaEstados,{new:true},(err,usuarioBorrado)=>{
        if(err){
          return res.status(400).json({
            ok: false,
            err
          })
        }

        //sino existe el dato lanzara un error en la consola
        if(!usuarioBorrado){
          return res.status(400).json({
            ok: false,
            error: {
              message: 'Usuario no encontrado'
            }
          })
        }

        //este codigo borra el dato fisico
        res.json({
          ok: true,
          usuario: usuarioBorrado
        })


    })

  })



module.exports = app
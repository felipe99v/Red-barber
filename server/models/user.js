const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
}


let Schema = mongoose.Schema;

//ES EL "CONSTRUCTOR " DECLARA LOS ATRIBUTOS DE LA TABLA USUARIO EN EL MONGODB
let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },

    apellido: {
        type: String,
        required: [true, 'El apellido es necesario']
    },

    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },

    password: {
        type: String,
        required: [true, 'El password es necesario']
    },

    repitaPassword: {
        type: String,
        required: [true, 'El repita password es necesario']
    },

    telefono: {
        type: String,
        required: [true, 'El telefono es necesario']
    },

    img: {
        type: String,
        required: false
    },

    edad: {
        type: String,
        required: false
    },

    role: {
        type: String,
        enum: rolesValidos
    },

    estados: {
        type: Boolean,
        default: true

    },
});

//ESTA FUNCION NO MUESTRA EL ATRIBUTO PASSWORD PARA TENER UNA MAYOR SGURIDAD DE LA APLICACION
//CUANDO GUARDA LAS BASES DE DATOS MOSTRARA EL DATO ENCRIPTADO
usuarioSchema.methods.toJSON = function() {

    let users = this
    let userObject = users.toObject()
    delete userObject.password

    return userObject
}

//UNIQUE VALIDATOR UTILIZA SOBRE VALIDAR LOS DATOS SON UNICOS ES DECIR NO DEBE REPETIRSE
usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' })

//EXPOTAR EL MODULO EXPORT PARA QUE CREA AUTOMATICAMENTE LA CLASE USUARIO EN MONGODB
module.exports = mongoose.model('Usuario', usuarioSchema)
const mongoose = require ('mongoose');
const esquema =  mongoose.Schema;

//creamos el esquema de producto
const productoEsquema = new esquema({

    referencia : Number,
    nombre: String,
    descripcion: String,
    precio: Number,
    stock: Number,
    habilitado: Boolean
})

//crear modelo

const Producto = mongoose.model('Producto', productoEsquema);

module.exports = Producto;
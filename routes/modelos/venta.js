const mongoose = require ('mongoose');
const esquema =  mongoose.Schema;

//creamos el esquema de producto
const ventaEsquema = new esquema({

    referencia : Number,
    nombre: String,
    descripcion: String,
    precio: Number,
    stock: Number,
    habilitado: Boolean
})

//crear modelo

const Venta = mongoose.model('Venta', ventaEsquema);

module.exports = Venta;
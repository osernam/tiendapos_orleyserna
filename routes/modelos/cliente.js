const mongoose = require ('mongoose');
const esquema =  mongoose.Schema;


//creamos el esquema de cliente

const clienteEsquema = new esquema({

    nombre: String,
    telefono: String,
    ubicacion: Object,
    totalComprado: Number,
    historicoCompras: Array

})

//crear modelo

const Cliente = mongoose.model('Cliente', clienteEsquema)

module.exports = Cliente;


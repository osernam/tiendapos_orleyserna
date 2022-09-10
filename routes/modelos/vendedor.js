const mongoose = require ('mongoose');
const esquema =  mongoose.Schema;

//creamos el esquema de producto
const vendedorEsquema = new esquema({

    nombre: String,
    documento: String,
    ventasDespachadas: Array
})

//crear modelo

const Vendedor = mongoose.model('Vendedor', vendedorEsquema);

module.exports = Vendedor;
const express = require('express');
const bdt = require('../config/conexion').conexionBaseDatos;
const router = express.Router();
const cliente = require('./modelos/cliente');
const producto = require('./modelos/producto');
const vendedor = require('./modelos/vendedor');
const venta = require('./modelos/venta');

//router.get('/index',(req,res)=>{
  //  res.render('paginas/index', require('../config/conection')    );


//} );

router.get('/inicio', async (req, res) => {
   const listaCliente = await cliente.find()
   console.log(listaCliente)
   res.render('paginas/index');
  });

  
router.post('/registrar',(req,res)=>{
   
    res.render('paginas/registrarProducto')
});

router.get('/registrar',(req,res)=>{
    var nuPro = new producto(
        //son los nomberes de los campos del formulario en ejs
    { referencia:    req.params.Referencia,
      nombre:        req.params.Nombre,
      descripcion:   req.params.Descripcion,
      precio:        req.params.Precio,
      stock:         req.params.Stock,
      habilitado:    req.params.Habilitado
    })

    nuPro.save(function(err) {
        if (err) return console.error(err);
      });

    res.render('paginas/registrarProducto')
});




router.get('/conectar',async(req,res)=>{
    const bd = bdt.conexionBaseDatos;
    const tienda = await bdt.Collection('tiendapos');
    console.log(tienda.find({}));
} );


module.exports = router;
const expres = require('express');
const bdt = require('../config/conexion');
const router = expres.Router();


router.get('/index',(req,res)=>{
    res.render('paginas/index', require('../config/conection')    );
} );

router.get('/conectar',(req,res)=>{
    const bd=bdt.conexionBaseDatos;
    const tienda = await bd.Collection('tiendapos');
    console.log(tienda.find({}));
} );


module.exports = router;
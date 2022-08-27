const expres = require('express');
const router = expres.Router();


router.get('/index',(req,res)=>{
    res.render('paginas/index', require('../config/conection')    );
} );

module.exports = router;
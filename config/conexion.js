const conexionBaseDatos  = require('mongoose');

const usuario = 'osernam' ;
const clave = 'jU6I4Wppm2zAHtVu' ;
const uri = `mongodb+srv://${usuario}:${clave}@cluster0.kdhlkef.mongodb.net/?retryWrites=true&w=majority`;

const parametrosConexion ={
    useNewUrlParser : true,
    useUnifiedTopology :true
}

conexionBaseDatos.connect(uri, parametrosConexion)
    .then(()=> console.log("Base de datos conectada")) //mensaje exitoso

    .catch((err) => console.error(err));//muestra el error


                                                                                                                        
    module.exports={
        conexionBaseDatos
    }
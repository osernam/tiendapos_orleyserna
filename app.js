const express = require('express');
const app = express();
const PORT = process.env.PORT || 8900


app.use('/', require('./routes/index')); 
app.get('/',  require('./routes/index'));                                                                                                                                                           

app.set('view engine', 'ejs');

const path = require('path');
app.set('views', path.join(__dirname, '/views')) //donde se renderizaran las paginas

app.listen(PORT,()=>{
    console.log ('hello '+`${PORT}`);
});
   
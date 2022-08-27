
usuario = 'osernam' ;
clave = 'bedaha81' ;
const MongoCLI = require ('mongodb').MongoClient;

const uri = "mongodb+srv://${usuario}:bedaha81@cluster0.kdhlkef.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoCLI(uri);

const database = client.db('FakeStore');
const coleccion = database.collection('Products');

const query = {title : "Bufanda Suiza"};

const cursor = coleccion.find(query);

cursor.forEach(console.dir);;

module.exports={
    cursor
}
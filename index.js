//Importamos la libreria de express
const express = require('express');

//Generamos un objeto express
const app = express();

//Especificamos un directorio público
app.use(express.static(__dirname + '/public'));

//Arranque del servidor
app.listen(3000, ()=>{
 console.log('Escuchando el puerto tcp 3000')
});


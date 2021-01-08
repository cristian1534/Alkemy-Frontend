const express = require('express');
const morgan = require('morgan');
const app = express();


//settings
app.set('port', process.env.PORT || 3000); //opc serv en la nube
app.set('json spaces', 2) //es el salto de linea dentro de las llaves

//middlewares
app.use(morgan('dev')); //me permite ver por consola lo que va llegando al servidor
app.use(express.json()); //permite a la app entender los json
app.use(express.urlencoded({extended: false})); //entiende los datos que llegan de los formularios, ej: textos de inputs

//routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies')); //url /api/movies....
app.use('/api/users', require('./routes/users')); //jsonplaceholder website


//starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
});
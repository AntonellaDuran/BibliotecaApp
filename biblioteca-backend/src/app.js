const express = require('express')
const cors = require('cors')

const app = express()
PORT = process.env.PORT  || 5000

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())

app.use(require('../src/routes/estudiante/estudiante'));
app.use(require('../src/routes/prestamo/prestamo'));
app.use(require('../src/routes/material-bibliografico/material'));
app.use(require('../src/routes/libro/libro'));
app.use(require('../src/routes/solicitud-ayuda/solicitud'));

app.listen(PORT)
console.log('Servidor escuchando por el puerto',PORT)
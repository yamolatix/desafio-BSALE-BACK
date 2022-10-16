// Express para las rutas
const express = require('express');

//Requiero el .env
require("dotenv").config();

// Middelwares
const cookieParser = require('cookie-parser');
const cors = require('cors');
const volleyball = require('volleyball')

// Importo rutas
const routes = require('./routes');

const app = express();

// Ejecuto Middelwares
app.use(express.json());
app.use(cookieParser());
app.use(volleyball)
app.use(cors())
app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', 'https://desafio-bsale-front-one.vercel.app/');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Routes
app.use('/api', routes);

// El Middleware para manejo de errores posee un parámetro extra, en este caso lo llamo err
// Este último Middleware detecta los errores y los coloca en dicho parámetro
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Some custom error!', err.message);
});

// Conecto servidor
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

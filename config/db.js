//Importo la función utilizada para producción de mysql
const { createPool } = require('mysql');

//Requiero el .env
require('dotenv').config();

// Creo el objeto de conexion y lo guardo en una constante
const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

function handleConnection() {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.error('mysql getConnection err', err);
            return;
        }
        connection.ping();
        connection.release();
    });
}
setInterval(handleConnection, 5000);

module.exports = pool;
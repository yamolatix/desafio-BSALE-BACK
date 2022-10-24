require("dotenv").config(); //Requiero el .env

// Loader con la información para la conexion de la DB
const config = {
    db: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        multipleStatements: true
    }
}

module.exports = config // Exporto el loader
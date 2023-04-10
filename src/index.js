const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require('express-fileupload');

require("./database/associations")

// Importacion de las rutas
const apiroutes = require("./routes/apiRouter");

// importacion de la conexion/instancia de la base de datos
const sequelize = require("./database/db")

// Conversión a json datos que nos envían para post, put, patch...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload());
// conexión con mysql
app.use("/sanitaria", apiroutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor eschando en http://localhost:${PORT}`);
    sequelize
        .sync({ force: false })
});
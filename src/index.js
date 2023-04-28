const bodyParser = require("body-parser");
const express = require("express");
/* const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() }); */
const app = express();
const cors = require("cors");
// const fileUpload = require('express-fileupload');

require("./database/associations");

// Importacion de las rutas
const apiroutes = require("./routes/apiRouter");

// importacion de la conexion/instancia de la base de datos
const sequelize = require("./database/db");

// Conversión a json datos que nos envían para post, put, patch...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false})); 
app.use(cors());

app.use("/sanitaria", apiroutes);
// app.use(fileUpload());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor eschando en el puerto: ${PORT}`);
  sequelize.sync({ force: false });
});

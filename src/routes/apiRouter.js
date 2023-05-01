const apirouter = require("express").Router();
const middlewares = require("../middlewares/middlewares");

// Importacion de las distintas rutass
const tecnicorouter = require("./tecnicoRouter");
const casetterouter = require("./casetteRouter");
const muestrarouter = require("./muestraRouter");

// Uso de las distintas rutas
apirouter.use("/tecnicos", tecnicorouter);
apirouter.use("/cassettes",/*  middlewares.checkToken, */ casetterouter);
apirouter.use("/muestras", middlewares.checkToken, muestrarouter);

module.exports = apirouter;

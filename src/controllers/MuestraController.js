const Services = require("../services/MuestraService");

const getMuestras = async (req, res) => {
  const muestras = await Services.getAllMuestras();
  res.json(muestras);
};

const getUnMuestra = async (req, res) => {
  const muestra = await Services.getUnMuestra(req.params.id);
  muestra != null
    ? res.json(muestra)
    : res.json({ message: "No se ha encontrado ningun registro" });
};

const createMuestra = async (req, res) => {
  const muestras = await Services.createMuestra(req.body);
  res.json(muestras);
};

module.exports = { getMuestras, getUnMuestra, createMuestra };

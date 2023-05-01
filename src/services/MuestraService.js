const Muestra = require("../database/models/Muestra");
const multer = require("multer");

const getUnMuestra = async (muestraId) => {
  const muestra = await Muestra.findOne({
    where: { id_muestra: `${muestraId}` },
  });
  return muestra;
};

const getAllMuestras = async () => {
  const muestras = await Muestra.findAll();
  return muestras;
};

const storage = multer.memoryStorage();

upload = multer({ storage });
const createMuestra = async (muestra) => {
  muestra = { ...muestra, qr_casette: "muestra_" + Date.now() };
  muestra = { ...muestra, imagen: req.file.buffer };
  console.log(muestra)
  const nuevamuestra = await Muestra.create(muestra);
  
  return nuevamuestra;
};

module.exports = { getUnMuestra, getAllMuestras, createMuestra };

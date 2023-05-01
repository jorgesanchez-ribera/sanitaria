const muestraRouter = require("express").Router();
const { and } = require("sequelize");
const Controller = require("../controllers/MuestraController");
const Muestra = require("../database/models/Muestra");
const Imagen = require("../database/models/Imagen");
const multer = require("multer");

muestraRouter.get("/", Controller.getMuestras);
muestraRouter.get("/cassette/:id", async (req, res) => {
  const muestras = await Muestra.findAll({
    /*   include: {
      model: casettes,
    }, */
    where: { casetteIdCasette: `${req.params.id}` },
  });
  res.json(muestras);
});

muestraRouter.get("/:id", Controller.getUnMuestra);

const storage = multer.memoryStorage();
upload = multer({ storage });

muestraRouter.post("/", upload.single("imagen"), async (req, res) => {
  let muestra = req.body;
  let imagenaux = {};
  console.log(req.file);
  try {
    muestra = { ...muestra, qr_muestra: "muestra_" + Date.now() };
    const nuevamuestra = await Muestra.create(muestra);

    if (req.file) {
      imagenaux = { ...imagenaux, imagen: req.file.buffer };
      imagenaux = { ...imagenaux, muestraIdMuestra: nuevamuestra.id_muestra };
      await Imagen.create(imagenaux);
    }

    return res.json("200");
  } catch {
    (error) => console.log("no funciona" + error);
  }
});

module.exports = muestraRouter;

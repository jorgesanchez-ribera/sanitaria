const muestraRouter = require("express").Router();
const Controller = require("../controllers/MuestraController");
const Muestra = require("../database/models/Muestra");

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
muestraRouter.post("/", Controller.createMuestra);

module.exports = muestraRouter;

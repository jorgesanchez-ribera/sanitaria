const casetteRouter = require("express").Router();
const Controller = require("../controllers/CasetteController");
const Casette = require("../database/models/Casette");
const Muestra = require("../database/models/Muestra");


casetteRouter.get("/", Controller.getCasettes);

casetteRouter.get("/index", async (req, res) => {
  const cassettes = await Casette.findAll({
    order: [["fecha", "DESC"]],
    limit: 20,
  });

  res.json(cassettes);
});

casetteRouter.post("/",Controller.crearCasette);
// casetteRouter.get("/organo", middlewares.checkToken, Controller.onlyOrganos);
casetteRouter.get("/organo/:organo", Controller.getPorOrgano);
casetteRouter.get("/fecha/:fecha", Controller.getPorFecha);
casetteRouter.get("/fecharango/:fechainicio/:fechafin",
  Controller.getPorFechaRango
);
casetteRouter.get("/:id", Controller.getUnCasette);
casetteRouter.put(  "/:id",Controller.putCassette);

casetteRouter.delete("/:id", async (req, res) => {
   await Muestra.destroy({
    where: { casetteIDCasette: parseInt(req.params.id) },
    force: true,
  });
  await Casette.destroy({
    where: { id_casette: parseInt(req.params.id) },
    force: true,
  });
 
});

module.exports = casetteRouter;

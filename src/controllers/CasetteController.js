const Services = require("../services/CasetteService");

const getCasettes = async (req, res) => {
  const casettes = await Services.getAllCasettes();
  res.json(casettes);
};

const getCasettesIndex = async (req, res) => {
  const cassettes = await Services.getCasettesIndex();
  cassettes != null
    ? res.json(cassettes)
    : res.json({ message: "No se ha encontrado ningún Cassette" });
};

const getUnCasette = async (req, res) => {
  const casette = await Services.getUnCasette(req.params.id);

  casette != null
    ? res.json(casette)
    : res.json({ message: "No se ha encontrado ningún Cassette" });
};

const crearCasette = async (req, res) => {
  console.log("llega al controlador ")
  const casette = await Services.crearCasetteService(req.body);
  res.json(casette);
};

const putCassette = async (req, res) => {
  const casette = await Services.putCassetteService(req.body, req.params.id);
  res.json(casette);
};

const getPorOrgano = async (req, res) => {
  const casette = await Services.buscarPorOrgano(req.params.organo);

  casette != null
    ? res.json(casette)
    : res.json({ message: "No se ha encontrado ningun registro" });
};

const onlyOrganos = async (req, res) => {
  const organos = await Services.getOnlyOrganos();
  res.json(organos);
};

const getPorFecha = async (req, res) => {
  const casette = await Services.buscarPorFecha(req.params.fecha);

  casette != null
    ? res.json(casette)
    : res.json({ message: "No se ha encontrado ningun registro" });
};
const getPorFechaRango = async (req, res) => {
  const casette = await Services.buscarPorFechaRango(req.params.fechainicio, req.params.fechafin);

  casette != null
    ? res.json(casette)
    : res.json({ message: "No se ha encontrado ningun registro" });
};

module.exports = {
  getCasettes,
  getUnCasette,
  crearCasette,
  getPorOrgano,
  getPorFecha,
  getPorFechaRango,
  onlyOrganos,
  getCasettesIndex,
  putCassette,
};

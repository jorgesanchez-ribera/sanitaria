const Services = require("../services/TecnicoService.js");

const getTecnicos = async (req, res) => {
  const tecnicos = await Services.getAllTecnicos();
  res.json(tecnicos);
};

const getUnTecnicoMail = async (req, res) => {
  const response = await Services.getUnTecnicoMail(req.params.mail);
  res.json(response);
};

const registro = async (req, res) => {
  const response = await Services.register(req.body);
  res.json(response);
};

const login = async (req, res) => {
  const response = await Services.login(req.body);
  res.json(response);
};

module.exports = { getTecnicos, getUnTecnicoMail, registro, login };

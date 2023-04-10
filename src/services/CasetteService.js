const Casette = require("../database/models/Casette");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const getUnCasette = async (casetteId) => {
  const casette = await Casette.findOne({
    where: { id_casette: `${casetteId}` },
  });
  return casette;
};

const getAllCasettes = async () => {
  const casettes = await Casette.findAll({
    order: [["fecha", "ASC"]],
    limit: 20,
  });
  return casettes;
};

/* const getCasettesIndex = async () => {
  const [cassettes, metadata] = await sequalize.query(
    `SELECT * FROM cassettes WHERE fecha BETWEEN CAST('${date1}' AS DATE) AND CAST('${date2}' AS DATE) ORDER BY fecha DESC LIMIT 20;`
  );
  return cassettes;
}; */

const crearCasetteService = async (post) => {
  console.log(post);
  const cassette = await Casette.create(post);
  return cassette.id_casette;
};

const putCassetteService = async (cassette, id) => {
  console.log(cassette);
  console.log(id);
  const updatecassette = await Casette.update(
    {
      fecha: cassette.fecha,
      caracteristicas: cassette.caracteristicas,
      observaciones: cassette.observaciones,
      organo: cassette.organo,
    },
    {
      where: {
        id_casette: id,
      },
    }
  );

  return updatecassette.id_casette;
};

const buscarPorOrgano = async (organo) => {
  const casettes = await Casette.findAll({ where: { organo: `${organo}` } });
  return casettes;
};

const buscarPorFecha = async (fecha) => {
  console.log("Servicio");
  const casettes = await Casette.findAll({ where: { fecha: fecha } });
  return casettes;
};

const buscarPorFechaRango = async (fechainicio, fechafin) => {
  const cassettes = await Casette.findAll({
    where: {
      fecha: {
        [Op.between]: [fechainicio, fechafin],
      },
    },
    order: [
      ['fecha', 'DESC'],
  ],
  });
  return cassettes;
};

const getOnlyOrganos = async () => {
  const organos = await Casette.findAll({
    attributes: ["organo"],
    group: "organo",
  });
  return organos;
};

module.exports = {
  getUnCasette,
  getAllCasettes,
  crearCasetteService,
  buscarPorOrgano,
  buscarPorFecha,
  buscarPorFechaRango,
  getOnlyOrganos,
  putCassetteService,
};

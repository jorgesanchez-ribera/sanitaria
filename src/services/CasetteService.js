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
  const casettes = await Casette.findAll();
  return casettes;
};

const crearCasetteService = async (post) => {
  console.log("El cassette ha sido creado service");
  const cassette = await Casette.create(post);
  return cassette.id_casette;
};

const putCassetteService = async (cassette, id) => {
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

/* const getOnlyOrganos = async () => {
  const organos = await Casette.findAll({
    attributes: ["organo"],
    group: "organo",
  });
  return organos;
}; */

module.exports = {
  getUnCasette,
  getAllCasettes,
  crearCasetteService,
  buscarPorOrgano,
  buscarPorFecha,
  buscarPorFechaRango,
/*   getOnlyOrganos, */
  putCassetteService,
};

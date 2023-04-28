const Casette = require("../database/models/Casette");
const Sequelize = require("sequelize");
const generator = require("generate-password");
const Op = Sequelize.Op;

const getUnCasette = async (casetteId) => {
  let casette = await Casette.findOne({
    where: { id_casette: `${casetteId}` },
  });
  console.log(casette.imagen);

  //  casette={  ...casette, imagen:casette.imagen.toString('base64')};
  casette.imagen = casette.imagen.toString("base64");
  console.log(casette.imagen);
  console.log(casette);
  return casette;
};

const getAllCasettes = async () => {
  const casettes = await Casette.findAll();
  return casettes;
};

const crearCasetteService = async (post) => {
  let qr = generator.generate({
    length: 10,
    numbers: true,
    uupercase: false,
    lowercase: false,
    strict: false,
  });
  // Añadimos el codigo qr generado aleatoriamente
  post = { ...post, qr_casette: "cassette_" + qr };
  const cassette = await Casette.create(post);
  return cassette.id_casette;
};

const putCassetteService = async (cassette, id) => {
  const updatecassette = await Casette.update(
    {
      descripcion: cassette.descripcion,
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
    order: [["fecha", "DESC"]],
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

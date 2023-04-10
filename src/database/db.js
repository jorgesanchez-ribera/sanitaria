const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "sanitariabd", //nombre bd
  "root", //nombre user
  "", //contraseña usuario
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;

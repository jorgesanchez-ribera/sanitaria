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

/*  const sequelize = new Sequelize(
  "sanitariabd", //nombre bd
  "sanitariabd", //nombre user
  "sanitariabd", //contraseña usuario
  {
    host: "10.227.192.20:3306",
    dialect: "mysql",
  }
) */ ; 

module.exports = sequelize;

const sequelize = require("../db")

const { Model, DataTypes } = require("sequelize")

class Casette extends Model {}

Casette.init({
    id_casette: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    caracteristicas: {
        type: DataTypes.TEXT('medium'),
        allowNull: false
    },
    observaciones: {
        type: DataTypes.TEXT('medium'),
    },
    imagen: {
        type: DataTypes.BLOB,
    },
    qr_casette: {
        type: DataTypes.STRING,
        allowNull: false
    },
    organo: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: "casette",
    timestamps: false,
})

module.exports = Casette
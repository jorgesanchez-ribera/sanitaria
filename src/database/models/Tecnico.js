const sequelize=require("../db")

const {Model, DataTypes} = require ("sequelize")

class Tecnico extends Model{}

Tecnico.init({
    id_tecnico:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,

    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    apellidos:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    curso:{
        type:DataTypes.STRING,
        allowNull:false
    },
    centro:{
        type:DataTypes.STRING
    }
},{
    sequelize,
    modelName:"tecnico",
    timestamps:false,
})

module.exports=Tecnico
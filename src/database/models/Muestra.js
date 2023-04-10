const sequelize=require("../db")

const {Model, DataTypes} = require ("sequelize")

class Muestra extends Model{}

Muestra.init({
    id_muestra:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,

    },
    fecha:{
        type:DataTypes.DATE,
        allowNull:false
    },
    observaciones:{
        type:DataTypes.STRING,
    },
    tincion:{
        type:DataTypes.STRING,
        allowNull:false

    },
    qr_muestra:{
        type:DataTypes.STRING,
        allowNull:false
    },
    
},{
    sequelize,
    modelName:"muestra",
    timestamps:false,
})

module.exports=Muestra
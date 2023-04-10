const sequelize=require("../db")

const {Model, DataTypes} = require ("sequelize")

class Imagen extends Model{}

Imagen.init({
    id_imagen:{
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
    qr_imagen:{
        type:DataTypes.STRING,
        allowNull:false
    },
    
},{
    sequelize,
    modelName:"imagen",
    timestamps:false,
})

module.exports=Imagen
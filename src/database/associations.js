const Tecnico=require("./models/Tecnico")
const Casette=require("./models/Casette")
const Imagen=require("./models/Imagen")
const Muestra=require("./models/Muestra")

// 1 Ténico realiza M Casette
Tecnico.hasMany(Casette)
Casette.belongsTo(Tecnico)

// 1 Casette tiene M Muestras
Casette.hasMany(Muestra)
Muestra.belongsTo(Casette)

// 1 Muesta tiene M imagenes
Muestra.hasMany(Imagen)
Imagen.belongsTo(Muestra)
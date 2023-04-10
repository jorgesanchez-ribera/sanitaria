const Tecnico=require("./models/Tecnico")
const Casette=require("./models/Casette")
const Imagen=require("./models/Imagen")
const Muestra=require("./models/Muestra")

// 1 Ténico realiza M Casette
Tecnico.hasMany(Casette)
Casette.belongsTo(Tecnico)

// 1 Casette tiene M Cortes
Casette.hasMany(Muestra)
Muestra.belongsTo(Casette)

// 1 Corte obtiene M Muestras
Muestra.hasMany(Imagen)
Imagen.belongsTo(Muestra)
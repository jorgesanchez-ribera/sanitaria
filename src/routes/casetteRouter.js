const casetteRouter = require("express").Router();
const Controller = require("../controllers/CasetteController");
const Casette = require("../database/models/Casette");
const Muestra = require("../database/models/Muestra");

// Subir imagenes en memoria, para guardar en la
const multer = require("multer");
/*  const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // límite de tamaño de archivo de 10 MB
  },
});  */

// Configurar Multer para manejar la carga de archivos en disco
/* const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
}); */

// Configurar multer para menejar la carga en memoria
const storage = multer.memoryStorage();

upload = multer({ storage });

casetteRouter.post("/",upload.single("imagen"), async (req, res) => {
  let post = req.body;
  let file= req.file;
   console.log( file)

 
   console.log("llega")
  
  
  post = { ...post, qr_casette: "cassette_" + Date.now() };
  post = { ...post, imagen: req.file.buffer };
  console.log(post)
  const cassette = await Casette.create(post);
  return cassette.id_casette;
});

casetteRouter.get("/", Controller.getCasettes);

casetteRouter.get("/index", async (req, res) => {
  const cassettes = await Casette.findAll({
    order: [["fecha", "DESC"]],
    limit: 20,
  });

  res.json(cassettes);
});

// casetteRouter.post("/", Controller.crearCasette);

// casetteRouter.get("/organo", middlewares.checkToken, Controller.onlyOrganos);
casetteRouter.get("/organo/:organo", Controller.getPorOrgano);
casetteRouter.get("/fecha/:fecha", Controller.getPorFecha);
casetteRouter.get(
  "/fecharango/:fechainicio/:fechafin",
  Controller.getPorFechaRango
);
casetteRouter.get("/:id", Controller.getUnCasette);
casetteRouter.put("/:id", Controller.putCassette);

casetteRouter.delete("/:id", async (req, res) => {
  await Muestra.destroy({
    where: { casetteIDCasette: parseInt(req.params.id) },
    force: true,
  });
  await Casette.destroy({
    where: { id_casette: parseInt(req.params.id) },
    force: true,
  });
});

module.exports = casetteRouter;

const Tecnico = require("../database/models/Tecnico");
const bcrypt = require("bcryptjs");
const moment = require("moment");
const jwt = require("jwt-simple");
const nodemailer = require("../email/sendEmail");
const generator = require("generate-password");

const getUnTecnicoMail = async (email) => {
  const tecnico = await Tecnico.findOne({ where: { email: `${email}` } });
  let password =
    generator.generate({
      length: 10,
      numbers: true,
      uupercase: true,
      lowercase: true,
      strict: true,
    }) + "__";

  if (tecnico) {
    await Tecnico.update(
      { password: bcrypt.hashSync("Aa_123456", 10) },
      // { password: bcrypt.hashSync(password, 10) },
      {
        where: {
          email: email,
        },
      }
    );
    nodemailer(email, password);
    return { status: 200 };
  }
  return { status: 400 };
};

const getAllTecnicos = async () => {
  const tecnicos = await Tecnico.findAll();
  return tecnicos;
};

const createToken = (user) => {
  const payload = {
    usuarioId: user.id_tecnico,
    createdAt: moment().unix(),
    expiredAt: moment().add(8, "hours").unix(),
  };
  // Añadir un .env con dotenv
  return jwt.encode(payload, "Token256");
};

const login = async (req) => {
  const user = await Tecnico.findOne({
    where: {
      email: req.email,
    },
  });

  if (user) {
    const isCorrectPass = bcrypt.compareSync(req.password, user.password);
    if (isCorrectPass) {
      return { token: createToken(user) };
    } else {
      return { error: "Usuario o contraseña incorrectos" };
    }
  } else {
    return { error: "Usuario o contraseña incorrectos" };
  }
};

const register = async (user) => {
  let newuser, response;

  // Comprobamos si el usuario ya se ha dado de alta

  const oneuser = await Tecnico.findOne({
    where: {
      email: user.email,
    },
  });
  if (oneuser) {
    return { error: "El usuario ya existe" };
  } else {
    try {
      newuser = await Tecnico.create({
        nombre: user.nombre,
        apellidos: user.apellidos,
        email: user.email,
        password: bcrypt.hashSync(user.password, 10),
        curso: user.curso,
        centro: user.centro,
      });
    } catch (error) {
      return { error: "Error al registrar" };
    }
  }
  return { status: 200 };
};

module.exports = { getUnTecnicoMail, getAllTecnicos, register, login };

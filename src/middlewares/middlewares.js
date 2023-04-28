const jwt = require("jwt-simple");
const moment = require("moment");

const checkToken = (req, res, next) => {
  const userToken = req.headers["token"];
  let payload = {};
  if (!userToken) {
    return res.json({ error: "Falta Token" });
  }
  try {
    payload = jwt.decode(userToken, "Token256");
  } catch (error) {
    return res.json({
      error: "El token ha expirado, debes volver a loguearte",
    });
  }
  if (payload.expiredAt < moment().unix()) {
    return res.json({
      error: "El token ha expirado, debes volver a loguearte",
    });
  }
  next();
};

module.exports = { checkToken};

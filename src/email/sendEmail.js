const nodemailer = require("nodemailer");


const enviarCorreo = (email, password) => {

  //Crear un objeto para poder el email
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "sanitariavirtual@gmail.com",
      pass: "zkxbwnztkpkcomec",
    },
  });
  //Correo a enviar
  const message = {
    from: "sanitariavirtual@gmail.com",
    to: email,
    subject: "Contraseña de recuperacion",
    html:
      "<center><h3> Esta es su nueva contraseña:</h3> <span  style='color:tomato;'> <b>" +
      password +
      "</b></span> <p>Le recomendamos que cambie la contraseña cuando acceda a la aplicación</p></center>",
  };

  transporter.sendMail(message);
};

module.exports = enviarCorreo;

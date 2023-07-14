const nodemailer = require("nodemailer");

require("dotenv").config();

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "olhamunaieva@meta.ua",
    pass: process.env.PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);
// const emailOptions = {
//   from: "olhamunaieva@meta.ua",
//   to: "cajas18903@niback.com",
//   subject: "Nodemailer test",
//   text: "Привіт. Ми тестуємо надсилання листів!",
// };

// transporter
//   .sendMail(emailOptions)
//   .then((info) => console.log(info))
//   .catch((err) => console.log(err));

const sendEmail = async (data) => {
  const email = { ...data, from: "olhamunaieva@meta.ua" };
  await transporter.sendMail(email);
};

module.exports = sendEmail;

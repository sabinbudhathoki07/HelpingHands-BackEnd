const nodemailer = require("nodemailer");
const config = require("../config/user.config");

const user = config.user;
const pass = config.pass;

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

module.exports.sendConfirmationEmail = (userFullName, userEmailAddress, confirmationCode) => {
  transport
    .sendMail({
      from: user,
      to: userEmailAddress,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
        <h2>Hello ${userFullName}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=http://localhost:3000/user/confirm/${confirmationCode}> Click here</a>
        <p>${confirmationCode}</p>
        </div>`,
    })
    .catch((err) => console.log(err));
};

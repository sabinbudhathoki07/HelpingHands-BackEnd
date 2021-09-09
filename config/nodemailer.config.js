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

module.exports.sendConfirmationEmail = (userFullName, userEmailAddress, Confirmationcode) => {
  transport
    .sendMail({
      from: user,
      to: userEmailAddress,
      subject: "Please Confirm Your Account",
      html: `<h1>Email Confirmation</h1>
        <h2>Hello ${userFullName}</h2>
        <p>Thank You for Creating an Account on Helping Hands. Please Confirm Your Email by Clicking on the Following link</p>
        <a href=http://helpinghand-backend.herokuapp.com/user/confirm/${Confirmationcode}> Click here</a>
        <p> Your Confirmation Code : <a href=http://helpinghand-backend.herokuapp.com/user/confirm/${Confirmationcode}>${Confirmationcode}</a></p>
        </div>`,
    })
    .catch((err) => console.log(err));
};

const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.ukr.net",
    port: 2525,
    secure: true,
    auth: {
        user: "mmalovana@ukr.net",
        pass: META_PASSWORD
    }
};

const transporter = nodemailer.createTransport(nodemailerConfig);

async function sendEmail (data) {
    const email = {...data};
    console.log(email);
    await transporter.sendMail(email)
        .then(() => console.log("Email send success"))
        .catch(error => console.log(error.massage));
};

module.exports = sendEmail;
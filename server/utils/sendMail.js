const nodemailer = require("nodemailer");
console.log(process.env.USER_MAIL, process.env.USER_PASSWORD);
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.USER_PASSWORD,
  },
});

function sendMail(email, subject, html) {
  const mailOptions = {
    from: process.env.USER_MAIL,
    to: email,
    subject,
    html,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

function registerMail(captcha) {
  return `
    <h3>請於設設購物註冊頁輸入您的驗證碼</h3>
    <h1>${captcha}</h1>
  `;
}
module.exports = { sendMail, registerMail };

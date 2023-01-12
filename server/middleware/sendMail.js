const nodemailer = require("nodemailer");
console.log(process.env.USER_MAIL, process.env.USER_PASSWORD);
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.USER_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

function sendMail(email, subject, html) {
  const mailOptions = {
    from: process.env.USER_MAIL,
    to: email,
    subject,
    html,
  };
  console.log(mailOptions);
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

function forgetPasswordMail(captcha) {
  return `
    <h3>請於忘記密碼頁輸入您的驗證碼</h3>
    <h1>${captcha}</h1>
  `;
}

function orderMail(order, status, msg) {
  return `
    <html>
      <head>
        <style>
        td { padding: 5px; }
        .title { background-color: #dcffff; }
        </style>
      </head>
      <body>
        <div>
          <p>親愛的顧客，您好:</p>
          <p>您在射射購物下了一筆訂單，以下為您的訂單資訊 :</p>
          <table border="3">
            <tbody>
            <tr>
              <td class="title">訂單號碼</td>
              <td>${order.order_number}</td>
            </tr>
            <tr>
              <td class="title">訂單金額</td>
              <td>${order.order_prize}</td>
            </tr>
            <tr>
              <td class="title">姓名</td>
              <td>${order.recipient}</td>
            </tr>
            <tr>
              <td class="title">寄送地址</td>
              <td>${order.address}</td>
            </tr>
            <tr>
              <td class="title">電話</td>
              <td>${order.phone}</td>
            </tr>
            <tr>
              <td class="title">訂單狀態</td>
              <td>${status}</td>
            </tr>
          </tbody>
          </table>
          <p>${msg}</p>
        </div>
      </body>
    </html>
  `;
}
module.exports = { sendMail, forgetPasswordMail, orderMail };

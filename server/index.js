// 載入 dotenv
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// 設定跨網域
app.use(cors());
// 解析 cookie
app.use(cookieParser());
// 解析 application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
// 解析 application/json
app.use(bodyParser.json());
var path = require("path");
// 設置路由
require("./routes")(app);
app.use("/assets", express.static(__dirname + "/dist/assets"));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
// 設置錯誤處理
app.use((err, req, res, next) => {
  if (err) {
    console.log("500 error: ", err);
    return res.status(500).json({ err });
  }
});
app.listen(8080, () => {
  console.log("Server running on port 8080.");
});

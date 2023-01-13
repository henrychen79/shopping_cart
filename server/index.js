//初始化資料庫
require("./database");

// 載入 dotenv
require("dotenv").config();

const express = require("express");
const app = express();

// 設置日誌
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  {
    flags: "a",
  }
);
app.use(morgan("short", { stream: accessLogStream }));

// 設定跨網域
const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
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

// 設置API路由
const api_route = require("./routes/api_route");
app.use("/api", api_route);

// 設置畫面檔案入口
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

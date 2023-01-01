const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
// 解析 application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
// 解析 application/json
app.use(bodyParser.json());

// 設置路由
require("./routes")(app);

// 設置錯誤處理
app.use((err, req, res, next) => {
  if (err) {
    console.log("500 error: ", err);
    return res.status(500).json({ message: err.message });
  }
});
app.listen(8080, () => {
  console.log("Server running on port 8080.");
});

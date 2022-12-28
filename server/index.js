const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// 解析 application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
// 解析 application/json
app.use(bodyParser.json());
app.listen(8080, () => {
  console.log("Server running on port 8080.");
});

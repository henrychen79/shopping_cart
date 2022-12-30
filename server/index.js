const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("./models").initDatabase();
const apiRoute = require("./routes");
app.use(cors());
// 解析 application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
// 解析 application/json
app.use(bodyParser.json());
app.use("/api/product", apiRoute.product);
app.use("/api/register", apiRoute.register);
app.listen(8080, () => {
  console.log("Server running on port 8080.");
});

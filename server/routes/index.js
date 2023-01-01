require("../models").initDatabase();
const product = require("./modules/product");
const user = require("./modules/user");
const admin = require("./modules/admin");
module.exports = (app) => {
  app.use("/api/product", product);
  app.use("/api/user", user);
  app.use("/api/admin", admin);
};

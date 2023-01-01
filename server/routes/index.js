require("../models").initDatabase();
const product = require("./modules/product");
const user = require("./modules/user");
module.exports = (app) => {
  app.use("/api/product", product);
  app.use("/api/user", user);
};

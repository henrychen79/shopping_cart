require("../models").initDatabase();
const product = require("./modules/product");
const register = require("./modules/register");
module.exports = (app) => {
  app.use("/api/product", product);
  app.use("/api/register", register);
};

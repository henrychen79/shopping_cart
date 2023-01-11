require("../models").initDatabase();
const product = require("./modules/product");
const user = require("./modules/user");
const admin = require("./modules/admin");
const member = require("./modules/memberCenter");
const cart = require("./modules/cart");
const order = require("./modules/order");
// console.log(order);
module.exports = (app) => {
  app.use("/api/product", product);
  app.use("/api/user", user);
  app.use("/api/admin", admin);
  app.use("/api/member", member);
  app.use("/api/cart", cart);
  app.use("/api/order", order);
};

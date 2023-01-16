const express = require("express");
const router = express.Router();
const product = require("./product");
const user = require("./user");
const admin = require("./admin");
const member = require("./memberCenter");
const cart = require("./cart");
const order = require("./order");
router.use("/product", product);
router.use("/user", user);
router.use("/admin", admin);
router.use("/member", member);
router.use("/cart", cart);
router.use("/order", order);
module.exports = router;
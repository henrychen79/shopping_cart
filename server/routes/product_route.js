const router = require("express").Router();
const product_M = require("../models/product_M");
router.use((req, res, next) => {
  console.log("A request is coming in to product_route.js");
  next();
});

router.get("/testAPI", (req, res) => {
  const msgObj = {
    message: "Test API is working.",
  };
  return res.json(msgObj);
});
router.get("/", (req, res) => {
    console.log(product_M.getProduct(2));
  return res.json(msgObj);
});
router.get("/category/:category_id", (req, res) => {
  //console.log(product_M.getProduct(2));
  return res.json(product_M.getProduct(2));
});

module.exports = router;

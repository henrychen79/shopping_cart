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
  let category_id = req.query.category_id;
  let product_num = req.query.product_num;
  product_M.getSpecificiProduct(category_id, product_num).then((data) => {
    return res.json(data);
  });
});
router.get("/category/:category_id", (req, res) => {
  let page = req.query.page;
  let category_id = req.params.category_id;
  product_M.getProduct(category_id, page).then((data) => {
    return res.json(data);
  });
});

module.exports = router;

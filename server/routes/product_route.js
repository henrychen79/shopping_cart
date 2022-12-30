const router = require("express").Router();
const product_M = require("../models/product_M");

router.use((req, res, next) => {
  console.log("A request is coming in to product_route.js");
  next();
});

/**********************************以下為假資料測試用******************************************/
router.get("/testAPI", (req, res) => {
  const msgObj = {
    message: "Test API is working.",
  };
  return res.json(msgObj);
});
/**********************************以上為假資料**********************************************/

//連接主頁時的API
router.get("/", (req, res) => {
  let category_id = req.query.category_id;
  let product_num = req.query.product_num;
  product_M
    .getSpecificiProduct(category_id, product_num)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send(err));
});

//按下頁數後，收到類型跟頁數，回應六筆資料的API
router.get("/category/:category_id", (req, res) => {
  let page = req.query.page;
  let category_id = req.params.category_id;
  product_M
    .getProduct(category_id, page)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;

const router = require("express").Router();
const productController = require("../../controllers/productController");

router.use((req, res, next) => {
  console.log("A request is coming in to product route.js");
  next();
});

//取得特定商品詳細資訊
router.get("/", productController.getSpecificiProduct);

//取得全部商品類型及其總量
router.get("/allCategory", productController.allCategory);

//取得特定商品總類中所有商品
router.get("/category/:category_id", productController.getProducts);

//取得特定商品圖片
router.get("/image", productController.getProductImg);

module.exports = router;

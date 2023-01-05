const router = require("express").Router();
const cartController = require("../../controllers/cartController");
router.use((req, res, next) => {
  console.log("A request is coming in to cart route.js");
  next();
});
//加入商品至購物車
router.get("/:user_id", cartController.getCartItem);
router.post("/addToCart", cartController.addToCartItem);

module.exports = router;

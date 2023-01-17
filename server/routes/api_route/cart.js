const router = require("express").Router();
const authorization = require("../../middleware/authorization");
const cartController = require("../../controllers/cartController");
router.use((req, res, next) => {
  console.log("A request is coming in to cart route.js");
  next();
});
//加入商品至購物車
router.get("/:user_id", authorization.checkJWT, cartController.getCartItem);
router.post("/addToCart", authorization.checkJWT, cartController.addToCartItem);
router.post("/delCartItem", authorization.checkJWT, cartController.delCartItem);

module.exports = router;

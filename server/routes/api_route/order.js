const router = require("express").Router();
const authorization = require("../../middleware/authorization");
const orderController = require("../../controllers/orderController");
router.use((req, res, next) => {
  console.log("A request is coming in to order route.js");
  next();
});
router.get(
  "/list/:user_id",
  authorization.checkJWT,
  orderController.getOrderList
);
router.post(
  "/createOrder",
  authorization.checkJWT,
  orderController.createOrder
);
module.exports = router;

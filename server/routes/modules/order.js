const router = require("express").Router();
const orderController = require("../../controllers/orderController");
router.use((req, res, next) => {
  console.log("A request is coming in to order route.js");
  next();
});
router.get("/list/:user_id", orderController.getOrderList);
router.post("/createOrder", orderController.createOrder);
module.exports = router;

const router = require("express").Router();
const memberCenterController = require("../../controllers/memberCenterController");
router.use((req, res, next) => {
  console.log("A request is coming in to user route.js");
  next();
});

router.get("/update_nickname", memberCenterController.update_nickname);
router.get("/getAllOrders", memberCenterController.allOrders);

module.exports = router;
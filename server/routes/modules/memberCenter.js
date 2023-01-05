const router = require("express").Router();
const memberCenterController = require("../../controllers/memberCenterController");
router.use((req, res, next) => {
  console.log("A request is coming in to user route.js");
  next();
});

router.post("/update_nickname", memberCenterController.update_nickname);
router.get("/getAllOrders", memberCenterController.allOrders);

module.exports = router;
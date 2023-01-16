const router = require("express").Router();
const authorization = require("../../middleware/authorization");
const memberCenterController = require("../../controllers/memberCenterController");
router.use((req, res, next) => {
  console.log("A request is coming in to user route.js");
  next();
});

router.post(
  "/update_nickname",
  authorization.checkJWT,
  memberCenterController.update_nickname
);
router.post(
  "/modify_password",
  authorization.checkJWT,
  memberCenterController.modifyPassword
);
router.get("/getAllOrders", memberCenterController.allOrders);

module.exports = router;

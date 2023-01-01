const router = require("express").Router();
const userController = require("../../controllers/userController");
router.use((req, res, next) => {
  console.log("A request is coming in to user route.js");
  next();
});
router.get("/checkAccountExist", userController.checkAccountExist);
router.post("/registerAccount", userController.registerAccount);

module.exports = router;

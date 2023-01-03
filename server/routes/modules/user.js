const router = require("express").Router();
const userController = require("../../controllers/userController");
router.use((req, res, next) => {
  console.log("A request is coming in to user route.js");
  next();
});
router.get("/checkAccountExist", userController.checkAccountExist);
router.post("/registerAccount", userController.registerAccount);
router.post("/login", userController.login);
router.post("/forgetPassword", userController.forgetPassword);
router.post("/updatePassword",userController.updatePassword);

module.exports = router;

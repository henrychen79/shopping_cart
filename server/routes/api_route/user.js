const router = require("express").Router();
const userController = require("../../controllers/userController");
router.use((req, res, next) => {
  console.log("A request is coming in to user route.js");
  next();
});
router.get("/checkAccountExist", userController.checkAccountExist);
router.post("/registerAccount", userController.registerAccount);
router.post("/login", userController.login);
//忘記密碼＋寄送臨時密碼信函
router.post("/forgetPassword", userController.forgetPassword);
//修改密碼
router.post("/updatePassword",userController.updatePassword);

module.exports = router;

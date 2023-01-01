const router = require("express").Router();
const upload = require("../../utils/uploadMulter");
const adminController = require("../../controllers/adminController");
router.use((req, res, next) => {
  console.log("A request is coming in to admin route.js");
  next();
});
router.post(
  "/uploadImage",
  upload.single("image"),
  adminController.uploadImage
);

module.exports = router;

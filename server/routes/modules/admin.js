const router = require("express").Router();
const upload = require("../../middleware/uploadMulter");
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

router.post("/update_product", adminController.update_product);
router.post("/update_order", adminController.update_order);

module.exports = router;

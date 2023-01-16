const router = require("express").Router();
const upload = require("../../middleware/uploadMulter");
const adminController = require("../../controllers/adminController");
const productController = require("../../controllers/productController");
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
//編輯特定商品（前端給商品id）OK
router.get("/edit_product", adminController.getSpecificiProduct);
//更新商品資訊 OK
router.post("/update_product",adminController.update_product);
//更新價格 OK
router.post("/update_price", adminController.update_price);
//更新庫存量 OK
router.post("/update_inventory", adminController.update_inventory);
//刪除商品 OK
router.get("/delete_product", adminController.delete_product);




//拿到某種種類的全部ＯＫ
router.get("/getProducts", adminController.getProducts);
//拿到特定商品ＯＫ
router.get("/getProduct", adminController.getProduct);
//新增商品ＯＫ
router.post("/addProduct", adminController.addProduct);









//拿到所有訂單 OK
router.get("/getAllOrders", adminController.getAllOrders);
//修改訂單中的運送狀態
router.post("/update_deliver", adminController.update_deliver);
//修改訂單中的付款狀態
router.post("/update_pay", adminController.update_pay);




//拿到所有用戶
router.get("/getAllUsers", adminController.getAllUsers);



module.exports = router;

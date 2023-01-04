const fs = require("fs");
const path = require("path");
const product_M = require("../models/product");
const productController = {
  getProducts: async (req, res, next) => {
    try {
      let category_id = req.params.category_id;
      let page = req.query.page;
      product_M.getProduct(category_id, page).then((data) => {
        return res.json(data);
      });
    } catch (e) {
      return next(e);
    }
  },
  allCategory: async (req, res, next) => {
    try {
      product_M.product_amount().then((data) => {
        return res.json(data);
      });
    } catch (e) {
      return next(e);
    }
  },
  getSpecificiProduct: async (req, res, next) => {
    try {
      let category_id = req.query.category_id;
      let product_num = req.query.product_num;
      console.log("種類編號" + category_id);
      console.log("商品編號" + product_num);
      product_M.getSpecificiProduct(category_id, product_num).then((data) => {
        return res.json(data);
      });
    } catch (e) {
      return next(e);
    }
  },
  getProductImg: async (req, res, next) => {
    try {
      const { category_id, product_id, type } = req.query;
      // 取得圖檔完整路徑
      const imagePath = path.join(
        __dirname,
        "../",
        process.env.PRODUCT_IMAGE_PATH,
        category_id,
        product_id,
        type + ".jpg"
      );
      if (!fs.existsSync(imagePath)) {
        return res.send("image is not found");
      }
      // 設定回傳 Header 的資料類型為 jpg 格式的圖片
      res.set("Content-Type", "image/jpg");
      // 讀取檔案，透過 pipe() 將檔案數據轉給回傳物件 res在瀏覽器中渲染
      fs.createReadStream(imagePath).pipe(res);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = productController;

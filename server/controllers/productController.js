const fs = require("fs");
const path = require("path");
const product_M = require("../models/product");
const productController = {
  getProducts: async (req, res, next) => {
    try {
      let category_id = req.params.category_id;
      let page = req.query.page;
      let order = req.query.order;
      console.log("種類：" + category_id);
      console.log("頁數：" + page);
      console.log("排序類型：" + order);

      //價格由小到大排序
      if (order === "up") {
        product_M.getProduct_order(category_id, page, "").then((data) => {
          return res.json(data);
        });
      }

      //價格由大到小排序
      if (order === "down") {
        product_M.getProduct_order(category_id, page, "DESC").then((data) => {
          return res.json(data);
        });
      }

      //按照商品編號排序
      if (order === "") {
        product_M.getProduct(category_id, page).then((data) => {
          return res.json(data);
        });
      }
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
      console.log("有收到");
      console.log(req.query);
      let product_id = req.query.product_id;
      console.log("商品ID" + product_id);
      product_M.getSpecificiProduct(product_id).then((data) => {
        return res.json(data);
      });
    } catch (e) {
      return next(e);
    }
  },
  getProductDetail: async (req, res, next) => {
    try {
      console.log("有收到");
      console.log(req.query);
      let product_id = req.query.product_id;
      console.log("商品ID" + product_id);
      product_M.getProductDetail(product_id).then((data) => {
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
      // console.log(imagePath);
      if (!fs.existsSync(imagePath)) {
        return res.send("image is not found");
      }
      // 設定回傳 Header 的資料類型為 jpg 格式的圖片
      res.set("Content-Type", "image/jpg");
      // 讀取檔案，透過 pipe() 將檔案數據轉給回傳物件 res在瀏覽器中渲染
      // console.log(res);
      fs.createReadStream(imagePath).pipe(res);
    } catch (error) {
      next(error);
    }
  },
  getProduct_order: async (req, res, next) => {
    try {
      let category_id = req.params.category_id;
      let page = req.query.page;
      product_M.getProduct_order(category_id, page).then((data) => {
        return res.json(data);
      });
    } catch (e) {
      return next(e);
    }
  },
};

module.exports = productController;

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
      console.log(req);
      let category_id = req.query.category_id;
      let product_num = req.query.product_num;
      console.log('種類編號'+ category_id);
      console.log('商品編號'+ product_num);
      product_M.getSpecificiProduct(category_id, product_num).then((data) => {
        return res.json(data);
      });
    } catch (e) {
      return next(e);
    }
  },
};

module.exports = productController;

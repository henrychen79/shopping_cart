const cart_M = require("../models/cart");
const cartController = {
  addToCartItem: async (req, res, next) => {
    try {
      const { user_id, product_id, quantity } = req.body;
      console.log("這裡" + req.body.product_id);
      console.log(user_id, product_id, quantity);
      const cart_id = await cart_M.getCart(user_id);
      console.log(cart_id);
      for (let index = 0; index < quantity; index++) {
        const result = await cart_M.addToCartItem([
          cart_id[0].id,
          product_id,
          1,
        ]);
      }
      res.json({ status: "加入購物車成功" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  getCartItem: async (req, res, next) => {
    try {
      // console.log(req);
      const { user_id } = req.params;
      const cart_id = await cart_M.getCart(user_id);
      const result1 = await cart_M.getCartItem(cart_id[0].id);
      const result2 = await cart_M.getCartTotalPrice(cart_id[0].id);
      console.log([result1, result2]); //[搜尋結果，總金額]
      res.json([result1, result2]);
      //console.log([result1, result2]);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  delCartItem: async (req, res, next) => {
    try {
      const cart_item_id = req.body.id;
      const result = await cart_M.delCartItem(cart_item_id);
      res.json(result); //刪除商品成功
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};

module.exports = cartController;

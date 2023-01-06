const cart_M = require("../models/cart");
const cartController = {
  addToCartItem: async (req, res, next) => {
    try {
      const { user_id, product_id, quantity } = req.body;
      console.log(user_id, product_id, quantity);
      const cart_id = await cart_M.getCart(user_id);
      const result = await cart_M.addToCartItem([
        cart_id[0].id,
        product_id,
        quantity,
      ]);
      res.json(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  getCartItem: async (req, res, next) => {
    try {
      const { user_id } = req.params;
      const cart_id = await cart_M.getCart(user_id);
      const result = await cart_M.getCartItem(cart_id[0].id);
      res.json(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  delCartItem: async (req, res, next) => {
    try {
      const { cart_item_id } = req.body;
      console.log(cart_item_id);
      const result = await cart_M.delCartItem(cart_item_id);
      res.json(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};

module.exports = cartController;

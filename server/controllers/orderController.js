function setTimeDateFmt(s) {
  return s < 10 ? "0" + s : s;
}
function randomNumber() {
  const now = new Date();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  month = setTimeDateFmt(month);
  hour = setTimeDateFmt(hour);
  minutes = setTimeDateFmt(minutes);
  seconds = setTimeDateFmt(seconds);
  return (
    now.getFullYear().toString() +
    month.toString() +
    day +
    hour +
    minutes +
    seconds +
    Math.random().toString(36).substring(2, 9)
  );
}
const order_M = require("../models/order");
const cart_M = require("../models/cart");
const product_M = require("../models/product");
function checkInventory(cart_items) {
  let inventory_check = {};
  let result = cart_items.filter((val, idx) => {
    let inventory = 0;
    if (inventory_check[val.product_id])
      inventory = inventory_check[val.product_id];
    inventory[val.product_id] = inventory + val.quantity;
    return inventory[val.product_id] > val.inventory;
  });
  return result;
}
const orderController = {
  createOrder: async (req, res, next) => {
    try {
      const { data } = req.body;
      const data_obj = JSON.parse(data);
      const cart_id = await cart_M.getCart(data_obj.user_id);
      const cart_items = await cart_M.getCartItem(cart_id[0].id);
      console.log("cart_items ", cart_items);
      const check_result = checkInventory(cart_items);
      if (check_result.length != 0) {
        return res.json({ message: "庫存不足", list: check_result });
      }
      data_obj.order_number = randomNumber();
      const order_ret = await order_M.addToOrder(data_obj);
      console.log(order_ret);
      for (let index = 0; index < cart_items.length; index++) {
        let item = cart_items[index];
        let product_detail = await product_M.getSpecificiProduct(
          item.category,
          item.productNum
        );
        let inser_values = [
          order_ret[0].insertId,
          `'${product_detail[0].productName}'`,
          product_detail[0].price,
          item.quantity,
        ];
        console.log(product_detail[0]);
        const result2 = await order_M.addToOrderDetail(inser_values);
        console.log(result2);
      }
      const delCart = await cart_M.delAllCartItem(cart_id[0].id);
      console.log(delCart);
      res.json({ message: "創建訂單成功", data: data });
    } catch (error) {
      next(error);
    }
  },
  getOrderList: async (req, res, next) => {
    try {
      const { user_id } = req.params;
      const result = await order_M.getOrderList(user_id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = orderController;

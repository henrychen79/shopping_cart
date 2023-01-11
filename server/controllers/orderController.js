const { sendMail, orderMail } = require("../middleware/sendMail");
const validator = require("../utils/validation");
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
  let inventory_cal = {};
  let check_result = cart_items.filter((val, idx) => {
    let inventory = 0;
    if (inventory_cal[val.product_id])
      inventory = inventory_cal[val.product_id];
    inventory_cal[val.product_id] = inventory + val.quantity;
    return inventory_cal[val.product_id] > val.inventory;
  });
  return { check_result, inventory_cal };
}
const orderController = {
  createOrder: async (req, res, next) => {
    try {
<<<<<<< Updated upstream
      let state = "initialize";
      const { data } = req.body;
      const data_obj = JSON.parse(data);
      const { error } = validator.createOrderValidation(data_obj);
      if (error) {
        throw { message: error.details[0].message };
      }
      // 取得使用者對應的購物車ID
      const cart_id = await cart_M.getCart(data_obj.user_id);
      // 取得上述購物車ID下所有的購物車內容物
=======
      // console.log(req.body);
      const data = req.body;
      // const data_obj = JSON.parse(data);
      // console.log(data_obj);
      console.log(data);
      const cart_id = await cart_M.getCart(data.user_id);
>>>>>>> Stashed changes
      const cart_items = await cart_M.getCartItem(cart_id[0].id);
      // 確認各項內容物庫存
      const { check_result, inventory_cal } = checkInventory(cart_items);
      if (check_result.length != 0) {
        // 如果庫存不足回傳error code:500及相關資訊
        throw { message: "庫存不足", data: check_result };
      }
<<<<<<< Updated upstream
      // 產生訂單編號
      data_obj.order_number = randomNumber();
      // 產生訂單
      const order_ret = await order_M.addToOrder(data_obj);
      state = "create_order_done";
      // 產生訂單細項資訊

=======
      data.order_number = randomNumber();
      const order_ret = await order_M.addToOrder(data);
>>>>>>> Stashed changes
      for (let index = 0; index < cart_items.length; index++) {
        let item = cart_items[0][index];
        console.log("item", item);
        let product_detail = await product_M.getSpecificiProduct(
          item.product_id
        );
        let inser_values = [
          order_ret[0].insertId,
          `'${product_detail[0].productName}'`,
          product_detail[0].price,
          item.quantity,
        ];
        await order_M.addToOrderDetail(inser_values);
      }
      state = "create_order_detail_done";
      // 更新庫存資訊
      for (const [key, value] of Object.entries(inventory_cal)) {
        await product_M.updateInventory(key, value);
      }
      state = "update_inventory_done";
      // 清空購物車
      const delCart = await cart_M.delAllCartItem(cart_id[0].id);
      state = "delete_all_cart_item_done";
      const email = "cindy81121116@gmail.com";
      const subject = `[TEST]射射購物 訂單號碼:${data_obj.order_number} 成立 請把握時間付款`;
      const status = "未出貨 / 未付款";
      const msg = "請點擊付款連結並使用測試信用卡付款! 感謝配合!";
      sendMail(email, subject, orderMail(data_obj, status, msg));
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

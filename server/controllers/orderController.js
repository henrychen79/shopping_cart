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
    if (inventory_cal[val.pdid]) inventory = inventory_cal[val.pdid];
    inventory_cal[val.pdid] = inventory + val.quantity;
    return inventory_cal[val.pdid] > val.inventory;
  });
  return { check_result, inventory_cal };
}

function sendOrderInfoEmail(address, data) {
  const email = address;
  const subject = `[TEST]射射購物 訂單號碼:${data.order_number} 成立 請把握時間付款`;
  const status = "未出貨 / 未付款";
  const msg = "請點擊付款連結 ";
  sendMail(email, subject, orderMail(data, status, msg));
}
const orderController = {
  createOrder: async (req, res, next) => {
    try {
      let state = "initialize";
      // console.log(req.body);
      const { data } = req.body;
      // console.log(data);
      //const data_obj = JSON.parse(data);
      const { error } = validator.createOrderValidation(data);
      if (error) {
        throw { message: error.details[0].message };
      }
      // 取得使用者對應的購物車ID
      const cart_id = await cart_M.getCart(req.user.user_id);
      // 取得上述購物車ID下所有的購物車內容物
      const cart_items = await cart_M.getCartItem(cart_id[0].id);
      // console.log("cart_items", cart_items);
      // 確認各項內容物庫存
      const { check_result, inventory_cal } = checkInventory(cart_items);
      //console.log("inventory_cal", inventory_cal);
      if (check_result.length != 0) {
        // 如果庫存不足回傳error code:500及相關資訊
        throw { message: "庫存不足", data: check_result };
      }
      // 產生訂單編號
      data.order_number = randomNumber();
      data.user_id = req.user.user_id;
      // 產生訂單
      const order_ret = await order_M.addToOrder(data);
      state = "create_order_done";
      // 產生訂單細項資訊

      for (let index = 0; index < cart_items.length; index++) {
        let item = cart_items[index];
        // console.log("item", item);
        let product_detail = await product_M.getSpecificiProduct(item.pdid);
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
      // 寄發訂單email
      sendOrderInfoEmail(req.user.account, data);
      res.json({ message: "創建訂單成功", data: data });
    } catch (error) {
      next(error);
    }
  },
  getOrderList: async (req, res, next) => {
    try {
      const { user_id } = req.params;
      const result = await order_M.getOrderList(req.user.user_id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = orderController;

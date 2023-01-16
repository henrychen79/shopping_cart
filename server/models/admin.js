//const db = require("../data/testDatabase");//測試單頁js用
// const table = require("../database/tables.json");


//根據商品ID查找特定商品ＯＫ0116
async function getSpecificiProduct(product_id) {
  try {
    let target = `SELECT p.*, pD.detail, pD.inventory, pD.img FROM product AS p LEFT JOIN productDetail AS pD USING(category,productNum) WHERE p.product_id = '${product_id}'`;
    console.log(target);
    const [result, fields] = await global.db_pool.query(target);
    console.log(result);
    return result;
  } catch (error) {
    console.log("getSpecificiProduct ERR:" + error);
  }
}
//根據種類查找所有商品ＯＫ0116
async function getProducts(category) {
  try {
    //查找該種類的所有商品
    let target = `SELECT p.*, pD.detail, pD.inventory, pD.img FROM product AS p LEFT JOIN productDetail AS pD USING(category,productNum) WHERE p.category = '${category}'`;
    console.log(target);
    console.log(target);
    const [result, field] = await global.db_pool.query(target);
    console.log(result);
    return result;
  } catch (error) {}
}

//根據種類和商品編號查找特定商品ＯＫ0116
async function getProduct(category, productNum) {
  try {
    let target = `SELECT p.*, pD.detail, pD.inventory, pD.img FROM product AS p LEFT JOIN productDetail AS pD USING(category,productNum) WHERE p.category = '${category}' AND p.productNum = '${productNum}'`
    console.log(target);
    const [result, field] = await global.db_pool.query(target);
    console.log(result);
    return result;
  } catch (error) {}
}
//新增商品ＯＫ0116
async function addProduct(data){
  try {
      let target1 = `INSERT INTO productDetail ( category, productNum, detail, inventory, img) VALUES ('${
          data.category}','${data.productNum}','${
          data.detail}','${data.inventory}','${data.img}')`;

      let target2 = `INSERT INTO product ( productNum, category, productName, price) VALUES ('${
          data.productNum}','${data.category}','${data.productName}','${
              data.price}')`;
      
      await global.db_pool.query(target1);
      await global.db_pool.query(target2);
      return '新增商品成功';
      
  } catch (error) {
      return 'ERR:新增商品失敗'
  }
};



//更新商品ＯＫ0116
async function update_product(data) {
  try {
      //根據舊的種類和商品編號更新productDetail
      let target1 = `UPDATE productDetail AS pD SET pD.category = '${
          data.category}',pD.productNum = '${
          data.productNum}',pD.detail = '${
          data.detail}',pD.inventory = '${
          data.inventory}',pD.img = '${
          data.img}' WHERE pD.category = '${
              data.category}' AND pD.productNum = '${
              data.productNum}'`;

      //根據收到的『編輯後的資訊』更新product
      let target2 = `UPDATE product AS p
          SET p.productNum = '${data.productNum}', 
              p.category = '${data.category}', 
              p.productName = '${data.productName}', 
              p.thumbnail = '${data.thumbnail}', 
              p.price = '${data.price}'
          WHERE p.category = '${
              data.category}' AND p.productNum = '${
              data.productNum}'`;

      await global.db_pool.query(target1);
      await global.db_pool.query(target2);
      return '修改商品成功';
  } catch (error) {
      console.log('db錯了'+error);
      return '修改商品失敗';
  }
};

//單純修改價格ＯＫ0116
async function update_price(product_id, newPrice) {
  try {
    let target = `UPDATE product SET price = '${newPrice}' WHERE product_id = '${product_id}'`;
    console.log(target);
    await global.db_pool.query(target);
    return "更新價格成功";
  } catch (error) {
    return "更新價格失敗";
  }
}
//單純修改庫存量ＯＫ0116
async function update_inventory(product_id, newInventory) {
  try {
      let target = `UPDATE productDetail AS pD SET pD.inventory = '${
          newInventory}' WHERE pD.category = (SELECT category FROM product WHERE product_id = ${
              product_id}) AND pD.productNum = (SELECT productNum FROM product WHERE product_id = ${
                  product_id})`;
      console.log(target);
      await global.db_pool.query(target);
      return "更新庫存量成功";
  } catch (error) {
      return "更新庫存量失敗";
  }
};

//刪除商品(product,productDetail)ＯＫ0116
async function delete_product(product_id){
  try {
      let target = `DELETE p,pD FROM product p LEFT JOIN productDetail pD on pD.category = p.category AND pD.productNum = p.productNum WHERE p.product_id = '${product_id}'`;
      console.log(target);
      await global.db_pool.query(target);
      return "刪除商品成功";
  } catch (error) {
      return error + "刪除失敗";
  }
};



//查找所有訂單(未測試)
async function getAllOrders() {
  try {
    //少給全部訂單總量，讓前端可以產生頁數
    let target = `SELECT *, COUNT(*) AS total FROM orderList LEFT JOIN orderDetail USING(orderNum)`;
    const [result, feild] = await global.db_pool.query(target);
    console.log(result);
    return result;
  } catch (error) {}
}

//編輯訂單出貨狀態
async function update_deliver(orderNum, deliver_status) {
  try {
    let target = `UPDATE orderList SET deliver_status = '${deliver_status}' WHERE orderNum = '${orderNum}'`;
    await global.db_pool.query(target);
    return "更新出貨狀態成功";
  } catch (error) {
    return "更新出貨狀態失敗";
  }
}
//編輯訂單付款狀態
async function update_pay(orderNum, pay_status) {
  try {
    let target = `UPDATE orderList SET pay_status = '${pay_status}' WHERE orderNum = '${orderNum}'`;
    await global.db_pool.query(target);
    return "更新付款狀態成功";
  } catch (error) {
    return "更新付款狀態失敗";
  }
}

//查找所有用戶
async function getAllUsers() {
  try {
    //少給全部會員總量，讓前端可以產生頁數
    let target = `SELECT * FROM user`;
    const [result, feild] = await global.db_pool.query(target);
    console.log(result);
    return result;
  } catch (error) {}
}

module.exports.update_product = update_product;
module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
module.exports.addProduct = addProduct;
module.exports.update_price = update_price;
module.exports.update_inventory = update_inventory;
module.exports.update_deliver = update_deliver;
module.exports.update_pay = update_pay;
module.exports.getAllOrders = getAllOrders;
module.exports.getAllUsers = getAllUsers;
module.exports.delete_product = delete_product;
module.exports.getSpecificiProduct = getSpecificiProduct;

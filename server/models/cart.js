const db = require("../data/schema");
const table = require("../data/tables.json");
//新增訂單資訊到order,orderDetail
async function addToCart(values) {
  try {
    let target = `INSERT INTO cart ( ${table.cart.columnName} ) VALUES (${values})`;
    return await db.pool.query(target);
  } catch (error) {
    console.log(error);
    return error;
  }
}
async function addToCartItem(values) {
  try {
    let target = `INSERT INTO cart_item ( ${table.cart_item.columnName} ) VALUES (${values})`;
    return await db.pool.query(target);
  } catch (error) {
    console.log(error);
    return error;
  }
}
async function delCartItem(cart_item_id) {
  try {
    let target1 = `DELETE FROM cart_item WHERE id = '${cart_item_id}'`;
    await db.pool.query(target1);
    return "刪除商品成功";

    // let target2 = `SELECT SUM(price) AS totalPrice FROM product LEFT JOIN cart_item USING(product_id) WHERE cart_id = ${cart_item_id}`;
    // const [result,field] = await db.pool.query(target2);
    // console.log(result);
    // return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}
async function getCart(user_id) {
  try {
    let target = `select id from cart where user_id=${user_id}`;
    const [result, fields] = await db.pool.query(target);
    console.log(result);
    return result; //cart_id
  } catch (error) {
    console.log(error);
    return error;
  }
}
async function getCartItem(cart_id) {
  try {
    let target = `SELECT * FROM (select * from cart_item where cart_id= ${cart_id}) as a LEFT JOIN productDetail USING(product_id) LEFT JOIN product USING(product_id)`;
    // let target = `SELECT * FROM (select * from cart_item where cart_id=${cart_id}) as a LEFT JOIN productDetail as b ON a.product_id = b.product_id`;
    const [result, fields] = await db.pool.query(target);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getCartTotalPrice(cart_id) {
  try {
    let target = `SELECT SUM(price) AS totalPrice FROM product LEFT JOIN cart_item USING(product_id) WHERE cart_id = ${cart_id}`;
    const [result, field] = await db.pool.query(target);
    if (result[0].totalPrice === null) {
      result[0].totalPrice = 0;
    }
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}
async function delAllCartItem(cart_id) {
  try {
    let target = `DELETE FROM cart_item WHERE cart_id=${cart_id}`;
    return await db.pool.query(target);
  } catch (error) {
    console.log(error);
    return error;
  }
}
// db.initSchema().then(() => {
//   console.log(table.cart.columnName);
//   //addTOCart(table.cart.columnName, [1]);
//   //addTOCartItem(table.cart_item.columnName, [1, 1, 5]);
//   getCartItem(1);
// });

module.exports.getCart = getCart;
module.exports.getCartItem = getCartItem;
module.exports.getCartTotalPrice = getCartTotalPrice;
module.exports.addToCart = addToCart;
module.exports.addToCartItem = addToCartItem;
module.exports.delCartItem = delCartItem;
module.exports.delAllCartItem = delAllCartItem;

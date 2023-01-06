const db = require("../data/schema");
const table = require("../data/tables.json");
//新增訂單資訊到order,orderDetail
async function addToCart(values) {
  try {
    let target = `INSERT INTO cart ( ${table.cart.columnName} ) VALUES (${values})`;
    await db.pool.query(target);
  } catch (error) {
    console.log(error);
  }
}
async function addToCartItem(values) {
  try {
    let target = `INSERT INTO cart_item ( ${table.cart_item.columnName} ) VALUES (${values})`;
    return await db.pool.query(target);
  } catch (error) {
    console.log(error);
  }
}
async function getCart(user_id) {
  let target = `select id from cart where user_id=${user_id}`;
  const [result, fields] = await db.pool.query(target);
  console.log(result);
  return result;
}
async function getCartItem(cart_id) {
  let target = `SELECT a.id as cart_item_id, a.quantity, a.create_at, b.inventory, b.img FROM (select * from cart_item where cart_id=${cart_id}) as a LEFT JOIN productDetail as b ON a.product_id = b.product_id`;
  const [result, fields] = await db.pool.query(target);
  console.log(result);
  return result;
}
// db.initSchema().then(() => {
//   console.log(table.cart.columnName);
//   //addTOCart(table.cart.columnName, [1]);
//   //addTOCartItem(table.cart_item.columnName, [1, 1, 5]);
//   getCartItem(1);
// });

module.exports.getCart = getCart;
module.exports.getCartItem = getCartItem;
module.exports.addToCart = addToCart;
module.exports.addToCartItem = addToCartItem;

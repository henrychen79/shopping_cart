const db = require("../data/schema");
const table = require("../data/tables.json");

async function addToOrder(values) {
  const insert_key =
    "user_id, recipient, address, phone, order_prize,order_amount, order_number";
  try {
    let target = `INSERT INTO orderlist ( ${insert_key} ) VALUES (${values})`;
    return await db.pool.query(target);
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function addToOrderDetail(values) {
  const insert_key = "order_id, product_name, prize, amount";
  try {
    let target = `INSERT INTO orderdetail ( ${insert_key} ) VALUES (${values})`;
    return await db.pool.query(target);
  } catch (error) {
    console.log(error);
    return error;
  }
}
// (SELECT * FROM orderlist WHERE user_id=${user_id})
// SELECT p.order_id,
//        GROUP_CONCAT(p.product_name ) as '訂單產品明細'
// FROM products_table AS p
// GROUP BY p.order_id;
async function getOrderList(user_id) {
  try {
    let target = `SELECT a.*, GROUP_CONCAT(b.product_name ) as product_list FROM (SELECT * FROM orderlist WHERE user_id=${user_id}) as a LEFT JOIN orderdetail as b on a.id=b.order_id GROUP BY b.order_id`;
    const [result, fields] = await db.pool.query(target);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}
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
console.log(randomNumber(), Math.random().toString(36).substring(2, 9));
[1, "陳維停", "高雄市", "0980149024", 1000, 3, randomNumber()];
db.initSchema().then(() => {
  // addToOrder([
  //   1,
  //   "'陳維停'",
  //   "'高雄市'",
  //   "'0980149024'",
  //   1000,
  //   3,
  //   `'${randomNumber()}'`,
  // ]);
  //addToOrderDetail([9, "'Supreme 2019 box logo hoodie'", 26000, 1]);
  getOrderList(1).then((ret) => {
    console.log(ret);
  });
});

module.exports.addToOrder = addToOrder;
module.exports.addToOrderDetail = addToOrderDetail;
module.exports.getOrderList = getOrderList;

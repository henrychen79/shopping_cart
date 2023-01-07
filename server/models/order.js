const db = require("../data/schema");
const table = require("../data/tables.json");
const insert_order_key = [
  "user_id",
  "recipient",
  "address",
  "phone",
  "order_prize",
  "order_amount",
  "order_number",
];
const insert_order_detail_key = ["order_id", "product_name", "prize", "amount"];
function transformOrderData(data) {
  const {
    user_id,
    recipient,
    address,
    phone,
    order_prize,
    order_amount,
    order_number,
  } = data;
  return [
    user_id,
    `'${recipient}'`,
    `'${address}'`,
    `'${phone}'`,
    order_prize,
    order_amount,
    `'${order_number}'`,
  ];
}
async function addToOrder(data) {
  const values = transformOrderData(data);
  const insert_key_str = insert_order_key.join(", ");
  try {
    let target = `INSERT INTO orderlist ( ${insert_key_str} ) VALUES (${values})`;
    return await db.pool.query(target);
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function addToOrderDetail(values) {
  const insert_key_str = insert_order_detail_key.join(", ");
  try {
    let target = `INSERT INTO orderdetail ( ${insert_key_str} ) VALUES (${values})`;
    return await db.pool.query(target);
  } catch (error) {
    console.log(error);
    return error;
  }
}

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
const test_obj = {
  user_id: 1,
  recipient: "陳韋廷",
  address: "高雄市前鎮區",
  phone: "0988525321",
  order_prize: 48000,
  order_amount: 3,
  order_number: "558886",
};
db.initSchema().then(() => {
  ///addToOrder(test_obj);
  //addTOCartItem(table.cart_item.columnName, [1, 1, 5]);
  //getCartItem(1);
});

module.exports.addToOrder = addToOrder;
module.exports.addToOrderDetail = addToOrderDetail;
module.exports.getOrderList = getOrderList;

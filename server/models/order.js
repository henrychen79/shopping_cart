const table = require("../database/tables.json");
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
    return await global.db_pool.query(target);
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function addToOrderDetail(values) {
  const insert_key_str = insert_order_detail_key.join(", ");
  try {
    let target = `INSERT INTO orderdetail ( ${insert_key_str} ) VALUES (${values})`;
    return await global.db_pool.query(target);
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getOrderList(user_id) {
  try {
    let target1 = `SELECT * FROM orderList WHERE user_id = '${user_id}'`;
    const [result1, feild] = await global.db_pool.query(target1);
    for (let i = 0; i < result1.length; i++) {
      let target2 = `SELECT product_name, prize, amount FROM orderDetail WHERE order_id = ${result1[i].id}`;
      const [result2, feild2] = await global.db_pool.query(target2);
      result1[i].product_list = result2;
    }
    // console.log(result1);
    return result1;
  } catch (error) {console.log(error);}

  // try {
  //   let target = `SELECT a.*, GROUP_CONCAT(b.product_name ) as product_list FROM (SELECT * FROM orderlist WHERE user_id=${user_id}) as a LEFT JOIN orderdetail as b on a.id=b.order_id GROUP BY b.order_id`;
  //   const [result, fields] = await global.db_pool.query(target);
  //   return result;
  // } catch (error) {
  //   console.log(error);
  //   return error;
  // }
}

async function updateOrderList(order_id, type, state) {
  try {
    let target = `UPDATE orderlist SET ${type} = '${state}' WHERE id = ${order_id}`;
    return await global.db_pool.query(target);
  } catch (error) {
    console.log(error);
    return error;
  }
}
// const test_obj = {
//   user_id: 1,
//   recipient: "?????????",
//   address: "??????????????????",
//   phone: "0988525321",
//   order_prize: 48000,
//   order_amount: 3,
//   order_number: "558886",
// };

module.exports.addToOrder = addToOrder;
module.exports.addToOrderDetail = addToOrderDetail;
module.exports.getOrderList = getOrderList;
module.exports.updateOrderList = updateOrderList;

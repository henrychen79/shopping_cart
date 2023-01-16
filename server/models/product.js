// const db = require("../data/testDatabase");//測試單頁js用
const table = require("../database/tables.json");
const products = require("../database/fake_product.json");
const productsDetail = require("../database/fake_productDetail.json");
const pageLimit = 6;

async function addProduct(tableColumns, values) {
  try {
    let target = `INSERT INTO product ( ${tableColumns} ) VALUES (${values})`;
    console.log(target);
    await global.db_pool.query(target);
  } catch (error) {
    console.log(error);
  }
}
async function addProductDetail(tableColumns, values) {
  try {
    let target = `INSERT INTO productDetail ( ${tableColumns} ) VALUES (${values}) `;
    await global.db_pool.query(target);
  } catch (error) {}
}

//查找商品種類類型、各類型的總量******
//select_where_group
async function product_amount() {
  try {
    let target = `SELECT category, 
        COUNT(*) AS product_amount, 
        COUNT(*)/${pageLimit} AS categoryPage 
      FROM product GROUP BY category`;
    const [result, fields] = await global.db_pool.query(target);
    console.log(result);
    return result;
  } catch (error) {
    console.log("product_amount ERR:" + error);
  }
}

//搜尋商品，按照頁數列出對應的資料筆數(測試OK)
//select_where_order_limit
async function getProduct(category, page) {
  let target = `SELECT * FROM product WHERE category='${category}' ORDER BY productNum LIMIT ${
    (page - 1) * pageLimit
  } , ${pageLimit}`;
  console.log(target);
  const [result, fields] = await global.db_pool.query(target);
  console.log(result);
  return result;
}

//搜尋特定商品（測試ＯＫ）********
//select_where
async function getSpecificiProduct(product_id) {
  try {
    let target = `SELECT * FROM product LEFT JOIN productDetail USING(category,productNum) WHERE productDetail.product_id = ${product_id}`;
    console.log(target);
    const [result, fields] = await global.db_pool.query(target);
    console.log(result);
    return result;
  } catch (error) {
    console.log("getSpecificiProduct ERR:" + error);
  }
}

async function getProductDetail(product_id) {
  try {
    let target = `SELECT product.*, productDetail.*,productDetail.product_id as id FROM product LEFT JOIN productDetail USING(category,productNum) WHERE product.product_id = '${product_id}'`;
    console.log(target);
    const [result, fields] = await global.db_pool.query(target);
    console.log(result);
    return result;
  } catch (error) {
    console.log("getSpecificiProduct ERR:" + error);
  }
}
// getSpecificiProduct('001','2');//測試用ＯＫ

//按照價格排列(加上DESC由大到小排列)(測試ＯＫ)
//select_where_order_limit
async function getProduct_order(category, page, order) {
  try {
    let target = `SELECT * FROM product WHERE category='${category}' ORDER BY price ${order} LIMIT ${
      (page - 1) * pageLimit
    },${pageLimit} `;
    console.log(target);
    const [result, field] = await global.db_pool.query(target);
    console.log(result);
    return result;
  } catch (error) {
    console.log("getProduct_order ERR:" + error);
  }
}
// getProduct_order('001','2','DESC')

async function updateInventory(product_id, quantity) {
  try {
    let target = `UPDATE productDetail SET inventory = inventory - ${quantity} WHERE product_id=${product_id} `;
    const ret = await global.db_pool.query(target);
    console.log("updateInventory", ret);
    return ret;
  } catch (error) {
    console.log("updateInventory", error);
    return error;
  }
}

/**********************************以下為假資料**********************************************/
//利用假資料新增進資料庫
function generateFakeData() {
  for (const key in products) {
    addProduct(table.product.columnName, [
      products[key].productNum,
      products[key].category,
      products[key].name,
      products[key].thumbnail,
      products[key].price,
    ]);
  }
  for (const key in productsDetail) {
    addProductDetail(table.productDetail.columnName, [
      productsDetail[key].category,
      productsDetail[key].productNum,
      productsDetail[key].detail,
      productsDetail[key].inventory,
      productsDetail[key].img,
    ]);
  }
}

//新增假資料DETAIL進去資料庫還沒做
/**********************************以上為假資料**********************************************/

module.exports.generateFakeData = generateFakeData;
module.exports.getProduct = getProduct;
module.exports.getSpecificiProduct = getSpecificiProduct;
module.exports.getProductDetail = getProductDetail;
module.exports.product_amount = product_amount;
module.exports.getProduct_order = getProduct_order;
module.exports.updateInventory = updateInventory;

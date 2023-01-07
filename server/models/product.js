const db = require("../data/schema");
// const db = require("../data/testDatabase");//測試單頁js用
const table = require("../data/tables.json");
const products = require("../data/fake_product.json");
const pageLimit = 6;

async function addProduct(tableColumns, values) {
  try {
    let target = `INSERT INTO product ( ${tableColumns} ) VALUES (${values})`;
    await db.pool.query(target);
  } catch (error) {}
}

//查找商品種類類型、各類型的總量******
async function product_amount() {
  try {
    let target = `SELECT category, 
        COUNT(*) AS product_amount, 
        COUNT(*)/${pageLimit} AS categoryPage 
      FROM product GROUP BY category`;
    const [result, fields] = await db.pool.query(target);
    console.log(result);
    return result;
  } catch (error) {
    console.log("product_amount ERR:" + error);
  }
}

//搜尋商品，按照頁數列出對應的資料筆數(測試OK)
async function getProduct(category, page) {
  let target = `SELECT ${
    table.product.columnName
  } FROM product WHERE category=${category} AND productNum BETWEEN ${
    (page - 1) * pageLimit + 1
  } AND ${page * pageLimit}`;
  const [result, fields] = await db.pool.query(target);
  return result;
}

//搜尋商品，按照頁數列出對應的資料筆數（測試ＯＫ）********
async function getSpecificiProduct(category_id, product_num) {
  try {
    let target = `SELECT pD.*,p.*
      FROM productDetail AS pD ,product AS p
      WHERE pD.category = p.category  
      AND p.category = '${category_id}'
      AND pD.productNum = p.productNum
      AND p.productNum = '${product_num}'`;
    console.log(target);
    const [result, fields] = await db.pool.query(target);
    console.log(result);
    return result;
  } catch (error) {
    console.log("getSpecificiProduct ERR:" + error);
  }
}
// getSpecificiProduct('001','2');//測試用ＯＫ

//按照價格排列(加上DESC由大到小排列)(測試ＯＫ)
async function getProduct_order(category, page, order) {
  try {
    let target = `SELECT ${
      table.product.columnName
    } FROM product WHERE category='${category}' ORDER BY price ${order} LIMIT ${
      (page - 1) * pageLimit
    },${pageLimit} `;
    console.log(target);
    const [result, field] = await db.pool.query(target);
    console.log(result);
    return result;
  } catch (error) {
    console.log("getProduct_order ERR:" + error);
  }
}
// getProduct_order('001','2','DESC')

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
}

//新增假資料DETAIL進去資料庫還沒做
/**********************************以上為假資料**********************************************/

module.exports.generateFakeData = generateFakeData;
module.exports.getProduct = getProduct;
module.exports.getSpecificiProduct = getSpecificiProduct;
module.exports.product_amount = product_amount;
module.exports.getProduct_order = getProduct_order;

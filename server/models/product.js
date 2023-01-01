const db = require("../data/schema");
const table = require("../data/tables.json");
const products = require("../data/fake_product.json");
const pageLimit = 6;

async function addProduct(tableColumns, values) {
  try {
    let target = `INSERT INTO product ( ${tableColumns} ) VALUES (${values})`;
    await db.pool.query(target);
  } catch (error) {}
}

//查找商品種類類型、各類型的總量
async function product_amount() {
  try {
    let target = 
      `SELECT category, 
        COUNT(*) AS product_amount, 
        COUNT(*)/${pageLimit} AS categoryPage 
      FROM product GROUP BY category`;
    const [result, fields] = await db.pool.query(target);
    console.log(result);
    return result;
  } catch (error) {
    console.log('product_amount ERR:' + error);
  }
};


//搜尋商品，按照頁數列出對應的資料筆數(測試OK)
async function getProduct(category, page) {
  let target = `SELECT ${
    table.product.columnName
  } FROM product WHERE category=${category} AND productNum BETWEEN ${
    (page - 1) * pageLimit + 1
  } AND ${page * pageLimit}`;
  console.log(target);
  const [result, fields] = await db.pool.query(target);
  return result;
};

//搜尋商品，按照頁數列出對應的資料筆數(測試OK)
async function getSpecificiProduct(category, productNum) {
  let target = `SELECT ${table.productDetail.columnName} FROM productDetail WHERE productNum=${productNum}`;
  const [result, fields] = await db.pool.query(target);
  return result;
}

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
module.exports.generateFakeData = generateFakeData;
module.exports.getProduct = getProduct;
module.exports.getSpecificiProduct = getSpecificiProduct;
module.exports.product_amount = product_amount;


/**********************************以下為假資料**********************************************/
// function addProduct(tableColumns,values) {
//     let target = `INSERT INTO product ( ${tableColumns} ) VALUES (${values})`;
//     db.pool.query(target);
// };
//利用假資料新增進資料庫
// for (const key in products) {
//     addProduct(table.product.columnName,[
//                 products[key].productNum,
//                 products[key].category,
//                 products[key].name,
//                 products[key].thumbnail,
//                 products[key].price
//             ])
// };
/**********************************以上為假資料**********************************************/


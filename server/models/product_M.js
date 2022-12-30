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

//搜尋商品，按照頁數列出對應的資料筆數(測試OK)
async function getProduct(catagory, page) {
  let target = `SELECT ${
    table.product.columnName
  } FROM product WHERE catagory=${catagory} AND productNum BETWEEN ${
    (page - 1) * pageLimit + 1
  } AND ${page * pageLimit}`;
  const [result, fields] = await db.pool.query(target);
  return result;
}

//搜尋商品，按照頁數列出對應的資料筆數(測試OK)
async function getSpecificiProduct(catagory, productNum) {
  let target = `SELECT ${table.product.columnName} FROM product WHERE catagory=${catagory} AND productNum=${productNum}`;
  const [result, fields] = await db.pool.query(target);
  return result;
}

//利用假資料新增進資料庫
function generateFakeData() {
  for (const key in products) {
    addProduct(table.product.columnName, [
      products[key].productNum,
      products[key].catagory,
      products[key].name,
      products[key].thumbnail,
      products[key].price,
    ]);
  }
}
module.exports.generateFakeData = generateFakeData;
module.exports.getProduct = getProduct;
module.exports.getSpecificiProduct = getSpecificiProduct;

const db = require('../data/database');
const table = require('../data/tables.json');
const products = require('../data/fake_product.json');
const pageLimit = 6;


function addProduct(tableColumns,values) {
    let target = `INSERT INTO product ( ${tableColumns} ) VALUES (${values})`;
    db.pool.query(target);
};

//搜尋商品，按照頁數列出對應的資料筆數(測試OK)
async function getProduct(page) {
    let target = `SELECT ${table.product.columnName} FROM product WHERE productNum BETWEEN ${(page-1)*pageLimit+1} AND ${page*pageLimit}`;
    const [result,fields] = await db.pool.query(target);
    // console.log(result);
    return result
};
//getProduct(2)

//利用假資料新增進資料庫
// for (const key in products) {
//     addProduct(table.product.columnName,[
//                 products[key].productNum,
//                 products[key].catagory,
//                 products[key].name,
//                 products[key].thumbnail,
//                 products[key].price
//             ])
// };
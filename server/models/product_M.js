const db = require('../data/database');
const table = require('../data/tables.json');
const products = require('../data/fake_product.json');


function addProduct(tableColumns,values) {
    let target = `INSERT INTO product ( ${tableColumns} ) VALUES (${values})`;
    db.pool.query(target);
}

//利用假資料新增進資料庫
for (const key in products) {
    addProduct(table.product.columnName,[
                products[key].productNum,
                products[key].catagory,
                products[key].name,
                products[key].thumbnail,
                products[key].price
            ])
};
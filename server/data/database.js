const mysql = require('mysql2/promise');
const schemaName = 'shopping_cart';

// function createSchema(schemaName) {
//   let target = `CREATE SCHEMA ${schemaName}`;
//   db.pool.query(target)
// };

// //創建購物DB
// createSchema(schemaName);

exports.pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'shopping_cart',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
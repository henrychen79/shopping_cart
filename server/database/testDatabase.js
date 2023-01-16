const mysql = require('mysql2/promise');

exports.pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'shopping_cart0116',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
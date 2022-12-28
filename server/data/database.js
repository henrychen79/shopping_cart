const mysql = require('mysql2/promise');

exports.pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'shopping_cart',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// pool.query('CREATE TABLE customers2 (C_Id INT,Name varchar(50),Address varchar(255),Phone varchar(20))')

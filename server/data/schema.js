const mysql = require("mysql2/promise");
const schemaName = "shopping_cart1111";
const tables = require("./tables.json");

//創建DB，檢測時請注意user名稱和密碼
async function createDB() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "3345678",
    });
    //console.log("connection", connection);
    await connection.query(`CREATE DATABASE ${schemaName}`);
  } catch (error) {
    //console.log("error", error);
  }
}

//創建連接池
async function createPooL() {
  const pool = await mysql.createPool({
    host: "localhost",
    user: "root",
    password: "3345678",
    database: schemaName,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  return pool;
}

//創建表單
async function createTable(tableName, columns) {
  try {
    let target = `CREATE TABLE ${tableName} (${columns})`;
    // console.log(target)
    await exports.pool.query(target);
  } catch (error) {
    //console.log("create table error:", error);
  }
}

//創建tables.json中的所有表單
async function initSchema() {
  await createDB();
  module.exports.pool = await createPooL();
  console.log("here");
  for (const key in tables) {
    await createTable(tables[key].name, tables[key].columns);
  }
}

/* 創建表單內容(SQL語法)
user:
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `role` VARCHAR(10) NOT NULL
  `account` VARCHAR(50) NOT NULL,
  `password` VARCHAR(12) NOT NULL,
  `nickname` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `account_UNIQUE` (`account` ASC) VISIBLE,
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE;
  
product:
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `productNum` INT NOT NULL,
  `category` VARCHAR(12) NOT NULL,
  `thumbnail` VARCHAR(50) NOT NULL,
  `price` INT NOT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE INDEX `account_UNIQUE` (`productNum` ASC) VISIBLE,
  UNIQUE INDEX `user_id_UNIQUE` (`product_id` ASC) VISIBLE,
  UNIQUE INDEX `thumbnail_UNIQUE` (`thumbnail` ASC) VISIBLE;

productDetail:
  `productNum` INT NOT NULL,
  `detail` VARCHAR(4000) NULL,
  `inventory` INT NOT NULL,
  `img` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`productNum`),
  UNIQUE INDEX `account_UNIQUE` (`productNum` ASC) VISIBLE,
  UNIQUE INDEX `img_UNIQUE` (`img` ASC) VISIBLE;

cart:
  `cart_id` INT NOT NULL AUTO_INCREMENT,
  `account` VARCHAR(50) NOT NULL,
  `item` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`cart_id`),
  UNIQUE INDEX `account_UNIQUE` (`account` ASC) VISIBLE

cart_item:
  `id` INT NOT NULL AUTO_INCREMENT,
  `cart_id` INT NOT NULL,
  `productNum` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `account_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `productNum_UNIQUE` (`productNum` ASC) VISIBLE;

order:
  `orderNum` INT NOT NULL,
  `account` VARCHAR(50) NOT NULL,
  `orderTime` DATETIME NOT NULL,
  `pay_status` VARCHAR(45) NOT NULL DEFAULT 0,
  `deliver_status` VARCHAR(45) NOT NULL DEFAULT 0,
  `order_amount` INT NOT NULL DEFAULT 1,
  `sendName` VARCHAR(45) NOT NULL,
  `sendAdd` VARCHAR(100) NOT NULL,
  `payWay` VARCHAR(45) NOT NULL,
  `totalPrice` INT NOT NULL,
  UNIQUE INDEX `account_UNIQUE` (`orderNum` ASC) VISIBLE,
  PRIMARY KEY (`orderNum`);

orderDetail:
  `orderNum` INT NOT NULL,
  `productNum` INT NOT NULL,
  PRIMARY KEY (`orderNum`),
  UNIQUE INDEX `account_UNIQUE` (`productNum` ASC) VISIBLE;

*/

// CRUD表單欄位
function column({
  tableName,
  action,
  old_columnName,
  new_columnName,
  options,
} = {}) {
  // action = ADD新增、CHANGE更改（舊欄位名 新欄位名）、MODIFY更改資料種類、DROP刪除
  // options = INT整數、VARCHAR(50)文字、DATETIME時間
  /* 使用範例：
    //（測試用OK）新增欄位
    // column({tableName:'product',action:'ADD',old_columnName:'',new_columnName:'testADDcolumn',options:'INT'});
    
    //（測試用OK）刪除欄位
    // column({tableName:'product',action:'DROP',old_columnName:'newcolumn',new_columnName:'',options:''});
    
    //（測試用OK）更改欄位名稱
    // column({tableName:'product',action:'CHANGE',old_columnName:'testADDcolumn',new_columnName:'newcolumn',options:'INT'});
    
    //（測試用OK）更改資料種類
    // column({tableName:'product',action:'MODIFY',old_columnName:'newcolumn',new_columnName:'',options:'VARCHAR(50)'});
  */
  let target = `ALTER TABLE ${tableName} ${action} ${old_columnName} ${new_columnName} ${options}`;
  db.pool.query(target);
}
module.exports.initSchema = initSchema;

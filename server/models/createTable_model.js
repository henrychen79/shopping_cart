const db = require('../data/database');
const tables = require("../data/tables.json");

function createTable(tableName,columns) {
    let target = `CREATE TABLE ${tableName} (${columns})`;
    db.pool.query(target);
};

//創建tables.json中的所有表單
for (const key in tables) {
    createTable(tables[key].name,tables[key].columns);
};

/* 創建表單內容(SQL語法)
user:
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `account` VARCHAR(50) NOT NULL,
  `password` VARCHAR(12) NOT NULL,
  `nickname` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `account_UNIQUE` (`account` ASC) VISIBLE,
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE;
  
product:
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `productNum` INT NOT NULL,
  `catagory` VARCHAR(12) NOT NULL,
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

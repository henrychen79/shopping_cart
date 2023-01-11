const mysql = require("mysql2/promise");
const schemaName = "shopping_cart1111";
const tables = require("./tables.json");

//創建DB，檢測時請注意user名稱和密碼
async function createDB() {
  try {
    const connection = await mysql.createConnection({
      // host: "localhost",
      user: "root",
      // password: "3345678",
      host: "localhost",
      user: "root",
      // password: "h6760903",
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
    // host: "localhost",
    user: "root",
    // password: "3345678",
    // password: "3345678",
    host: "localhost",
    user: "root",
    // password: "h6760903",
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
    // console.log(tableName, columns);
    let target = `CREATE TABLE ${tableName} (${columns})`;
    //console.log(target);
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
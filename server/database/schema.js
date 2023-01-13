const mysql = require("mysql2/promise");
const tables = require("./tables.json");

//創建DB，檢測時請注意user名稱和密碼
async function createDB(dataBaseConnection, database) {
  let connection = "";
  try {
    connection = await mysql.createConnection(dataBaseConnection);
    await connection.query(`CREATE DATABASE ${database}`);
    return connection;
  } catch (error) {
    console.log("error", error);
    return connection;
  }
}

//創建表單
async function createTable(tableName, columns, connection) {
  try {
    let target = `CREATE TABLE ${tableName} (${columns})`;
    //console.log(target);
    await connection.query(target);
  } catch (error) {
    //console.log("create table error:", error);
  }
}

//初始化database
async function initSchema(dataBaseConnection, database) {
  const connection = await createDB(dataBaseConnection, database);
  await connection.changeUser({
    database: database,
  });
  for (const key in tables) {
    await createTable(tables[key].name, tables[key].columns, connection);
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
  global.db_pool.query(target);
}
module.exports.initSchema = initSchema;

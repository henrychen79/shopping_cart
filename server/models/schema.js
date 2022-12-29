const db = require('../data/database');
const tables = require("../data/tables.json");


function createTable(tableName,columns) {
    let target = `CREATE TABLE ${tableName} (${columns})`;
    db.pool.query(target);
};

// CRUD表單欄位
function column({tableName,action,old_columnName,new_columnName,options}={}) {
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
};



//創建tables.json中的所有表單
// for (const key in tables) {
//     createTable(tables[key].name,tables[key].columns);
// };

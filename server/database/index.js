const { dataBaseConfig, dataBaseConnection } = require("../config");
const mysql = require("mysql2/promise");
const { initSchema } = require("./schema");
const initilize = async () => {
  //初始化schema and tables
  await initSchema(dataBaseConnection, dataBaseConfig.database);
  //創建連接池, 全局共用
  global.db_pool = mysql.createPool(dataBaseConfig);
  //require("../models").initDatabase();
};
initilize();

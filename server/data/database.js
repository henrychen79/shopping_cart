const mysql = require("mysql2/promise");
const schemaName = "shopping_cart1234";

async function createDB() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "henrychen",
      password: "3345678",
    });
    //console.log("connection", connection);
    await connection.query(`CREATE DATABASE ${schemaName}`);
  } catch (error) {
    console.log("error", error);
  }
}
module.exports.initDB = initDB;

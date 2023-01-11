async function createDB() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Aa3982145",
    });
    //console.log("connection", connection);
    await connection.query(`CREATE DATABASE ${schemaName}`);
  } catch (error) {
    console.log("error", error);
  }
}
module.exports.createDB = createDB;

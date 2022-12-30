
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
module.exports.createDB = createDB;

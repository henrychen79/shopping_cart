async function initDatabase() {
  //await require("../data/schema").initSchema();
  await require("./product").generateFakeData();
  //await require("./user").creatFakeData();
}
module.exports.initDatabase = initDatabase;

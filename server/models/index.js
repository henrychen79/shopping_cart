async function initDatabase() {
  await require("../data/schema").initSchema();
  await require("./product").generateFakeData();
}
module.exports.initDatabase = initDatabase;

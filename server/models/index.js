const schema = require("../data/schema");
const product_M = require("./product_M");

async function initDatabase() {
  await require("../data/schema").initSchema();
  await require("./product_M").generateFakeData();
}
module.exports.initDatabase = initDatabase;

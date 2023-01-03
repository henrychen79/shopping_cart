async function initDatabase() {
  await require("../data/schema").initSchema();
  await require("./product").generateFakeData();
  // await require("./user").creatFakeData();//！亨利幫我擋重複寫入這個假資料
}
module.exports.initDatabase = initDatabase;

const db = require("../data/database");
const table = require("../data/tables.json");
const users = require("../data/fake_user.json");
/**********************************以下為假資料**********************************************/
//（測試用OK）將假的用戶資料創建進去表單中
function insertFakeUser(tableColumns, values) {
  let target = `INSERT INTO user ( ${tableColumns} ) VALUES (${values}) `;
  db.pool.query(target);
}
function creatFakeData() {
  for (const key in users) {
    insertFakeUser(table.user.columnName, [
      users[key].role,
      users[key].account,
      users[key].password,
      users[key].nickname,
    ]);
  }
}
// creatFakeData()
/**********************************以上為假資料**********************************************/

//確認帳號是否已經存在（測試OK）
async function check_account(accountName) {
  try {
    let target = `SELECT account FROM user WHERE account = ${accountName}`;
    const [result, fields] = await db.pool.query(target);
    console.log(result);
    return result;
  } catch (error) {
    console.log("check_account ERR :" + error);
  }
}
// check_account("'rec@gmail.com'");//存在回傳[{account:'帳號名稱'}]  不存在回傳[]

//成功註冊到會員表單DB（測試OK）
async function signup(values) {
  try {
    let target = `INSERT INTO user ( ${table.user.columnName} ) VALUES (${values})`;
    const [result, fields] = await db.pool.query(target);
    console.log(result);
    return result;
  } catch (error) {
    console.log("signup ERR :" + error);
  }
}
// signup(["'member'","'emma@gmail.com'", "'aaaa1111'", "'EMMA'"]);
module.exports.signup = signup;

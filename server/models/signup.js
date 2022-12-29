const db = require('../data/database');
const table = require('../data/tables.json');
const users = require('../data/fake_user.json');


//（測試用OK）將假的用戶資料創建進去表單中
function insertFakeUser(tableColumns,values) {
    let target = `INSERT INTO user ( ${tableColumns} ) VALUES (${values}) `;
    db.pool.query(target);
};
function creatFakeData() {
    for (const key in users){
        insertFakeUser(table.user.columnName,[users[key].role,users[key].account,users[key].password,users[key].nickname])
    };
};
// creatFakeData()

//確認帳號是否已經存在（測試OK）
async function check_account(accountName) {
    let target = `SELECT account FROM user WHERE account = ${accountName}`;
    const [result,fields] = await db.pool.query(target);
    console.log(result);
    return result;
};
// check_account("'rec27@gmail.com'");


//成功註冊到會員表單DB
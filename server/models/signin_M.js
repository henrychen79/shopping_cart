const db = require('../data/database');

//對照帳號密碼是否正確
async function signin(accountName,password) {
    try {
        let target = `SELECT account FROM user WHERE account = ${accountName} AND password = ${password}`;
        const [result,fields] = await db.pool.query(target);
        console.log(result);
        return result;
    } catch (error) {
        console.log('signin ERR :'+error);
    }
};
// login("'rec27@gmail.com'","'rrr9876'");//存在回傳[{account:'帳號名稱'}]  不存在回傳[]
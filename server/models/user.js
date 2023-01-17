// const db = require("../data/testDatabase");//測試單頁js用
const table = require("../database/tables.json");
const users = require("../database/fake_user.json");
const { object } = require("joi");
/**********************************以下為假資料**********************************************/
//（測試用OK）將假的用戶資料創建進去表單中
async function insertFakeUser(tableColumns, values) {
  try {
    let target = `INSERT INTO user ( ${tableColumns} ) VALUES (${values}) `;
    await global.db_pool.query(target);
  } catch (error) {
    // console.log(error);
  }
};
async function insertFakeCart(int) {
  try {
    let target = `INSERT INTO cart (user_id) VALUES ('${int}')`;
    await global.db_pool.query(target);
  } catch (error) {
    // console.log(error);
  }
};
function creatFakeData() {
  try {
    for (const key in users) {
      insertFakeUser(table.user.columnName, [
        users[key].role,
        users[key].account,
        users[key].password,
        users[key].nickname,
      ]);
    };
    // console.log(Object.keys(users).length);
    for (let i = 1; i < Object.keys(users).length+1; i++) {
      insertFakeCart(i);
    }
  } catch (error) {}
};
/**********************************以上為假資料**********************************************/

/**********************************以下為串接ＯＫ**********************************************/
//確認帳號是否已經存在（測試OK）
async function check_account(accountName) {
  // console.log("check_account測試", accountName);
  try {
    let target = `SELECT account FROM user WHERE account = '${accountName}'`;
    const [result, fields] = await global.db_pool.query(target);
    // console.log("result", result);
    // return { status: "ok", result: result };
    if (result.length === 0) {
      return { status: false, result: result };
    } else {
      return { status: true, result: result };
    }
  } catch (error) {
    console.log("fail", error);
    return { status: "fail", result: error };
  }
};

async function get_user(accountName) {
  console.log("get_user測試", accountName);
  try {
    let target = `SELECT * FROM user WHERE account = '${accountName}'`;
    const [result, fields] = await global.db_pool.query(target);
    // console.log("result", result);
    return result;
  } catch (error) {
    console.log("fail", error);
    return [];
  }
};
// check_account("'rec@gmail.com'");//存在回傳[{account:'帳號名稱'}]  不存在回傳[]

//成功註冊到會員表單DB（測試OK）
async function register(values, resolve, reject) {
  try {
    let target = `INSERT INTO user ( ${table.user.columnName} ) VALUES (${values})`;
    const [result, fields] = await global.db_pool.query(target);
    // console.log(result, fields);
    return { status: "ok", result: result };
  } catch (error) {
    return { status: "fail", result: error };
  }
};
// signup(["'member'","'emma@gmail.com'", "'aaaa1111'", "'EMMA'"]);

//登入會員（測試ＯＫ）
async function login(accountName, password) {
  try {
    let target = `SELECT * FROM user WHERE account = '${accountName}' AND password = '${password}'`;
    const [result, fields] = await global.db_pool.query(target);
    // console.log(result);
    return result;
  } catch (error) {
    console.log("login ERR :" + error);
  }
}

/**********************************以上為串接ＯＫ**********************************************/

/**********************************以下後端postman測試ＯＫ，尚未串接成功**********************************************/
//STEP1：忘記密碼核對帳號，正確回傳帳號（測試過ＯＫ），讓他可以寄送電子信件
async function forgetPassword(accountName) {
  try {
    let target = `SELECT account FROM user WHERE account = '${accountName}'`;
    const [result, fields] = await global.db_pool.query(target);
    // console.log(result);
    return result;
  } catch (error) {
    console.log("forgetPassword ERR:" + error);
  }
}
// forgetPassword('rec27@gmail.com');

//STEP2：隨機不重複的臨時密碼，進去DB檢查是否重複，不重複寫進去DB（測試ＯＫ）
//STEP3：若不重複就新增臨時密碼進去DB(測試ＯＫ)
//STEP4：寄送暫時密碼信件（./utils/sendMail.js）
async function createTempPassword(accountName) {
  let tempPassword = `${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;

  let target = `SELECT password FROM tempInfo WHERE password = '${tempPassword}'`;
  const [result, fields] = await global.db_pool.query(target);
  // console.log(result); //沒有重複會回傳[]，有重複會會傳重複的臨時密碼
  if (result.length !== 0) {
    createTempPassword(accountName);
  }
  if (result.length === 0) {
    let time = new Date().toISOString().slice(0, 19).replace("T", " ");
    // console.log(time);
    insertTempPassword(`'${accountName}','${tempPassword}','${time}'`); //沒有重複，新增臨時密碼進入DB
    return tempPassword;
  }
}
// createTempPassword('cindy81121116@gmail.com');//測試用
async function insertTempPassword(values, resolve, reject) {
  try {
    let target = `INSERT INTO tempInfo ( ${table.tempInfo.columnName} ) VALUES (${values})`;
    // console.log(target);
    await global.db_pool.query(target);
  } catch (error) {
    console.log("insertTempPassword ERR:" + error);
  }
}

//驗證舊(暫時)密碼（測試ＯＫ）
async function check_password(tableName, accountName, password) {
  try {
    let target = `SELECT account FROM ${tableName} 
    WHERE account = '${accountName}' AND
    password = '${password}'`;
    const [result, feild] = await global.db_pool.query(target);
    // console.log(result);
    if (result.length === 0) {
      return false;
    }
    return true;
  } catch (error) {
    console.log("check_password ERR:" + error);
  }
}
// check_password('tempInfo','cindy81121116@gmail.com','319806');//驗證暫時密碼（測試ＯＫ）
// check_password('user','rec27@gmail.com','rrr9876')//修改密碼時驗證舊密碼（測試ＯＫ）

//如果舊（暫時）密碼驗證成功，更新新密碼至會員表單DB(測試ＯＫ)
async function update_password(accountName, newPassword) {
  try {
    let target = `UPDATE user SET password = '${newPassword}' WHERE account = '${accountName}'`;
    await global.db_pool.query(target);
    return "update password success"; //更新密碼成功
  } catch (error) {
    console.log("updatePassword ERR: " + error);
  }
}
// update_password('rec27@gmail.com','rrr1234');//測試用
/**********************************以上後端postman測試ＯＫ，尚未串接成功**********************************************/

/**********************************以下尚未完成**********************************************/
//時間到刪除臨時密碼（測試ＯＫ）尚未export
async function dropTempPassword(accountName) {
  try {
    let target = `DELETE FROM tempInfo WHERE account = '${accountName}'`;
    await global.db_pool.query(target);
    return "tempPassword expired"; //臨時密碼過期了
  } catch (error) {
    console.log("dropTempPassword ERR:" + error);
  }
}
// dropTempPassword("rec27@gmail.com")//測試用

//時間內不能重複寄送信件，時間到過期（@Henry~~~~~這個給你）
/**********************************以上尚未完成**********************************************/

module.exports.login = login;
module.exports.register = register;
module.exports.check_account = check_account;
module.exports.createTempPassword = createTempPassword;
module.exports.check_password = check_password;
module.exports.update_password = update_password;
module.exports.creatFakeData = creatFakeData;
module.exports.forgetPassword = forgetPassword;
module.exports.get_user = get_user;

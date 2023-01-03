const db = require("../data/schema");
const table = require("../data/tables.json");
const users = require("../data/fake_user.json");
const { rejects } = require("assert");
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
  console.log('check_account測試',accountName)
  try {
    let target = `SELECT account FROM user WHERE account = '${accountName}'`;
    const [result, fields] = await db.pool.query(target);
    // console.log('result',result);
    // return { status: "ok", result: result };
    console.log(result)
    if(result.length===0){
      return { status: "false", result: result };
    }else{
      return { status: "true", result: result };
    }
  } catch (error) {
    console.log('fail',error)
    return { status: "fail", result: error };
  }
}
// check_account("'rec@gmail.com'");//存在回傳[{account:'帳號名稱'}]  不存在回傳[]


//成功註冊到會員表單DB（測試OK）
async function register(values, resolve, reject) {
  try {
    let target = `INSERT INTO user ( ${table.user.columnName} ) VALUES (${values})`;
    const [result, fields] = await db.pool.query(target);
    console.log(result, fields);
    return { "status": "ok", "result": result };
  } catch (error) {
    return { status: "fail", result: error };
  }
}
// signup(["'member'","'emma@gmail.com'", "'aaaa1111'", "'EMMA'"]);


//登入會員
async function login(accountName, password) {
  try {
    let target = `SELECT account FROM user WHERE account = ${accountName} AND password = ${password}`;
    const [result, fields] = await db.pool.query(target);
    console.log(result);
    return result;
  } catch (error) {
    console.log("login ERR :" + error);
  }
}

//STEP1：忘記密碼核對帳號，正確回傳帳號，讓他可以寄送電子信件
async function forgetPassword(accountName) {
  try {
    let target = `SELECT account FROM user WHERE account = ${accountName}`;
    const [result, fields] = await db.pool.query(target);
    console.log(result);
    return result;
  } catch (error) {
    console.log("forgetPassword ERR:" + error);
  }
}
//STEP2：隨機不重複的臨時密碼，進去DB檢查是否重複
async function createTempPassword() {
  let tempPassword = `${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;
  let target = `SELECT tempPassword FROM tempInfo WHERE tempPassword = ${tempPassword}`;
  const [result, fields] = await db.pool.query(target);
  console.log(result);//沒有重複會回傳[]，有重複會會傳重複的臨時密碼
  if (result.length === 0) {
    insertTempPassword(accountName, tempPassword)  //沒有重複，新增臨時密碼進入DB
  }
  return false; //表示重複了
}

//STEP3：若不重複就新增臨時密碼進去DB
async function insertTempPassword(params) {
  
}

//STEP4：寄送暫時密碼信件（./utils/sendMail.js）


//驗證舊(暫時)密碼
//如果舊（暫時）密碼驗證成功，更新新密碼至會員表單DB



//時間內不能重複寄送信件
//時間到過期







module.exports.login = login;
module.exports.register = register;
module.exports.check_account = check_account;
// module.exports.creatFakeData = creatFakeData;

const db = require("../data/schema");
// const db = require("../data/testDatabase");//測試單頁js用



/**********************************以下尚未完成**********************************************/

//根據account顯示會員資料（測試ＯＫ）
async function memberInfo(accountName) {
    try {
        let target = `SELECT role, account, nickname FROM user WHERE account = '${accountName}'`;
        const [result, field] = await db.pool.query(target);
        console.log(result);//回傳：[ { role: 'member', account: 'rec27@gmail.com', nickname: '長方形' } ]
        return result;
    } catch (error) {
        console.log("memberInfo ERR: " + error);
    }
};
// memberInfo('rec27@gmail.com');//測試ＯＫ

//修改暱稱（測試ＯＫ）
async function update_nickname(accountName,newNickname) {
    try {
        let target = `UPDATE user SET nickname = '${newNickname}' WHERE account = '${accountName}'`;
        await db.pool.query(target);
        return "update nickname success";//更新暱稱成功
      } catch (error) {
        console.log("update_nickname ERR: " + error);
      }
};
// update_nickname('rec27@gmail.com','我是長方形');//測試ＯＫ


//根據account顯示該帳號的所有訂單)(測試ＯＫ)
async function allOrders(accountName) {
    try {
        let target = `
            SELECT oL.orderNum, oL.orderTime, oL.pay_status, oL.deliver_status, 
                oL.totalPrice,oD.productNum, p.productName,p.thumbnail, p.price 
            FROM orderList AS oL, orderDetail AS oD, product AS p 
            WHERE oL.account = '${accountName}' 
                AND oL.orderNum = oD.orderNum 
                AND oD.category = p.category 
                AND oD.productNum = p.productNum`;
        const [result, field] = await db.pool.query(target);
        console.log(result);
    } catch (error) {
        console.log("allOrders ERR:" + error);
    }
}
// allOrders('rec27@gmail.com');//測試ＯＫ

//按下訂單編號顯示訂單內的所有資訊order.js???

/**********************************以上尚未完成**********************************************/

const db = require("../data/schema");
// const db = require("../data/testDatabase");//測試單頁js用
const table = require("../data/tables.json");



/************編輯＆新增商品*************/

//先拿到(前端送出個別商品類別跟編號)去查找出下面的aaa
//後端查找商品的資料送出（沒有的話就不顯示）
// let data = {
//     "category": "001",
//     "productNum": "4",
//     "detail": "編號4號",
//     "inventory": "10",
//     "img": "img004",
//     "product_id": "5",
//     "productName": "口罩",
//     "thumbnail": "img004",
//     "price": "20"
// }
//查找商品用/models/product.j裡面的getSpecificiProduct(category_id, product_num)，將結果顯示在輸入欄位上，


//更新DB（類別，名稱，圖片，價格，庫存，描述）
async function update_product(data) {
    try {
        //根據舊的種類和商品編號更新productDetail
        let target1 = `UPDATE productDetail AS pD SET pD.category = '${
            data.category}',pD.productNum = '${
            data.productNum}',pD.detail = '${
            data.detail}',pD.inventory = '${
            data.inventory}',pD.img = '${
            data.img}' WHERE pD.category IN (SELECT category FROM product WHERE product_id = '${
                data.product_id}') AND pD.productNum IN (SELECT productNum FROM product WHERE product_id = '${data.product_id}')`;

        //根據收到的『編輯後的資訊』更新product
        let target2 = `UPDATE product AS p
            SET p.productNum = '${data.productNum}', 
                p.category = '${data.category}', 
                p.productName = '${data.productName}', 
                p.thumbnail = '${data.thumbnail}', 
                p.price = '${data.price}'
            WHERE p.product_id = '${data.product_id}'`;

        console.log(target1);
        await db.pool.query(target1);

        console.log(target2);
        await db.pool.query(target2);
        //修改照片資料夾的名稱

        console.log('修改商品成功');
        return "update product success";//更新商品成功
    } catch (error) {
        console.log(error);
        return error
    }
}



//商品編號如果重複請告知商品編號重複


//單純修改價格
//單純修改庫存量

//搜尋個別商品
//搜尋類別



//查找所有訂單

//查找所有用戶

module.exports.update_product = update_product;
const user_M = require("../models/user");
const jwt = require("jsonwebtoken");
async function checkJWT(req, res, next) {
  try {
    // 從來自客戶端請求的 header 取得和擷取JWT
    const token = req.header("Authorization").replace("Bearer ", "");
    // 驗證 Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // 找尋符合用戶帳號名稱的使用者
    let user = "";
    const ret = await user_M.check_account(decoded.account);
    console.log("chekout account", ret);
    if (ret.status) user = ret.result[0];
    // 若沒找到此用戶，丟出錯誤
    if (!user) {
      throw new Error();
    }
    // 將 token 存到 req.token 上供後續使用
    req.token = token;
    // 將用戶完整資料存到 req.user 上供後續使用
    req.user = user;
    next();
  } catch (err) {
    console.log("chekout account err", err);
    res.status(401).send({ error: "Please authenticate." });
  }
}
module.exports.checkJWT = checkJWT;

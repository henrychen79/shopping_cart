const user_M = require("../models/user");
const jwt = require("jsonwebtoken");
async function checkJWT(req, res, next) {
  try {
    console.log(req.header("Authorization"));
    // 從來自客戶端請求的 header 取得和擷取JWT
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log("jwt", token);
    // 驗證 Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // 找尋符合用戶帳號名稱的使用者
    const user = await user_M.get_user(decoded.account);
    console.log("chekout account", user);
    // 若沒找到此用戶，丟出錯誤
    if (!user) {
      throw new Error();
    }
    // 將 token 存到 req.token 上供後續使用
    req.token = token;
    // 將用戶完整資料存到 req.user 上供後續使用
    req.user = user[0];
    next();
  } catch (err) {
    console.log("chekout account err", err);
    res.json({
      status: 401,
      msg: "Unauthorized",
    });
  }
}
async function checkIsAdmin(req, res, next) {
  try {
    // 從來自客戶端請求的 header 取得和擷取JWT
    const user = req.user;

    console.log("checkIsAdmin", user);
    // 若不是admin 丟出錯誤
    if (user.role != "admin") {
      throw new Error();
    }
    next();
  } catch (err) {
    console.log("checkIsAdmin err", err);
    res.status(403).send({
      error: "The client does not have access rights to the content.",
    });
  }
}
module.exports.checkJWT = checkJWT;
module.exports.checkIsAdmin = checkIsAdmin;

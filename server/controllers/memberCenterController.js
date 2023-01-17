const memberCenter_M = require("../models/memberCenter");
const user_M = require("../models/user");
const { res_data } = require("../config");
const memberCenterController = {
  update_nickname: async (req, res, next) => {
    try {
      let accountName = req.body.account;
      let newNickname = req.body.newNickname;
      // console.log("帳號：" + accountName);
      // console.log("新暱稱：" + newNickname);
      const update_result = memberCenter_M.update_nickname(
        req.user.account,
        newNickname
      );
      if (!update_result) return res.json(res_data.modify_nickname_fail);
      return res.json({ status: 200, msg: "修改暱稱成功" });
    } catch (e) {
      return next(e);
    }
  },
  allOrders: async (req, res, next) => {
    try {
      let accountName = req.query.account;
      // console.log(accountName);
      memberCenter_M.allOrders(accountName).then((data) => {
        // console.log(data);
        return res.json(data);
      });
    } catch (e) {
      return next(e);
    }
  },
  modifyPassword: async (req, res, next) => {
    try {
      //如果是臨時密碼，tableName = tempInfo；如果是修改密碼，tableName = user
      const { account, password, newPassword } = req.body;
      // console.log(account, newPassword);
      let update_result = await user_M.update_password(
        req.user.account,
        newPassword
      );
      // console.log(update_result);
      if (!update_result) return res.json(res_data.modify_password_fail);
      return res.json({ status: 200, msg: "修改密碼成功" });
    } catch (error) {
      console.log("updatePassword err::", error);
      return next(error);
    }
  },
};

module.exports = memberCenterController;

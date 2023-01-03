const user_M = require("../models/user");
const userController = {
  registerAccount: async (req, res, next) => {
    try {
      const result = [];
      const { account, password, name } = req.body;
      result[0] = "'member'";
      result[1] = `'${account}'`;
      result[2] = `'${password}'`;
      result[3] = `'${name}'`;
      console.log(result);
      user_M.register(result).then((ret) => {
        if (ret.status === "ok") {
          res.json(req.body);
        } else res.status(500).json(ret);
      });
    } catch (e) {
      return next(e);
    }
  },
  checkAccountExist: async (req, res, next) => {
    try {
      let account = req.query.account;
      user_M.check_account(account).then((ret) => {
        if (ret.status === "ok") {
          res.json(account);
        } else res.status(400).json({ message: "這個Email被註冊過了!" });
      });
    } catch (e) {
      return next(e);
    }
  },
};

module.exports = userController;

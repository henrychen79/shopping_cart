const user_M = require("../models/user");
const jwt = require("jsonwebtoken");
const { sendMail, forgetPasswordMail } = require("../utils/sendMail");
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
    // console.log(req.params.account)
    try {
      let account = req.query.account;
      // let account = req.params.account

      user_M.check_account(account).then((ret) => {
        // if (ret.status === "ok") {
        //   res.json(account);
        // } else res.status(400).json({ message: "這個Email被註冊過了!" });
        if (ret.status === "false") {
          res.json({ message: false });
        } else {
          res.json({ message: true });
        }
      });
    } catch (e) {
      return next(e);
    }
  },
  login: async (req, res, next) => {
    try {
      const { account, password } = req.body;
      const result = await user_M.login(account, password);
      if (result.length != 0) {
        let expires_in = parseInt(process.env.JWT_EXPIRES_IN);
        const token = jwt.sign(result[0], process.env.JWT_SECRET, {
          expiresIn: expires_in,
        });
        res.json({ accout: result[0].account, token: token });
      } else {
        res.json({ accout: [] });
      }
    } catch (e) {
      console.log("login err::", e);
      return next(e);
    }
  },
  forgetPassword: async (req,res,next) => {
    try {
      const { account } = req.body;
      const result = await user_M.createTempPassword(account);
      console.log(result);
      sendMail(account,'忘記密碼驗證信',forgetPasswordMail(result));
      res.json({meg:'success'});
    } catch (e) {
      console.log("forgetPassword err::", e);
      return next(e);
    }
  }
};

// 


module.exports = userController;

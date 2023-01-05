const memberCenter_M = require("../models/memberCenter");
const memberCenterController = {
    update_nickname: async (req, res, next) => {
        try {
            let accountName = req.body.account;
            let newNickname = req.body.newNickname;
            console.log('帳號：' + accountName);
            console.log('新暱稱：' + newNickname);
            memberCenter_M.update_nickname(accountName,newNickname).then((ret) =>{
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
    allOrders:async (req, res, next) => {
        try {
            let accountName = req.query.account;
            console.log(accountName);
            memberCenter_M.allOrders(accountName).then((data) => {
                console.log(data);
                return res.json(data);
              });
        } catch (e) {
            return next(e);
        }
    }
};

module.exports = memberCenterController;

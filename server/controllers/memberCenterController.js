const memberCenter_M = require("../models/memberCenter");
const memberCenterController = {
    update_nickname: async (req, res, next) => {
        try {
            let accountName = req.query.account;
            let newNickname = req.query.newNickname;
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
            memberCenter_M.allOrders(accountName).then((data) => {
                return res.json(data);
              });
        } catch (e) {
            return next(e);
        }
    }
};

module.exports = memberCenterController;

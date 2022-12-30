const router = require("express").Router();
const signup_M = require("../models/signup_M");
router.use((req, res, next) => {
  console.log("A request is coming in to register_route.js");
  next();
});
router.get("/checkAccountExist", (req, res) => {
  let account = req.query.account;
  signup_M.check_account(account).then((ret) => {
    if (ret.status === "ok") {
      res.json(account);
    } else res.status(500).json(ret);
  });
});
router.post("/registerAccount", (req, res) => {
  let register_info = req.body;
  let inputFormat = ["account", "password", "name"];
  let count = 1;
  let result = [];
  result[0] = "'member'";
  for (let index = 0; index < inputFormat.length; index++) {
    let key = inputFormat[index];
    if (req.body[key]) {
      result[count] = `'${req.body[key]}'`;
      count++;
    }
  }
  signup_M
    .signup(result)
    .then((ret) => {
      if (ret.status === "ok") {
        res.json(req.body);
      } else res.status(500).json(ret);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

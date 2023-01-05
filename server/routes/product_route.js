const router = require("express").Router();
const product_M = require("../models/product_M");

router.use((req, res, next) => {
  console.log("A request is coming in to product_route.js");
  next();
});

/**********************************以下為假資料測試用******************************************/
router.get("/testAPI", (req, res) => {
  const msgObj = {
    message: "Test API is working.",
  };
  return res.json(msgObj);
});
/**********************************以上為假資料**********************************************/

//進入商品頁面的API
router.get("/", (req, res) => {
  try {
    let category_id = req.query.category_id;
    let product_num = req.query.product_num;
    product_M.getSpecificiProduct(category_id, product_num).then((data) => {
      return res.json(data);
    });
  } catch (error) {
    console.log('/ ERR' + error);
    return res.status(404);
  }
});


//取得商品類型和總量（測試OK）
router.get("/allCategory", (req, res) => {
  product_M.product_amount().then((data) => {
    return res.json(data);
  });
})

//按下頁數後，收到類型跟頁數，回應六筆資料的API（測試OK）
router.get("/category/:category_id", (req, res) => {
  // console.log(req);
  let category_id = req.params.category_id;
  let page = req.query.page;
  console.log(category_id, page,);
  product_M.getProduct(category_id, page).then((data) => {
    return res.json(data);
  });
});

module.exports = router;

const multer = require("multer");
const fs = require("fs");

const dir = "./public/images/product/";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    //console.log(file);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    console.log("req");
    cb(null, req.query.account + ".jpg");
  },
});

const upload = multer({ storage: fileStorageEngine });

module.exports = upload;

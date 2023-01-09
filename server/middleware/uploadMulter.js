const multer = require("multer");
const fs = require("fs");

const dir = process.env.PRODUCT_IMAGE_PATH;
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    //console.log(file);
    let { category_id, product_id } = req.query;
    let imgPath = dir + category_id + "/" + product_id;
    req.imgPath = imgPath;
    console.log("destination ", imgPath);
    if (!fs.existsSync(imgPath)) {
      fs.mkdirSync(imgPath, { recursive: true });
    }
    cb(null, imgPath);
  },
  filename: (req, file, cb) => {
    cb(null, "original.jpg");
  },
});

const upload = multer({ storage: fileStorageEngine });

module.exports = upload;

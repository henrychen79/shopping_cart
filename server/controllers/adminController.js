const fs = require("fs");
const sharp = require("sharp");
const admin_M = require("../models/admin");
const THUMBNAIL_SIZE = process.env.THUMBNAIL_SIZE.split(",");
const adminController = {
  uploadImage: async (req, res, next) => {
    try {
      await sharp(req.file.path)
        .resize({
          width: parseInt(THUMBNAIL_SIZE[0]),
          height: parseInt(THUMBNAIL_SIZE[1]),
          fit: "fill",
        })
        .toFile(req.imgPath + "/" + "thumbnail.jpg");
      res.send({
        status: "success",
        message: "File uploaded successfully",
        data: req.file,
      });
    } catch (e) {
      return next(e);
    }
  },
  update_product: async (req, res, next) => {
    try {
      //前端給data
      const { data } = req.body;
      console.log(JSON.parse(data));
      const result = await admin_M.update_product(JSON.parse(data));
      return res.json(result);

    } catch (error) {
      return next(e);
    }
  }
};
module.exports = adminController;

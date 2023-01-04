const fs = require("fs");
const sharp = require("sharp");
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
};
module.exports = adminController;

const sharp = require("sharp");
const adminController = {
  uploadImage: async (req, res, next) => {
    try {
      console.log(req.file);
      const buffer = await sharp(req.file.path)
        .resize({ width: 60, height: 60, fit: "fill" })
        .toFile(__dirname + "/grayscale_robo3.jpg");
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

const fs = require("fs");
const sharp = require("sharp");
const admin_M = require("../models/admin");
const order_M = require("../models/order");
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
      // const { data } = req.body;
      // console.log(JSON.parse(data));
      // const result = await admin_M.update_product(JSON.parse(data));
      const data = req.body;
      console.log(data);
      const result = await admin_M.update_product(data);
      // console.log(res.json(result));
      return res.json(result);
    } catch (e) {
      return next(e);
    }
  },
  getProducts: async (req, res, next) => {
    try {
      const category = req.query.category;
      console.log(category);
      console.log("種類：" + category);
      const result = await admin_M.getProducts(category);
      console.log(result);
      return res.json(result);
    } catch (error) {
      return next(e);
    }
  },
  getProduct: async (req, res, next) => {
    try {
      const category = req.query.category;
      const productNum = req.query.productNum;
      console.log(category);
      console.log(productNum);
      console.log("種類：" + category);
      const result = await admin_M.getProduct(category, productNum);
      console.log(result);
      return res.json(result);
    } catch (error) {
      return next(e);
    }
  },
  getSpecificiProduct: async (req, res, next) => {
    try {
      const product_id = req.query.product_id;
      console.log("ID：" + product_id);
      const result = await admin_M.getSpecificiProduct(product_id);
      console.log(result);
      return res.json(result);
    } catch (error) {
      return next(e);
    }
  },
  addProduct: async (req, res, next) => {
    try {
      //前端給data
      console.log(req.body);
      const data = req.body;
      // console.log(JSON.parse(data));
      const result = await admin_M.addProduct(data);
      return res.json(result);
    } catch (e) {
      return next(e);
    }
  },
  update_price: async (req, res, next) => {
    try {
      const product_id = req.query.product_id;
      const newPrice = req.body.price;
      const result = await admin_M.update_price(product_id, newPrice);
      return res.json(result);
    } catch (e) {
      return next(e);
    }
  },
  update_inventory: async (req, res, next) => {
    try {
      const product_id = req.query.product_id;
      const newInventory = req.body.inventory;
      console.log("ID:" + product_id);
      console.log("新庫存:" + newInventory);
      const result = await admin_M.update_inventory(product_id, newInventory);
      return res.json(result);
    } catch (e) {
      return next(e);
    }
  },
  update_deliver: async (req, res, next) => {
    try {
      const data = req.body;
      console.log(data);
      const result = await admin_M.update_inventory(data);
      return res.json(result);
    } catch (e) {
      return next(e);
    }
  },
  update_pay: async (req, res, next) => {
    try {
      const data = req.body;
      console.log(data);
      const result = await admin_M.update_inventory(data);
      return res.json(result);
    } catch (e) {
      return next(e);
    }
  },
  getAllOrders: async (req, res, next) => {
    try {
      const result = await admin_M.getAllOrders();
      console.log(result);
      return res.json(result);
    } catch (error) {
      return next(e);
    }
  },
  getAllUsers: async (req, res, next) => {
    try {
      const result = await admin_M.getAllUsers();
      console.log(result);
      return res.json(result);
    } catch (error) {
      return next(e);
    }
  },
  update_order: async (req, res, next) => {
    try {
      const { order_id, type, state } = req.body;
      const result = await order_M.updateOrderList(order_id, type, state);
      return res.json(result);
    } catch (error) {
      return next(e);
    }
  },
  delete_product: async (req, res, next) => {
    try {
      const product_id = req.query.product_id;
      const result = await admin_M.delete_product(product_id);
      return res.json(result);
    } catch (error) {
      return next(e);
    }
  },
};
module.exports = adminController;

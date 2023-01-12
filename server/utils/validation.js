const Joi = require("joi");

// Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    nickname: Joi.string().min(3).max(50).required(),
    account: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(8).max(12).required(),
  });

  return schema.validate(data);
};

// Login Validation
const loginValidation = (data) => {
  const schema = Joi.object({
    account: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(8).max(12).required(),
  });
  return schema.validate(data);
};
// Create order Validation
const createOrderValidation = (data) => {
  const schema = Joi.object({
    user_id: Joi.number().integer().required(),
    recipient: Joi.string().required(),
    pay_way: Joi.string(),
    dliver_way: Joi.string(),
    address: Joi.string().required(),
    phone: Joi.string().min(8).max(12).required(),
    order_prize: Joi.number().integer().required(),
    order_amount: Joi.number().integer().required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.createOrderValidation = createOrderValidation;

const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().min(5).max(12).required(),
  email: Joi.string().required(),
});

module.exports = { addSchema };

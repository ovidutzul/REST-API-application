const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().min(5).required(),
  email: Joi.string().required(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "number.min": "You must be at least 18 years old" }),
});

module.exports = { addSchema, updateFavoriteSchema };

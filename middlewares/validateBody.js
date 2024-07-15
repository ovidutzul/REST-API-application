const { HttpError } = require("../helpers");

const validateBody = (schema, errorMessage) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) next(HttpError(400, errorMessage="missing required name field"));
    next();
  };

  return func;
};

module.exports = validateBody;

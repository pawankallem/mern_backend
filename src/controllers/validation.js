const Joi = require("joi");

const singupValidation = (data) => {
  const result = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().trim().email().lowercase().required(),
    password: Joi.string().min(8).required(),
  });
  return result.validate(data);
};

const loginValidation = (data) => {
  const result = Joi.object({
    email: Joi.string().trim().email().lowercase().required(),
    password: Joi.string().min(8).required(),
  });
  return result.validate(data);
};

module.exports = { singupValidation, loginValidation };

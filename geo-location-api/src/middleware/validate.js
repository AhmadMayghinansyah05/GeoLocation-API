const Joi = require("joi");

const locationSchema = Joi.object({
  name: Joi.string().required(),
  latitude: Joi.number().min(-90).max(90).required(),
  longitude: Joi.number().min(-180).max(180).required(),
  description: Joi.string().allow(""),
  category: Joi.string().required()
});

exports.validateLocation = (req, res, next) => {
  const { error } = locationSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

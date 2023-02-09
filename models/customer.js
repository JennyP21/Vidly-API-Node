const Joi = require("joi");
const mongoose = require("mongoose");

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    isGold: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    phone: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
  })
);

function validateCustomer(customer) {
  const schema = Joi.object({
    isGold: Joi.boolean().required(),
    name: Joi.string().min(3).required(),
    phone: Joi.string().required(),
  });

  return schema.validate(customer);
}

exports.Customer = Customer;
exports.validateCustomer = validateCustomer;

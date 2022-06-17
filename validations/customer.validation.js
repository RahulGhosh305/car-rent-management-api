const Joi = require('joi');
const { validate } = require("../utils/validate");

const getCustomer = {
    params: Joi.object({
        _id: Joi.string().required()
    })
}

const addCustomer = {
    body: Joi.object({
        name: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().required(),
        address: Joi.string().required(),
        selectedCar: Joi.string().required()
    })
}

const updateCustomer = {
    params: Joi.object({
        _id: Joi.string().required()
    }),
    body: Joi.object({
        name: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().required(),
        address: Joi.string().required(),
        selectedCar: Joi.string().required()
    })
}

const deleteCustomer = {
    params: Joi.object({
        _id: Joi.string().required()
    })
}

module.exports = {
    getCustomerValidation: validate(getCustomer),
    addCustomerValidation: validate(addCustomer),
    updateCustomerValidation: validate(updateCustomer),
    deleteCustomerValidation: validate(deleteCustomer)
}
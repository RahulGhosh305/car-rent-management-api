const Joi = require('joi');
const { validate } = require("../utils/validate");

const getCar = {
    params: Joi.object({
        _id: Joi.string().required()
    })
}

const addCar = {
    body: Joi.object({
        name: Joi.string().required(),
        body: Joi.string().required(),
        color: Joi.string().required(),
        seat: Joi.number().required()
    })
}

const updateCar = {
    params: Joi.object({
        _id: Joi.string().required()
    }),
    body: Joi.object({
        name: Joi.string().required(),
        body: Joi.string().required(),
        color: Joi.string().required(),
        seat: Joi.number().required()
    })
}

const deleteCar = {
    param: Joi.object({
        _id: Joi.string().required()
    })
}

module.exports = {
    getCarValidation: validate(getCar),
    addCarValidation: validate(addCar),
    updateCarValidation: validate(updateCar),
    deleteCarValidation: validate(deleteCar)
}
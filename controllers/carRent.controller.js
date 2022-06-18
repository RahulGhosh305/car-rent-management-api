const httpStatus = require("http-status");
const { CarRentModel, CarRentStatus } = require("../models/carRent.model");
const apiResponse = require("../utils/apiResponse");
const catchAsync = require("../utils/catchAsync")

const getCars = catchAsync(async (req, res) => {
    const cars = await CarRentModel.find({ status: { $ne: CarRentStatus.deleted } }, { name: true, rentPrice: true, color: true, seat: true })
    return apiResponse(res, httpStatus.OK, { data: cars })
})

const getCar = catchAsync(async (req, res) => {
    const car = await CarRentModel.findOne({ _id: req.params._id }, { name: true, rentPrice: true, color: true, seat: true })
    return apiResponse(res, httpStatus.OK, { data: car })
})

const addCar = catchAsync(async (req, res) => {
    const { name, rentPrice, color, seat } = req.body
    const newAddCar = new CarRentModel({ name, rentPrice, color, seat })
    await newAddCar.save();

    return apiResponse(res, httpStatus.CREATED, { data: newAddCar })
})

const updateCar = catchAsync(async (req, res) => {
    const { name, rentPrice, color, seat } = req.body
    const modify = await CarRentModel.updateOne({ _id: req.params._id }, { name, rentPrice, color, seat })
    return apiResponse(res, httpStatus.ACCEPTED, { message: "Information Updated" }, modify);
})

const deleteCar = catchAsync(async (req, res) => {
    const drop = await CarRentModel.deleteOne({ _id: req.params._id })
    return apiResponse(res, httpStatus.ACCEPTED, { message: "Information Deleted" }, drop);
})

module.exports = {
    getCars,
    getCar,
    addCar,
    updateCar,
    deleteCar
}

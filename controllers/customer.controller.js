const httpStatus = require("http-status");
const apiResponse = require("../utils/apiResponse");
const catchAsync = require("../utils/catchAsync");
const { CustomerModel } = require("./../models/customer.model")

const getCustomers = catchAsync(async (req, res) => {
    const customers = await CustomerModel.find({}, { name: true, phone: true, email: true, address: true, selectedCar: true });
    return apiResponse(res, httpStatus.OK, { data: customers });
})

const getCustomer = catchAsync(async (req, res) => {
    const customer = await CustomerModel.findOne({ _id: req.params._id }, { name: true, phone: true, email: true, address: true, selectedCar: true })
    return apiResponse(res, httpStatus.OK, { data: customer });
})

const addCustomer = catchAsync(async (req, res) => {
    const { name, phone, email, address, selectedCar } = req.body;
    const newCustomer = new CustomerModel({ name, phone, email, address, selectedCar });
    await newCustomer.save();
    return apiResponse(res, httpStatus.CREATED, { data: newCustomer });
})

const updateCustomer = catchAsync(async (req, res) => {
    const { name, phone, email, address, selectedCar } = req.body;
    const modify = await CustomerModel.updateOne({ _id: req.params._id }, { name, phone, email, address, selectedCar });
    return apiResponse(res, httpStatus.ACCEPTED, { message: "Information Updated" }, modify);
})

const deleteCustomer = catchAsync(async (req, res) => {
    const drop = await CustomerModel.deleteOne({ _id: req.params._id });
    return apiResponse(res, httpStatus.ACCEPTED, { message: "Information Deleted" }, drop);
})

module.exports = {
    getCustomers,
    getCustomer,
    addCustomer,
    updateCustomer,
    deleteCustomer
}
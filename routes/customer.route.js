const express = require("express");
const router = express.Router()

const {
    getCustomerValidation,
    addCustomerValidation,
    updateCustomerValidation,
    deleteCustomerValidation
} = require("../validations/customer.validation");

const {
    getCustomers,
    getCustomer,
    addCustomer,
    updateCustomer,
    deleteCustomer
} = require("../controllers/customer.controller")

router.get("/", getCustomers);
router.get("/:_id", getCustomerValidation, getCustomer);
router.post("/", addCustomerValidation, addCustomer);
router.put("/:_id", updateCustomerValidation, updateCustomer);
router.delete("/:_id", deleteCustomerValidation, deleteCustomer);

module.exports = router
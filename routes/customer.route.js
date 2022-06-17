const express = require("express");
const router = express.Router()

const {
    getCustomers, 
    getCustomer,
    addCustomer,
    updateCustomer,
    deleteCustomer
} = require("../controllers/customer.controller")

router.get("/", getCustomers);
router.get("/:_id", getCustomer);
router.post("/", addCustomer);
router.put("/:_id", updateCustomer);
router.delete("/:_id", deleteCustomer);

module.exports = router
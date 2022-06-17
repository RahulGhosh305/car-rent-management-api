var express = require('express');
var router = express.Router();

const carRentRoute = require("./carRent.route");
const customerRoute = require("./customer.route")

router.use("/car-rent", carRentRoute);
router.use("/customer", customerRoute)

module.exports = router;

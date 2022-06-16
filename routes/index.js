var express = require('express');
var router = express.Router();

const carRentRoute = require("./carRent.route");

router.use("/car-rent", carRentRoute);

module.exports = router;

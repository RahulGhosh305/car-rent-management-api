const express = require("express");
const router = express.Router();

const {
    getCarValidation,
    addCarValidation,
    updateCarValidation,
    deleteCarValidation
} = require("./../validations/carRent.validation")

const { 
    getCars, 
    getCar, 
    addCar,
    updateCar,
    deleteCar
} = require("./../controllers/carRent.controller");

router.get("/", getCars);
router.get("/:_id", getCarValidation, getCar);
router.post("/", addCarValidation, addCar);
router.put("/:_id", updateCarValidation, updateCar)
router.delete("/:_id", deleteCarValidation, deleteCar)

module.exports = router;
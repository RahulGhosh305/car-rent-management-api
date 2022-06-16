const express = require("express");
const router = express.Router();


const { 
    getCars, 
    getCar, 
    addCar,
    updateCar,
    deleteCar
} = require("./../controllers/carRent.controller");

router.get("/", getCars);
router.get("/:_id", getCar);
router.post("/", addCar);
router.put("/:_id", updateCar)
router.delete("/:_id", deleteCar)

module.exports = router;
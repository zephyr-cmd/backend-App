const express = require('express');
const router = express.Router();

// const {createResValidation}=require("./validations/addResValidator");
// const {validationResult}=require("./../../utils/responseHandler/errorValidation")

const {getWeather, fetchWeather}=require("./controller/controller")

console.log("-------- inside the index/weather/routes ---->")

// router.post("/",createResValidation,validationResult,addRestaurant)
router.post("/",getWeather)
router.post("/fetchweather",fetchWeather)

module.exports = router;
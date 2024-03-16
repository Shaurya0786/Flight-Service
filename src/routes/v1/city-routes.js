const express = require("express")
const router = express.Router()

const {CityControllers} = require("../../controllers")

const {Citymiddlewares} = require("../../middlewares")

router.post("/",Citymiddlewares.validateCreateRequest, CityControllers.createCity)

module.exports = router
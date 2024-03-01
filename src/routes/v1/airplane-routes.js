const express = require("express")

const router = express.Router();

const AirplaneRoutes = require("../../controllers")

const {Airplanemiddlewares} = require("../../middlewares")

router.post("/", Airplanemiddlewares.validateCreateRequest , AirplaneRoutes.createAirplane)

module.exports = router
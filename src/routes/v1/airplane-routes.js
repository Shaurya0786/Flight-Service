const express = require("express")

const router = express.Router();

const {AirplaneControllers} = require("../../controllers")

const {Airplanemiddlewares} = require("../../middlewares")

router.post("/", Airplanemiddlewares.validateCreateRequest , AirplaneControllers.createAirplane)
router.get("/",AirplaneControllers.getAllAirplane)

router.get("/:id",AirplaneControllers.getAirplane)
module.exports = router
const express = require("express")

const router = express.Router();

const AirplaneRoutes = require("../../controllers")

router.post("/", AirplaneRoutes.createAirplane)

module.exports = router
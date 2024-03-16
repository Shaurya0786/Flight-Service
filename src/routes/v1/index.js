const express = require('express')
const router = express.Router();


const airplaneroutes = require("./airplane-routes")

const infoRouter = require("./info-controller")

const CityRoutes = require("./city-routes")

router.use('/airplanes',airplaneroutes)

router.use('/info',infoRouter)

router.use('/cities',CityRoutes)

module.exports = router;
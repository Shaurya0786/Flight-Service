const express = require('express')
const router = express.Router();
const airplaneroutes = require("./airplane-routes")
const infoRouter = require("./info-controller")
const CityRoutes = require("./city-routes")
const AirportRoutes = require('./airport-routes')
const FlightRoutes = require('./flight-routes')

router.use('/airplanes',airplaneroutes)

router.use('/info',infoRouter)

router.use('/cities',CityRoutes)

router.use('/airports',AirportRoutes)

router.use('/flights',FlightRoutes)


module.exports = router;
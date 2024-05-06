const express = require('express')
const router = express.Router()
const {AirportControllers} = require('../../controllers')
const { Airportmiddlewares } = require('../../middlewares')

router.post('/',Airportmiddlewares.airportpostmiddleware,AirportControllers.createAirportController)

router.get('/',AirportControllers.getAllAirports)

router.get('/:id',AirportControllers.getAirport)

router.delete('/:id',AirportControllers.destroyAirport)

module.exports = router